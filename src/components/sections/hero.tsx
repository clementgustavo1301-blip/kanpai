"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const yImage = useTransform(scrollY, [0, 500], [0, 150]);
    const yStamp = useTransform(scrollY, [0, 500], [0, -50]);
    const yPattern = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-kanpai-dark pt-20"
        >
            {/* Background Pattern */}
            <motion.div
                style={{ y: yPattern }}
                className="absolute top-0 left-0 w-full md:w-[60vw] opacity-20 text-white"
            >
            </motion.div>

            <div className="container relative z-10 mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:gap-8 md:px-12 md:py-20 lg:px-24">

                {/* Left Content */}
                <div className="flex flex-col justify-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-sans text-4xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                            KANPAI <br />
                            <span className="text-white">SUSHI</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-md font-serif text-base leading-relaxed text-zinc-300 md:text-xl"
                    >
                        L&apos;expérience authentique du Japon à votre table, honorant les techniques traditionnelles avec une touche moderne.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="pt-4"
                    >
                        <button className="bg-kanpai-crimson px-8 py-4 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-red-800 hover:shadow-[0_0_20px_rgba(200,42,42,0.4)] active:scale-95">
                            COMMANDER
                        </button>
                    </motion.div>
                </div>

                {/* Right Images & Graphics */}
                <div className="relative flex h-[50vh] w-full items-center justify-center md:h-[70vh]">

                    {/* Large Background Logo */}
                    <motion.div
                        style={{ y: yStamp }}
                        initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
                        animate={{ opacity: 0.3, rotate: -5, scale: 1.8 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                        className="absolute -right-16 top-12 z-0 flex h-72 w-72 items-center justify-center md:-right-16 md:bottom-16 md:top-auto md:h-96 md:w-96"
                    >
                        <Image
                            src="/logo.png"
                            alt="Kanpai Logo Background"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Main Sushi Image */}
                    <motion.div
                        style={{ y: yImage }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-[300px] aspect-[4/3] translate-y-4 -translate-x-2 sm:max-w-[350px] md:max-w-[400px] md:translate-y-12 md:-translate-x-8"
                    >
                        {/* Using a placeholder for the beautiful salmon sushi - using an unsplash link for immediate rich aesthetic */}
                        <div className="h-full w-full rounded-2xl overflow-hidden relative">
                            <Image
                                src="/images/studio/studio-1.jpg"
                                alt="Prato delicioso do Kanpai Sushi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
