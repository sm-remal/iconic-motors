"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCarSide, FaAddressBook, FaWrench } from "react-icons/fa";

export default function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        vehicleType: "",
        problem: "",
        date: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handling form submission logic here
        alert("Booking submitted successfully! We will contact you soon.");
        setFormData({ name: "", phone: "", vehicleType: "", problem: "", date: "" });
    };

    return (
        <section id="booking" className="py-24 bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -ml-20"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">

                {/* Call to action info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-12 h-1 bg-secondary"></div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Schedule Service</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                        Book Your Appointment <span className="text-gradient">Today</span>
                    </h2>

                    <p className="text-black text-lg mb-8 leading-relaxed">
                        Don't let vehicle troubles slow you down. Book a service appointment with our expert mechanics today. Choose your preferred date, tell us about your vehicle, and we'll have you back on the road in no time.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-12">
                        {[
                            { icon: <FaCalendarAlt size={24} />, text: "Flexible Scheduling" },
                            { icon: <FaCarSide size={24} />, text: "All Vehicle Types" },
                            { icon: <FaAddressBook size={24} />, text: "Easy Booking" },
                            { icon: <FaWrench size={24} />, text: "Quick Turnaround" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary shadow-[0_0_15px_rgba(228,4,228,0.2)]">
                                    {item.icon}
                                </div>
                                <span className="text-black font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Booking Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2 w-full"
                >
                    <div className=" p-8 md:p-10 rounded-3xl border-t-4 border-primary shadow-2xl relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FaWrench size={100} className="text-black" />
                        </div>

                        <h3 className="text-2xl font-bold text-black mb-2 relative z-10">Request a Service</h3>
                        <p className="text-black mb-8 relative z-10">Fill out the form below and we'll confirm your appointment.</p>

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div>
                                <label className="block text-sm font-medium text-black mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border px-4 py-3 text-black placeholder:text-white/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-xl px-4 py-3 text-black placeholder:text-white/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="+880 1..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black mb-1">Vehicle Type</label>
                                    <select
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                                    >
                                        <option value="" disabled className="text-black">Select Vehicle</option>
                                        <option value="Car">Car</option>
                                        <option value="Bus">Bus</option>
                                        <option value="Truck">Truck</option>
                                        <option value="SUV">SUV/Jeep</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-black mb-1">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-4 py-3 text-black focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors styled-date"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-black mb-1">Problem Description</label>
                                <textarea
                                    name="problem"
                                    value={formData.problem}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full border rounded-xl px-4 py-3 text-black placeholder:text-white/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Describe the issues you are experiencing..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(228,4,228,0.4)] hover:shadow-[0_0_30px_rgba(228,4,228,0.6)] hover:-translate-y-1 transition-all duration-300 mt-4"
                            >
                                Submit Booking Request
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

