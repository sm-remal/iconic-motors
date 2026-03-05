"use client";

import { motion } from "framer-motion";
import { FaUserCog, FaShieldAlt, FaTachometerAlt, FaTags, FaHeadset, FaCheck } from "react-icons/fa";

const benefits = [
    {
        title: "Expert Mechanics",
        description: "Highly trained professionals with years of experience handling all vehicle types.",
        icon: <FaUserCog size={36} className="text-black" />
    },
    {
        title: "Genuine Parts",
        description: "We use only 100% authentic manufacturer parts guaranteeing quality and durability.",
        icon: <FaShieldAlt size={36} className="text-black" />
    },
    {
        title: "Fast Service",
        description: "Efficient turnaround times without compromising on the quality of our work.",
        icon: <FaTachometerAlt size={36} className="text-black" />
    },
    {
        title: "Affordable Price",
        description: "Transparent pricing and competitive rates for all mechanical services.",
        icon: <FaTags size={36} className="text-black" />
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock emergency assistance and dedicated customer service.",
        icon: <FaHeadset size={36} className="text-black" />
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background split */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 hidden lg:block -skew-x-12 transform origin-top"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-5/12"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-1 bg-primary"></div>
                            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Guarantee</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                            Why Customers <span className="text-gradient">Choose Us</span>
                        </h2>

                        <p className="text-black text-lg mb-8">
                            At Iconic Motors, we don't just repair vehicles; we build trust. Our commitment to excellence ensures every vehicle leaves our workshop in peak condition.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {["Over 5000+ Vehicles Serviced", "Award-Winning Service Center", "Nationwide Warranty on Parts", "Free Diagnostics with Repair"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-black font-medium border-b border-white/5 pb-3">
                                    <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-1 text-black">
                                        <FaCheck size={12} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="bg-transparent border border-primary text-black hover:bg-primary px-8 py-3 rounded-full font-bold transition-all duration-300">
                            Read Client Reviews
                        </button>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="lg:w-7/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`glass p-8 rounded-2xl hover:border-primary/50 transition-colors group ${index === 0 ? "md:col-span-2 bg-gradient-to-br from-primary/10 to-transparent border-primary/20" : ""}`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform ${index === 0 ? "bg-gradient-to-br from-primary to-secondary" : "bg-white/10"}`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-black">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

