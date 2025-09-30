import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 text-white min-h-screen bg-[#1a1a1a] relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-[#e99b63] rounded-full opacity-10 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 sm:mb-6 text-[#e99b63]">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto">
            I'm excited to connect and explore opportunities in frontend development.
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
              <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63] flex-shrink-0" />
                <p className="text-sm sm:text-base text-[#e99b63]">
                  Gokarneshwor, Kathmandu, Nepal
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63] flex-shrink-0" />
                <a
                  href="tel:+9779808002930"
                  className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded"
                  aria-label="Phone number"
                >
                  +977-9808002930
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63] flex-shrink-0" />
                <a
                  href="mailto:sakshyamshrestha111@gmail.com"
                  className="text-sm sm:text-base text-[#e99b63] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] rounded break-all"
                  aria-label="Email Sakshyam Shrestha"
                >
                  sakshyamshrestha111@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b63] flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/sakshyam-shrestha-8670112a3/"
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
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-green-300">Message sent successfully!</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-900/50 border border-red-500 rounded-lg">
                <span className="text-red-300">Failed to send message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e99b63] focus:border-transparent transition-all"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e99b63] focus:border-transparent transition-all"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e99b63] focus:border-transparent transition-all resize-vertical min-h-[100px]"
                  placeholder="Your Message"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-2 sm:py-2.5 bg-[#e99b63] text-white rounded-lg hover:bg-[#d88a52] disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#e99b63] focus:ring-offset-2 focus:ring-offset-gray-800 font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;