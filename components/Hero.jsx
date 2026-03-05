"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative h-screen lg:h-[60vh] flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
            
            {/* Background with Pink Bus Image */}
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop')] 
                bg-cover bg-center bg-no-repeat"
            >
                {/* Modern Multi-layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C3FF]/10 to-[#C100C1]/20" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                
                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C100C1] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C100C1]"></span>
                    </span>
                    <span className="text-white/80 font-semibold text-[10px] tracking-[0.2em] uppercase">
                        The Best Auto Care in Motijheel
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1] tracking-tighter">
                        From Engine to Brake <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C3FF] to-[#C100C1]">
                            Complete Car Care
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-white/60 mb-8 max-w-2xl mx-auto font-medium">
                        Professional automotive excellence at Iconic Motors. Certified mechanics for all vehicles including buses and cars.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#booking"
                            className="relative group bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm overflow-hidden transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                                Book Service Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00C3FF] to-[#C100C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 group-hover:text-white transition-colors duration-300" />
                        </Link>

                        <Link
                            href="#contact"
                            className="px-8 py-3.5 rounded-full font-bold text-sm text-white border border-white/20 hover:border-white/50 transition-all uppercase tracking-wider"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                
            </div>

            {/* Ambient Lighting */}
            <div className="absolute -top-[10%] -left-[10%] w-[30%] h-[30%] bg-[#00C3FF] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-[#C100C1] rounded-full blur-[120px] opacity-15"></div>
        </section>
    );
}

