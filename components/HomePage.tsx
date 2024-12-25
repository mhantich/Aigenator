
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Component() {
  return (
    <div style={{
      backgroundImage:'url(/beams.jpg)'
      
    }} className="min-h-screen  ">
         
      <main className="flex flex-col items-center min-h-screen  h-full text-center  py-56  space-y-6">
       
        <h1 className="text-6xl font-extrabold">
        Free AI  <span className="text-pink-600">Text </span> Generator
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl">
        Instantly create engaging content with our free AI Text Generator. Craft articles, blog outlines, social media posts, emails, ads, and everything in between.        </p>
        
        <Link
              href="/dashboard"
              prefetch={false}
            >
        <Button variant="default" className="bg-black text-white capitalize">
          get started  
                </Button>
                </Link>
    
      </main>


    </div>
  )
}