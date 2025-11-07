import React from 'react'
import Navigate from '../UI/Navigate'

import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import resume from '../assets/resume.pdf'




export default function Footer() {

    const arrowTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }
    return (
        <footer id='footer' className='flex flex-col items-center  py-20 bg-[#F5F5F5]'>
            <div className=" max-w-6xl w-full justify-between items-center gap-6 text-center md:text-left flex flex-col md:flex-row  px-4 border-b pb-20 ">
                <div className="max-w-sm w-full flex flex-col gap-6  ">
                    <h2 className='font-bold text-2xl'>Maksym Atamanchuk</h2>
                    <p className='text-sm text-black/50'>Frontend Developer crafting interactive, scalable web applications with dynamic UI and delightful UX.</p>
                </div>
                <div className=" flex flex-col   gap-6">
                    <h3 className='uppercase font-bold'>Navigate</h3>
                    <ul className="flex gap-10  navigation text-black/50 text-sm">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li ><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className=" flex flex-col gap-6 ">
                    <h3 className='font-bold uppercase'>Connect</h3>
                    <ul className='flex gap-4'>
                        <li className='border border-[#D4C4A8] p-2 hover:bg-[#D4C4A8] hover:translate-y-[-4px] transition duration-300'><a href="https://www.linkedin.com/in/maksym-atamanchuk-435a8b352/"><SlSocialLinkedin /></a></li>
                        <li className='border border-[#D4C4A8] p-2 hover:bg-[#D4C4A8] hover:translate-y-[-4px] transition duration-300'><a href="https://github.com/Babanadiaa"><FiGithub /></a></li>
                        <li className='border border-[#D4C4A8] p-2 hover:bg-[#D4C4A8] hover:translate-y-[-4px] transition duration-300'><a href={resume} target="_blank"
                            rel="noopener noreferrer"><FaRegFileAlt /></a></li>
                    </ul>
                </div>

            </div>
            <div className="flex justify-between max-w-6xl w-full px-4  mt-12">
                <p className='text-sm text-black/50 max-w-[50%]'>© 2025 Maksym Atamanchuk. All rights reserved.</p>
                <button className='border py-1 px-5 text-sm flex items-center hover:bg-[#D4C4A8] hover:translate-y-[-4px] transition duration-300'
                    onClick={arrowTop}>Back to Top <IoIosArrowRoundUp className='text-xl' /> </button>
            </div>
        </footer >
    )
}
