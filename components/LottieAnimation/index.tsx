"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import codeAnimation from "@/public/assets/lottie/Animation.json";

export default function LottieAnimation() {
   return (
      <Player
         src={codeAnimation}
         autoplay
         loop
         className="max-w-[550px] max-[420px]:max-w-[300px] !my-[-4rem] "
      />
   );
}
