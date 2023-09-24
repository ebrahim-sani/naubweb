import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
   session: {
      strategy: "jwt",
   },
   providers: [
      CredentialsProvider({
         name: "Sign in",
         credentials: {
            matricNumber: {
               label: "Matric Number",
               type: "text",
               placeholder: "Enter Your Matric Number",
            },
            password: {
               label: "Password",
               type: "password",
            },
         },
         async authorize(credentials) {
            // Handle Auth
            if (!credentials?.matricNumber || !credentials?.password) {
               return null;
            }

            const student = await prisma.student.findUnique({
               where: {
                  matricNumber: credentials.matricNumber,
               },
            });

            if (!student) {
               return null;
            }

            // console.log("student found" + JSON.stringify(student));

            return student;
         },
      }),
   ],

   callbacks: {
      session: async ({ session, token }) => {
         // console.log("Session callback", { session, token });
         if (token && typeof token.id === "string") {
            // Fetch student details using the token
            const student = await prisma.student.findUnique({
               where: {
                  id: token.id,
               },
               include: { coursesRegistered: { include: { courses: true } } },
            });

            if (student) {
               // Add student object to the session
               session.user = student;
            }
         }
         return session;
      },

      jwt: ({ token, user }) => {
         // console.log("JWT Callback", { token, user });
         if (user) {
            const u = user as unknown as any;
            return {
               ...token,
               id: u.id,
            };
         }
         return token;
      },
   },
   pages: {
      signIn: "/auth/signin",
   },
};
