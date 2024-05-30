"use client"
import { ReactElement, useContext, useState } from "react";
import { ThemeContext, IThemeContextType } from "../context/ThemeContext";

import { RxSun, RxMoon, RxTextAlignRight } from "react-icons/rx";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import Link from "next/link";

interface Navlink {
  id: number;
  name: string;
  url: string;
}

const Navbar = (): ReactElement => {
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const toggleSideMenu = (): void => {
    setSideMenu(!sideMenu);
  };

  const toggleTheme = (): void => {
    themeContext.toggleThemeMode();
  };


  const closeSideMenu = (): void => {
    setSideMenu(false);
  };
  const navlinks: Navlink[] = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/tonyghouse/algo-atlas-ui",
    },
  ];

  return (
    <nav
      id="navigation"
      className="flex items-center 
      justify-between bg-gray-100 dark:bg-gray-900
       rounded-lg p-2 mx-4 mt-1 font-inter border-border border-[0.08rem]"
    >
      <a href="/" className="cursor-pointer">
        <span className="text-[1.2rem] md:text-[1.5rem] font-semibold ">
          Algo Atlas
        </span>
      </a>

      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        flex-col fixed top-0  left-0 h-full  w-full  items-end justify-center p-8 backdrop-blur-md 
        md:relative md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:bg-transparent md:p-0`}
      >
        <Toggle  variant="outline" key="close-button" onClick={closeSideMenu} className="md:hidden fixed top-5  left-5" >X</Toggle>
        <ul
          className=" mr-4 flex flex-col tracking-wide font-medium 
                       md:flex-row text-[0.5rem]  leading-10 md:text-[0.7rem] md:leading-8 "
        >
          {navlinks.map((navLink: Navlink) => (
            <Button
             size={"sm"}
              key={navLink.id}
              className={`${
                themeContext.themeMode === "dark"
                  ? "hover:border-white"
                  : "hover:border-[#020817]"
              }  px-5 py-3 md:px-4 md:py-0 hover:border-b-[0.01rem] `}
            >
              <Link target="_blank" className="" href={navLink.url}>
                <span className="">{navLink.name}</span>
              </Link>
            </Button>
          ))}

          <Toggle onClick={toggleTheme} variant="outline"  key="theme" className="ml-2 px-2 py-3 md:px-[0.9rem] md:py-0 border-border border-[0.08rem]">
              {themeContext.themeMode === "dark" ? <RxMoon /> : <RxSun />}
          </Toggle>
        </ul>
      </div>
      <RxTextAlignRight className="md:hidden" onClick={toggleSideMenu} />
    </nav>
  );
};

export default Navbar;
