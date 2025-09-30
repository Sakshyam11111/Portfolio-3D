import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaGraduationCap as GraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from "../assets/Realtimechat.png";
import Image2 from "../assets/3dscroll.png";
import Image3 from "../assets/Chatbot.jpeg";
import Image4 from "../assets/Bankportal.jpeg";
import Image5 from "../assets/Coffeeshop.png";
import Image6 from "../assets/threeanimation.png";
import Image7 from "../assets/campus.png";
import Image8 from "../assets/Redefine.png";
import Image9 from "../assets/ExpenseTracker.png";
import Image10 from "../assets/tour.png";

const PortfolioShowcase = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [activeSection, setActiveSection] = useState('projects');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current && !isScrolling && activeSection === 'projects') {
            setIsScrolling(true);
            const scrollAmount = window.innerWidth < 640 ? 300 : 400;
            const start = scrollRef.current.scrollLeft;
            const end = start + (direction === 'left' ? -scrollAmount : scrollAmount);
            const duration = 300;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = easeInOutQuad(progress);
                scrollRef.current.scrollLeft = start + (end - start) * ease;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setIsScrolling(false);
                }
            };

            requestAnimationFrame(animate);
        }
    };

    const handleMouseDown = (e) => {
        if (scrollRef.current && activeSection === 'projects') {
            setIsDragging(true);
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && scrollRef.current && !isScrolling && activeSection === 'projects') {
            e.preventDefault();
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 1.2;
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        if (scrollRef.current && activeSection === 'projects') {
            setIsDragging(true);
            setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleTouchMove = (e) => {
        if (isDragging && scrollRef.current && !isScrolling && activeSection === 'projects') {
            e.preventDefault();
            const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 1.2;
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    useEffect(() => {
        if (isDragging) {
            document.body.style.userSelect = 'none';
        } else {
            document.body.style.userSelect = '';
        }
    }, [isDragging]);

    return (
        <div
            id="skillsPortfolioShowcase"
            className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white relative px-4 sm:px-6 lg:px-8 xl:px-20 py-12 overflow-x-hidden"
        >
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1a1a1a;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #000000;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #333333;
                }
                .custom-scrollbar {
                    scrollbar-color: #000000 #1a1a1a;
                    scrollbar-width: thin;
                }
            `}</style>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-[#e99b63] rounded-full opacity-20 blur-xl"></div>

            <div className="relative z-10 text-center mb-8 sm:mb-12" data-aos="fade-down">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#e99b63] tracking-wider">
                    Portfolio Showcase
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto mt-2">
                    Explore My Journey Through Projects, Education, And Technical Expertise. Each Section Represents a Milestone in My Continuous Learning Path.
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12" data-aos="fade-up">
                {['projects', 'education', 'skills', 'certificate'].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        role="tab"
                        aria-selected={activeSection === section}
                        className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-all flex items-center gap-2 ${activeSection === section ? 'bg-[#e99b63] text-white hover:bg-white hover:text-black' : 'bg-gray-800 text-white hover:bg-white hover:text-black'}`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {activeSection === 'projects' && (
                    <>
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-700 transition-all z-20"
                            aria-label="Scroll left"
                        >
                            <FaArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <div
                            ref={scrollRef}
                            className="flex gap-6 sm:gap-12 pb-4 overflow-x-auto snap-x snap-mandatory custom-scrollbar touch-pan-x"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {[
                                {
                                    img: Image7,
                                    title: 'Texas Campus',
                                    tech: 'React, Tailwind, Firebase',
                                    alt: 'Texas Campus',
                                    githubLink: 'https://github.com/Sakshyam11111/campus.git',
                                },
                                {
                                    img: Image1,
                                    title: 'Social Media Platform',
                                    tech: 'MERN Stack, Socket.io, TailwindCSS, Daisy UI, JWT, Zustand',
                                    alt: 'Social Media Platform',
                                    githubLink: 'https://github.com/Sakshyam11111/Real-Time-Chat.git',
                                },
                                {
                                    img: Image10,
                                    title: 'Online Tour Booking',
                                    tech: 'React, Tailwind',
                                    alt: 'TourExplorer',
                                    githubLink: 'https://github.com/Sakshyam11111/Onlinetourbooking.git',
                                },
                                {
                                    img: Image3,
                                    title: 'Fully Responsive AI Chatbot',
                                    tech: 'React, Tailwind UI, API Integration',
                                    alt: 'AI Chatbot',
                                    githubLink: 'https://github.com/Sakshyam11111/Chatbot.git',
                                },
                                {
                                    img: Image4,
                                    title: 'Fully Responsive Bank Portal',
                                    tech: 'React, Tailwind UI, API Integration, AI Chatbot, Props',
                                    alt: 'Bank Portal',
                                    githubLink: 'https://github.com/Sakshyam11111/CAS-Fontend.git',
                                },
                                {
                                    img: Image9,
                                    title: 'Expense Tracker',
                                    tech: 'React, Tailwind',
                                    alt: 'Expense Tracker',
                                    githubLink: 'https://github.com/Sakshyam11111/Expense_Tracker.git',
                                },
                                {
                                    img: Image6,
                                    title: '3RF Scroll Animation',
                                    tech: 'Three.js, React Three Fiber, Drei\'s useScroll, GSAP, Tailwind CSS',
                                    alt: '3RF Scroll Animation',
                                    githubLink: 'https://github.com/Sakshyam11111/R3F-Scroll-Animations.git',
                                },
                                {
                                    img: Image8,
                                    title: 'Redefine',
                                    tech: 'React, Tailwind',
                                    alt: 'Redefine',
                                    githubLink: 'https://github.com/Sakshyam11111/Redefine.git',
                                },
                                {
                                    img: Image5,
                                    title: 'Coffee Shop',
                                    tech: 'HTML, CSS, JavaScript',
                                    alt: 'Coffee Shop',
                                    githubLink: 'https://github.com/Sakshyam11111/Coffee-Shop.git',
                                },
                                {
                                    img: Image2,
                                    title: '3D Image Carousel',
                                    tech: 'HTML, CSS',
                                    alt: '3D Image Carousel',
                                    githubLink: 'https://github.com/Sakshyam11111/Slider-3D.git',
                                },
                            ].map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[280px] sm:min-w-[350px] lg:min-w-[400px] snap-center"
                                    data-aos="fade-right"
                                    data-aos-delay={index * 200}
                                >
                                    <div className="w-full h-48 sm:h-64 bg-gray-800 rounded-lg overflow-hidden">
                                        <img
                                            src={project.img}
                                            alt={project.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 text-[#e99b63]">{project.title}</h3>
                                    <p className="text-gray-400 text-sm sm:text-base mt-2">{project.tech}</p>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-base mt-2 text-[#e99b63] hover:underline focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-700 transition-all z-20"
                            aria-label="Scroll right"
                        >
                            <FaArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </>
                )}
                {activeSection === 'skills' && (
                    <div id="skills" className="relative max-w-7xl mx-auto">
                        <div
                            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 pb-4"
                        >
                            {[
                                {
                                    title: 'Front-end Development',
                                    skills: ['HTML - Intermediate', 'CSS - Intermediate', 'JavaScript - Intermediate', 'React - Intermediate'],
                                },
                                {
                                    title: 'Back-end Development',
                                    skills: ['Git - Intermediate','Github - Intermediate', 'Node.js - Basic','Next.js - Basic', 'Socket.io - Basic', 'Zustand - Basic'],
                                },
                                {
                                    title: 'UI / UX Development',
                                    skills: ['Figma - Intermediate', 'Adobe Photoshop - Basic'],
                                },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col items-center text-center w-full sm:min-w-[280px] lg:min-w-[400px]"
                                >
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 text-[#e99b63]">{skill.title}</h3>
                                    <ul className="text-gray-400 text-sm sm:text-base mt-2 space-y-2 text-left">
                                        {skill.skills.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-sm sm:text-base mt-6">
                            This just wraps up my first project as a front-end developer. Fingers crossed that everyone enjoys what I've put together. It's been a journey of learning and coding, and I'm hopeful it brings value.
                        </p>
                    </div>
                )}
                {activeSection === 'education' && (
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {[
                                {
                                    degree: "Bachelor's in Information Technology",
                                    institution: "Texas College of Management and IT",
                                    description: "Specialized in software development, database management, and web technologies."
                                },
                                {
                                    degree: "Higher School (+2) Science",
                                    institution: "Arunima Higher Secondary School",
                                    description: "Focused on mathematics, physics, and computer science fundamentals."
                                },
                                {
                                    degree: "Junior School",
                                    institution: "Nava Arunima Secondary School",
                                    description: "Built a strong foundation in academics and developed early interest in technology."
                                }
                            ].map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-500"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-orange-400 mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-300 font-medium mb-1">
                                                {edu.institution}
                                            </p>
                                            <p className="text-gray-400 text-sm mb-3">
                                                {edu.period}
                                            </p>
                                            <p className="text-gray-300 text-sm">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeSection === 'certificate' && (
                    <div className="bg-gray-900 max-w-5xl mx-auto p-4 sm:p-6 rounded-3xl shadow-lg text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-[#e99b63]">Certificates</h2>
                        <div className="flex justify-center">
                            <div className="bg-gray-900 p-4 sm:p-6 rounded-3xl flex flex-col items-center text-center w-full sm:min-w-[280px] lg:min-w-[400px]">
                                <div className="text-gray-300 text-sm sm:text-base space-y-4">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Software Engineer Intern</h3>
                                    <p className='font-semibold'>CAS Total Solutions, Kathmandu, Nepal</p>
                                    <ul className="list-disc text-left mx-auto max-w-md">
                                        <li>Developed full-stack banking projects using React and a low-code backend framework.</li>
                                        <li>Collaborated with cross-functional teams to improve performance, security, and usability</li>
                                        <li>Gained hands-on experience with APIs, deployment workflows, and database management</li>                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioShowcase;