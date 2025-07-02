import React from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Hero from './component/hero';
import PortfolioShowcase from './component/PortfolioShowcase';

const App = () => {
    return (
        <main className="relative">
            {/* Gradient image */}
            <img
                className="absolute top-0 right-0 opacity-60 -z-10"
                src="/gradient.png"
                alt=""
                aria-hidden="true"
            />

            {/* Blur effect */}
            <div
                className="absolute top-[20%] right-[-5%] w-[40rem] h-0 rotate-[-30deg] shadow-[0_0_900px_20px_#e99b63]"
                aria-hidden="true"
            ></div>

            <Navbar />
            <Hero />
            <About />
            <PortfolioShowcase/>
            <Contact />
            <Footer />
        </main>
    );
};

export default App;