import { DashboardHeader } from "@/app/components";
import { results } from "@/constants";
import Image from "next/image";

export const metadata = {
   title: "Dashboard | Student | Results",
   description: "Nigerian Army University Biu - student dashboard",
};

const page = () => {
   return (
      <main className="flex flex-col gap-3 w-full items-start py-2 px-1 sm:px-4 h-full">
         <DashboardHeader />

         <div className="flex flex-col items-start gap-3 rounded-md p-2 w-full h-[550px] sm:h-[400px] bg-white">
            <div className="flex flex-col gap-1 px-2 sm:px-4 pt-3 items-start w-full">
               <h2 className="font-bold text-xl sm:text-2xl text-gray-600">
                  Results
               </h2>
               {/* <div className="p-[1px] rounded-full w-full bg-gray-200"></div> */}
            </div>
            {results.length == 0 ? (
               <div className="flex items-center justify-center flex-1 w-full">
                  <div className="flex flex-col items-center gap-3">
                     <div className="h-26 w-26">
                        <Image
                           src="/assets/undraw_no_data.svg"
                           alt="no_data"
                           width={200}
                           height={200}
                        />
                     </div>
                     <p className="text-xs font-semibold text-gray-500">
                        No results found!
                     </p>
                  </div>
               </div>
            ) : (
               <div className="flex overflow-x-auto overflow-y-auto w-full">
                  <table className="table">
                     <thead>
                        <tr>
                           <th></th>
                           <th className="text-gray-500">Semester</th>
                           <th className="text-gray-500">Level</th>
                           <th className="text-gray-500">Session</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {results.map((result, i) => (
                           <tr className="cursor-pointer" key={i}>
                              <th>{i + 1}</th>
                              <th>{result?.semester}</th>
                              <th>{result?.level}</th>
                              <th>{result?.session}</th>
                              <th>
                                 <button className="btn btn-sm bg-slate-100 border-none hover:bg-slate-200 text-gray-500 rounded-md">
                                    View
                                 </button>
                              </th>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </main>
   );
};

export default page;
