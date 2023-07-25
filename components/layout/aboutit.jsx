import React from 'react';

const AboutSection = () => (
    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-16 overflow-hidden p-8 leading-relaxed text-blue-100 max-md:mt-16 md:p-16">
        <section id="" className="flex flex-col gap-12 text-slate-300">
            <div id="about" className="absolute top-0 max-md:-top-16"></div>
            <div>
                <h1 className="relative flex text-3xl leading-none text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        height="32"
                        className="right-full mr-2 text-teal-500 md:absolute"
                    >
                        <path d="M13 16h-1v-4h-2m1-4h.02M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    About it
                </h1>
                <br />
                <p>
                    FlashbackAI is a small project that focuses on exploring long lost memories,
                    giving life to them again. The main idea to help user to overcome obstacles, to show
                    the growth as a person.
                </p>
                <br />
                <p>
                    This project is made only because of a nfactorial incubator 2023 summer bootcamp.
                </p>
            </div>

            <div id="team" className="flex flex-col gap-12 opacity-95">
  
                <div id="thanks">
                    <h2 className="mb-2 text-xl text-slate-100">Special thanks to</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <h3 className="font-medium">Nfactorial</h3>
                            <p className="text-sm italic text-slate-400">For giving me opportunity to create the app</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Midjourney</h3>
                            <p className="text-sm italic text-slate-400">Most of the design ideas used from their website</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Mentors</h3>
                            <p className="text-sm italic text-slate-400">helping me with any questions, even not project related</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Colleagues/Friends</h3>
                            <p className="text-sm italic text-slate-400">For creating best summer</p>
                        </div>
                        
                    </div>
                </div>

                <section className="relative flex flex-col gap-8 text-slate-300">
                    <div id="contact" className="absolute max-md:-top-16"></div>
                    <div>
                        <h1 className="relative flex text-3xl leading-none text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                height="32"
                                className="right-full mr-2 text-amber-600 md:absolute"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Contact
                        </h1>
                        <br />
                        <div>
                            <p>
                                For product support or questions: </p>
                            <a href="https://t.me/jateq" className="text-blue-400 underline hover:underline-offset-2">
                                message me on telegram
                            </a>{' '}

                        </div>
                        <br />
                        <br />
                        <div>
                            <p className="">For billing support:</p>
                            <a href="mailto:temirlan.eraly@gmail.com" className="text-blue-400 underline transition-all hover:underline-offset-2">
                                temirlan.eraly@gmail.com
                            </a>
                        </div>
                        <br />

                    </div>
                </section>

                <section className="flex justify-center gap-8 mt-[50px]">
                    <p> Brought to you by:{" "}
                        <a className="underline-offset-2 opacity-70 hover:underline" href="https://www.instagram.com/jateq_/">
                            Jateq
                        </a>
                    </p>


                </section>
            </div>
        </section >
    </div>
);

export default AboutSection;
