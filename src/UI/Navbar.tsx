import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import Navigate from "./Navigate";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "../lang/LangSwitch";

export default function Navbar({ isMenuOpen, setIsMenuOpen }: any) {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    }, [isMenuOpen])

    return (
        <header id="header">
            <nav className="p-6 border-b border-[#D4C4A8] dark:border-border-dark fixed w-full z-20 bg-white  dark:bg-dark-bg text-black dark:text-text-dark  transition-colors duration-200">
                <div className="flex items-center">
                    <div className="flex-1">
                        <a href="#home" className="lg:text-2xl sm:text-lg  transition-colors duration-200">{t('home.name')}</a>
                    </div>

                    <div className="hidden md:flex items-center">
                        <Navigate />

                        <ul className="flex lg:gap-4 gap-3 text-lg  px-4 border-l border-gray-300 dark:border-gray-600 items-center">
                            <li className="  transition duration-200 text-sm lg:text-lg">
                                <a href="https://www.linkedin.com/in/maksym-atamanchuk-435a8b352/" aria-label="LinkedIn Profile"><SlSocialLinkedin /></a>
                            </li>
                            <li className="hover:text-[#D4C4A8] dark:hover:text-[#D4C4A8] transition duration-200 text-sm lg:text-lg">
                                <a href="https://github.com/Babanadiaa" aria-label="GitHub Profile"><FiGithub /></a>
                            </li>
                            <li>
                                 <ThemeToggle />
                            </li>

                        </ul>
                    </div>
                          <span className="text-gray-300 dark:text-gray-600 hidden md:block">|</span>


                    
                    <LangSwitch />
                    

                    {/* Burger menu */}
                    <button className="md:hidden text-2xl md:ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu"><FiMenu /></button>
                </div>
            </nav>
        </header>
    )
}
