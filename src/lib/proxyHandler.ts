import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

interface ProxyMethodOptions {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  mapRequestBody?: (body: any) => any;
}

type ProxyHandlerConfig = {
  [method: string]: ProxyMethodOptions;
};

export function createProxyHandler(config: ProxyHandlerConfig) {
  return async function handler(req: NextRequest) {
    const methodConfig = config[req.method || ""];

    if (!methodConfig) {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    const session = await getServerSession({ req, ...authOptions });
    console.log(session);
    const body = req.method !== "GET" ? await req.json() : undefined;
    const proxiedBody = methodConfig.mapRequestBody
      ? methodConfig.mapRequestBody(body)
      : body;

    const fetchOptions: RequestInit = {
      method: methodConfig.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.customAccessToken
          ? `Bearer ${session.customAccessToken}`
          : "",
      },
      body: proxiedBody ? JSON.stringify(proxiedBody) : undefined,
    };

    const response = await fetch(methodConfig.url, fetchOptions);
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      return new NextResponse(text, { status: response.status });
    }
  };
}
