import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    const qName = req?.nextUrl?.searchParams.get("name");
    return await fetch(
      `http://localhost:8000/api/rcon/players/by-name?name=${qName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
  }
}

export { handler as GET };
