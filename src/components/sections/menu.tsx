"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const menuData = [
    {
        category: "NIGIRI",
        categoryJp: "握り",
        items: [
            { name: "Nigiri au Saumon", desc: "Saumon d'Écosse finement tranché, riz vinaigré", price: "€4.50" },
            { name: "Nigiri au Thon", desc: "Thon rouge de ligne, pointe de wasabi frais", price: "€5.50" },
            { name: "Nigiri Saint-Jacques", desc: "Noix de Saint-Jacques snackée, yuzu", price: "€6.00" },
        ],
    },
    {
        category: "MAKI & ROLLS",
        categoryJp: "巻き",
        items: [
            { name: "Maki Californie", desc: "Crabe des neiges, avocat, sésame torréfié", price: "€8.50" },
            { name: "Spicy Tuna Roll", desc: "Thon épicé, concombre, mayonnaise togarashi", price: "€9.00" },
            { name: "Dragon Roll", desc: "Anguille grillée, crevette tempura, avocat", price: "€12.50" },
        ],
    },
    {
        category: "SASHIMI",
        categoryJp: "刺身",
        items: [
            { name: "Sashimi au Saumon", desc: "5 tranches de saumon label rouge épaisse", price: "€12.00" },
            { name: "Dégustation Royale", desc: "Sélection du chef en 12 pièces", price: "€24.00" },
            { name: "Sashimi au Thon", desc: "Ventre de thon, caviar de sauce soja", price: "€18.00" },
        ],
    },
    {
        category: "SIGNATURES",
        categoryJp: "特別",
        items: [
            { name: "Bébé Poulpe Tartare", desc: "Tartare au yuzu, ail croustillant, shiso", price: "€14.00" },
            { name: "Nigiri au Poulpe", desc: "Poulpe cuit à basse température, sel fumé", price: "€9.00" },
            { name: "Tempura Royale", desc: "Crevettes tigrées, légumes de saison, dashi", price: "€22.00" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export function MenuSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yKanji = useTransform(scrollYProgress, [0, 1], [-50, 200]);

    return (
        <section ref={containerRef} id="menu" className="relative w-full bg-[#EAE5D9] pt-16 pb-20 md:pt-32 md:pb-40 overflow-hidden">
            {/* Background Decorative Kanji */}
            <motion.div
                style={{ y: yKanji }}
                className="pointer-events-none absolute -right-[15%] top-10 text-[150px] md:-right-20 md:top-20 md:text-[300px] font-bold leading-none text-kanpai-charcoal/[0.04] select-none writing-mode-vertical"
            >
                乾杯
            </motion.div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-20 text-center md:mb-32"
                >
                    <span className="font-sans text-xs font-bold tracking-[0.3em] text-kanpai-crimson mb-4 uppercase">
                        La Carte
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-kanpai-charcoal mb-6">
                        L&apos;Élégance du Geste
                    </h2>
                    <div className="h-px w-16 bg-kanpai-charcoal/20 mx-auto"></div>
                </motion.div>

                {/* Menu Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-x-24 lg:gap-y-24"
                >
                    {menuData.map((category) => (
                        <motion.div key={category.category} variants={itemVariants} className="flex flex-col">
                            {/* Category Title */}
                            <div className="flex items-baseline gap-3 mb-8 md:mb-10 border-b border-kanpai-charcoal/10 pb-3 md:pb-4">
                                <h3 className="font-sans text-base md:text-lg font-medium tracking-[0.2em] text-kanpai-charcoal uppercase">
                                    {category.category}
                                </h3>
                                <span className="font-serif text-base md:text-lg text-kanpai-crimson/40">
                                    {category.categoryJp}
                                </span>
                            </div>

                            {/* Menu Items List */}
                            <div className="flex flex-col gap-6 md:gap-8">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex w-full cursor-pointer items-end justify-between overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-1 pr-1 md:pr-2 bg-[#EAE5D9] z-10 w-[70%] max-w-[70%] md:w-3/4 md:max-w-none">
                                            <span className="font-serif text-base md:text-xl text-kanpai-charcoal transition-colors group-hover:text-kanpai-crimson md:whitespace-nowrap overflow-hidden text-ellipsis leading-tight md:leading-normal">
                                                {item.name}
                                            </span>
                                            <span className="font-sans text-[10px] md:text-xs tracking-wider text-zinc-500 uppercase md:overflow-hidden md:text-ellipsis leading-snug">
                                                {item.desc}
                                            </span>
                                        </div>

                                        {/* Classic Menu Dotted Line Leader */}
                                        <div className="absolute left-0 right-0 top-[18px] md:top-[22px] border-b border-dashed border-kanpai-charcoal/20 group-hover:border-kanpai-crimson/30 transition-colors z-0"></div>

                                        <div className="bg-[#EAE5D9] pl-1 md:pl-2 z-10 mb-[-2px] shrink-0">
                                            <span className="font-sans text-sm md:text-base font-medium tracking-widest text-kanpai-charcoal group-hover:text-kanpai-crimson transition-colors">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA / Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 md:mt-32 flex justify-center w-full"
                >
                    <p className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-zinc-500 uppercase text-center max-w-lg leading-relaxed md:leading-loose">
                        Nos plats sont préparés à la commande.<br />Les ingrédients varient selon les arrivages de saison.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
