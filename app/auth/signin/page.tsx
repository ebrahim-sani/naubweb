import { CustomButton } from "@/app/components";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

async function signin(data: any) {
   "use server";
   const matric_no = data.get("matric_no");
   const password = data.get("password");
   console.log({ matric_no, password });

   await signIn("credentials", {
      matricNumber: matric_no,
      password: password,
      redirect: true,
      callbackUrl: "/dashboard",
   });
}

const page = () => {
   return (
      <main className="flex min-h-screen w-full items-center justify-between">
         <div className="md:flex-[0.6] min-h-screen bg-[url(/assets/naub-img-2.jpg)] bg-cover bg-no-repeat"></div>
         <div className="md:flex-[0.4] w-full">
            <div className="flex flex-col items-center justify-center min-h-screen w-full">
               <div className="flex flex-col items-center sm:w-[80%] border border-gray-300 rounded-lg">
                  <div className="flex flex-col items-center text-center lg:text-left">
                     <Image
                        src="/assets/naub.png"
                        alt="naub-logo"
                        width={200}
                        height={200}
                        loading="eager"
                     />
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
                              <CustomButton
                                 title="Login"
                                 styles="w-full bg-secondary hover:bg-secHover border border-secondary hover:border-secHover"
                              />
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

export default page;