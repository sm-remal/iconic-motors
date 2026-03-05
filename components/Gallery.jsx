"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Bus Repair" },
    { src: "https://images.unsplash.com/photo-1486495146582-16e6d1fd0651?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Engine Diagnostics" },
    { src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Workshop Service" },
    { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Truck Mechanics" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-1 bg-primary"></div>
                            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Portfolio</span>
                            <div className="w-8 h-1 bg-primary"></div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                            Our <span className="text-gradient">Workshop Gallery</span>
                        </h2>
                        <p className="text-black text-lg">
                            Take a look inside our state-of-the-art facility where our expert mechanics work on a wide variety of vehicles, from everyday cars to heavy-duty buses and trucks.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Swiper Slider Full Width */}
            <div className="w-full relative">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    className="h-[400px] md:h-[600px] w-full"
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative group">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10"></div>
                                <div className="absolute bottom-16 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <h3 className="text-3xl font-bold tracking-wider text-white bg-black/30 backdrop-blur-md inline-block px-8 py-3 rounded-full border border-white/60">
                                        {image.alt}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

