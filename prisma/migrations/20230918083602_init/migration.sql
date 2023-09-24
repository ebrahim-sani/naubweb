/*
  Warnings:

  - A unique constraint covering the columns `[specialId]` on the table `CourseRegisteration` will be added. If there are existing duplicate values, this will fail.
  - The required column `specialId` was added to the `CourseRegisteration` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "CourseRegisteration_registerCourseId_key";

-- AlterTable
ALTER TABLE "CourseRegisteration" ADD COLUMN     "specialId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CourseRegisteration_specialId_key" ON "CourseRegisteration"("specialId");
