import Link from "next/link";
import { 
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, 
    FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPinterestP 
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Main Footer Section */}
            <div className="bg-[#00C3FF] py-16 text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        
                        {/* Brand & Contact Info */}
                        <div className="space-y-6">
                            <div className="mb-8">
                                <h2 className="text-4xl font-black tracking-tighter leading-none">
                                    ICONIC
                                </h2>
                                <p className="text-sm font-bold tracking-[0.2em] mt-1">UNITY GROUP</p>
                            </div>
                            
                            <ul className="space-y-4 text-[15px]">
                                <li className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                                    <span>Suite: 8/A&B, LilyPond Center, 3, R. K Mission Road, Motijheel, Dhaka-1000</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="flex-shrink-0" />
                                    <a href="mailto:info@iconicunitygroup.com" className="hover:underline">info@iconicunitygroup.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaGlobe className="flex-shrink-0" />
                                    <a href="https://www.iconicunitygroup.com" target="_blank" className="hover:underline">www.iconicunitygroup.com</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-4 h-4 flex items-center justify-center border border-white rounded-sm text-[10px] font-bold">!</div>
                                    <span className="font-bold">Hotline: 01824800900</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt className="flex-shrink-0" />
                                    <span>Phone: 01711183777</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pages */}
                        <div>
                            <h3 className="text-xl font-bold mb-8">Pages</h3>
                            <ul className="space-y-3">
                                <FooterLink href="/">Home</FooterLink>
                                <FooterLink href="/about">About</FooterLink>
                                <FooterLink href="/gallery">Gallery</FooterLink>
                                <FooterLink href="/blogs">Blogs</FooterLink>
                                <FooterLink href="/contact">Contact</FooterLink>
                                <FooterLink href="/faq">FAQ</FooterLink>
                            </ul>
                        </div>

                        {/* Our Sister Concern */}
                        <div>
                            <h3 className="text-xl font-bold mb-8">Our Sister Concern</h3>
                            <ul className="space-y-3">
                                <FooterLink href="#">Iconic Express</FooterLink>
                                <FooterLink href="#">Iconic Greenland</FooterLink>
                                <FooterLink href="#">Iconic Soft</FooterLink>
                                <FooterLink href="#">Iconic Furniture</FooterLink>
                                <FooterLink href="#">Iconic Digital Solution</FooterLink>
                                <FooterLink href="#">Iconic Hajj Group</FooterLink>
                                <li className="font-bold text-white/90 underline">Iconic Motors</li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-xl font-bold mb-8">Social Media</h3>
                            <div className="flex gap-5 text-2xl">
                                <a href="#" className="hover:opacity-80 transition-opacity"><FaFacebookF /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><FaLinkedinIn /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><FaTwitter /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><FaYoutube /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><FaPinterestP /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><FaEnvelope /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar (Magenta Section) */}
            <div className="bg-[#C100C1] py-6 text-white text-[13px]">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row w-full justify-between items-center">
                        <p>Copyright © 2026 Iconic Unity Group. All Rights Reserved.</p>
                        
                        <p>Designed & Developed by Iconic Soft Ltd.</p>

                        <div className="flex gap-6">
                            <Link href="#" className="hover:underline">Privacy Policy</Link>
                            <Link href="#" className="hover:underline">Terms & conditions</Link>
                            <Link href="#" className="hover:underline">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <Link href={href} className="text-white/90 hover:text-white hover:underline transition-all text-[15px]">
                {children}
            </Link>
        </li>
    );
}