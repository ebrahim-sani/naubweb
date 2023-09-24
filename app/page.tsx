import Image from "next/image";
import { CustomButton, Navbar } from "./components";
import { FaArrowRight } from "react-icons/fa";
import { heroContents, vmissionCard } from "@/constants";

export default function Home() {
   return (
      <main className="flex flex-col items-center justify-between w-full">
         <div className="flex relative flex-col bg-[url(/assets/naub-img-7.jpeg)] min-h-screen w-full bg-cover items-center after:absolute after:bg-gradient-to-r from-green-900 via-green-900 via-15% to-transparent after:inset-0">
            <div className="container flex flex-col gap-24">
               <Navbar />
               <div className="relative flex flex-col w-full z-10">
                  <div className="flex flex-col items-start gap-4">
                     <h2 className="font-epilouge text-6xl font-extrabold text-gray-200">
                        {heroContents.title}
                     </h2>
                     <p className="sm:w-4/6 font-epilouge text-xl font-normal leading-8 text-gray-300">
                        {heroContents.desc}
                     </p>
                     <div className="flex items-center gap-3">
                        <CustomButton
                           btnType="button"
                           title="Explore Our Courses"
                           href="/"
                           styles="border border-gray-200 hover:border-secHover bg-transparent hover:bg-secHover"
                           // eslint-disable-next-line react/no-children-prop
                           icon={<FaArrowRight />}
                        />
                        <CustomButton
                           btnType="button"
                           title="Apply"
                           href="/"
                           styles="bg-transparent border border-gray-200 hover:border-secHover hover:bg-secHover"
                        />
                     </div>
                  </div>
               </div>
               <div className="absolute -bottom-14 bg-white sm:flex items-center gap-4 p-4 rounded-lg z-10 container shadow-lg">
                  <div className="flex flex-col items-start gap-3">
                     <div className="flex flex-col items-center gap-[2px]">
                        <h3 className="text-gray-500 font-bold sm:text-lg">
                           {vmissionCard[0].title}
                        </h3>
                        <div className="p-[2px] bg-gradient-to-tr w-full from-secondary via-primary to-transparent rounded-full"></div>
                     </div>
                     <p className="text-gray-400">{vmissionCard[0].desc}</p>
                  </div>
                  {/* <div className="hidden sm:flex p-2 bg-secondary rounded-sm rotate-45"></div> */}
                  <div className="divider divider-horizontal text-gray-600"></div>
                  <div className="flex sm:pl-4 flex-col items-start gap-2">
                     <div className="flex flex-col items-center gap-[2px]">
                        <h3 className="text-gray-500 font-bold sm:text-lg">
                           {vmissionCard[1].title}
                        </h3>
                        <div className="p-[2px] bg-gradient-to-tr w-full from-secondary via-primary to-transparent rounded-full"></div>
                     </div>
                     <p className="text-gray-400">{vmissionCard[1].desc}</p>
                  </div>
               </div>
            </div>
         </div>
         {/* <LatestNews /> */}
      </main>
   );
}
