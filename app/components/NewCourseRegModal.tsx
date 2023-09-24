"use client";

import React, { Suspense, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { coursesReg } from "@/constants";
import { useStore } from "@/states/store";
import Loading from "../dashboard/loading";

type Course = {
   id: string;
   courseCode: string;
   courseTitle: string;
   unit: string;
   level: string;
   courseStatus: string;
   preReq: string;
};

const NewCourseRegModal = () => {
   const [selectedCourse, setSelectedCourse] = useState<Course[]>([]);
   const [nextRegStep, setNextRegStep] = useState<boolean>(false);
   const [semester, setSemester] = useState<string>("Select Semester");
   const [currentSession, setCurrentSession] = useState<string>("");
   const { isToggle, setIsToggle } = useStore();
   const [isLoading, setLoading] = useState<boolean>(false);

   // console.log(selectedCourse);

   const toggleCourseSelection = (course: Course) => {
      if (selectedCourse.find((selected) => selected.id === course.id)) {
         setSelectedCourse(
            selectedCourse.filter((selected) => selected.id !== course.id),
         );
      } else {
         setSelectedCourse([...selectedCourse, course]);
      }
   };

   let totalUnit: number = 0;
   const sumUnits = (coursesArray: Course[]) => {
      for (let k = 0; k < coursesArray.length; k++) {
         const course = coursesArray[k];
         const courseUnit = parseInt(course.unit);
         totalUnit += courseUnit;
      }
      return totalUnit;
   };

   const register = async () => {
      setLoading(true);

      try {
         const res = await fetch("/api/course-registration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               selectedCourse,
               semester,
               currentSession,
            }),
         });

         if (res.ok) {
            const data = await res.json();
            console.log(data);
         }
      } catch (err) {
         console.error("An error occured", err);
      }

      setLoading(false);
      setSelectedCourse([]);
      setIsToggle(false);
      setNextRegStep(false);
      setSemester("Select Semester");
      setCurrentSession("");
   };

   const closeModal = () => {
      setIsToggle(false);
      setNextRegStep(false);
      setSelectedCourse([]);
      setSemester("Select Semester");
      setCurrentSession("");
   };

   return (
      <main
         className={`${
            isToggle == false && "hidden"
         } absolute flex-1 w-full h-full z-20 bg-black bg-opacity-20 py-4 px-2 sm:py-8 sm:px-20`}
      >
         <div className="relative flex flex-col justify-between p-4 bg-white rounded-lg w-full h-full bg-opacity-100">
            <div className="flex pb-2 justify-between w-full">
               <h2 className="text-xl text-secondary font-semibold">
                  Course Registration
               </h2>
               <FaTimes
                  className="text-secondary cursor-pointer"
                  size={24}
                  onClick={closeModal}
               />
            </div>

            {/* create another component for server fetching.. */}
            <div className="w-full flex flex-1 h-full overflow-hidden">
               {nextRegStep == false ? (
                  <div className="w-full h-full overflow-x-auto overflow-y-auto">
                     <Suspense fallback={<Loading />}>
                        <table className="table w-full">
                           <thead>
                              <tr>
                                 <th></th>
                                 <th>Code</th>
                                 <th>Title</th>
                                 <th>Unit</th>
                                 <th>Level</th>
                                 <th>Status</th>
                                 <th>Pre Req.</th>
                              </tr>
                           </thead>
                           <tbody>
                              {coursesReg.map((c) => (
                                 <tr key={c.courseCode}>
                                    <th>
                                       <label>
                                          <input
                                             type="checkbox"
                                             className="checkbox"
                                             value={c.id}
                                             onChange={() =>
                                                toggleCourseSelection(c)
                                             }
                                             checked={selectedCourse.some(
                                                (selected) =>
                                                   selected.id === c.id,
                                             )}
                                          />
                                       </label>
                                    </th>
                                    <td>{c.courseCode}</td>
                                    <td>{c.courseTitle}</td>
                                    <td>{c.unit}</td>
                                    <td>{c.level}</td>
                                    <td>{`${
                                       c.courseStatus == "compulsory"
                                          ? "C"
                                          : c.courseStatus == "recommended"
                                          ? "R"
                                          : "E"
                                    }`}</td>
                                    <td>{c.preReq}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </Suspense>
                  </div>
               ) : (
                  <div className="flex items-start w-full">
                     <div className="flex flex-col sm:flex-row gap-3 w-full h-full">
                        <div className="form-control w-full max-w-xs">
                           <label className="label">
                              <span className="label-text">Semester</span>
                           </label>
                           <select
                              value={semester}
                              onChange={(e) => setSemester(e.target.value)}
                              className="select select-bordered w-full max-w-xs"
                              // onClick={}
                           >
                              <option disabled selected>
                                 Select Semester
                              </option>
                              <option>First Semester</option>
                              <option>Second Semester</option>
                           </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                           <label className="label">
                              <span className="label-text">Session</span>
                           </label>
                           <input
                              value={currentSession}
                              onChange={(e) =>
                                 setCurrentSession(e.target.value)
                              }
                              type="text"
                              placeholder="20xx/20xx"
                              maxLength={9}
                              className="input input-bordered w-full max-w-xs"
                           />
                        </div>
                     </div>
                  </div>
               )}
            </div>

            <div className="flex items-center justify-between w-full pt-4 sm:px-4">
               <div className="flex flex-col items-start gap-[2px]">
                  <p className="text-gray-500">
                     {`${
                        selectedCourse.length >= 1
                           ? sumUnits(selectedCourse)
                           : "0"
                     }`}{" "}
                     Unit
                  </p>
                  {totalUnit > 22 && (
                     <p className="text-xs sm:text-sm text-red-800">
                        The units must be 22 or less!
                     </p>
                  )}
               </div>

               {nextRegStep == true ? (
                  <div className="flex items-center">
                     <button
                        className="bg-secondary rounded-lg btn btn-sm text-gray-200 font-semibold hover:bg-secHover border-none"
                        type="button"
                        onClick={() => setNextRegStep(false)}
                     >
                        Back
                     </button>
                     <div className="divider divider-horizontal"></div>
                     <button
                        className="bg-secondary cursor-pointer rounded-lg btn btn-sm text-gray-200 font-semibold border-none hover:bg-secHover"
                        type="button"
                        onClick={register}
                     >
                        {isLoading && (
                           <span className="loading loading-spinner"></span>
                        )}
                        Save
                     </button>
                  </div>
               ) : (
                  <button
                     disabled={totalUnit > 22 && true}
                     className={`${
                        totalUnit > 22
                           ? "bg-gray-400 cursor-not-allowed"
                           : "bg-secondary cursor-pointer"
                     } rounded-lg btn btn-sm text-gray-200 font-semibold hover:bg-secHover border-none`}
                     type="button"
                     onClick={() => setNextRegStep(true)}
                  >
                     Next
                  </button>
               )}
            </div>
         </div>
      </main>
   );
};

export default NewCourseRegModal;
