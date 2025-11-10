import ContactForm from '../UI/ContactForm'

import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";

import { FadeInSection, FadeLeftSection, FadeRightSection } from '../UI/FramerAnimation';

import resume from '../assets/resume.pdf'


export default function Contact() {
    return (
        <section id='contact' className='min-h-screen dark:bg-dark-bg dark:text-text-dark flex justify-center py-30'>


            <div className="max-w-7xl w-full flex  flex-col justify-between  items-center   ">
                <FadeInSection >
                    <div className="px-4  sm:w-xl flex flex-col gap-4  items-center">
                        <h2 className='text-5xl text-center '>
                            Get in Touch
                        </h2>
                    </div>
                </FadeInSection>
                <div className="flex flex-wrap w-full max-w-7xl justify-center  gap-16 mt-20  ">

                    <ContactForm />


                    <div className="bg-[#F5F5F5] dark:bg-second-dark-bg w-full max-w-xl p-10 flex flex-col gap-4">
                        <FadeLeftSection>
                            <div className="space-y-3">
                                <h3 className='text-3xl font-bold'>Direct Contact</h3>
                                <p className='text-black/50 dark:text-text-dark/50'>Prefer to reach out directly?</p>
                                <a href="#" className='font-bold'>maksumatmn@gmail.com</a>
                            </div>
                            <div className="flex flex-col gap-3 mt-10">
                                <h3 className='text-3xl font-bold'>Connect</h3>
                                <a href="https://www.linkedin.com/in/maksym-atamanchuk-435a8b352/" className='bg-white w-full flex items-center dark:bg-dark-bg  hover:bg-[#D4C4A8] hover:translate-x-1 transition duration-300 p-2   '><span className='pr-2 ' ><SlSocialLinkedin /></span> Connect in LinkedIn</a>
                                <a href="https://github.com/Babanadiaa" className='bg-white w-full flex items-center hover:bg-[#D4C4A8] dark:bg-dark-bg  hover:translate-x-1 transition duration-300 p-2'> <span className='pr-2 '><FiGithub /></span> Follow on GitHub</a>
                                <a href={resume} target="_blank" rel="noopener noreferrer" className='bg-white w-full flex items-center dark:bg-dark-bg  hover:bg-[#D4C4A8] hover:translate-x-1 transition duration-300 p-2'> <span className='pr-2'><FaRegFileAlt /></span>   Download Resume PDF</a>
                            </div>
                        </FadeLeftSection>

                    </div>
                </div>

            </div>

        </section >

    )
}
