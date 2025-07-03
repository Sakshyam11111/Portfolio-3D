import React, { useEffect, useState } from 'react';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [splineError, setSplineError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-12 lg:py-16">
      <div className="max-w-xl z-10 w-full mt-16 sm:mt-24 lg:mt-0" data-aos="fade-right">
        <div className="relative w-full sm:w-48 h-8 sm:h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mb-6 sm:mb-8">
          <div className="absolute inset-[3px] bg-[#1a1a1a] rounded-full flex items-center justify-center gap-1 text-white text-xs sm:text-sm">
            <IoDiamondOutline />
            INTRODUCING
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wider my-4 sm:my-6 lg:my-8 text-white">
          Welcome to my Portfolio
        </h1>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-12">
          <button
            className="border border-[#2a2a2a] py-2 sm:py-2.5 px-4 sm:px-5 rounded-full text-xs sm:text-sm lg:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white flex items-center gap-2 text-white"
            onClick={() => scrollToSection('about')}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About <FaExternalLinkAlt />
          </button>
          <button
            className="border border-[#2a2a2a] py-2 sm:py-2.5 px-5 sm:px-6 lg:px-8 rounded-full text-xs sm:text-sm lg:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white flex items-center gap-2"
            onClick={() => scrollToSection('contact')}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact <FaExternalLinkAlt />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[70vh] relative mt-8 lg:mt-0" data-aos="fade-left">
        {splineError ? (
          <div className="flex items-center justify-center h-full text-red-500 text-sm sm:text-base">
            Failed to load Spline scene: {splineError}
          </div>
        ) : (
          <Spline
            className="absolute top-[-5%] sm:top-[-10%] lg:top-0 left-0 w-full h-full scale-90 sm:scale-100"
            scene="https://prod.spline.design/IjLp7TFje3flQOaK/scene.splinecode"
            onError={(error) => setSplineError(error.message)}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;