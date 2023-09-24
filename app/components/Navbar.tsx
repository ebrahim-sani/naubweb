"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { CustomButton } from ".";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { useStore } from "@/states/store";

const Navbar = () => {
   const [toggle, setToggle] = useState<boolean>(false);
   const [scrolled, setScrolled] = useState<boolean>(false);
   let activePath: string = window.location.pathname;

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY;
         if (scrollTop > 100) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav className="flex w-full relative p-2 sm:py-4 top-0 z-20 items-center">
         <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-8 items-start">
               <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => {
                     window.scrollTo(0, 0);
                  }}
               >
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 sm:w-14 sm:h-14">
                        <Image
                           src="/assets/army.png"
                           width={240}
                           height={240}
                           alt="logo"
                           className="object-contain"
                        />
                     </div>
                     <div className="w-12 h-12 sm:w-16 sm:h-16">
                        <Image
                           src="/assets/naub.png"
                           width={240}
                           height={240}
                           alt="logo"
                           className="object-contain"
                        />
                     </div>
                  </div>
               </Link>

               <ul
                  className={`${
                     scrolled && "hidden"
                  }list-none hidden sm:flex flex-row gap-10`}
               >
                  {navLinks.map((nav) => (
                     <li
                        key={nav.id}
                        className="text-gray-300 hover:text-secondary hover:underline text-lg font-medium cursor-pointer"
                        // onClick={() => setActive(nav.title)}
                     >
                        <Link href={`#${nav.id}`}>{nav.title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="hidden sm:flex items-center gap-4">
               <CustomButton
                  title="Student"
                  href="/auth/signin"
                  styles="bg-transparent border border-gray-200 hover:bg-secHover hover:border-secHover"
               />
               <CustomButton
                  title="Staff"
                  href="/"
                  styles="bg-transparent border border-gray-200 hover:bg-secHover hover:border-secHover"
               />
               <CustomButton
                  title="Applicant"
                  href="/"
                  styles="bg-transparent border border-gray-200 hover:bg-secHover hover:border-secHover"
               />
            </div>
            <BiMenu
               onClick={() => setToggle(true)}
               size={38}
               className="sm:hidden text-gray-300 cursor-pointer"
            />

            {/* mobile */}
            {toggle && (
               <div className="fixed h-screen w-full bg-black bg-opacity-30 right-0 top-0 bottom-0 z-50">
                  <div className="h-full w-[80%] bg-gray-100 rounded-l-lg">
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
                              onClick={() => setToggle(false)}
                              className="btn btn-md btn-circle bg-slate-100"
                           >
                              <FaTimes size={28} className="text-secondary" />
                           </button>
                        </div>
                        <div className="flex flex-1 items-start gap-1 w-full">
                           <div className="flex flex-col items-start gap-12 overflow-y-auto overflow-x-hidden w-full">
                              <ul className="flex flex-col items-start justify-center w-full gap-4 list-none">
                                 {navLinks.map((link, i) => (
                                    <Link
                                       key={i}
                                       href="/"
                                       onClick={() => setToggle(false)}
                                       className={`${
                                          activePath == link?.path
                                             ? "bg-secondary text-gray-200"
                                             : "text-gray-500 hover:scale-105 transition duration-150 ease-in-out hover:text-secHover"
                                       } flex w-full items-center justify-center p-2 cursor-pointer text-sm font-medium py-2 px-2 rounded-md"`}
                                    >
                                       <li className="w-full flex">
                                          <span className="flex items-center w-full gap-2">
                                             <div className="">
                                                {link?.icon}
                                             </div>
                                             <h2 className="text-base">
                                                {link?.title}
                                             </h2>
                                          </span>
                                       </li>
                                    </Link>
                                 ))}
                              </ul>

                              <Link href="/auth/signin">
                                 <button
                                    className="btn btn-sm bg-slate-200 border-slate-300 hover:bg-slate-300"
                                    type="button"
                                 >
                                    Signin
                                    <TbLogout
                                       className="text-gray-600 cursor-pointer"
                                       size={25}
                                    />
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
