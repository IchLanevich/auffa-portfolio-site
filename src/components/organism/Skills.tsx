import { mySkills } from "@/data/pageContent";
import React from "react";

const elementClasses = {
  title:
    "text-left py-[12px] px-0 border-b-2 border-[#000000] text-[32px] font-medium text-[#000000]",
  skillsByCategory: "flex flex-col lg:flex-row lg:justify-between",
};

const Skills = () => {
  return (
    <div>
      <div className="">
        <h2 className={elementClasses.title}>{mySkills.title}</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-x-4 md:gap-x-5 md:justify-between gap-y-8 mt-[40px]">
        {mySkills.skillsByCategory.map((skill, index) => {
          return (
            <div key={skill.category}>
              <h3 className="text-[22px] leading-[26px] font-medium">
                {skill.category}
              </h3>
              <ul className="flex flex-col mt-3">
                {skill.skills &&
                  skill.skills.map((skill, index) => {
                    return (
                      <li
                        className="list-disc list-inside indent-2 text-[20px] text-[#5C5C5C] leading-[24px]"
                        key={skill}
                      >
                        {skill}
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
