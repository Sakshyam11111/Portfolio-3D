import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', href: '#hero', ariaLabel: 'Home section' },
        { name: 'About', href: '#about', ariaLabel: 'About section' },
        { name: 'Skills', href: '#skills', ariaLabel: 'Skills section' }, // Updated to match ID
        { name: 'Education', href: '#education', ariaLabel: 'Education section' },
        { name: 'Contact', href: '#contact', ariaLabel: 'Contact section' },
    ];

    return (
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-20 bg-transparent">
            <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light m-0"
                data-aos="fade-down"
            >
                Portfolio
            </h1>

            <button
                className="md:hidden z-50 focus:outline-none"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            <nav
                className={`${
                    isOpen ? 'flex' : 'hidden'
                } md:flex flex-col md:flex-row items-center gap-4 md:gap-12 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-40`}
            >
                {navLinks.map((link, index) => (
                    <a
                        key={link.name}
                        className="text-base tracking-wider transition-colors hover:text-gray-300"
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        data-aos="fade-left"
                        data-aos-delay={100 * (index + 1)}
                        aria-label={link.ariaLabel}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;