"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/images/studio/studio-3.jpg",
        alt: "Detalhes do corte e frescor dos peixes Kanpai",
        className: "md:col-span-7 aspect-[4/3] md:aspect-auto",
    },
    {
        src: "/images/studio/studio-4.jpg",
        alt: "Apresentação impecável do nosso combinado premium",
        className: "md:col-span-5 aspect-[4/3] md:aspect-auto",
    }
];

export function ShowcaseSection() {
    return (
        <section id="showcase" className="relative w-full bg-kanpai-dark py-16 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-20 md:flex-row md:items-end md:gap-8"
                >
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="font-sans text-3xl font-bold uppercase tracking-widest text-kanpai-parchment md:text-5xl">
                            Notre <span className="text-kanpai-crimson">Art</span>
                        </h2>
                        <p className="max-w-xl font-serif text-base md:text-lg leading-relaxed text-zinc-400">
                            Chaque plat est une célébration des sens, alliant la précision de la coupe
                            au choix minutieux d’ingrédients d’exception. Découvrez notre passion en images.
                        </p>
                    </div>

                    <button className="hidden sm:block border-b-2 border-kanpai-crimson pb-2 font-sans text-xs font-bold tracking-[0.2em] text-kanpai-parchment transition-colors hover:text-kanpai-crimson">
                        VOIR PLUS
                    </button>
                </motion.div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:h-[500px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className={`group relative overflow-hidden rounded-sm bg-zinc-900 shadow-2xl ${img.className}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                            />
                            {/* Subtle dark overlay for premium feel */}
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center sm:hidden">
                    <button className="border-b-2 border-kanpai-crimson pb-2 font-sans text-xs font-bold tracking-[0.2em] text-kanpai-parchment">
                        VOIR PLUS
                    </button>
                </div>
            </div>
        </section>
    );
}
