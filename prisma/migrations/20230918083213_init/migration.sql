/*
  Warnings:

  - A unique constraint covering the columns `[registerCourseId]` on the table `CourseRegisteration` will be added. If there are existing duplicate values, this will fail.
  - Made the column `registerCourseId` on table `CourseRegisteration` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CourseRegisteration" DROP CONSTRAINT "CourseRegisteration_registerCourseId_fkey";

-- DropIndex
DROP INDEX "CourseRegisteration_id_key";

-- AlterTable
ALTER TABLE "CourseRegisteration" ALTER COLUMN "registerCourseId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CourseRegisteration_registerCourseId_key" ON "CourseRegisteration"("registerCourseId");

-- AddForeignKey
ALTER TABLE "CourseRegisteration" ADD CONSTRAINT "CourseRegisteration_registerCourseId_fkey" FOREIGN KEY ("registerCourseId") REFERENCES "registerCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
