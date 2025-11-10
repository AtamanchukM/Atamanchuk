import React, { useState } from 'react'
import food from '../assets/food.jpg'
import goose from '../assets/goose.jpg'
import { FadeInSection, FadeLeftSection, FadeRightSection } from '../UI/FramerAnimation'

export default function Project() {
    const [project] = useState([
        {
            image: food,
            name: 'Food App',
            brief: `Невеликий сайт по доставці харчування, та з розрахунком калорійності індивідуально під людину
            за допомогою формул. (Для повної працездібності потрібно запускати локальний сервер)`,
            repoLink: 'https://github.com/Babanadiaa/penutrition'

        },
        {
            image: food,
            name: 'Food App',
            brief: `Невеликий сайт по доставці харчування, та з розрахунком калорійності індивідуально під людину
            за допомогою формул. (Для повної працездібності потрібно запускати локальний сервер)`,
            repoLink: 'https://github.com/Babanadiaa/penutrition'

        },
        {
            image: goose,
            name: 'Pizza App',
            brief: `Сайт для замовлення піци, з можливістю вибору інгредієнтів. Також присутній React Router для переходу між сторінками.`,
            repoLink: 'https://github.com/Babanadiaa/GoosePizza'



        },
        {
            image: goose,
            name: 'Pizza App',
            brief: `Сайт для замовлення піци, з можливістю вибору інгредієнтів. Також присутній React Router для переходу між сторінками.`,
            repoLink: 'https://github.com/Babanadiaa/GoosePizza'



        },
    ])

    const [openIndex, setOpenIndex] = useState<number | null>(null)
    return (
        <section id='project' className='min-h-screen dark:bg-second-dark-bg dark:text-text-dark  flex  flex-col items-center  pt-30'>
            <FadeInSection>

                <div className="max-w-7xl px-4 flex flex-col items-center">
                    <h2 className='text-5xl text-center'>Selected Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center mt-20">
                        {project.map((item, index) => (
                            <FadeRightSection key={index}>
                                <div
                                    className={`group relative overflow-hidden border border-[#D4C4A8] ${index % 4 === 0 || index % 4 === 3 ? 'h-[400px]' : 'h-[300px]'}`}
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
                                            className='p-3 border border-[#D4C4A8] hover:bg-[#D4C4A8]'
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View On Github
                                        </a>
                                    </div>
                                </div>
                            </FadeRightSection>
                        ))}
                    </div>

                    {/* <button className="border-2 border-black font-bold  w-fit flex justify-center mt-20 px-12  py-4">View all projects</button> */}

                </div>
            </FadeInSection>

        </section >
    )
}
