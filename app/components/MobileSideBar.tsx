"use client";

import { sidebarLinks } from "@/constants";
import { useStore } from "@/states/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const MobileSideBar = () => {
   const { mobileSidebar, activePath, setActivePath, setMobileSideBar } =
      useStore();
   const [loading, setLoading] = useState<boolean>(false);
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
      <nav>
         {mobileSidebar && (
            <div className="fixed h-screen w-full bg-black bg-opacity-30 left-0 top-0">
               <div className="h-full w-[80%] bg-gray-100 rounded-r-lg">
                  <div className="flex flex-col gap-16 items-start p-3 w-full h-full">
                     <div className="flex items-center justify-between w-full">
                        <div className="h-20 w-20">
                           <Image
                              src="/assets/naub.png"
                              alt="logo"
                              width={200}
                              height={200}
                           />
                        </div>
                        <button
                           onClick={() => setMobileSideBar(false)}
                           className="btn btn-md btn-circle bg-slate-100"
                        >
                           <FaTimes size={24} className="text-secondary" />
                        </button>
                     </div>
                     <div className="flex flex-1 items-start gap-1 w-full">
                        <div className="flex flex-col items-start gap-12 overflow-auto w-full">
                           <ul className="flex flex-col items-start justify-center w-full gap-4 list-none">
                              {sidebarLinks.map((link, i) => (
                                 <Link
                                    key={i}
                                    href={`/${link?.path}`}
                                    onClick={() => {
                                       setActivePath(link?.path);
                                       setMobileSideBar(false);
                                    }}
                                    className={`${
                                       activePath == link?.path
                                          ? "bg-secondary text-gray-200"
                                          : "text-gray-500 hover:scale-105 transition duration-150 ease-in-out hover:text-secHover"
                                    } flex w-full items-center justify-center p-2 cursor-pointer text-sm font-medium py-2 px-2 rounded-md"`}
                                 >
                                    <li className="w-full flex">
                                       <span className="flex items-center w-full gap-2">
                                          <div className="">{link?.icon}</div>
                                          <h2 className="text-base">
                                             {link?.title}
                                          </h2>
                                       </span>
                                    </li>
                                 </Link>
                              ))}
                           </ul>

                           <button
                              className="btn btn-sm bg-slate-100 border-slate-200 hover:bg-slate-100"
                              type="button"
                              onClick={signout}
                           >
                              Logout
                              {loading ? (
                                 <span className="loading loading-spinner"></span>
                              ) : (
                                 <TbLogout
                                    className="text-gray-600 cursor-pointer"
                                    size={25}
                                 />
                              )}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
};

export default MobileSideBar;
