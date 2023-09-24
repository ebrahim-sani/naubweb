"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

async function signin(data: any) {
   const matric_no = data.get("matric_no");
   const password = data.get("password");
   console.log({ matric_no, password });

   try {
      const res = await signIn("credentials", {
         matricNumber: matric_no,
         password: password,
         redirect: true,
         callbackUrl: "/dashboard",
      });
      if (res?.ok) {
         console.log("login successfull");
      }
   } catch (err) {
      console.log("Something went wrong!", err);
   }
}

const Page = () => {
   const [clicked, setClicked] = useState<boolean>(false);

   return (
      <main className="flex min-h-screen w-full items-center justify-between">
         <div className="md:flex-[0.6] min-h-screen bg-[url(/assets/naub-img-2.jpg)] bg-cover bg-no-repeat"></div>
         <div className="md:flex-[0.4] w-full">
            <div className="flex flex-col items-center justify-center min-h-screen w-full">
               <div className="flex flex-col items-center sm:w-[60%] border border-gray-300 rounded-lg">
                  <div className="flex flex-col items-center text-center lg:text-left">
                     <div className="w-40 h-40">
                        <Image
                           src="/assets/naub.png"
                           alt="naub-logo"
                           width={200}
                           height={200}
                           loading="eager"
                        />
                     </div>
                     <p className="px-2 py-1 text-secondary italic text-xl font-bold">
                        Sign-In with your ID Number
                     </p>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm">
                     <div className="card-body">
                        <form action={signin}>
                           <div className="form-control">
                              <label className="label">
                                 <span className="label-text">
                                    Matric Number
                                 </span>
                              </label>
                              <input
                                 type="text"
                                 placeholder=""
                                 name="matric_no"
                                 className="input bg-transparent input-bordered"
                              />
                           </div>
                           <div className="form-control">
                              <label className="label">
                                 <span className="label-text">Password</span>
                              </label>
                              <input
                                 type="password"
                                 placeholder=""
                                 name="password"
                                 className="input bg-transparent input-bordered"
                              />
                              <label className="label">
                                 <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                 >
                                    Forgot password?
                                 </a>
                              </label>
                           </div>
                           <div className="form-control mt-6 flex w-full">
                              <button
                                 className="w-full bg-secondary hover:bg-secHover border border-secondary first-letter:font-epilogue font-semibold text-sm leading-[26px] btn rounded-3xl text-gray-200"
                                 type="submit"
                                 onClick={() => setClicked(true)}
                              >
                                 {clicked ? (
                                    <span className="loading loading-spinner"></span>
                                 ) : (
                                    "Login"
                                 )}
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Page;
