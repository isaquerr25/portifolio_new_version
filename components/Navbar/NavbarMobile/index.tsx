"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import { PiListBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import "react-modern-drawer/dist/index.css";

export default function NavbarMobile() {
   const [drawerOpen, setDrawerOpen] = useState(false);

   const toggleDrawer = () => {
      setDrawerOpen((prevState) => !prevState);
   };

   const pathname = usePathname();

   const activePath = (path: string) =>
      pathname === path
         ? "text-[#111111] font-semibold w-fit p-2"
         : "text-slate-600" + " p-2 w-fit";

   return (
      <nav className="w-full hidden items-center justify-between max-[1080px]:flex">
         <button>
            <PiListBold onClick={toggleDrawer} className="text-3xl text-black" />
         </button>
         <Drawer
            open={drawerOpen}
            onClose={toggleDrawer}
            direction="left"
            className="shadow-inner border-r-2 pt-12"
         >
            <div className="flex gap-8 text-xs font-medium tracking-wider flex-col pl-6">
               <Link
                  className="font-bold text-base tracking-wider text-black flex items-baseline gap-2 w-fit"
                  href="/"
               >
                  Isaque Ferreira <p className="font-mono">{"</>"}</p>
               </Link>
               <Link href="/" className={activePath("/")}>
                  PROJECTS
               </Link>
               <Link href="/about" className={activePath("/sobre")}>
                  ABOUT
               </Link>
               <Link href="/contact" className={activePath("/contact")}>
                  CONTACT
               </Link>
               <Link
                  href="https://github.com/isaquerr25"
                  target="_blank"
                  className="flex gap-2 items-center w-fit"
               >
                  <FaGithub className="text-xl text-slate-600" /> GitHub
               </Link>
               <Link
                  href="https://www.linkedin.com/in/isaque-ferreira-20007b165/"
                  target="_blank"
                  className="flex gap-2 items-center w-fit"
               >
                  <FaLinkedin className="text-xl text-slate-600" />
                  Linkedin
               </Link>
               <Link
                  href={`https://wa.me/5566999791203?text=I+came+by+the+portfolio`}
                  target="_blank"
                  className="flex gap-2 items-center w-fit"
               >
                  <FaWhatsapp className="text-xl text-slate-600" />
                  WhatsApp
               </Link>
            </div>
         </Drawer>
      </nav>
   );
}
