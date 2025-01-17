"use client"

import Nav from "./Nav";
import { Menu } from "lucide-react";
import { Sheet,SheetTrigger,SheetContent,SheetHeader,SheetTitle} from "./ui/sheet"


const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger><Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center">
            <SheetHeader><SheetTitle className="mb-8"><span className="text-white text-4xl ">Brand Name<span className="text-accent">.</span></span></SheetTitle></SheetHeader>
            <Nav/>
        </SheetContent>
        
        
    </Sheet>
  )
}

export default MobileNav
