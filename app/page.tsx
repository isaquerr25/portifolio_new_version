"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { businessJobs, projects, backEnds } from "@/utils/projects";
import ContactAction from "../components/ContactAction";
export default function Home() {
   return (
      <>
         <Hero />

         <Skills />
         <Projects
            idHtml="businessJobs"
            projects={businessJobs}
            title={"Business I worked"}
            seeMoreProjects={false}
         />
         <Projects idHtml="projects" projects={projects} seeMoreProjects={false} />
         <Projects
            idHtml="abilities"
            projects={backEnds}
            title={"Languages, Libs, BD, Cloud and Other"}
            seeMoreProjects={false}
         />
         <ContactAction />
      </>
   );
}
