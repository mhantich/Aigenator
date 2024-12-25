


import Display from "./_components/Display"
import { contentTemplates } from "@/lib/Inputs"
import { Toaster } from "react-hot-toast";
export default function Component() {

  return (
    
      <div  className="md:px-6  w-full py-2 " >
         <Toaster />
        <div className="bg-gradient-to-r mb-4 flex-col gap-4 from-sky-100 to-pink-100 rounded-s-sm w-full py-20 text-white flex justify-center items-center md:px-11" >
                <h1 className="text-4xl text-black font-bold capitalize">browser all the template</h1>
                <div className="bg-white px-4 w-[50%] py-2 rounded-sm">
                    <input type="text" placeholder="seacch" className="text-black bg-transparent outline-none border-none " /> 
                </div>
        </div>
        <main className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 w-full ">

     <Display contentTemplates={contentTemplates} />
     
        </main>
      </div>
  
  )
}

