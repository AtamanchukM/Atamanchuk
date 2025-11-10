import React from 'react'
import profile_image from '../assets/profile_image.jpg'
import { SlArrowDown } from "react-icons/sl";
import { FadeDownSection } from '../UI/FramerAnimation';

export default function Home() {
    return (
        <section id='home' className='min-h-screen flex dark:bg-dark-bg  dark:text-text-dark pt-20 flex-col justify-center items-center relative
            lg:flex-row gap-9 lg:gap-18  '>
            <FadeDownSection >

                <div className="flex flex-col justify-center items-center  lg:flex-row gap-9 lg:gap-18   ">

                    <div className="text-center  flex  items-center z-10 px-4  overflow-hidden ">
                        <img loading='lazy' className=' mt-20 object-cover w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]  rounded-full   
                          lg:m-0  ' src={profile_image} alt="Profile Image" />
                    </div>
                    <div className=" mb-30 z-10 px-4 gap-4 flex flex-col   ">
                        <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold mb-6 pb-2 border-b-2 border-[#D4C4A8] dark:border-border-dark'>Maksym Atamanchuk</h1>
                        <p className='text-2xl text-[#675c4a] dark:text-text-dark/90 '>Frontend Developer</p>
                        <p className='text-black/70 dark:text-text-dark/70 text-lg mb-8 max-w-lg '>I am frontend developer who loves creation interaction, scalable web applications.
                            My purpose is to build solutions that offer dynamic UI, high performance and delightful UX. </p>
                        <div className="flex flex-col sm:flex-row justify-center  items-center sm:space-x-6 space-y-2 sm:space-y-0 ">
                            <a href="#project" className='bg-black dark:bg-card border text-white w-full flex justify-center px-20 sm:px-8 py-4  font-bold sm:text-lg hover:bg-[#D4C4A8] transition  duration-300'>View my work</a>
                            <a href='#contact' className='border dark:bg-card border-[#D4C4A8] w-full flex justify-center px-20 sm:px-8 py-4  font-bold sm:text-lg hover:bg-[#D4C4A8] hover:text-white transition duration-300'>Get in touch      </a>
                        </div>
                    </div>
                    <a href="#about" className="absolute bottom-5 inset-x-0 space-y-3 flex flex-col items-center justify-center">
                        <span className='tracking-[6px] text-black/70 dark:text-text-dark'>scroll</span>
                        <SlArrowDown className='text-3xl text-black/50 dark:text-text-dark animate-bounce ' />
                    </a>

                </div>

            </FadeDownSection>

        </section>
    )
}
