"use client";

import { useStore } from "@/states/store";
import React from "react";
import { FaPlus } from "react-icons/fa";

const CourseRegHeader = () => {
   const { setIsToggle } = useStore();

   return (
      <main className="flex px-2 sm:px-4 pt-3 items-center justify-between w-full">
         <h2 className="font-bold text-xl sm:text-2xl text-gray-600">
            Registered Courses
         </h2>
         <button
            onClick={() => setIsToggle(true)}
            className="btn font-epilogue font-semibold text-sm leading-[26px] border rounded-3xl text-gray-200 bg-secondary hover:bg-secHover border-secondary hover:border-secondary"
         >
            <div className="flex items-center gap-2">
               <p>Register</p> <FaPlus />
            </div>
         </button>
      </main>
   );
};

export default CourseRegHeader;
