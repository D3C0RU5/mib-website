import { createProxyHandler } from "@/lib/proxyHandler";

const handler = createProxyHandler({
  POST: {
    url: "http://localhost:8000/api/account/players",
    method: "POST",
    mapRequestBody: (body) => ({ player: body.player }),
  },
});

export { handler as POST };
