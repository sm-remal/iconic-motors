"use client";

import { motion } from "framer-motion";
import { FaCogs, FaCarCrash, FaTruckMonster, FaCarAlt, FaWrench, FaStethoscope, FaArrowRight } from "react-icons/fa";

const serviceData = [
    {
        title: "Engine Repair",
        description: "Comprehensive engine diagnostics, rebuilding, and repair services for maximum performance and longevity.",
        icon: <FaCogs size={40} className="text-black" />,
        image: "https://i.pinimg.com/1200x/f5/b3/c5/f5b3c5bfca5f22b9a454779fbdd0e248.jpg"
    },
    {
        title: "Brake Service",
        description: "Professional brake pad replacement, rotor resurfacing, and fluid flushes for ultimate safety on the road.",
        icon: <FaCarCrash size={40} className="text-black" />,
        image: "https://i.pinimg.com/736x/fe/b7/ad/feb7ada7f83f52513de140f63372e186.jpg"
    },
    {
        title: "Bus Maintenance",
        description: "Specialized maintenance and repair services tailored for commercial buses and heavy-duty vehicles.",
        icon: <FaTruckMonster size={40} className="text-black" />,
        image: "https://i.pinimg.com/1200x/9f/b3/72/9fb372f9c4d180cb74325e081f306bd8.jpg"
    },
    {
        title: "Car Servicing",
        description: "Routine maintenance including oil changes, filter replacement, and fluid level checks.",
        icon: <FaCarAlt size={40} className="text-black" />,
        image: "https://i.pinimg.com/736x/89/3b/69/893b698ae30b4f8bce99bac096fcf1db.jpg"
    },
    {
        title: "Parts Replacement",
        description: "High-quality, genuine OEM parts replacement with professional installation guarantees.",
        icon: <FaWrench size={40} className="text-black" />,
        image: "https://i.pinimg.com/736x/86/42/11/864211b362311af480490c3ff784470e.jpg"
    },
    {
        title: "Diagnostics Check",
        description: "Advanced computer diagnostics to accurately pinpoint issues before they become major problems.",
        icon: <FaStethoscope size={40} className="text-black" />,
        image: "https://i.pinimg.com/1200x/6a/58/00/6a580055eab0cce794b284282548d12a.jpg"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-1 bg-primary"></div>
                            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Professional Care</span>
                            <div className="w-8 h-1 bg-primary"></div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                            Our Premium <span className="text-gradient">Services</span>
                        </h2>
                        <p className="text-black text-lg">
                            We offer a complete range of repair and maintenance services for all types of vehicles. From simple oil changes to complex engine diagnostics, our expert team has you covered.
                        </p>
                    </motion.div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 h-[400px] shadow-lg"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/60 transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-white mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 h-12 group-hover:h-auto">
                                    {service.description}
                                </p>

                                <button className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm hover:text-secondary group/btn w-fit">
                                    Learn More
                                    <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 group-hover/btn:translate-x-0" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

