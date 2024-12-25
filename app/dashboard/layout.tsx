import { Metadata } from "next";
import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Mhantich",
  description: " Mhantich portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div style={{
      backgroundImage:'url(/beams.jpg)'
      
    }} className="flex  min-h-screen w-full bg-background ">
      <div className="flex  flex-col sm:gap-4  sm:pl-14 w-full py-2 ">
      <Toaster position="top-right" />
           <Navbar/>  
           <SideBar/>   
           {children} 
      </div>
      </div>


  );
}
