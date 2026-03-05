"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaTools, FaUsers } from "react-icons/fa";
import express from "../components/assets/Bus/express.png"

export default function About() {
    const stats = [
        { icon: <FaAward size={30} />, value: "15+", label: "Years Experience" },
        { icon: <FaUsers size={30} />, value: "5000+", label: "Happy Clients" },
        { icon: <FaTools size={30} />, value: "50+", label: "Expert Mechanics" },
    ];

    const features = [
        "State-of-the-art diagnostic equipment",
        "Certified and experienced mechanics",
        "Genuine OEM parts guaranteed",
        "Transparent pricing with no hidden costs"
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Images Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Mechanic working on engine"
                            className="rounded-2xl shadow-xl w-full h-64 object-cover col-span-2"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Car parts"
                            className="rounded-2xl shadow-xl w-full h-48 object-cover"
                        />
                        <img
                            src="https://i.pinimg.com/736x/89/3b/69/893b698ae30b4f8bce99bac096fcf1db.jpg"
                            alt="Diagnostics"
                            className="rounded-2xl shadow-xl w-full h-48 object-cover"
                        />

                        {/* Experience Badge */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-2xl text-center border-b-4 border-primary">
                            <span className="block text-4xl font-black text-black">15+</span>
                            <span className="block text-sm font-bold text-black uppercase tracking-wider">Years Experience</span>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-1 bg-primary"></div>
                            <span className="text-secondary font-bold uppercase tracking-widest text-sm">About Iconic Motors</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                            Your Trusted Partner for <span className="text-gradient">Complete Auto Care</span>
                        </h2>

                        <p className="text-black text-lg mb-8 leading-relaxed">
                            At Iconic Motors, we pride ourselves on delivering top-tier mechanical servicing, repair, and maintenance for both cars and buses. With our team of skilled mechanics and modern diagnostic equipment, we ensure your vehicle runs at its peak performance.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-black">
                                    <FaCheckCircle className="text-primary flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-secondary mb-2 flex justify-center">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-black uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

