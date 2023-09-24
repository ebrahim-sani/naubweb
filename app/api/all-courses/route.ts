// import { PrismaClient } from "@prisma/client";

// export async function GET(req: Request) {
//    if (req.method !== "GET") {
//       return new Response("Method not allowed!", { status: 405 });
//    }

//    const prisma = new PrismaClient();

//    try {
//       await prisma.courses.findAll{ };
//       console.log("Success");
//       return new Response(json., { status: 200 });
//    } catch (error) {
//       console.log(error);
//    } finally {
//       await prisma.$disconnect();
//    }
// }
