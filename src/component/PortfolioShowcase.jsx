import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from "../assets/Realtimechat.png";
import Image2 from "../assets/3dscroll.png";
import Image3 from "../assets/Chatbot.jpeg";
import Image4 from "../assets/Bankportal.jpeg";
import Image5 from "../assets/Coffeeshop.png";
import Image6 from "../assets/threeanimation.png"

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
            const scrollAmount = 400;
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
            const walk = (x - startX) * 1.5;
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
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
        <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white relative px-4 sm:px-6 lg:px-20 py-12 overflow-x-hidden">
            {/* Neon Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#e99b63] rounded-full opacity-20 blur-xl"></div>

            {/* Header */}
            <div className="relative z-10 text-center mb-12" data-aos="fade-down">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#e99b63] tracking-wider">
                    Portfolio Showcase
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mt-2">
                    Explore My Journey Through Projects, Education, And Technical Expertise. Each Section Represents a Milestone in My Continuous Learning Path.
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="relative z-10 flex justify-center gap-4 mb-12" data-aos="fade-up">
                <button
                    onClick={() => setActiveSection('projects')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${activeSection === 'projects' ? 'bg-[#e99b63] text-white hover:bg-white hover:text-black' : 'bg-gray-800 text-white hover:bg-white hover:text-black'}`}
                >
                    Projects
                </button>
                <button
                    onClick={() => setActiveSection('education')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${activeSection === 'education' ? 'bg-[#e99b63] text-white hover:bg-white hover:text-black' : 'bg-gray-800 text-white hover:bg-white hover:text-black'}`}
                >
                    Education
                </button>
                <button
                    onClick={() => setActiveSection('skills')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${activeSection === 'skills' ? 'bg-[#e99b63] text-white hover:bg-white hover:text-black' : 'bg-gray-800 text-white hover:bg-white hover:text-black'}`}
                >
                    Skills
                </button>
                <button
                    onClick={() => setActiveSection('certificate')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${activeSection === 'certificate' ? 'bg-[#e99b63] text-white hover:bg-white hover:text-black' : 'bg-gray-800 text-white hover:bg-white hover:text-black'}`}
                >
                    Certificate
                </button>
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {activeSection === 'projects' && (
                    <>
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all z-20"
                            aria-label="Scroll left"
                        >
                            <FaArrowLeft className="text-white" />
                        </button>
                        <div
                            ref={scrollRef}
                            className="flex gap-12 pb-4 overflow-x-hidden scrollbar-hide"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            {/* Project 1 */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-right">
                                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={Image1}
                                        alt="Arinnoilla Solver"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Realtime Chat App</h3>
                                <p className="text-gray-400 mt-2">Technologies Used: MERN Stack, Socket.io, TailwindCSS, Daisy UI, JWT, Zustand</p>
                                <p className="mt-2 hover:underline">View on GitHub</p>
                            </div>

                            {/* Project 2 */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-right" data-aos-delay="200">
                                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={Image2}
                                        alt="Auto-Chat Discord"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">3D image carousel</h3>
                                <p className="text-gray-400 mt-2">Technologies Used: HTML, CSS</p>
                                <p className="mt-2 hover:underline">View on GitHub</p>
                            </div>

                            {/* Project 3 */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-right" data-aos-delay="400">
                                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={Image3}
                                        alt="Bank Portal"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Fully Responsive AI Chatbot</h3>
                                <p className="text-gray-400 mt-2">Technologies Used: React, Tailwind UI, API Integration</p>
                                <p className="mt-2 hover:underline">View on GitHub</p>
                            </div>

                            {/* Project 4 */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-right" data-aos-delay="600">
                                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={Image4}
                                        alt="Coffee Shop"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Fully Responsive Bank Portal</h3>
                                <p className="text-gray-400 mt-2">Technologies Used: React, Tailwind UI, API Integration, AI Chatbot, Props</p>
                                <p className="mt-2 hover:underline">View on GitHub</p>
                            </div>

                            {/* Project 5 */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-right" data-aos-delay="800">
                                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={Image5}
                                        alt="Coffee Shop"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Coffee Shop</h3>
                                <p className="text-gray-400 mt-2">Technologies Used: HTML, CSS, JavaScript</p>
                                <p className="mt-2 hover:underline">View on GitHub</p>
                            </div>
                            {/* Project 6 */}
                            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-right" data-aos-delay="800">
                                <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={Image6}
                                        alt="Coffee Shop"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">3RF Scroll Animation</h3>
                                <p className="text-gray-400 mt-2">Technologies Used: Three.js, React Three Fiber, Drei's useScroll, GSAP, Tailwind CSS</p>
                                <p className="mt-2 hover:underline">View on GitHub</p>
                            </div>
                        </div>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all z-20"
                            aria-label="Scroll right"
                        >
                            <FaArrowRight className="text-white" />
                        </button>
                    </>
                )}
                {activeSection === 'skills' && (
                    <div id="skills" className="relative max-w-7xl mx-auto">
                        <div
                            ref={scrollRef}
                            className="flex justify-center gap-12 pb-4"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            {/* Skill Card 1 - Front-end Development */}
                            <div className="bg-gray-900 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-up">
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Front-end Development</h3>
                                <ul className="text-gray-400 mt-2 space-y-2 text-left">
                                    <li>HTML - Intermediate</li>
                                    <li>CSS - Intermediate</li>
                                    <li>JavaScript - Intermediate</li>
                                    <li>React - Intermediate</li>
                                </ul>
                            </div>

                            {/* Skill Card 2 - Back-end Development */}
                            <div className="bg-gray-900 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Back-end Development</h3>
                                <ul className="text-gray-400 mt-2 space-y-2 text-left">
                                    <li>Git - Intermediate</li>
                                    <li>Node.js - Basic</li>
                                    <li>Socket.io - Basic</li>
                                    <li>Zustand - Basic</li>
                                </ul>
                            </div>

                            {/* Skill Card 3 - UI/UX */}
                            <div className="bg-gray-900 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-up" data-aos-delay="400">
                                <h3 className="text-xl sm:text-2xl font-semibold mt-4">UI / UX Development</h3>
                                <ul className="text-gray-400 mt-2 space-y-2 text-left">
                                    <li>Figma - Intermediate</li>
                                    <li>Adobe Photoshop - Basic</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-gray-400 mt-6" data-aos="fade-up" data-aos-delay="600">
                            This just wraps up my first project as a front-end developer. Fingers crossed that everyone enjoys what I've put together. It's been a journey of learning and coding, and I'm hopeful it brings value.
                        </p>
                    </div>
                )}
                {activeSection === 'education' && (
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#e99b63]">My Education</h2>
                        <p className="text-gray-300">Bachelor's in Information Technology - Texas Collage of Management and IT</p>
                        <p className="text-gray-300 mt-4">Higher School ( +2 ) Science - Arunima Higher Secondary School</p>
                        <p className="text-gray-300 mt-4">Junior School - Nava Arunima Secondary School</p>
                    </div>
                )}
                {activeSection === 'certificate' && (
                    <div className="bg-gray-900 max-w-5xl mx-auto p-6 rounded-3xl shadow-lg text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#e99b63]" data-aos="fade-down">Certificates</h2>
                        <div className="flex justify-center">
                            <div className="bg-gray-900 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center min-w-[400px]" data-aos="fade-up">
                                <div className="text-gray-300 space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-semibold">Software Engineer Intern</h3>
                                    <p>CAS Total Solutions, Kathmandu, Nepal</p>
                                    <ul className="list-disc text-left mx-auto max-w-md">
                                        <li>Developed full-stack banking projects, enhancing functionality and user experience.</li>
                                        <li>Learned and implemented React and a full-stack low-code framework to manage complex projects and backend functionalities.</li>
                                        <li>Collaborated with cross-functional teams to improve performance, security, and usability.</li>
                                        <li>Gained experience in API development, database management, and deployment as well.</li>
                                    </ul>
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