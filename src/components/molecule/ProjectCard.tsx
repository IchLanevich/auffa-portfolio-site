import { project } from "@/interfaces/interfaces";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = (props: project) => {
  const { title, img, description, projectType, projectUrl, tags } = props;

  return (
    <div className="p-[20px] shadow-sm flex flex-col md:flex-row md:even:flex-row-reverse border-dashed border-2 rounded-md max-w-5xl gap-[32px] items-center bg-[#F7ECD9] hover:bg-[#F0E4D3]">
      <div className="img w-full md:w-1/2">
        <Image src={img} alt="" />
      </div>
      <div className="description w-full md:w-1/2 my-auto grow">
        <div className="flex flex-col gap-[16px]">
          <h3 className="flex gap-3 items-center text-[32px] font-medium leading-[38px]">
            {title}
          </h3>
          <p className="text-[20px]">{description}</p>
        </div>
        <div className="project-tags flex flex-wrap gap-3 mt-[24px]">
          {tags &&
            tags.map((tag) => {
              return (
                <span
                  key={tag}
                  className="text-[14px] font-medium py-[6px] px-[10px] rounded bg-[#FFFFFF]"
                >
                  {tag}
                </span>
              );
            })}
          <span className="bg-[#5C5C5C] flex justify-center text-[14px] items-center py-[6px] px-[10px] text-[#FFFFFF] rounded">
            {projectType}
          </span>
        </div>
        <div className="mt-6 w-fit">
          <a
            target="_blank"
            className="underline font-medium text-[18px] transition-all mt-auto flex items-center gap-2 hover:text-[#5C5C5C]"
            href={projectUrl}
          >
            Live Demo <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
