import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    return await fetch(`http://localhost:8000/api/payment/vip`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
  }
}

export { handler as GET };
