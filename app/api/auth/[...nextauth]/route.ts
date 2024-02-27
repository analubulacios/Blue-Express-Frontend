import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const { GOOGLE_CLIENT_SECRET = '', GOOGLE_CLIENT_ID = '' } = process.env;

export const authOptions = {
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    })
  ]
}

const handler =  NextAuth(authOptions)

export { handler as GET, handler as POST }
