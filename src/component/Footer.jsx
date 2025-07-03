import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <footer
            className="text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-20 bg-[#1a1a1a]"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-7xl mx-auto">
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
                    {/* Contact Information */}
                    <div
                        className="flex-1"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        aria-labelledby="contact-heading"
                    >
                        <h3
                            id="contact-heading"
                            className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-[#e99b63]"
                        >
                            Contact
                        </h3>
                        <p className="text-sm sm:text-base">
                            Email:{' '}
                            <a
                                href="mailto:sakshyamshrestha111@gmail.com"
                                className="text-[#e99b63] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="Email Sakshyam Shrestha"
                            >
                                sakshyamshrestha111@gmail.com
                            </a>
                        </p>
                        <p className="text-sm sm:text-base mt-2">
                            Phone:{' '}
                            <a
                                href="tel:+9779808002930"
                                className="text-[#e99b63] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="Phone number"
                            >
                                +977-9808002930
                            </a>
                        </p>
                        <p className="text-sm sm:text-base mt-2">
                            Location:{' '}
                            <span className="text-[#e99b63]">
                                Gokarneshwor, Kathmandu, Nepal
                            </span>
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div
                        className="flex-1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        aria-labelledby="social-heading"
                    >
                        <h3
                            id="social-heading"
                            className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-[#e99b63]"
                        >
                            Follow Me
                        </h3>
                        <div className="flex gap-3 sm:gap-4">
                            <a
                                href="https://www.linkedin.com/in/anam-limbu-94673136b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="LinkedIn profile"
                            >
                                <FaLinkedin className="text-2xl sm:text-3xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/s.a.k.s.h.y.a.m/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="Instagram profile"
                            >
                                <FaInstagram className="text-2xl sm:text-3xl" />
                            </a>
                            <a
                                href="https://github.com/Sakshyam11111"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#e99b63] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="GitHub profile"
                            >
                                <FaGithub className="text-2xl sm:text-3xl" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className="flex-1"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        aria-labelledby="nav-heading"
                    >
                        <h3
                            id="nav-heading"
                            className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-[#e99b63]"
                        >
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-2">
                            <a
                                href="#about"
                                className="text-sm sm:text-base text-[#e99b63] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="About section"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-sm sm:text-base text-[#e99b63] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="Projects section"
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-sm sm:text-base text-[#e99b63] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                aria-label="Contact section"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div
                    className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <p className="text-xs sm:text-sm">
                        © {new Date().getFullYear()} Sakshyam Shrestha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;