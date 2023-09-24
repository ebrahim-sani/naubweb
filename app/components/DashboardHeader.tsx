"use client";

import React from "react";
import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useStore } from "@/states/store";

const DashboardHeader = () => {
   const { setMobileSideBar } = useStore();
   const currentDate = new Date();
   const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
   };
   const dateTime = currentDate.toLocaleDateString("en-US", options);

   return (
      <main className="flex items-center justify-between w-full">
         <div className="sm:pl-2 text-2xl font-bold">
            <button
               onClick={() => setMobileSideBar(true)}
               className="btn btn-md btn-circle bg-slate-100"
            >
               <BiMenu className="cursor-pointer" size={30} />
            </button>
         </div>
         <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-4">
               <p>{dateTime.toString()}</p>
               {/* <p>{dayTime.toString()}</p> */}
            </div>
            <div className="flex items-center gap-5">
               <button className="btn btn-md btn-circle bg-slate-100">
                  <BiBell className="cursor-pointer" size={25} />
               </button>
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
      </main>
   );
};

export default DashboardHeader;
