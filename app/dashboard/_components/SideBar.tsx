import React from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { BotIcon, HomeIcon } from 'lucide-react'
import Link from 'next/link'
function SideBar() {
  return (
    <div>
         <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <BotIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">AI Text Generator</span>
            </Link>
     
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboared"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
      
     
          </TooltipProvider>
        </nav>
      </aside>
    </div>
  )
}

export default SideBar