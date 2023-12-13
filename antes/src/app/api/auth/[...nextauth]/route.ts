import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/../../prisma/index'

const status_error = {
  "error": "CredentialsSignin",
  "status": 401,
  "ok": false,
  "url": null
}

const status_succes = {
  "error": null,
  "status": 200,
  "ok": true,
  "url": "http://localhost:3000/login"
}

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials: any, req: any) {
        if (!credentials.email || !credentials.password) { return null }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) { return null }
        
        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) { return null }

        return user
      }
    })
  ],
  session: {
    strategy: "jwt",
    // strategy: "database",
    maxAge: 1 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRECT,
  debug: process.env.NODE_ENV === "development"
})

export { handler as GET, handler as POST }