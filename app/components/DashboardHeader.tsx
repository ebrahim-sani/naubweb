"use client";

import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useStore } from "@/states/store";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const DashboardHeader = () => {
   const { setMobileSideBar } = useStore();
   const [loading, setLoading] = useState<boolean>(false);
   const currentDate = new Date();
   const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
   };
   const dateTime = currentDate.toLocaleDateString("en-US", options);
   const router = useRouter();

   const signout = async () => {
      setLoading(true);

      const data = await signOut({
         redirect: false,
         callbackUrl: "/auth/signin",
      });
      router.push(data.url);
      setLoading(false);
   };

   return (
      <main className="flex items-center justify-between w-full">
         <div className="sm:pl-2 text-2xl font-bold">
            <button
               onClick={() => setMobileSideBar(true)}
               className="btn btn-circle bg-slate-100"
            >
               <BiMenu className="cursor-pointer" size={20} />
            </button>
         </div>
         <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-4">
               <p>{dateTime.toString()}</p>
               {/* <p>{dayTime.toString()}</p> */}
            </div>
            <div className="flex items-center gap-5">
               <button className="btn btn-sm btn-circle bg-slate-100">
                  <BiBell className="cursor-pointer" size={20} />
               </button>
               <button className="hidden sm:flex btn btn-sm btn-circle bg-slate-100">
                  <FiSettings size={20} />
               </button>
               <button
                  onClick={signout}
                  className="hidden sm:flex btn btn-sm btn-circle bg-slate-100"
               >
                  {loading ? (
                     <span className="loading loading-spinner"></span>
                  ) : (
                     <TbLogout size={20} />
                  )}
               </button>
            </div>
         </div>
      </main>
   );
};

export default DashboardHeader;
