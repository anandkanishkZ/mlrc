'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiSearch } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationData, contactData } from '@/data/mockData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  const getHref = (name: string) => {
    switch (name.toLowerCase()) {
      case 'home':
        return '/';
      case 'about':
        return '/about';
      case 'timeline':
        return '/timeline';
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

  const isActive = (name: string) => {
    const href = getHref(name);
    return pathname === href;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 min-w-0 gap-2">
          {/* Logo Section */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center cursor-pointer group min-w-0 flex-shrink-0"
            >
              {/* Desktop Text Logo */}
              <div className="hidden md:block">
                <Image
                  src="/text-logo.png"
                  alt="Madhesh Library & Research Center"
                  width={280}
                  height={56}
                  className="h-10 md:h-12 lg:h-14 w-auto max-w-[250px] object-contain transition-all duration-300 group-hover:brightness-110"
                  priority
                />
              </div>
              
              {/* Mobile Logo with Text */}
              <div className="flex items-center md:hidden max-w-[200px]">
                <Image
                  src="/logo.png"
                  alt="MLRC Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
                />
                <div className="ml-2 min-w-0 overflow-hidden">
                  <h1 className="text-sm sm:text-base font-bold text-neutral-800 leading-tight truncate">
                    MLRC
                  </h1>
                  <p className="text-xs text-neutral-600 leading-none truncate hidden xs:block">
                    Research Center
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationData.menuItems.map((item, index) => (
              <Link key={item.name} href={getHref(item.name)}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`font-medium transition-colors duration-200 relative group cursor-pointer ${
                    isActive(item.name)
                      ? 'text-primary-500'
                      : 'text-neutral-700 hover:text-primary-500'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-600 transition-all duration-200 ${
                    isActive(item.name) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu & Search */}
          <div className="flex items-center flex-shrink-0">
            {/* Search Button - Hidden on very small screens */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearch(!showSearch)}
              className="hidden sm:block lg:block p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200 mr-2"
            >
              <HiSearch className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200 relative z-50"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <HiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <HiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: showSearch ? 'auto' : 0, 
            opacity: showSearch ? 1 : 0 
          }}
          className="overflow-hidden"
        >
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search media coverage or events..."
                className="w-full p-3 pl-10 pr-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Mobile Sidebar Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sliding Sidebar */}
      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="lg:hidden fixed top-0 left-0 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 min-w-0">
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <Image
              src="/logo.png"
              alt="MLRC Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-neutral-800 truncate">MLRC</h2>
              <p className="text-xs text-neutral-600 truncate">Research Center</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
            className="p-2 text-neutral-600 hover:text-primary-600 transition-colors flex-shrink-0"
          >
            <HiX className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Search in Sidebar for small screens */}
        <div className="px-4 py-4 border-b border-neutral-200 sm:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 py-2">
          {navigationData.menuItems.map((item, index) => (
            <Link key={item.name} href={getHref(item.name)} className="block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0
                }}
                transition={{ delay: isOpen ? index * 0.1 : 0, duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-6 py-4 mx-3 my-1 rounded-lg transition-all duration-200 cursor-pointer group ${
                  isActive(item.name)
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 border-l-4 border-transparent'
                }`}
              >
                <span className="font-medium text-base">{item.name}</span>
                <svg 
                  className={`w-4 h-4 transition-opacity duration-200 ${
                    isActive(item.name) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto p-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-600 text-center mb-3">
            Building Conscious Intelligentsia
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={contactData.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-600 transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={contactData.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-600 transition-colors"
            >
              <FaTwitter className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={contactData.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-600 transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;