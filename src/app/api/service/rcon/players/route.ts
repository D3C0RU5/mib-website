import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return await fetch("http://localhost:8000/api/rcon/players/by-name", {
      method: "GET",
    });
  } else {
  }
}

export { handler as GET };
