"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { CustomButton } from ".";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
   const [active, setActive] = useState<string>("");
   const [toggle, setToggle] = useState<boolean>(false);
   const [scrolled, setScrolled] = useState<boolean>(false);

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
                     setActive("");
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
                        onClick={() => setActive(nav.title)}
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
               <nav className="flex w-full bg-black bg-opacity-80">
                  <div className="absolute h-screen z-40 right-0 top-0 bg-gray-100 rounded-l-md w-[90%]">
                     <div className="">
                        <div className="flex flex-col items-start p-2"></div>
                     </div>
                  </div>
               </nav>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
