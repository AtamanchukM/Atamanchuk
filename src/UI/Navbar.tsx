import { useEffect, useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import Navigate from "./Navigate";



export default function Navbar({ isMenuOpen, setIsMenuOpen }: any) {

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    }, [isMenuOpen])
    return (
        <nav className="p-6 border-b border-[#D4C4A8]  fixed w-full z-20 bg-white text-black shadow-sm shadow-white">
            <div className=" flex items-center ">
                <a href="#" className="flex-1  lg:text-2xl text-lg ">Maksym Atamanchuk</a>
                <div className="hidden md:flex">
                    <Navigate />
                    <ul className="flex gap-4 text-lg border-l pl-4">
                        <li className=" pl-4 hover:text-[#0A66C2] transition duration-200"><a href="https://www.linkedin.com/in/maksym-atamanchuk-435a8b352/"><SlSocialLinkedin /></a></li>
                        <li className="hover:text-[#D4C4A8] transition duration-200" ><a href="https://github.com/Babanadiaa"><FiGithub /></a></li>
                    </ul>
                </div>

                {/* Burger menu */}
                <button className="md:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}><FiMenu /></button>
            </div>
        </nav>
    )
}
