import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      // Remove version: "2.0" to use OAuth 1.0a (stable)
    })
  ],
  session: {
    strategy: "jwt",
  },
  debug: true,
  logger: {
    error(code, metadata) {
      console.error("NextAuth Error:", code, metadata)
    },
    warn(code) {
      console.warn("NextAuth Warning:", code)
    },
  },
})

export { handler as GET, handler as POST }