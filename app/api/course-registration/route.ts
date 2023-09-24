import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
   if (req.method !== "POST") {
      return new Response("Method not allowed!", { status: 405 });
   }

   const prisma = new PrismaClient();

   const session = await getServerSession(authOptions);
   /* @ts-ignore */
   const studentId: string = session?.user?.id;
   /* @ts-ignore */
   const level: string = session?.user?.level;
   // console.log(studentId, level);

   const { selectedCourse, semester, currentSession } = await req.json();

   try {
      await prisma.registerCourse.create({
         data: {
            // Student: { connect: { id: student_id } },
            studentId,
            level,
            semester: semester,
            session: currentSession,
            courses: {
               create: selectedCourse,
            },
         },
      });
      console.log("Saved successfully");
      return new Response("", { status: 200 });
   } catch (error) {
      console.log(error);
   } finally {
      await prisma.$disconnect();
   }
}
