import { aboutMe } from "@/data/pageContent";
import Image from "next/image";
import React from "react";

const elementClasses = {
  title: "text-left text-lg font-medium text-neutral-500 leading-[21.33px]",
  subtitle: "text-left text-[22px] font-medium text-black leading-[26.07px]",
  textContent: "text-left text-[17px] font-normal text-neutral-600 leading-6",
};

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="left-content w-full lg:w-1/2 lg:max-w-[425px]">
        <Image
          className="w-full object-center rounded object-cover h-full"
          src={aboutMe.img}
          alt="about me"
        />
      </div>
      <div className="right-content w-full lg:w-1/2">
        <div className="flex flex-col gap-3">
          <h2 className={elementClasses.title}>{aboutMe.title}</h2>
          <h3 className={elementClasses.subtitle}>{aboutMe.subtitle}</h3>
        </div>
        <div className="mt-4 flex">
          <ul className="flex flex-col gap-3">
            {aboutMe.textContents.map((content, index) => {
              return (
                <li key={index} className="flex">
                  <p className={elementClasses.textContent}>{content.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
