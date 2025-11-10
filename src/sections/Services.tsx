import { FadeInSection } from "../UI/FramerAnimation";

export default function Services() {
    return (
        <section id="services" className=" flex dark:bg-dark-bg dark:text-text-dark mb-20   justify-center pt-30 ">
            <FadeInSection>

                <div className=" px-4 max-w-7xl flex flex-col  ">
                    <h2 className="text-5xl text-center">How I Build Digital Solutions</h2>
                    <ul className="flex flex-wrap h-full  gap-8 ul_steps mt-10  ">
                        <li className="flex flex-1   min-w-[300px] flex-col p-6 pb-20  bg-[#F5F5F5] dark:bg-card space-y-4 relative">
                            <p className="text-black/50 dark:text-text-dark/50 text-xs">01</p>
                            <h3 className="text-2xl">Interactive Frontend Development</h3>
                            <p className="text-sm text-black/50 dark:text-text-dark/50 flex-1  leading-6">Focus on React, TypeScript, and Tailwind, I specialize in crafting interactive frontend applications with smooth animations and micro-interactions that bring your digital experiences to life with engaging, responsive interfaces.</p>
                        </li>
                        <li className="flex flex-1 min-w-[300px] flex-col p-6 bg-[#F5F5F5] dark:bg-card space-y-4 relative">
                            <p className="text-black/50 dark:text-text-dark/50 text-xs">02</p>
                            <h3 className="text-2xl">Performance Optimization
                            </h3>
                            <p className="text-sm text-black/50 dark:text-text-dark/50 flex-1 leading-6 ">Code splitting, lazy loading, and performance auditing for faster load times. Delivering lightning-fast experiences that keep users engaged and improve conversion rates.</p>

                        </li>
                        <li className="flex flex-1 min-w-[300px] flex-col p-6 bg-[#F5F5F5] dark:bg-card dark::before:bg-card space-y-4 relative">
                            <p className="text-black/50 dark:text-text-dark/50 text-xs">03</p>
                            <h3 className="text-2xl">Scalable Architecture
                            </h3>
                            <p className="text-sm text-black/50 dark:text-text-dark/50 flex-1 leading-6">Component systems and maintainable codebases for growing applications. Building solid foundations that evolve with your business needs and support long-term growth.</p>

                        </li>
                    </ul>
                </div>
            </FadeInSection>

        </section >
    )
}
