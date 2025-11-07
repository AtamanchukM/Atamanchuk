import React from 'react'
import { RxCross1 } from "react-icons/rx";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: any) {
    return (
        <div className={`fixed right-0 bg-white text-black
         z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out 
         ${isMenuOpen
                ? 'h-screen flex  w-[40vw] opacity-100 pointer-events-auto '
                : 'h-screen hidden w-0 opacity-0 pointer-events-none'} `}>

            <button onClick={() => setIsMenuOpen(false)}
                className='absolute top-5 right-7 text-2xl 
                       focus:outline-none cursor-pointer' aria-label="Close Menu">
                <RxCross1 />
            </button>
            <ul className='flex flex-col items-center justify-between h-full py-20 text-xl text-[#D4C4A8] '>
                <li><a href="#home" onClick={() => setIsMenuOpen(false)} className={`  font-semibold  my-4 transform transition-transform duration-300
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 '}
                `}>Home</a></li >
                <li><a href="#about" onClick={() => setIsMenuOpen(false)} className={`  font-semibold  my-4 transform transition-transform duration-300
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 '}
                `}>About</a></li>
                <li><a href="#services" onClick={() => setIsMenuOpen(false)} className={`  font-semibold  my-4 transform transition-transform duration-300
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 '}
                `}>Services</a></li>
                <li> <a href="#project" onClick={() => setIsMenuOpen(false)} className={`  font-semibold  my-4 transform transition-transform duration-300
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 '}
                `}>Project</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className={`  font-semibold  my-4 transform transition-transform duration-300
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 '}
                `}>Contact</a></li>
                <li></li>
            </ul >







        </div >
    )
}
