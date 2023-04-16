import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import { useRouter } from "next/router";
import Image from "next/image";
import saturnImage from "../../../public/asset/logo-saturn.png";
import NavItem from "../NavItem";

export default function Navbar() {
  const router = useRouter();
  const [navActive, setNavActive] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
 
  return (
    <header>
    <nav className="flex justify-between px-20 py-10 items-center">
      <div className={"grid grid-cols-10"}>
        <Image
          className={"animate-wiggle hover:animate-spin"}
          alt={"logo"}
          width={50}
          height={50}
          src={saturnImage}
        />
        <div className="text-body">
          <div className="shine one"></div>
          <div className="shine two"></div>
          <div className="shine three"></div>
          <div className="shine four"></div>
          <div className="shine five"></div>
          <h1>
            <span>PORTAFOLIO</span>
          </h1>
        </div>
        <div className="container">
          <h5>84&apos;</h5>
        </div>
      </div>

      <div className={`flex items-center ${navActive ? "active" : ""}`}>
        <ul className="flex items-center space-x-6">
          {navLinks.map((link, index) => (
                <div 
                onClick={() => {
                  setActiveIndex(index);
                  setNavActive(false);
                }}
                className={"hover:animate-pulse hover:text-purple-500"}
                key={link.name}>
                <NavItem active={activeIndex === index} {...link} />                   
                </div>
            
          ))}
        </ul>
      </div>
    </nav>
    </header>
  );
}
