import React, { useState } from 'react'
import food from '../assets/food.jpg'
import goose from '../assets/goose.jpg'
import { FadeInSection, FadeXSection } from '../UI/FramerAnimation'

export default function Project() {
    const [project] = useState([
        {
            image: food,
            name: 'Food App',
            brief: `Невеликий сайт по доставці харчування, та з розрахунком калорійності індивідуально під людину
            за допомогою формул. (Для повної працездібності потрібно запускати локальний сервер)`
        },
        {
            image: food,
            name: 'Food App',
            brief: `Невеликий сайт по доставці харчування, та з розрахунком калорійності індивідуально під людину
            за допомогою формул. (Для повної працездібності потрібно запускати локальний сервер)`
        },
        {
            image: goose,
            name: 'Pizza App',
            brief: `Сайт для замовлення піци, з можливістю вибору інгредієнтів. Також присутній React Router для переходу між сторінками. 
            `

        },
        {
            image: goose,
            name: 'Pizza App',
            brief: `Сайт для замовлення піци, з можливістю вибору інгредієнтів. Також присутній React Router для переходу між сторінками. 
            `

        },

    ])
    return (
        <FadeInSection>
            <section id='project' className='min-h-screen flex  flex-col items-center  py-20'>
                <div className="max-w-7xl px-4 flex flex-col items-center">
                    <h2 className='text-5xl text-center'>Selected Work</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center mt-20">
                        {project.map((item, index) => (
                            <FadeXSection key={index}>
                                <li
                                    key={index}
                                    className={`group relative overflow-hidden  border border-[#D4C4A8] ${index % 4 === 0 || index % 4 === 3
                                        ? 'h-[400px]' // великі
                                        : 'h-[300px]' // менші
                                        }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-30"
                                    />
                                    <div className="absolute hidden group-hover:block w-full z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-white">
                                        <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                                        <p>{item.brief}</p>
                                    </div>
                                </li>
                            </FadeXSection>
                        ))}
                    </ul>

                    <a href="#" className="border-2 border-black font-bold  w-fit flex justify-center mt-20 px-12  py-4">View all projects</a>

                </div>
            </section>
        </FadeInSection>
    )
}
