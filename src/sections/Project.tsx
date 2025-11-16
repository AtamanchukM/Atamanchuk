import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import motionPortfolio from '../assets/motionPorfolio.png'
import penutrition from '../assets/penutrition.png'
import myPortfolio from '../assets/myPortfolio.png'
import todo from '../assets/todo.png'
import { FadeInSection, FadeLeftSection, FadeRightSection } from '../UI/FramerAnimation'

export default function Project() {
    const { t } = useTranslation();
    
    const [project] = useState([
        {
            image: motionPortfolio,
            name: t('projects.project1.name'),
            brief: t('projects.project1.brief'),
            repoLink: 'https://github.com/AtamanchukM/Friend-proj',
            visitSite: 'https://atamanchukm.github.io/Friend-proj/'
        },
        {
            image: penutrition,
            name: t('projects.project2.name'),
            brief: t('projects.project2.brief'),
            repoLink: 'https://github.com/AtamanchukM/penutrition',
            visitSite: 'https://atamanchukm.github.io/penutrition/'
        },
        {
            image: myPortfolio,
            name: t('projects.project3.name'),
            brief: t('projects.project3.brief'),
            repoLink: 'https://github.com/AtamanchukM/Atamanchuk',
            visitSite: 'https://atamanchukm.github.io/Atamanchuk/'
        },
        {
            image: todo,
            name: t('projects.project4.name'),
            brief: t('projects.project4.brief'),
            repoLink: 'https://github.com/AtamanchukM/Todo',
            visitSite: 'https://babazhaba.netlify.app/'
        },

    ])

    const [openIndex, setOpenIndex] = useState<number | null>(null)
    
    return (
        <section id='project' className='min-h-screen dark:bg-second-dark-bg dark:text-text-dark  flex  flex-col items-center  pt-30 pb-20'>
            <FadeInSection>

                <div className="max-w-7xl px-4 flex flex-col items-center">
                    <h2 className='text-5xl text-center'>{t('projects.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center mt-20">
                        {project.map((item, index) => (
                            <FadeRightSection key={index}>
                                <div
                                    className={`group relative overflow-hidden   ${index % 4 === 0 || index % 4 === 3 ? 'h-[400px]' : 'h-[300px]'}`}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <img
                                        loading='lazy'
                                        src={item.image}
                                        alt={item.name}
                                        className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-30 
                                            ${openIndex === index ? 'brightness-30 scale-105' : ''}`}
                                    />

                                    {/* Один спільний блок для hover і мобільного відкриття */}
                                    <div
                                        className={`absolute w-full z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-white transition-all duration-300
                                        ${openIndex === index ? 'block ' : 'hidden group-hover:block'}`}
                                    >
                                        <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                                        <p className='mb-6'>{item.brief}</p>
                                        <a
                                            href={item.repoLink}
                                            className='p-3 mr-4 border border-[#D4C4A8] hover:bg-[#D4C4A8] transition duration-200 '
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t('projects.viewOnGithub')}
                                        </a>
                                        <a 
                                            href={item.visitSite}
                                            className='p-3 border border-[#D4C4A8] hover:bg-[#D4C4A8] transition duration-200 '
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >{t('projects.visitSite')}</a>
                                    </div>
                                </div>
                            </FadeRightSection>
                        ))}
                    </div>

                </div>
            </FadeInSection>

        </section >
    )
}
