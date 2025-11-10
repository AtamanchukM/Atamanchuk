import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FadeLeftSection } from './FramerAnimation';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: any) {
    return (
        <div className={`fixed right-0 bg-white dark:bg-second-dark-bg text-black
         z-40  flex-col items-center justify-center  gap-15 transition-all duration-300
         ${isMenuOpen
                ? 'h-screen  translate-x-0  w-[70vw] opacity-100 pointer-events-auto '
                : 'h-screen   translate-x-50  opacity-0 pointer-events-none'} `}>

            <button onClick={() => setIsMenuOpen(false)}
                className='absolute top-5 right-7 text-2xl 
                       focus:outline-none cursor-pointer' aria-label="Close Menu">
                <RxCross1 />
            </button>
            <ul className='flex flex-col items-center justify-between  py-20 text-xl text-[#D4C4A8] '>
                <li className='w-full flex  text-center'><a href="#home" onClick={() => setIsMenuOpen(false)} className='font-semibold border-b w-full py-4'
                >Home</a></li >
                <li className='w-full flex  text-center'><a href="#about" onClick={() => setIsMenuOpen(false)} className='font-semibold border-b w-full py-4'
                >About</a></li>
                <li className='w-full flex  text-center'><a href="#services" onClick={() => setIsMenuOpen(false)} className=' font-semibold border-b w-full py-4'
                >Services</a></li>
                <li className='w-full flex  text-center'> <a href="#project" onClick={() => setIsMenuOpen(false)} className=' font-semibold border-b w-full py-4'
                >Project</a></li>
                <li className='w-full flex  text-center'><a href="#contact" onClick={() => setIsMenuOpen(false)} className='font-semibold border-b w-full py-4'
                >Contact</a></li>
                <li className='w-full flex  text-center'></li>
            </ul >

        </div >
    )
}
