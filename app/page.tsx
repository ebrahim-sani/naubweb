import Image from "next/image";
import { CustomButton, Navbar } from "./components";
import { FaArrowRight } from "react-icons/fa";
import { heroContents, news, vmissionCard } from "@/constants";
import { truncateText } from "@/utils/untilityFunctions";

export default function Home() {
   return (
      <main className="flex flex-col items-center justify-between w-full">
         <div className="flex relative flex-col bg-[url(/assets/naub-img-7.jpeg)] min-h-screen w-full bg-cover items-center after:absolute after:bg-gradient-to-r from-green-900 via-green-900 via-15% to-transparent after:inset-0">
            <div className="container flex flex-col gap-10 sm:gap-24">
               <Navbar />
               <div className="relative flex flex-col w-full z-10">
                  <div className="flex flex-col items-start px-2 gap-4">
                     <h2 className="font-epilouge text-5xl sm:text-6xl font-extrabold text-gray-200">
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
               <div className="sm:absolute sm:-bottom-14 bg-white flex items-center flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-lg z-10 container shadow-md">
                  <div className="flex flex-col items-start gap-3">
                     <div className="flex flex-col items-center gap-[2px]">
                        <h3 className="text-gray-500 font-bold sm:text-lg">
                           {vmissionCard[0].title}
                        </h3>
                        <div className="p-[2px] bg-gradient-to-tr w-full from-secondary via-primary to-transparent rounded-full"></div>
                     </div>
                     <p className="text-gray-400">{vmissionCard[0].desc}</p>
                  </div>
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
         <div className="flex flex-col items-center justify-center w-full p-2 sm:pt-20 gap-4 container min-h-screen">
            <h2 className="text-xl text-gray-600 font-semibold">Latest News</h2>
            <div className="flex flex-col items-center w-full gap-2">
               <div className="flex justify-center carousel rounded-box w-full gap-2">
                  {news?.map((news) => (
                     <div
                        key={news.id}
                        className="carousel-item sm:w-1/5 bg-white shadow-md hover:scale-50 hover:cursor-pointer rounded-tr-md rounded-tl-md"
                     >
                        <div className="flex flex-col items-center w-full">
                           <div className="flex w-full h-full">
                              <Image
                                 src={news?.img}
                                 alt="news-photo"
                                 width={200}
                                 height={200}
                                 className="w-full"
                              />
                           </div>
                           <div className="flex flex-col items-start gap-2 p-2">
                              <h2>{truncateText(news?.title, 40)}</h2>
                              <p className="text-xm sm:text-sm text-gray-400">
                                 {truncateText(news?.content, 80)}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <button className="btn btn-sm text-gray-200 bg-secondary border-none hover:bg-secHover">
                  More
               </button>
            </div>
         </div>
      </main>
   );
}
