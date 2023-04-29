import React, { useState } from "react";
import { navLinks } from "../../utils/data";
import Image from "next/image";
import saturnImage from "../../../public/asset/logo-saturn.png";
import NavItem from "../NavItem";
import { useScrollPosition } from "@/hook/useScrollPosition";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [disclosureActive, setDisclosureActive] = useState<Boolean>(false);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-50 ${classNames(
        scrollPosition > 0
          ? "shadow bg-gradient-to-b from-black"
          : "shadow-none",
        "sticky top-0 z-20 transition-shadow"
      )}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  onClick={() => setDisclosureActive(!disclosureActive)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:animate-pulse hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div
                className={`${disclosureActive && "bg-black"
                  }  flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}
              >
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className={
                      "block h-8 w-auto lg:hidden animate-wiggle hover:animate-spin"
                    }
                    alt={"logo"}
                    width={50}
                    height={50}
                    src={saturnImage}
                  />
                  <Image
                    className={
                      "hidden h-8 w-auto lg:block animate-wiggle hover:animate-spin"
                    }
                    alt={"logo"}
                    width={50}
                    height={50}
                    src={saturnImage}
                  />
                  <div>
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
                </div>
                <div className="hidden sm:ml-6 sm:block my-10 justify-self-end">
                  <div className="flex space-x-4">
                    {navLinks.map((link, index) => (
                      <div
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                        className={
                          "hover:animate-pulse hover:text-purple-500 mx-4"
                        }
                        key={link.name}
                      >
                        <NavItem active={activeIndex === index} {...link} />
                      </div>
                    ))}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden shadow bg-gradient-to-b from-black">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((link, index) => (
                <div
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  className={"hover:animate-pulse hover:text-purple-500 mx-4"}
                  key={link.name}
                >
                  <NavItem active={activeIndex === index} {...link} />
                </div>
              ))}{" "}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
