"use client";

import { sidebarLinks } from "@/constants";
import { useStore } from "@/states/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
   // const [activePath, setActivePath] = useState<String>("dashboard");
   const { activePath, setActivePath } = useStore();

   return (
      <nav
         className="hidden sm:flex w-60 
         h-full rounded-r-xl border-r-4 border-secondary bg-white"
      >
         <div className="flex flex-col items-center w-full gap-14 p-4 pr-0">
            <div className="h-24 w-28">
               <Image
                  src="/assets/naub.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="h-full w-full"
               />
            </div>

            <ul className="flex flex-col items-start justify-center w-full gap-4 list-none">
               {sidebarLinks.map((link, i) => (
                  <Link
                     key={i}
                     href={`/${link?.path}`}
                     onClick={() => setActivePath(link?.path)}
                     className={`${
                        activePath == link?.path
                           ? "bg-secondary rounded-l-full text-gray-200"
                           : "text-gray-500 hover:scale-105 transition duration-150 ease-in-out hover:text-secHover"
                     } flex w-full items-center justify-center p-2 cursor-pointer text-sm font-medium py-2 px-2 rounded-md"`}
                  >
                     <li className="w-full flex pl-4">
                        <span className="flex items-center w-full gap-2">
                           <div className="">{link?.icon}</div>
                           <h2 className="text-base">{link?.title}</h2>
                        </span>
                     </li>
                  </Link>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default Sidebar;
