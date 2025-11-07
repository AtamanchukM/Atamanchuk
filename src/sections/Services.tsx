import { MdArrowRightAlt } from "react-icons/md";

export default function Services() {
    return (
        <section id="services" className="min-h-screen flex  justify-center py-20 ">
            <div className=" px-4 max-w-7xl flex flex-col ">
                <h2 className="text-5xl text-center">How I Build Digital Solutions</h2>
                <ul className="flex flex-wrap h-full  gap-8 ul_steps mt-10 ">
                    <li className="flex flex-1  min-w-[300px] flex-col p-6 bg-[#F5F5F5] space-y-4 relative">
                        <p className="text-black/50 text-xs">01</p>
                        <h3 className="text-2xl">Interactive Frontend Development</h3>
                        <p className="text-sm text-black/50 flex-1  leading-6">Focus on React, TypeScript, and Tailwind, I specialize in crafting interactive frontend applications with smooth animations and micro-interactions that bring your digital experiences to life with engaging, responsive interfaces.</p>
                        <a href="#" className="text-sm   text-[#D4C4A8] mt-4 flex items-center hover:*:translate-x-2">Learn more <MdArrowRightAlt className="text-2xl transition-all" /> </a>
                    </li>
                    <li className="flex flex-1 min-w-[300px] flex-col p-6 bg-[#F5F5F5] space-y-4 relative">
                        <p className="text-black/50 text-xs">02</p>
                        <h3 className="text-2xl">Performance Optimization
                        </h3>
                        <p className="text-sm text-black/50 flex-1 leading-6 ">Code splitting, lazy loading, and performance auditing for faster load times. Delivering lightning-fast experiences that keep users engaged and improve conversion rates.</p>
                        <a href="#" className="text-sm   text-[#D4C4A8] mt-4 flex items-center hover:*:translate-x-2">Learn more <MdArrowRightAlt className="text-2xl transition-all" /> </a>

                    </li>
                    <li className="flex flex-1 min-w-[300px] flex-col p-6 bg-[#F5F5F5] space-y-4 relative">
                        <p className="text-black/50 text-xs">03</p>
                        <h3 className="text-2xl">Scalable Architecture
                        </h3>
                        <p className="text-sm text-black/50 flex-1 leading-6">Component systems and maintainable codebases for growing applications. Building solid foundations that evolve with your business needs and support long-term growth.</p>
                        <a href="#" className="text-sm   text-[#D4C4A8] mt-4 flex items-center  hover:*:translate-x-2">Learn more <MdArrowRightAlt className="text-2xl transition-all" /> </a>

                    </li>
                </ul>
            </div>
        </section >
    )
}
