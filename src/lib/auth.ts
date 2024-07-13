import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_URL,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const exisitinUser = await db.user.findUnique({
          where: { email: credentials?.email }
        });

        if (!exisitinUser) {
          return null;
        }
        if (exisitinUser.password) {
          const passwordMatch = await compare(credentials.password, exisitinUser.password);
          if (!passwordMatch) {
            return null;
          }
        }

        return {
          id: `${exisitinUser.id}`,
          username: exisitinUser.username,
          email: exisitinUser.email
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,  // Add userId to the token
          username: user.username
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,  // Add userId to the session
          username: token.username
        }
      };
    },
  }
};
