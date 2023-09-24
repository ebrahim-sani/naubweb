import { RxDashboard } from "react-icons/rx";
import {
   HiOutlineDocument,
   HiOutlineDocumentDuplicate,
   HiOutlineDocumentText,
} from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { GrStatusInfo } from "react-icons/gr";
import { LuSchool2 } from "react-icons/lu";
import { LiaSchoolSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";

export const navLinks = [
   {
      id: "home",
      title: "Home",
      icon: <BiHomeAlt size={24} />,
      path: "/",
   },
   {
      id: "about",
      title: "About",
      icon: <GrStatusInfo size={24} />,
      path: "/about",
   },
   {
      id: "faculties",
      title: "Faculties",
      icon: <LuSchool2 size={24} />,
      path: "/faculties",
   },
   {
      id: "departments",
      title: "Departments",
      icon: <LiaSchoolSolid size={24} />,
      path: "/departments",
   },
   {
      id: "portals",
      title: "Portals",
      icon: <CgWebsite size={24} />,
      path: "/portals",
   },
];

export const heroContents = {
   title: "Nigerian Army University Biu.",
   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aliquid distinctio quis, recusandae aperiam provident quisquam quidem nesciunt totam tempore sint voluptas labore dolores numquam quasi assumenda nemo nobis, omnis placeat. Maxime quam rem at delectus! Alias magni molestias sint?",
};

export const vmissionCard = [
   {
      title: "MISSION",
      desc: "To develop highly skilled military and civilian manpower with distinctive competence capable of providing technological solutions to the problems of the NA, the military and nation.",
   },
   {
      title: "VISSION",
      desc: "To become a solution center in technology, research and development for the promotion of self-reliance, creativity and innovation in addressing the challenges of the NA, the military as well as the nation.",
   },
];

export const sidebarLinks = [
   {
      path: "dashboard",
      title: "Dashboard",
      icon: <RxDashboard size={22} />,
   },
   {
      path: "dashboard/course-registration",
      title: "Course Reg",
      icon: <HiOutlineDocumentDuplicate size={22} />,
   },
   {
      path: "dashboard/results",
      title: "Result",
      icon: <HiOutlineDocumentText size={22} />,
   },
   {
      path: "dashboard/documents",
      title: "Documents",
      icon: <HiOutlineDocument size={22} />,
   },
   {
      path: "dashboard/settings",
      title: "Settings",
      icon: <FiSettings size={22} />,
   },
];

export const user_data = {
   firstName: "Ibrahim",
   lastName: "Sani",
   otherName: "Muhammad",
   matricNumber: "SFE/19UR/1819",
   department: "Software Engineering",
   programme: "BSc Software Engineering",
   faculty: "Computing",
   modeOfEntry: "UTME",
   level: "700",
   gender: "Male",
   dateOfBirth: "02/02/2000",
   phoneNumber: "08106057557",
   country: "Nigeria",
   state: "Borno",
   lga: "Biu",
   email: "ebrasdotdevmuhammad@gmail.com",
   address: "Dugja ward, Tabra",
   town: "Biu",
   maritalStatus: "Married",
   religion: "Islam",
   tribalMark: "none",
   genotype: "KB",
   bloodGroup: "Q+",
};

export const courses = [
   {
      title: "SWE314",
      courseName: "Web Application Development",
      unit: "3",
   },
   {
      title: "SWE312",
      courseName: "Software Testing & Quality Assurance",
      unit: "2",
   },
   {
      title: "SWE311",
      courseName: "Object Oriented Analysis and Design",
      unit: "3",
   },
   {
      title: "SWE316",
      courseName: "Concept of Programming Language",
      unit: "3",
   },
   {
      title: "CSC311",
      courseName: "Data Structure and Algorithm",
      unit: "3",
   },
   {
      title: "IFS312",
      courseName: "Database Management System",
      unit: "2",
   },
   {
      title: "SWE317",
      courseName: "Overview of Software Engineering",
      unit: "3",
   },
   {
      title: "GST311",
      courseName: "Practical Entreprenueship",
      unit: "2",
   },
];

export const registeredCourses = [
   {
      semester: "First Semester",
      numberOfCourses: "10",
      totalunit: "21",
      dateRegistered: "02/02/2023",
      session: "2023/2024",
      level: "200",
   },
   {
      semester: "Second Semester",
      numberOfCourses: "9",
      totalunit: "21",
      dateRegistered: "02/02/2023",
      session: "2023/2024",
      level: "200",
   },
   {
      semester: "First Semester",
      numberOfCourses: "9",
      totalunit: "21",
      dateRegistered: "12/03/2022",
      session: "2022/2023",
      level: "100",
   },
   {
      semester: "Second Semester",
      numberOfCourses: "12",
      totalunit: "22",
      dateRegistered: "02/02/2023",
      session: "2022/2023",
      level: "100",
   },
];

export const coursesReg = [
   {
      id: "a",
      courseCode: "SWE 314",
      courseTitle: "Web Application Development",
      unit: "3",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "b",
      courseCode: "SWE 312",
      courseTitle: "Software Testing & Quality Assurance",
      unit: "2",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "c",
      courseCode: "SWE 311",
      courseTitle: "Object Oriented Analysis and Design",
      unit: "3",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "d",
      courseCode: "SWE 316",
      courseTitle: "Concept of Programming Language",
      unit: "3",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "e",
      courseCode: "CSC 311",
      courseTitle: "Data Structure and Algorithm",
      unit: "3",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "f",
      courseCode: "IFS 312",
      courseTitle: "Database Management System",
      unit: "2",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "g",
      courseCode: "SWE 317",
      courseTitle: "Overview of Software Engineering",
      unit: "3",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "h",
      courseCode: "GST 311",
      courseTitle: "Practical Entreprenueship",
      unit: "2",
      level: "300",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "i",
      courseCode: "SWE 411",
      courseTitle: "Software Configuration Management & Maintainance",
      unit: "2",
      level: "400",
      courseStatus: "compulsory",
      preReq: "SWE222",
      department: "software",
   },
   {
      id: "j",
      courseCode: "SWE 412",
      courseTitle: "Software Engineering Economics",
      unit: "2",
      level: "400",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "k",
      courseCode: "SWE 413",
      courseTitle: "Engineering Mobile Applications",
      unit: "2",
      level: "400",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "l",
      courseCode: "SWE 414",
      courseTitle: "Human Computer Interaction",
      unit: "2",
      level: "400",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "m",
      courseCode: "SWE 415",
      courseTitle: "Software Engineering Process",
      unit: "2",
      level: "400",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "n",
      courseCode: "SWE 416",
      courseTitle: "Research Methodology",
      unit: "1",
      level: "400",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "o",
      courseCode: "SWE 417",
      courseTitle: "Software Engineering Project Management",
      unit: "3",
      level: "400",
      courseStatus: "compulsory",
      preReq: "",
      department: "software",
   },
   {
      id: "p",
      courseCode: "CSC 412",
      courseTitle: "Compiler Construction",
      unit: "3",
      level: "400",
      courseStatus: "recommended",
      preReq: "",
      department: "software",
   },
   {
      id: "q",
      courseCode: "IFT 411",
      courseTitle: "Business Application Programming",
      unit: "3",
      level: "400",
      courseStatus: "elective",
      preReq: "",
      department: "software",
   },
   {
      id: "r",
      courseCode: "SWE 418",
      courseTitle: "Special Topics in SE",
      unit: "2",
      level: "400",
      courseStatus: "elective",
      preReq: "",
      department: "software",
   },
   {
      id: "s",
      courseCode: "SWE 419",
      courseTitle: "Fault-Tolerant Computing",
      unit: "2",
      level: "400",
      courseStatus: "elective",
      preReq: "",
      department: "software",
   },
];

export const results = [
   {
      semester: "Second Semester",
      session: "2023/2024",
      level: "300",
   },
   {
      semester: "First Semester",
      session: "2023/2024",
      level: "300",
   },
   {
      semester: "Second Semester",
      session: "2023/2024",
      level: "200",
   },
   {
      semester: "First Semester",
      session: "2023/2024",
      level: "200",
   },
   {
      semester: "Second Semester",
      session: "2021/2022",
      level: "100",
   },
   {
      semester: "First Semester",
      session: "2021/2022",
      level: "100",
   },
];

export const news = [
   {
      id: "1",
      title: "Admission into IJMB programme 2023/2024 is out",
      content:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, omnis molestias debitis dicta dolor veritatis nemo neque? Adipisci illo ad facilis. Totam facilis rerum voluptate aperiam dolorem repellendus sit impedit iste quisquam hic possimus, unde quo quis ea eos harum.",
      img: "/assets/naub-img-3.jpg",
   },
   {
      id: "2",
      title: "Admission into IJMB programme 2023/2024 is out",
      content:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, omnis molestias debitis dicta dolor veritatis nemo neque? Adipisci illo ad facilis. Totam facilis rerum voluptate aperiam dolorem repellendus sit impedit iste quisquam hic possimus, unde quo quis ea eos harum.",
      img: "/assets/naub-img-4.jpg",
   },
   {
      id: "3",
      title: "Admission into IJMB programme 2023/2024 is out",
      content:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, omnis molestias debitis dicta dolor veritatis nemo neque? Adipisci illo ad facilis. Totam facilis rerum voluptate aperiam dolorem repellendus sit impedit iste quisquam hic possimus, unde quo quis ea eos harum.",

      img: "/assets/naub-img-5.jpg",
   },
   {
      id: "4",
      title: "Admission into IJMB programme 2023/2024 is out",
      content:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, omnis molestias debitis dicta dolor veritatis nemo neque? Adipisci illo ad facilis. Totam facilis rerum voluptate aperiam dolorem repellendus sit impedit iste quisquam hic possimus, unde quo quis ea eos harum.",
      img: "/assets/naub-img-6.jpg",
   },
];
