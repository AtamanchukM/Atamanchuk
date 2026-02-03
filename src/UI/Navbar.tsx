import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import Navigate from "./Navigate";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "../lang/LangSwitch";

export default function Navbar({ isMenuOpen, setIsMenuOpen }: any) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    document.body.style.overflowX = "hidden";
  }, [isMenuOpen]);

  return (
    <header id="header">
      <nav className="p-4 border-b border-[#D4C4A8] dark:border-border-dark fixed w-full z-20 bg-white  dark:bg-dark-bg text-black dark:text-text-dark  transition-colors duration-200">
        <div className="flex items-center">
          <div className="flex-1">
            <a
              href="#home"
              className="transition-colors duration-200 lg:text-2xl sm:text-lg"
            >
              {t("home.name")}
            </a>
          </div>

          <div className="items-center hidden md:flex">
            <Navigate />
          </div>
          <span className="hidden text-gray-300 dark:text-gray-600 md:block">
            |
          </span>

          <LangSwitch />

          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Burger menu */}
          <button
            className="text-2xl md:hidden md:ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}
