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
            className="text-gray-300 py-12 px-4 sm:px-6 lg:px-8"
            aria-labelledby="footer-heading"
        >
            <div className="max-w-7xl mx-auto">
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    {/* Contact Information */}
                    <div
                        className="flex-1"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        aria-labelledby="contact-heading"
                    >
                        <h3
                            id="contact-heading"
                            className="text-lg sm:text-xl font-semibold mb-4"
                        >
                            Contact
                        </h3>
                        <p className="text-base sm:text-lg">
                            Email:{' '}
                            <a
                                href="mailto:your.email@example.com"
                                className="text-blue-400 hover:underline"
                                aria-label="Email"
                            >
                                sakshyamshrestha111@gmail.com
                            </a>
                        </p>
                        <p className="text-base sm:text-lg mt-2">
                            Phone:{' '}
                            <a
                                href="tel:+1234567890"
                                className="text-blue-400 hover:underline"
                                aria-label="Phone number"
                            >
                                +977-9808002930
                            </a>
                        </p>
                        <p className="text-base sm:text-lg mt-2">
                            Location:{' '}
                            <a
                                href="Gokarneshwor, Kathmandu, Nepal"
                                className="text-blue-400 hover:underline"
                                aria-label="Phone number"
                            >
                                Gokarneshwor, Kathmandu, Nepal
                            </a>
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
                            className="text-lg sm:text-xl font-semibold mb-4"
                        >
                            Follow Me
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/anam-limbu-94673136b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                                aria-label="LinkedIn profile"
                            >
                                <FaLinkedin className="text-3xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/s.a.k.s.h.y.a.m/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                                aria-label="Instagram profile"
                            >
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a
                                href="https://github.com/Sakshyam11111"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                                aria-label="Instagram profile"
                            >
                                <FaGithub className="text-3xl" />
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
                            className="text-lg sm:text-xl font-semibold mb-4"
                        >
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-2">
                            <a
                                href="#about"
                                className="text-base sm:text-lg text-blue-400 hover:underline"
                                aria-label="About section"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-base sm:text-lg text-blue-400 hover:underline"
                                aria-label="Projects section"
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-base sm:text-lg text-blue-400 hover:underline"
                                aria-label="Contact section"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div
                    className="mt-8 pt-8 border-t border-gray-700 text-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <p className="text-sm sm:text-base">
                        © {new Date().getFullYear()} Sakshyam Shrestha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;