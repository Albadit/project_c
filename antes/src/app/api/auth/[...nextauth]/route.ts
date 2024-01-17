import NextAuth, { SessionUser } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/../../prisma/index'

const handler = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials: any) {
        if (!credentials.email || !credentials.password) { return null }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
          include: {
            role: true,
          }
        })

        if (!user) { return null }
        
        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) { return null }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          level: user.role.level,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token, user }) {
      if (token.user) session.user = token.user as SessionUser
      return session
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRECT,
  debug: process.env.NODE_ENV === "development"
})

export { handler as GET, handler as POST }