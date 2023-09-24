import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
   if (req.method !== "POST") {
      return new Response("Method not allowed!", { status: 405 });
   }

   const prisma = new PrismaClient();
   const { student_id, selectedCourse, semester, level, currentSession } =
      await req.json();

   // console.log("Selected courses ->", selectedCourse);

   try {
      await prisma.registerCourse.create({
         data: {
            // Student: { connect: { id: student_id } },
            studentId: student_id,
            level: level,
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
