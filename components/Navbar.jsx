"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Gallery", path: "#gallery" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,195,255,0.1)] border-b border-white/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Modern Logo Area */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#C100C1]">
            ICONIC
          </span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 group-hover:text-[#C100C1] transition-colors">
            MOTORS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="relative text-sm font-bold text-black/70 hover:text-black transition-colors uppercase tracking-widest group"
                >
                  {link.name}
                  {/* Premium Hover Underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Premium CTA Button */}
          <Link
            href="#booking"
            className="group relative inline-flex items-center gap-2 bg-[#c100c1ce] text-white px-7 py-3 rounded-full overflow-hidden transition-all hover:pr-10 active:scale-95"
          >
            <span className="relative z-10 font-bold text-sm uppercase tracking-wider">Book Service</span>
            <FaArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C3FF] to-[#C100C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-[60] p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black">MENU</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-black hover:text-[#00C3FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#00C3FF] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-200"
                >
                  Book Service Now <FaArrowRight />
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}