'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiArrowUp } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { contactData, navigationData } from '@/data/mockData';

const Footer = () => {
  const getHref = (name: string) => {
    switch (name.toLowerCase()) {
      case 'home':
        return '/';
      case 'about':
        return '/about';
      case 'articles':
      case 'media coverage':
        return '/articles';
      case 'events':
        return '/events';
      case 'contact':
        return '/contact';
      default:
        return '/';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-neutral-800 text-white">
      {/* Enhanced Responsive Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-8 xs:py-10 sm:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">
              Stay Connected with Knowledge
            </h3>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-8 text-primary-100 max-w-xs xs:max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and be the first to know about new resources, events, and research publications.
            </p>
            <div className="max-w-xs xs:max-w-sm sm:max-w-md mx-auto flex flex-col xs:flex-row gap-3 xs:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-600 font-semibold px-4 xs:px-6 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg hover:bg-primary-50 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Responsive Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-8 xs:py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Enhanced Library Info */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 xs:space-x-3 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="MLRC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white leading-tight">
                  {navigationData.logo}
                </h3>
                <p className="text-xs xs:text-sm text-neutral-300">Research Center</p>
              </div>
            </div>
            <p className="text-sm xs:text-base text-neutral-300 leading-relaxed mb-4 xs:mb-6 max-w-full sm:max-w-md">
              Founded in July 2023, MLRC is dedicated to building a conscious 
              Madheshi intelligentsia through research, discussion, and knowledge production 
              focused on the Madhesh region of Nepal.
            </p>
            <div className="space-y-2 xs:space-y-3">
              <div className="flex items-start space-x-2 xs:space-x-3">
                <HiLocationMarker className="w-4 h-4 xs:w-5 xs:h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs xs:text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {contactData.address.street}, {contactData.address.city}
                </span>
              </div>
              <div className="flex items-center space-x-2 xs:space-x-3">
                <HiPhone className="w-4 h-4 xs:w-5 xs:h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`tel:${contactData.phone}`}
                  className="text-xs xs:text-sm sm:text-base text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {contactData.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 xs:space-x-3">
                <HiMail className="w-4 h-4 xs:w-5 xs:h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${contactData.email}`}
                  className="text-xs xs:text-sm sm:text-base text-neutral-300 hover:text-primary-400 transition-colors duration-200 break-all"
                >
                  {contactData.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 xs:space-y-3">
              {navigationData.menuItems.map((item) => (
                <li key={item.name}>
                  <Link href={getHref(item.name)}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="text-xs xs:text-sm sm:text-base text-neutral-300 hover:text-primary-400 transition-all duration-200 cursor-pointer inline-block"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 text-white">Resources</h4>
            <ul className="space-y-2 xs:space-y-3">
              {[
                { name: 'Media Coverage', href: '/articles' },
                { name: 'Event Timeline', href: '/timeline' },
                { name: 'Madhesh Discourse', href: '/events' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'About MLRC', href: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="text-xs xs:text-sm sm:text-base text-neutral-300 hover:text-primary-400 transition-all duration-200 cursor-pointer inline-block"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Enhanced Social Media & Back to Top */}
        <motion.div
          variants={itemVariants}
          className="mt-6 xs:mt-8 sm:mt-10 pt-4 xs:pt-6 border-t border-neutral-700 flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0"
        >
          <div className="flex space-x-3 xs:space-x-4 sm:space-x-5">
            {[
              { icon: FaFacebook, href: contactData.socialMedia.facebook, color: 'hover:text-blue-400' },
              { icon: FaTwitter, href: contactData.socialMedia.twitter, color: 'hover:text-blue-300' },
              { icon: FaInstagram, href: contactData.socialMedia.instagram, color: 'hover:text-pink-400' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-neutral-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-neutral-700`}
              >
                <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 p-2 xs:p-3 rounded-lg hover:bg-neutral-700 flex items-center space-x-2"
            title="Back to Top"
          >
            <HiArrowUp className="w-4 h-4 xs:w-5 xs:h-5" />
            <span className="text-xs xs:text-sm hidden xs:block">Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Copyright */}
      <div className="bg-neutral-900 py-4 xs:py-6">
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-neutral-400"
          >
            <p className="text-xs xs:text-sm text-center sm:text-left">
              © 2025 Madhesh Library & Research Center. All rights reserved.
            </p>
            <div className="flex flex-col xs:flex-row xs:space-x-2 text-center sm:text-right text-xs xs:text-sm">
              <span className="text-neutral-500">
                Developed by
              </span>
              <a 
                href="https://zwickytechnology.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
              >
                Zwicky Technology
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;