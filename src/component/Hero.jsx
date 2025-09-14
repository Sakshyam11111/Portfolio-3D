import React, { useEffect, useState } from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaExternalLinkAlt, FaDownload, FaPlay } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [splineError, setSplineError] = useState(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const textArray = [
    "Frontend Developer",
    "React Enthusiast", 
    "UI/UX Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Text animation
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  const handleSplineError = (error) => {
    setSplineError(error.message);
  };

  return (
    <section 
      id="hero" 
      className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-12 lg:py-16 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#e99b63] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Content Section */}
      <div className="max-w-xl z-10 w-full mt-16 sm:mt-24 lg:mt-0" data-aos="fade-right">
        {/* Introduction Badge */}
        <div className="relative w-full sm:w-48 h-8 sm:h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(233,155,99,0.4)] rounded-full mb-6 sm:mb-8">
          <div className="absolute inset-[3px] bg-[#1a1a1a] rounded-full flex items-center justify-center gap-1 text-white text-xs sm:text-sm">
            <IoDiamondOutline className="animate-spin" />
            INTRODUCING
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wider my-4 sm:my-6 lg:my-8 text-white leading-tight">
          Welcome to my{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e99b63] to-[#d88a52]">
            Portfolio
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="h-8 sm:h-10 mb-4">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
            I'm a{' '}
            <span className="text-[#e99b63] font-semibold transition-all duration-500 ease-in-out">
              {textArray[currentText]}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          Passionate about creating stunning, responsive web experiences with modern technologies. 
          Let's build something amazing together!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12">
          <button
            className="group border border-[#e99b63] py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm lg:text-base font-semibold tracking-wider transition-all duration-300 hover:bg-[#e99b63] hover:text-white hover:shadow-[0_0_20px_rgba(233,155,99,0.5)] flex items-center gap-2 text-[#e99b63]"
            onClick={() => scrollToSection('about')}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaPlay className="group-hover:translate-x-1 transition-transform duration-300" />
            About Me
          </button>
          
          <button
            className="group border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-6 rounded-full text-xs sm:text-sm lg:text-base font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white hover:border-[#e99b63] flex items-center gap-2"
            onClick={() => scrollToSection('contact')}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaExternalLinkAlt className="group-hover:rotate-45 transition-transform duration-300" />
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#e99b63]">40+</div>
            <div className="text-xs sm:text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#e99b63]">1+</div>
            <div className="text-xs sm:text-sm text-gray-400">Year Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#e99b63]">5+</div>
            <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
          </div>
        </div>
      </div>

      {/* 3D Model Section */}
      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[70vh] relative mt-8 lg:mt-0" data-aos="fade-left">
        <div className="relative w-full h-full">
          {!splineLoaded && !splineError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e99b63]"></div>
            </div>
          )}
          
          {splineError ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-900/50 rounded-lg">
              <div className="text-red-400 text-sm sm:text-base mb-4">
                Failed to load 3D scene
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                {splineError}
              </div>
              <button 
                onClick={() => {
                  setSplineError(null);
                  setSplineLoaded(false);
                }}
                className="mt-4 px-4 py-2 bg-[#e99b63] text-white rounded-lg hover:bg-[#d88a52] transition-colors text-sm"
              >
                Retry
              </button>
            </div>
          ) : (
            <Spline
              className={`absolute top-[-5%] sm:top-[-10%] lg:top-0 left-0 w-full h-full scale-90 sm:scale-100 transition-opacity duration-500 ${splineLoaded ? 'opacity-100' : 'opacity-0'}`}
              scene="https://prod.spline.design/IjLp7TFje3flQOaK/scene.splinecode"
              onLoad={handleSplineLoad}
              onError={handleSplineError}
            />
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="500">
        <div className="w-6 h-10 border-2 border-[#e99b63] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#e99b63] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;