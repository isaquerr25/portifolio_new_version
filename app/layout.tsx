import "../styles/globals.css";
import type { Metadata } from "next";
import MouseBlobity from "@/components/MouseBlobity";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "aos/dist/aos.css";
import AddColorsTailwind from "@/components/AddColorsTailwnd";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const localFonts = localFont({
   src: [
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Light.otf",
         weight: "100",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Light.otf",
         weight: "200",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Light.otf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Regular.otf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Regular.otf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Black.otf",
         weight: "600",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Black.otf",
         weight: "700",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Black.otf",
         weight: "800",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/gantari/OTF/Gantari-Black.otf",
         weight: "900",
         style: "normal",
      },
   ],
   variable: "--font-criteriacf",
});

export const metadata: Metadata = {
   title: "Isaque Ferreira | Desenvolvedor Full-Stack",
   themeColor: "#000",
   description:
      "Isaque é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.",
   icons: {
      icon: ["/assets/icons/favicon.ico?v=4"],
   },
   applicationName: "Isaque Ferreira | Desenvolvedor Full-Stack",
   appleWebApp: {
      statusBarStyle: "black",
   },
   keywords:
      "Isaque Ferreira, Frontend Engineer, Code, Communication, Web Development, User Experience, UI/UX Design, Portfolio, Front-End Developer, Developer, UI Engineer, Brazil, Brasil",
   openGraph: {
      type: "website",
      url: "https://eduamaro.vercel.app/",
      title: "Isaque Ferreira | Desenvolvedor Full-Stack",
      description:
         "Isaque é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.",
      images: "/assets/images/me.webp",
   },
   twitter: {
      card: "summary_large_image",
      site: "https://eduamaro.vercel.app/",
      creator: "@",
      title: "Isaque Ferreira | Desenvolvedor Full-Stack",
      images: "/assets/images/me.webp",
      description:
         "Isaque é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.",
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="pt-br">
         <body className={localFonts.className + " bg-[#F7F7F7]"}>
            <div className="ml-[8%] mr-[8%]">
               <div className="max-w-[1400px] m-auto">
                  <MouseBlobity />
                  <ScrollToTop />
                  <AddColorsTailwind />
                  <Navbar />
                  {children}
                  <Analytics />
               </div>
            </div>
         </body>
      </html>
   );
}
