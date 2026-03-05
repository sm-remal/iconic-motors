"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-1 bg-secondary"></div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Get In Touch</span>
                            <div className="w-8 h-1 bg-secondary"></div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                            Contact <span className="text-gradient">Iconic Motors</span>
                        </h2>
                        <p className="text-black text-lg">
                            Have a question or need emergency assistance? Reach out to us through any of the channels below. We are available 24/7 to help you.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Details */}
                    <div className="lg:col-span-1 space-y-6">
                        <ContactCard
                            icon={<FaPhoneAlt size={24} />}
                            title="Call Us Directly"
                            details={["+880 1234 567890", "+880 9876 543210"]}
                            highlight="Hotline: 16999"
                            delay={0}
                        />
                        <ContactCard
                            icon={<FaEnvelope size={24} />}
                            title="Email Us"
                            details={["info@iconicmotors.com", "support@iconicmotors.com"]}
                            delay={0.1}
                        />
                        <ContactCard
                            icon={<FaMapMarkerAlt size={24} />}
                            title="Visit Workshop"
                            details={["123 Workshop Avenue,", "Tech District, Dhaka 1200"]}
                            delay={0.2}
                        />

                        <a
                            href="https://wa.me/8801234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-black py-4 rounded-2xl font-bold transition-colors shadow-lg"
                        >
                            <FaWhatsapp size={24} />
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Right Side Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 rounded-3xl overflow-hidden bg-white border border-gray-200 relative min-h-[400px] shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.43577317789!2d90.41249605!3d23.734582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85906f33333%3A0x6ec07c4b693fa2!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715421234567!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Iconic Motors Motijheel Location Map"
                            className="absolute inset-0"
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function ContactCard({ icon, title, details, highlight, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="glass p-6 rounded-2xl border-l-4 border-l-primary hover:-translate-y-1 transition-transform bg-gradient-to-r from-white/5 to-transparent"
        >
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                    {icon}
                </div>
                <div>
                    <h4 className="text-xl font-bold text-black mb-2">{title}</h4>
                    {details.map((text, idx) => (
                        <p key={idx} className="text-black">{text}</p>
                    ))}
                    {highlight && (
                        <p className="text-secondary font-bold mt-2">{highlight}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

