-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "matricNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "otherName" TEXT,
    "isStudent" BOOLEAN NOT NULL DEFAULT true,
    "department" TEXT NOT NULL,
    "programme" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "modeOfEntry" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "tribe" TEXT NOT NULL,
    "tribalMark" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "genotype" TEXT,
    "password" TEXT NOT NULL,
    "nextOfKinFirstName" TEXT NOT NULL,
    "nextOfKinLastName" TEXT NOT NULL,
    "nextOfKinPhoneNumber" TEXT NOT NULL,
    "nextOfKinRelationship" TEXT NOT NULL,
    "nextOfKinAddress" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registerCourse" (
    "id" TEXT NOT NULL,
    "registeredTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentId" TEXT,
    "semester" TEXT NOT NULL,
    "session" TEXT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "registerCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseRegisteration" (
    "id" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "courseStatus" TEXT NOT NULL,
    "preReq" TEXT,
    "registerCourseId" TEXT
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "courseStatus" TEXT NOT NULL,
    "preReq" TEXT,
    "departmentId" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "profilePicture" TEXT,
    "password" TEXT NOT NULL,
    "isDepartment" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseResult" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "studentMatricNumber" TEXT NOT NULL,
    "remark" TEXT NOT NULL,
    "lecturerId" TEXT,
    "matricNumber" TEXT,

    CONSTRAINT "CourseResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lecturer" (
    "id" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "otherName" TEXT,
    "isLecturer" BOOLEAN NOT NULL DEFAULT true,
    "faculty" TEXT NOT NULL,
    "profilePicture" TEXT,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "tribe" TEXT NOT NULL,
    "tribalMark" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "genotype" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Lecturer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_matricNumber_key" ON "Student"("matricNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phoneNumber_key" ON "Student"("phoneNumber");

-- CreateIndex
CREATE INDEX "Student_matricNumber_idx" ON "Student"("matricNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_matricNumber_email_key" ON "Student"("matricNumber", "email");

-- CreateIndex
CREATE UNIQUE INDEX "CourseRegisteration_id_key" ON "CourseRegisteration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseCode_key" ON "Course"("courseCode");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseTitle_key" ON "Course"("courseTitle");

-- CreateIndex
CREATE INDEX "Course_courseTitle_courseCode_idx" ON "Course"("courseTitle", "courseCode");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_key" ON "Department"("departmentName");

-- CreateIndex
CREATE INDEX "Department_departmentName_idx" ON "Department"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_faculty_key" ON "Department"("departmentName", "faculty");

-- CreateIndex
CREATE UNIQUE INDEX "CourseResult_studentMatricNumber_key" ON "CourseResult"("studentMatricNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_staffId_key" ON "Lecturer"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_email_key" ON "Lecturer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_phoneNumber_key" ON "Lecturer"("phoneNumber");

-- CreateIndex
CREATE INDEX "Lecturer_staffId_firstName_email_idx" ON "Lecturer"("staffId", "firstName", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_staffId_email_key" ON "Lecturer"("staffId", "email");

-- AddForeignKey
ALTER TABLE "registerCourse" ADD CONSTRAINT "registerCourse_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRegisteration" ADD CONSTRAINT "CourseRegisteration_registerCourseId_fkey" FOREIGN KEY ("registerCourseId") REFERENCES "registerCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseResult" ADD CONSTRAINT "CourseResult_lecturerId_fkey" FOREIGN KEY ("lecturerId") REFERENCES "Lecturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseResult" ADD CONSTRAINT "CourseResult_matricNumber_fkey" FOREIGN KEY ("matricNumber") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
