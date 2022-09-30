import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers : [
        GoogleProvider({
            ClientId : process.env.GOOGLE_CLIENT_ID,
            ClientSecret : process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret : process.env.JWT_SECRET,
});
