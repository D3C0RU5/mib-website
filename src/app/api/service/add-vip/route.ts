import { createProxyHandler } from "@/lib/proxyHandler";
import { NextRequest, NextResponse } from "next/server";

const handler = createProxyHandler({
  POST: {
    url: "http://localhost:8000/api/add-vip",
    method: "POST",
    mapRequestBody: (body) => ({
      description: body.description,
      expiration: body.expiration,
      forward: body.forward,
      player_id: body.player_id,
    }),
  },
});
export { handler as POST };
