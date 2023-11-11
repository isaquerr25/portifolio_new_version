"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function NavbarDesktop() {
   const pathname = usePathname();

   const activePath = (path: string) =>
      pathname === path ? "text-[#111111] font-semibold p-2" : "text-slate-600 p-2";

   return (
      <nav className="flex justify-between max-[1080px]:hidden">
         <Link
            className="font-bold text-xl tracking-wider text-black flex items-baseline gap-2 p-0 leading-[30px] mb-0"
            href="/"
         >
            Isaque Ferreira <p className="font-mono">{"</>"}</p>
         </Link>
         <div className="flex gap-8 text-xs font-medium tracking-wider items-center">
            <Link href="/#projects" className={activePath("/")}>
               PROJECTS
            </Link>
            <Link href="/#abilities" className={activePath("/about")}>
               SKILLS
            </Link>
            <Link href="/about" className={activePath("/about")}>
               ABOUT
            </Link>
            <Link href="/contact" className={activePath("/contact")}>
               CONTACT
            </Link>
            <Link href="https://github.com/isaquerr25" target="_blank">
               <FaGithub className="text-xl text-slate-600" />
            </Link>
            <Link href="https://www.linkedin.com/in/isaque-ferreira-20007b165/" target="_blank">
               <FaLinkedin className="text-xl text-slate-600" />
            </Link>
            <Link href={`https://wa.me/5566999791203?text=I+came+by+the+portfolio`} target="_blank">
               <FaWhatsapp className="text-xl text-slate-600" />
            </Link>
         </div>
      </nav>
   );
}
