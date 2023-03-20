import { featuredPortfolio } from "@/data/pageContent";
import React from "react";
import ProjectCard from "../molecule/ProjectCard";

const elementClasses = {
  title:
    "text-left py-[12px] px-0 border-b-2 border-[#000000] text-[32px] font-medium text-[#000000]",
};

const FeaturedPortfolio = () => {
  return (
    <div>
      <div className="">
        <h2 className={elementClasses.title}>{featuredPortfolio.title}</h2>
      </div>
      <div className="project-list mt-[40px] flex flex-col gap-[32px] odd:flex-row-reverse">
        {featuredPortfolio.projects.map((project) => {
            return <ProjectCard key={project.title} {...project} />
        })}
      </div>
    </div>
  );
};

export default FeaturedPortfolio;
