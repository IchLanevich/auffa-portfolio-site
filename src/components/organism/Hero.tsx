"use client";

import { hero } from "@/data/pageContent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const elementClasses = {
  title: "text-[55px] font-medium leading-[66px]",
  subtitle: `text-[18px] leading-[21px] text-[#767676]`,
  primaryCta:
    "flex items-center justify-center min-w-[120px] md:w-[150px] max-w-[150px] py-[10px] px-[24px] gap-[8px] text-[#FFFFFF] bg-[#151515] rounded-[36px]",
  secondaryCta:
    "flex items-center justify-center min-w-[120px] md:w-[150px] max-w-[150px] py-[10px] px-[24px] gap-[8px] text-[#151515] border-[1.5px] border-[#151515] bg-transparent transition-all hover:bg-[#FFDFAD] rounded-[36px]",
};

const Hero = () => {
  const picture = useRef<HTMLImageElement>(null);
  const pictureBg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = picture.current;
    const elementBg = pictureBg.current;

    const mouseOverFunction = () => {
      elementBg?.classList.remove("opacity-0");
      elementBg?.classList.add("opacity-100");
    };
    const mouseLeaveFunction = () => {
      elementBg?.classList.remove("opacity-100");
      elementBg?.classList.add("opacity-0");
    };

    element?.addEventListener("mouseover", mouseOverFunction);
    element?.addEventListener("mouseleave", mouseLeaveFunction);

    return () => {
      element?.removeEventListener("mouseover", mouseOverFunction);
      element?.removeEventListener("mouseleave", mouseLeaveFunction);
    };
  }, []);

  return (
    <div
      className={`flex flex-col gap-24 md:flex-row justify-center items-center`}
    >
      <div className="left-content w-full md:w-1/2">
        <div className="max-w-[476px] flex flex-col gap-[16px]">
          <h1 className={elementClasses.title}>{hero.title}</h1>
          <p className={elementClasses.subtitle}>{hero.subtitle}</p>
        </div>
        <div className="socmed mt-[24px]">
          <ul className="flex gap-[18px]">
            {hero.socmed.map((item) => {
              return (
                <li key={item.name}>
                  <a target="_blank" className="text-[26px]" href={item.url}>
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-fit mt-[56px] flex gap-[16px]">
          <a className={elementClasses.primaryCta} href={hero.primaryCta.url}>
            {hero.primaryCta.text}
          </a>
          <a
            className={elementClasses.secondaryCta}
            href={hero.secondaryCta.url}
          >
            {hero.secondaryCta.text}
          </a>
        </div>
      </div>
      <div className="right-content w-full md:w-1/2">
        <div className="img-wrapper flex items-center justify-center">
          <div
            ref={pictureBg}
            className="circuit-board overflow-hidden transition-all duration-500 rounded-[80px] opacity-0 w-full h-full max-w-[503px] max-h-[578px] absolute -z-10"
          ></div>
          <Image
            ref={picture}
            priority={true}
            className="w-[303px] h-[378px] object-cover object-bottom rounded-[40px]"
            width={303}
            height={378}
            src={hero.img.src}
            alt="auffa picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
