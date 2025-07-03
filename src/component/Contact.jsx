import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted. Implement submission logic (e.g., EmailJS) here.');
  };

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 text-white min-h-screen bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 sm:mb-6 text-[#e99b63]">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto">
            I'm excited to connect and explore opportunities in design, animation, and IT.
            Reach out via email, phone, or LinkedIn, or send me a message below!
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 text-center lg:text-left text-[#e99b63]">
              Contact Details
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63]" />
                <p className="text-sm sm:text-base text-gray-300">
                  Gokarneshwor, Kathmandu, Nepal
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63]" />
                <a
                  href="tel:+9779808002930"
                  className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                  aria-label="Phone number"
                >
                  +977-9808002930
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63]" />
                <a
                  href="mailto:sakshyamshrestha111@gmail.com"
                  className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                  aria-label="Email Sakshyam Shrestha"
                >
                  sakshyamshrestha111@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63]" />
                <a
                  href="https://www.linkedin.com/in/anam-limbu-94673136b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 text-center lg:text-left text-[#e99b63]">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4 sm:rows-5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 sm:px-6 py-2 sm:py-2.5 bg-[#e99b63] text-white rounded-lg hover:bg-[#d88a52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;