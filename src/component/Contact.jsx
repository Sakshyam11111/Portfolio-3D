import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-20 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            I'm excited to connect and explore opportunities in design, animation, and IT.
            Reach out via email, phone, or LinkedIn, or send me a message below!
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl sm:text-3xl font-light mb-6 text-center md:text-left">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="w-6 h-6 text-gray-300" />
                <p className="text-gray-300">
                  Gokarneshwor, Kathmandu, Nepal
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="w-6 h-6 text-gray-300" />
                <a href="tel:+9779804918354" className="text-gray-300 hover:text-gray-100 transition-colors">
                  +977-9808002930
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="w-6 h-6 text-gray-300" />
                <a href="mailto:anamlimbu473@gmail.com" className="text-gray-300 hover:text-gray-100 transition-colors">
                  sakshyamshrestha111@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin className="w-6 h-6 text-gray-300" />
                <a
                  href="https://www.linkedin.com/in/anam-limbu-94673136b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl sm:text-3xl font-light mb-6 text-center md:text-left">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
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