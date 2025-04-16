import { createProxyHandler } from "@/lib/proxyHandler";

const handler = createProxyHandler({
  POST: {
    url: "http://localhost:8000/api/account/players",
    method: "POST",
    mapRequestBody: (body) => ({ player: body.player }),
  },
  GET: {
    url: "http://localhost:8000/api/account/players",
    method: "GET",
  },
});

export { handler as POST, handler as GET };
