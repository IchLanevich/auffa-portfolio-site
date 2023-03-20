import { navbar } from "@/data/pageContent";
import Link from "next/link";
import React from "react";
import NavMenu from "../molecule/NavMenu";

const classNames = {
  logo: "text-[18px] text-[#000] font-medium select-none",
  links: "flex gap-[32px] text-[#000] font-normal",
};

const Navbar = () => {
  return (
    <nav className="flex items-center px-[16px] md:px-0 container mx-auto">
      <Link href='/' className={classNames.logo}>{navbar.logo}</Link>
      <div className="hidden ml-auto md:flex">
        <ul className={classNames.links}>
          {navbar.links.map((item) => {
            return (
              <li className="flex items-center" key={item.name}>
                <a className="hover:underline hover:text-[#5C5C5C] transition-all duration-100" href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ml-auto md:hidden">
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
