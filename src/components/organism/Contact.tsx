import { contact } from "@/data/pageContent";
import React from "react";

const elementClasses = {
  title:
    "text-left py-[12px] px-0 border-b-2 border-[#000000] text-[32px] font-medium text-[#000000]",
  subtitle: "text-[22px] font-medium",
};

const Contact = () => {
  return (
    <div>
      <div className="">
        <h2 className={elementClasses.title}>{contact.title}</h2>
      </div>
      <div className="mt-[40px] flex flex-col w-full md:flex-row items-start justify-between md:items-center">
        <div className="flex flex-col md:flex-col w-full justify-between md:gap-0">
          <h3 className={elementClasses.subtitle}>{contact.subtitle}</h3>
          <p className="text-[22px] mt-3 md:mt-0 underline tracking-wide">
            {contact.contactType}
            <a href="mailto:auffalana@gmail.com">{contact.mailAddress}</a>
          </p>
        </div>
        <ul className="flex gap-[32px] mt-4 w-full justify-start">
          {contact.socmed.map((item) => {
            return (
              <li key={item.name}>
                <a target="_blank" className="text-[32px]" href={item.url}>{item.icon}</a>
              </li>
            )
          })}
          </ul>
      </div>
    </div>
  );
};

export default Contact;
