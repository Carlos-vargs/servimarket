import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { gql, request } from "graphql-request";
import fixErrorsMessage from "@utils/fixErrorsMessage";

export default NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.token = token.token;
      session.user = token.user;

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Login",
      async authorize(credentials) {
        try {
          const { login } = await request(
            process.env.NEXT_PUBLIC_GRAPHQL_URL,
            gql`
              mutation login($input: LoginInput!) {
                login(input: $input) {
                  user {
                    id
                    name
                    email
                  }
                  token
                }
              }
            `,
            {
              input: {
                email: credentials?.email,
                password: credentials?.password,
              },
            }
          );

          return login;
        } catch ({ response: { errors } }) {
          throw new Error(
            JSON.stringify({
              error: fixErrorsMessage(errors[0].extensions.validation),
            })
          );
        }
      },
    }),
    CredentialsProvider({
      id: "register",
      name: "Register",
      async authorize(credentials) {
        try {
          const { register } = await request(
            process.env.NEXT_PUBLIC_GRAPHQL_URL,
            gql`
              mutation register($input: RegisterInput!) {
                register(input: $input) {
                  user {
                    id
                    name
                    email
                  }
                  token
                }
              }
            `,
            {
              input: {
                name: credentials?.name,
                email: credentials?.email,
                password: credentials?.password,
                password_confirmation: credentials?.password_confirmation,
              },
            }
          );

          return register;
        } catch ({ response: { errors } }) {
          throw new Error(
            JSON.stringify({
              error: fixErrorsMessage(errors[0].extensions.validation),
            })
          );
        }
      },
    }),
  ],
  secret: process.env.SESSION_SECRET,
});
