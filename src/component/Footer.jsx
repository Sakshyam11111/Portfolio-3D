import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLinkClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer
            className="text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-20 bg-[#0d0d0d] border-t border-gray-800"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-7xl mx-auto">
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact Information */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        aria-labelledby="contact-heading"
                    >
                        <h3
                            id="contact-heading"
                            className="text-lg sm:text-xl font-semibold mb-4 text-[#e99b63]"
                        >
                            Contact Info
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a
                                    href="mailto:sakshyamshrestha111@gmail.com"
                                    className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                    aria-label="Email Sakshyam Shrestha"
                                >
                                    sakshyamshrestha111@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <a
                                    href="tel:+9779808002930"
                                    className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                    aria-label="Phone number"
                                >
                                    +977-9808002930
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <span className="text-sm sm:text-base text-gray-300">
                                    Gokarneshwor, Kathmandu, Nepal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        aria-labelledby="nav-heading"
                    >
                        <h3
                            id="nav-heading"
                            className="text-lg sm:text-xl font-semibold mb-4 text-[#e99b63]"
                        >
                            Quick Links
                        </h3>
                        <nav className="space-y-3">
                            <button
                                onClick={() => handleLinkClick('hero')}
                                className="block text-sm sm:text-base text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded text-left"
                                aria-label="Home section"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => handleLinkClick('about')}
                                className="block text-sm sm:text-base text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded text-left"
                                aria-label="About section"
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleLinkClick('skillsPortfolioShowcase')}
                                className="block text-sm sm:text-base text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded text-left"
                                aria-label="Portfolio section"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => handleLinkClick('contact')}
                                className="block text-sm sm:text-base text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded text-left"
                                aria-label="Contact section"
                            >
                                Contact
                            </button>
                        </nav>
                    </div>

                    {/* Social Media & Back to Top */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        aria-labelledby="social-heading"
                    >
                        <h3
                            id="social-heading"
                            className="text-lg sm:text-xl font-semibold mb-4 text-[#e99b63]"
                        >
                            Connect With Me
                        </h3>
                        <div className="flex gap-4 mb-6">
                            <a
                                href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded p-1"
                                aria-label="LinkedIn profile"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/s.a.k.s.h.y.a.m/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded p-1"
                                aria-label="Instagram profile"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://github.com/Sakshyam11111"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded p-1"
                                aria-label="GitHub profile"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                        
                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#e99b63] text-white rounded-lg hover:bg-[#d88a52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
                            aria-label="Back to top"
                        >
                            <FaArrowUp className="text-sm" />
                            Back to Top
                        </button>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div
                    className="pt-8 border-t border-gray-800 text-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Sakshyam Shrestha. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Built with React, Tailwind CSS, and Three.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;