//import LottieAnimation from "../LottieAnimation";
import ScrollDown from "../ScrollDown";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("../LottieAnimation"));

export default function Hero() {
   return (
      <section className="flex flex-col items-center font-normal text-3xl text-center justify-center leading-[60px] max-[720px]:text-xl max-[720px]:leading-[40px] max-[420px]:text-lg">
         <LottieAnimation />
         <h1 className="mt-12 max-w-xl">Hello, I&rsquo;m Software Developer.</h1>
         <h2 className="max-w-4xl">
            I&rsquo;m a developer who works with the most varied services: Development of systems
            ,websites, smartphone applications and cloud systems.
         </h2>
         <ScrollDown />
      </section>
   );
}
