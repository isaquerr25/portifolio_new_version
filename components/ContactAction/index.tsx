//import LottieAnimation from "../LottieAnimation";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactAction() {
   return (
      <section className="pb-[25rem] flex flex-col items-center font-normal text-2xl text-center justify-center leading-[60px] max-[720px]:text-xl max-[720px]:leading-[40px] max-[420px]:text-lg">
         <h2 className="max-w-4xl">
            I look forward to making your experience amazing! If you have any questions, want more
            information, or are ready to chat, click the WhatsApp button or send us an email.
            I&rsquo;m here to help and ensure you have the best solution tailored to your needs!
         </h2>
         <a
            href={`https://wa.me/5566999791203?text=I+came+by+the+portfolio`}
            className="flex justify-center items-center gap-[1rem] px-[2rem] bg-green-500 text-white p-3 rounded-full hover:bg-green-600 mt-[2rem]"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FaWhatsapp size={35} />
            Whatsapp
         </a>
         <h2
            data-aos={"fade-up"}
            data-aos-duration={"1100"}
            className="max-w-xl m-auto  text-2xl mt-16"
         >
            Email:{" "}
            <a
               className="underline "
               data-aos={"fade-up"}
               data-aos-duration={"1100"}
               target="_blank"
               href="mailto:isaqueribeiro964@gmail.com?subject=I came by the portfolio"
            >
               isaqueribeiro964@gmail.com
            </a>
         </h2>
         <h2 data-aos={"fade-up"} data-aos-duration={"1100"} className="max-w-xl m-auto   text-2xl">
            Whatsapp:{" "}
            <a
               className="underline "
               data-aos={"fade-up"}
               data-aos-duration={"1100"}
               target="_blank"
               href="https://wa.me/5566999791203?text=I+came+by+the+portfolio"
            >
               +55 66 999791203
            </a>
         </h2>
         <h2
            data-aos={"fade-up"}
            data-aos-duration={"1100"}
            className="max-w-xl m-auto   text-2xl mt-10 mb-24 "
         >
            <a
               className="max-w-xl m-auto underline "
               data-aos={"fade-up"}
               data-aos-duration={"1100"}
               target="_blank"
               href="https://www.linkedin.com/in/isaque-ferreira-20007b165/"
            >
               Linkedin
            </a>
         </h2>
      </section>
   );
}
