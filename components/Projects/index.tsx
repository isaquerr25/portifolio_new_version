import { Project } from "./Project";

export default function Projects({
   title = "Main projects",
   idHtml,
   projects,
   seeMoreProjects = false,
}: {
   idHtml?: string;
   title?: string;
   projects: {
      title: string;
      description: string;
      technologies: string[];
      image: string;
      site?: string;
      github?: string;
      sizeImage?: string;
      linkedin?: string;
      job?: string;
   }[];
   seeMoreProjects: boolean;
}) {
   return (
      <section id={idHtml} className="w-full py-10 overflow-x-hidden">
         <div className="w-full mb-24">
            <h2
               className="text-3xl font-normal text-center max-[420px]:text-3xl aos-init aos-animate"
               data-aos="fade-up"
               data-aos-duration="1100"
            >
               {title}
            </h2>
         </div>
         <div className="w-full flex flex-col [&>*:nth-child(even)]:flex-row-reverse max-[1200px]:[&>*:nth-child(even)]:flex-col  gap-24">
            {projects.map((item) => (
               <Project
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  technologies={item.technologies}
                  github={item.github}
                  site={item.site}
                  sizeImage={item.sizeImage}
                  linkedin={item.linkedin}
                  job={item.job}
               />
            ))}
         </div>
         {seeMoreProjects && (
            <div className="w-full py-36 flex items-center justify-center">
               <a
                  href="/projects"
                  className="flex gap-2 text-black items-center text-2xl font-normal text-center max-[420px]:text-base border-2 rounded-full border-gray-700 p-3"
               >
                  See more projects
               </a>
            </div>
         )}
      </section>
   );
}
