import { CourseRegHeader, NewCourseRegModal } from "@/app/components";
import { registeredCourses } from "@/constants";
import { useStore } from "@/states/store";
import { FaPlus } from "react-icons/fa";

export const metadata = {
   title: "Dashboard | Student | Course Registration",
   description: "Nigerian Army University Biu - Student Course Registration",
};

const page = () => {
   // // eslint-disable-next-line react-hooks/rules-of-hooks
   // const { isToggle } = useStore();
   // console.log(isToggle);
   return (
      <main className="flex w-full items-start py-4 px-1 sm:px-4 h-full">
         <div className="relative flex flex-col gap-2 sm:gap-3 items-start w-full bg-white rounded-md">
            {/* header */}
            <CourseRegHeader />
            <div className="flex flex-col rounded-md w-full">
               <div className="flex flex-col items-start justify-between h-full p-1 sm:p-2">
                  <div className="flex flex-col w-full p-1 sm:p-2 gap-3 shadow-sm">
                     <div className="w-full overflow-x-auto">
                        <table className="table w-full">
                           <thead>
                              <tr>
                                 <th></th>
                                 <th className="text-gray-500">Semester</th>
                                 <th className="text-gray-500">
                                    Number of Courses
                                 </th>
                                 <th className="text-gray-500">Total Units</th>
                                 <th className="text-gray-500">Level</th>
                                 <th className="text-gray-500">Session</th>
                              </tr>
                           </thead>
                           <tbody>
                              {registeredCourses.map((course, i) => (
                                 <tr className="cursor-pointer hover" key={i}>
                                    <th>{i + 1}</th>
                                    <th>{course.semester}</th>
                                    <th>Courses ({course.numberOfCourses})</th>
                                    <th>{course.totalunit}</th>
                                    <th>{course.level}</th>
                                    <th>{course.session}</th>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default page;
