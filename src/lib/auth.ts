import jwt from "jsonwebtoken";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        console.log(user);
        const customAccessToken = jwt.sign(
          {
            id: user?.id,
            email: user?.email,
            name: user?.name,
          },
          process.env.JWT_SECRET as string, // usa um segredo seu
          { expiresIn: "1h" }
        );

        token.customAccessToken = customAccessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.customAccessToken = token?.customAccessToken as string;
      }
      return session;
    },
  },
};
