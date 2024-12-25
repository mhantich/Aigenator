import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import Link from 'next/link'
import { BotIcon, HomeIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Navbar() {
  return (
    <div className='bg-white' >
               <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <BotIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">AI Text Generator</span>
                </Link>
        
                <Link href="/dashboard" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <HomeIcon className="h-5 w-5" />
                  Home
                </Link>
       
              </nav>
            </SheetContent>
          </Sheet>
          <div className="ml-auto  flex items-center gap-2">
  
          </div>
        </header>
    </div>
  )
}

export default Navbar