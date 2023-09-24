import { MobileSideBar, NewCourseRegModal, Sidebar } from "../components";
import "../globals.css";

export const metadata = {
   title: "Dashboard | Student",
   description: "Nigerian Army University Biu - Portal",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <main className="flex items-center justify-center w-screen">
            <div className="flex max-w-screen-2xl w-full">
               <div className="flex items-start justify-center w-full h-screen overflow-hidden">
                  <Sidebar />
                  <div className="flex p-1 sm:p-2 w-full">{children}</div>
                  <NewCourseRegModal />
                  <MobileSideBar />
               </div>
            </div>
         </main>
      </html>
   );
}
