"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { useRef } from "react";

export function ContactSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "start 15%"]
    });

    const logoOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const logoScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
    const logoRotate = useTransform(scrollYProgress, [0, 1], [45, -5]);

    return (
        <footer ref={containerRef} id="contact" className="relative w-full overflow-hidden bg-[#0F0F0F] pt-20 pb-12 md:pt-32 md:pb-16 text-kanpai-parchment">


            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-16"
                >
                    {/* Information */}
                    <div className="flex flex-col space-y-8 md:space-y-12">
                        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase text-white text-center md:text-left">
                            Rendez-nous Visite
                        </h2>

                        <ul className="flex flex-col space-y-6 md:space-y-8 font-sans text-base md:text-lg tracking-wide text-zinc-300">
                            <li className="flex items-start gap-6 group">
                                <MapPin className="h-7 w-7 text-kanpai-crimson transition-transform group-hover:-translate-y-1" />
                                <span className="max-w-[200px] leading-relaxed">
                                    123 Allée du Sushi, Rue de Tokyo, Ville, Pays
                                </span>
                            </li>
                            <li className="flex items-center gap-6 group">
                                <Phone className="h-7 w-7 text-kanpai-crimson transition-transform group-hover:rotate-12" />
                                <span>+1 234 567 8900</span>
                            </li>
                            <li className="flex items-center gap-6 group">
                                <Clock className="h-7 w-7 text-kanpai-crimson transition-transform group-hover:animate-pulse" />
                                <span>Lun-Dim : 11h00 - 22h00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Large Logo Stamp */}
                    <motion.div
                        style={{ opacity: logoOpacity, scale: logoScale, rotate: logoRotate }}
                        className="relative flex h-56 w-56 items-center justify-center md:h-[400px] md:w-[400px]"
                    >
                        <Image
                            src="/logo.png"
                            alt="Kanpai Logo Stamp"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>

                {/* Footer Bottom Line */}
                <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 md:mt-32 md:flex-row">
                    <p className="font-sans text-sm tracking-widest text-zinc-500">
                        © {new Date().getFullYear()} KANPAI SUSHI. TOUS DROITS RÉSERVÉS.
                    </p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        <a href="#" className="font-sans text-xs tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
                            INSTAGRAM
                        </a>
                        <a href="#" className="font-sans text-xs tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">
                            FACEBOOK
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
