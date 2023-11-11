import Image from "next/image";

export default function Home() {
   return (
      <section
         className="flex gap-7 max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center mb-24"
         style={{ contain: "paint" }}
      >
         <div className="flex-1">
            <Image
               src={"/assets/images/me.webp"}
               width={500}
               height={300}
               alt="esse sou eu"
               className="sticky top-9"
               data-aos={"fade-right"}
               data-aos-duration={"1100"}
            />
         </div>
         <div className="flex-1 mb-7">
            <h1
               className="font-extrabold text-7xl my-10 max-[920px]:text-left max-[520px]:text-3xl"
               data-aos={"fade-left"}
               data-aos-duration={"1100"}
            >
               Isaque Ribeiro Ferreira
            </h1>
            <p
               data-aos={"fade-left"}
               data-aos-duration={"1100"}
               className="max-[920px]:text-left max-[420px]:text-base"
            >
               I&prime;m Isaque Ribeiro Ferreira, I have over 6 years as a software developer and
               devops , living in Brazil. I have experience with international project in different
               country and have knowledge with all stages of project development, from creating
               servers to deploying them in the cloud.
               <br />
               <br />
               In recent years, I have had the privilege of working with several international
               startups, helping them to fully reach their potential and win new customers. My
               technical and creative skills allow me to create innovative and efficient solutions,
               driving the growth and competitiveness of solutions.
               <br />
               <br />I believe in the importance of working as a team and I have solid collaboration
               skills, ensuring seamless integration between front-end, back-end and pipeline
               management. Working together with other developers is essential to create robust and
               efficient products.
            </p>
         </div>
      </section>
   );
}
