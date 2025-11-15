import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { FadeLeftSection } from './FramerAnimation';
import { useTranslation } from 'react-i18next';

import ThemeToggle from './ThemeToggle';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: any) {
    const { t } = useTranslation();
    
    return (
        <div className={`fixed right-0 bg-white/80 dark:bg-second-dark-bg/80 backdrop-blur-sm text-black
         z-40  flex-col items-center justify-center  gap-15 transition-all duration-300
         ${isMenuOpen
                ? 'h-screen  translate-x-0  w-[50vw] opacity-100 pointer-events-auto '
                : 'h-screen   translate-x-50  opacity-0 pointer-events-none'} `}>

          <div className="flex justify-between items-center w-full px-7 pt-7">
              <button onClick={() => setIsMenuOpen(false)}
                className='absolute top-5 right-7 text-2xl dark:text-text-dark
                       focus:outline-none cursor-pointer' aria-label="Close Menu">
                <RxCross1 />
            </button>
            <ThemeToggle />
          </div>
            <ul className='flex flex-col items-center justify-between  py-20 text-xl text-[#D4C4A8] '>
                <li className='w-full flex  text-center'><a href="#home" onClick={() => setIsMenuOpen(false)} className='font-semibold border-b w-full py-4'
                >{t('nav.home')}</a></li >
                <li className='w-full flex  text-center'><a href="#about" onClick={() => setIsMenuOpen(false)} className='font-semibold border-b w-full py-4'
                >{t('nav.about')}</a></li>
                <li className='w-full flex  text-center'><a href="#services" onClick={() => setIsMenuOpen(false)} className=' font-semibold border-b w-full py-4'
                >{t('nav.services')}</a></li>
                <li className='w-full flex  text-center'> <a href="#project" onClick={() => setIsMenuOpen(false)} className=' font-semibold border-b w-full py-4'
                >{t('nav.projects')}</a></li>
                <li className='w-full flex  text-center'><a href="#contact" onClick={() => setIsMenuOpen(false)} className='font-semibold border-b w-full py-4'
                >{t('nav.contact')}</a></li>
            </ul >

        </div >
    )
}
