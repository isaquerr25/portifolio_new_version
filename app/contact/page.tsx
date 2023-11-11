import FormContact from "@/components/FormContact";

export default function Home() {
   return (
      <section className="max-w-xl m-auto text-center">
         <h1 className="my-5 w-full  text-lg" data-aos={"fade-up"} data-aos-duration={"1100"}>
            If you have any ideas for a project or need a specialist, you can contact me
         </h1>
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
