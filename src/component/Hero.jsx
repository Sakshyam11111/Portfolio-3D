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
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-20 lg:mt-10">
      <div className="max-w-xl z-10 mt-[50%] sm:mt-[30%] lg:mt-0 w-full" data-aos="fade-right">
        <div className="relative w-full sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mb-8">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white text-sm sm:text-base">
            <IoDiamondOutline />
            INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-6 sm:my-8">
          Welcome to my Portfolio
        </h1>

        <div className="flex gap-4 mt-8 sm:mt-12">
          <button
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full text-sm sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] flex items-center gap-2"
            onClick={() => scrollToSection('about')}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About <FaExternalLinkAlt />
          </button>
          <button
            className="border border-[#2a2a2a] py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white flex items-center gap-2"
            onClick={() => scrollToSection('contact')}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact <FaExternalLinkAlt />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[80vh] relative" data-aos="fade-left">
        {splineError ? (
          <div className="flex items-center justify-center h-full text-red-500">
            Failed to load Spline scene: {splineError}
          </div>
        ) : (
          <Spline
            className="absolute top-[-10%] sm:top-[-15%] lg:top-0 left-0 sm:left-[-2%] lg:left-0 w-full h-full"
            scene="https://prod.spline.design/IjLp7TFje3flQOaK/scene.splinecode"
            onError={(error) => setSplineError(error.message)}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;