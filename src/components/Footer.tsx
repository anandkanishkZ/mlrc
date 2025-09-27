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
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Connected with Knowledge
            </h3>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new resources, events, and research publications.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Library Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.png"
                  alt="MLRC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {navigationData.logo}
                </h3>
                <p className="text-neutral-300">Research Center</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              Founded in July 2023, MLRC is dedicated to building a conscious 
              Madheshi intelligentsia through research, discussion, and knowledge production 
              focused on the Madhesh region of Nepal.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">
                  {contactData.address.street}, {contactData.address.city}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">{contactData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">{contactData.email}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigationData.menuItems.map((item) => (
                <li key={item.name}>
                  <Link href={getHref(item.name)}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Book Lending',
                'Research Assistance',
                'Digital Archives',
                'Study Spaces',
                'Academic Workshops',
                'Cultural Events',
                'Publication Support',
                'Manuscript Preservation'
              ].map((service) => (
                <li key={service}>
                  <span className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-neutral-700 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="flex space-x-6 mb-6 sm:mb-0">
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
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-neutral-400 ${social.color} transition-colors duration-200`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-neutral-400 hover:text-primary-400 transition-colors duration-200"
          >
            <HiArrowUp className="w-5 h-5" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-900 py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm"
          >
            <p>
              © 2025 Madhesh Library & Research Center. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </button>
              <button className="hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;