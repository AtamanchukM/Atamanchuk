import { FadeInSection, FadeXSection } from "../UI/FramerAnimation"
export default function About() {
    const skills = [
        'Html', 'CSS', 'JS', 'React', 'TypeScript', 'Vite', 'React Router', 'Zustand', 'Responsive Development', 'SCSS', 'Tailwind'
    ]
    return (
        <FadeInSection>
            <section id='about' className='min-h-screen  flex items-center justify-center py-20 bg-[#F5F5F5]'>
                <div className=" mx-auto px-4 max-w-7xl flex flex-col lg:flex-row">
                    <div className="space-y-8 max-w-3xl">
                        <h2 className='text-5xl'>Crafting Digital Experiences</h2>
                        <div className="flex flex-col space-y-6">
                            <p>I build modern, responsive web applications with a focus on performance, usability, and maintainability. Using React, TypeScript, and Tailwind, I create interactive interfaces and seamless user experiences that work flawlessly across devices.</p>
                            <p>I specialize in component-driven architecture, efficient state management, and API integration, crafting scalable solutions that grow with your needs. From dynamic dashboards and sliders to custom calculators and complex web services, I turn ideas into production-ready applications that are both functional and visually polished.</p>
                            <p>My goal is to combine clean code with thoughtful design, delivering applications that users love and businesses rely on.</p>
                        </div>
                        <div className="">
                            <h3 className='text-2xl  mb-2'>My skills</h3>
                            <FadeXSection>
                                <ul className='flex flex-wrap gap-3'>
                                    {skills.map((skill, index) => (
                                        <li key={index} className='bg-white px-5 py-2 text-sm'>{skill}</li>
                                    ))}
                                </ul>
                            </FadeXSection>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[400px] p-10 border-l-6 mt-5 border-[#D4C4A8] h-fit bg-white space-y-4 flex flex-col ">
                        <blockquote className='text-2xl italic'>My purpose is to build solutions that offer dynamic UI, high performance and delightful UX.</blockquote>
                        <div className="text-right text-black/50 text-sm">— Development Philosophy</div>
                    </div>
                </div>
            </section >
        </FadeInSection>
    )
}
