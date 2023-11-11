import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import Tag from "./Tag";
import Image from "next/image";

type projectPropsType = {
   title: string;
   image: string;
   description: string;
   technologies: string[];
   github?: string;
   site?: string;
   sizeImage?: string;
   linkedin?: string;
   job?: string;
};

export function Project({
   title,
   image,
   description,
   technologies,
   github,
   site,
   sizeImage,
   job,
   linkedin,
}: projectPropsType) {
   return (
      <div className="w-full space-x-[auto]  flex mt-16 gap-20 max-[1200px]:flex-col">
         <div className="flex-1 flex flex-col gap-10">
            <div>
               <h2
                  className="text-black text-3xl tracking-widest max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center aos-init aos-animate max-[420px]:text-2xl"
                  data-aos={"fade-right"}
                  data-aos-duration={"1100"}
               >
                  {title}
               </h2>
               {job && (
                  <p
                     className="text-gray-500 text-xl font-light leading-10 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center aos-init aos-animate max-[420px]:text-base max-[420px]:leading-9"
                     data-aos={"fade-right"}
                     data-aos-duration={"1700"}
                  >
                     {job}
                  </p>
               )}
            </div>
            <p
               className="text-gray-500 text-xl font-light leading-10 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center aos-init aos-animate max-[420px]:text-base max-[420px]:leading-9"
               data-aos={"fade-right"}
               data-aos-duration={"1700"}
            >
               {description}
            </p>
            <div
               className="w-full flex flex-wrap gap-4 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:justify-center aos-init aos-animate"
               data-aos={"fade-right"}
               data-aos-duration={"1700"}
            >
               {technologies.map((technologie) => (
                  <Tag key={technologie} tag={technologie} />
               ))}
            </div>
            <div
               className="flex gap-7 max-[1200px]:m-auto max-[1200px]:max-w-3xl aos-init aos-animate max-[420px]:flex-col"
               data-aos={"fade-right"}
               data-aos-duration={"1700"}
            >
               {github && (
                  <a href={github} target="_blank">
                     <button className="flex items-center gap-3 text-black">
                        See github
                        <FaGithub />
                     </button>
                  </a>
               )}
               {site && (
                  <a href={site} target="_blank">
                     <button className="flex items-center gap-2 text-black">
                        Visit Website
                        <FiExternalLink />
                     </button>
                  </a>
               )}
               {linkedin && (
                  <a href={linkedin} target="_blank">
                     <button className="flex items-center gap-2 text-black">
                        Visit linkedin
                        <BsLinkedin />
                     </button>
                  </a>
               )}
            </div>
         </div>
         <div className={sizeImage != "mediun" ? "flex-1" : "  max-[1200px]:flex-1 "}>
            <Image
               data-aos={"fade-left"}
               src={`/assets/images/${image}`}
               alt=""
               className={`max-w-[850px] ${
                  sizeImage != "mediun" && "w-full"
               } max-[1200px]:m-auto aos-init aos-animate`}
               width={sizeImage == "mediun" ? "250" : "800"}
               height={sizeImage == "mediun" ? "250" : "800"}
            />
         </div>
      </div>
   );
}
