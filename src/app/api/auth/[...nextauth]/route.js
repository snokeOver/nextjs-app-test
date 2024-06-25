import { connectDB } from "@/helper/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;
        const db = await connectDB();
        const existedUser = await db.collection("users").findOne({ email });
        if (!existedUser) return null;

        const matchedPass = bcrypt.compareSync(password, existedUser.password);
        if (!matchedPass) return null;
        return existedUser;
      },
    }),

    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, image } = user;
        const newUser = { name, email, image, type: "User" };
        try {
          const db = await connectDB();
          const userCollection = db.collection("users");
          const isUserExist = await userCollection.findOne({ email });
          if (!isUserExist) {
            const response = await userCollection.insertOne(newUser);
          }
        } catch (error) {
          // console.log(error.message);
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
