import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from "../assets/pp.jpg";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDiamondOutline } from 'react-icons/io5';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="about" className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] bg-[#e99b63] rounded-full opacity-20 blur-xl"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative w-full sm:w-60 h-8 sm:h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mb-6 sm:mb-8 mx-auto" data-aos="fade-up">
          <h1 className="absolute inset-[3px] bg-[#1a1a1a] rounded-full flex items-center justify-center gap-1 text-white text-xs sm:text-sm lg:text-base">
            <IoDiamondOutline />
            Hello, It's me
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full sm:w-3/4 lg:w-1/3">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-[320px] sm:h-[360px] lg:h-[400px] mx-auto bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <img
                src={Image1}
                alt="Sakshyam Shrestha"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 text-base sm:text-lg leading-relaxed">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#e99b63]">Sakshyam Shrestha</h1>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4 text-[#e99b63]">Fresher in Frontend Development</p>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-gray-300">
              As an innovative IT graduate, I am passionate about creating intuitive and engaging user experiences. With a solid foundation in HTML, CSS, and JavaScript, alongside expertise in React, I am prepared to tackle complex web projects. My proficiency with modern development tools such as Git, GitHub, and GitLab, combined with my skills in cutting-edge frameworks like Tailwind, enables me to deliver high-quality, responsive designs. I am excited to contribute to your team's success by leveraging my skills to produce standout digital solutions in today’s competitive landscape.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2a2a2a] py-2 sm:py-2.5 px-4 sm:px-6 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#e99b63] hover:text-white transition-all duration-300 flex items-center gap-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Sakshyam11111"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#2a2a2a] py-2 sm:py-2.5 px-4 sm:px-6 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#e99b63] hover:text-white transition-all duration-300 flex items-center gap-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                aria-label="GitHub profile"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;