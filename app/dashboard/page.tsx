import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { courses, user_data } from "@/constants";
import { truncateText } from "@/utils/untilityFunctions";

export const metadata = {
   title: "Dashboard | Student",
   description: "Nigerian Army University Biu - student dashboard",
};

type DataProps = {
   heading: string;
   info: string;
   styles?: string;
};

function CardData({ heading, info, styles }: DataProps) {
   return (
      <div className="flex flex-col items-start gap-1">
         <h3 className="card-heading">{heading}</h3>
         <p className={`card-info ${styles}`}>{info}</p>
      </div>
   );
}

const page = () => {
   const currentDate = new Date();
   const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
   };
   const dateTime = currentDate.toLocaleDateString("en-US", options);
   // const dayTime = currentDate.toLocaleTimeString();

   return (
      <main className="flex w-full h-screen">
         <div className="flex flex-col items-center justify-start w-full py-3 sm:py-6 px-4 sm:px-8 gap-6 overflow-y-auto">
            {/* header */}
            <div className="flex items-center justify-between w-full">
               <div className="pl-2 text-2xl font-bold">
                  <BiMenu size={25} />
               </div>
               <div className="flex items-center gap-8">
                  <div className="hidden md:flex items-center gap-4">
                     <p>{dateTime.toString()}</p>
                     {/* <p>{dayTime.toString()}</p> */}
                  </div>
                  <div className="flex items-center gap-5">
                     <BiBell className="cursor-pointer" size={25} />
                     <FiSettings
                        className="hidden sm:inline cursor-pointer"
                        size={25}
                     />
                     <TbLogout
                        className="hidden sm:inline cursor-pointer"
                        size={25}
                     />
                  </div>
               </div>
            </div>

            {/* main content */}
            <div className="flex flex-col items-start w-full">
               <div className="grid grid-cols-1 items-stretch sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full ">
                  <div className="col-span-2 p-2 w-full">
                     <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg items-start justify-start gap-6 p-2 sm:p-4">
                        <div className="relative flex items-center justify-center p-[2px] rounded-full bg-secondary">
                           <Image
                              src="/assets/pr.png"
                              alt="avatar"
                              width={200}
                              height={200}
                              className="flex rounded-full"
                           />
                           <div className="flex absolute rounded-full bottom-5 right-3 p-2 bg-secondary cursor-pointer">
                              <HiOutlinePencilAlt
                                 size={15}
                                 className="text-gray-200"
                              />
                           </div>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                           <h3 className="text-gray-500 font-extrabold text-lg">{`${user_data?.firstName} ${user_data?.lastName} ${user_data?.otherName}`}</h3>
                           <div className="flex items-center gap-2">
                              <p className="text-gray-400">Matric Number:</p>
                              <h3 className="card-heading">
                                 {user_data.matricNumber}
                              </h3>
                           </div>
                           <div className="flex items-center gap-2">
                              <p className="text-gray-400">Department:</p>
                              <h3 className="card-heading">
                                 {user_data.department}
                              </h3>
                           </div>
                           <div className="flex items-center gap-2">
                              <p className="text-gray-400">Level:</p>
                              <h3 className="card-heading">
                                 {user_data.level}
                              </h3>
                           </div>
                           <div className="flex items-center gap-2">
                              <p className="text-gray-400">Faculty:</p>
                              <h3 className="card-heading">
                                 {user_data.faculty}
                              </h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2 w-full">
                     <div className="flex w-full flex-col h-full items-start p-2 bg-white rounded-lg shadow-md">
                        <h3 className="text-gray-500 text-bold">
                           Current CGPA
                        </h3>
                        <div className="flex w-full h-full items-center justify-center">
                           <h1 className="text-gray-600 text-6xl font-bold mb-2">
                              0.00
                           </h1>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 w-full">
                     <div className="flex w-full flex-col bg-white rounded-md p-2 sm:p-4 gap-1">
                        <h2 className="text-xl font-bold text-gray-600">
                           Basic Information
                        </h2>
                        <div className="p-[1px] rounded-full w-full bg-gray-200"></div>
                        <div className="grid grid-col-2 sm:grid-cols-3 items-center gap-2 gap-y-4 w-full">
                           <CardData
                              heading="Date of Birth"
                              info={user_data.dateOfBirth}
                           />
                           <CardData
                              heading="Phone Number"
                              info={user_data.phoneNumber}
                           />
                           <CardData
                              heading="Email Address"
                              styles="text-clip overflow-hidden"
                              info={truncateText(user_data.email, 15)}
                           />
                           <CardData
                              heading="City/Town"
                              info={user_data.town}
                           />
                           <CardData heading="State" info={user_data.state} />
                           <CardData
                              heading="Country"
                              info={user_data.country}
                           />
                           <CardData heading="Gender" info={user_data.gender} />
                           <CardData
                              heading="Relationship Status"
                              info={user_data.maritalStatus}
                           />
                           <CardData
                              heading="Religion"
                              info={user_data.religion}
                           />
                           <CardData
                              heading="Blood Group"
                              info={user_data.bloodGroup}
                           />
                           <CardData
                              heading="Genotype"
                              info={user_data.genotype}
                           />
                           <CardData
                              heading="Tribal Mark"
                              info={user_data.tribalMark}
                           />
                        </div>
                     </div>
                  </div>

                  {/* courses-table */}
                  <div className="col-span-2 p-2 w-full">
                     <div className="flex flex-col items-start gap-3 rounded-md p-2 w-full h-[280px] bg-white">
                        <p className="text-base text-gray-500">
                           Current Registered Courses
                        </p>
                        <div className="flex overflow-x-auto overflow-y-auto w-full">
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th></th>
                                    <td className="text-gray-500">Code</td>
                                    <td className="text-gray-500">Title</td>
                                    <td className="text-gray-500">Unit</td>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {courses.map((course, index) => (
                                    <tr className="" key={index}>
                                       <th>{index + 1}</th>
                                       <td>{course.title}</td>
                                       <td>{course.courseName}</td>
                                       <td>{course.unit}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
                  <div className="col-span-2 p-2 bg-slate-500 w-full"></div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default page;
