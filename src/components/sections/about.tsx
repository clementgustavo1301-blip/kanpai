"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export function AboutSection() {
    return (
        <section id="about" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-kanpai-charcoal pt-16 pb-20 md:pt-24 md:pb-32">
            <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:px-12 lg:px-24">

                {/* Left Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="col-span-1 flex flex-col justify-center space-y-6 md:space-y-8 md:col-span-5"
                >
                    <h2 className="font-sans text-3xl font-bold uppercase tracking-widest text-kanpai-parchment md:text-5xl lg:text-6xl">
                        À Propos de <span className="text-kanpai-crimson">Kanpai</span>
                    </h2>
                    <p className="font-serif text-base leading-relaxed text-zinc-300 md:text-xl md:leading-loose">
                        Kanpai Sushi s&apos;engage à apporter le goût authentique du Japon
                        à votre table. Nos chefs n&apos;utilisent que les ingrédients les plus frais, honorant
                        les techniques traditionnelles avec une touche moderne.
                    </p>
                    <p className="font-serif text-base italic leading-relaxed text-zinc-300 md:text-xl md:leading-loose">
                        &quot;Kanpai&quot; signifie santé, et nous vous invitons à célébrer chaque repas avec
                        nous.
                    </p>
                </motion.div>

                {/* Right Chef Image - Breaking the Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="col-span-1 relative flex h-[40vh] w-full items-center justify-end md:h-[60vh] md:col-span-7"
                >
                    {/* Decorative Offset Frame */}
                    <div className="absolute right-4 top-4 z-0 h-full w-[85%] border-2 border-kanpai-crimson md:right-8 md:top-8" />

                    <div className="relative z-10 h-full w-[90%] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/studio/studio-2.jpg"
                            alt="Sushi Chef preparando sushi no restaurante"
                            fill
                            className="object-cover transition-transform duration-[2s] hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>


        </section>
    );
}
