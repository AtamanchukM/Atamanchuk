import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import ThemeToggle from "./ThemeToggle";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: any) {
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div
      className={`fixed inset-0 right-auto bg-white/80 dark:bg-second-dark-bg/80 backdrop-blur-sm text-black
         z-40  flex-col items-center justify-center  gap-15 transition-all duration-300
         ${
           isMenuOpen
             ? "h-screen  translate-x-0  w-full opacity-100 pointer-events-auto "
             : "h-screen   translate-x-50 w-full opacity-0 pointer-events-none"
         } `}
      ref={menuRef}
    >
      <div className="flex items-center justify-between w-full px-7 pt-7">
        <ThemeToggle />

        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-2xl cursor-pointer top-5 right-7 dark:text-text-dark focus:outline-none"
          aria-label="Close Menu"
        >
          <RxCross1 />
        </button>
      </div>
      <ul className="flex flex-col items-center justify-between gap-8 py-20 text-xl text-white/80 ">
        <li className="flex items-center justify-center w-full pr-4 border-b ">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="w-full p-4 font-semibold"
          >
            {t("nav.home")}
          </a>
          <MdOutlineArrowRightAlt className="text-3xl" />
        </li>
        <li className="flex items-center justify-center w-full pr-4 border-b ">
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="w-full p-4 font-semibold"
          >
            {t("nav.about")}
          </a>
          <MdOutlineArrowRightAlt className="text-3xl" />
        </li>
        <li className="flex items-center justify-center w-full pr-4 border-b ">
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="w-full p-4 font-semibold "
          >
            {t("nav.services")}
          </a>
          <MdOutlineArrowRightAlt className="text-3xl" />
        </li>
        <li className="flex items-center justify-center w-full pr-4 border-b ">
          {" "}
          <a
            href="#project"
            onClick={() => setIsMenuOpen(false)}
            className="w-full p-4 font-semibold "
          >
            {t("nav.projects")}
          </a>
          <MdOutlineArrowRightAlt className="text-3xl" />
        </li>
        <li className="flex items-center justify-center w-full pr-4 border-b ">
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full p-4 font-semibold"
          >
            {t("nav.contact")}
          </a>
          <MdOutlineArrowRightAlt className="text-3xl" />
        </li>
      </ul>
    </div>
  );
}
