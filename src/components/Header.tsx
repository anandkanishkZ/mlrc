'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiOutlineSearch, HiChevronRight, HiSearch } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationData, contactData } from '@/data/mockData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced body scroll prevention for mobile
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
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
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-20 min-w-0 gap-4">
          {/* Desktop Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center cursor-pointer group"
            >
              <Image
                src="/text-logo.png"
                alt="Madhesh Library & Research Center"
                width={300}
                height={60}
                className="h-8 md:h-10 lg:h-12 xl:h-14 w-auto max-w-[200px] md:max-w-[250px] lg:max-w-[280px] object-contain transition-all duration-300 group-hover:brightness-110"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-2 xl:space-x-4 2xl:space-x-6">
            {navigationData.menuItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link href={getHref(item.name)}>
                  <motion.div
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-200 relative cursor-pointer text-sm lg:text-base ${
                      isActive(item.name)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary-600 transition-all duration-200 ${
                      isActive(item.name) ? 'w-6' : 'w-0 group-hover:w-6'
                    }`}></span>
                  </motion.div>
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Search Button */}
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-200 ${
                showSearch 
                  ? 'text-primary-600 bg-primary-50 shadow-sm' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <HiSearch className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center h-16 xs:h-18 relative">
          {/* Mobile Menu Button - Left */}
          <div className="absolute left-0 z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={`p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-200 ${
                isOpen 
                  ? 'text-primary-600 bg-primary-50 shadow-sm' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <HiX className="w-5 h-5 xs:w-6 xs:h-6" />
                ) : (
                  <HiMenu className="w-5 h-5 xs:w-6 xs:h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Centered Mobile Text Logo */}
          <Link href="/" className="flex-1 flex justify-center items-center px-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex justify-center cursor-pointer"
            >
              <Image
                src="/text-logo.png"
                alt="Madhesh Library & Research Center"
                width={300}
                height={60}
                className="h-7 xs:h-8 sm:h-9 md:h-10 w-auto max-w-[180px] xs:max-w-[200px] sm:max-w-[220px] object-contain transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Search Button - Right */}
          <div className="absolute right-0 z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-200 ${
                showSearch 
                  ? 'text-primary-600 bg-primary-50 shadow-sm' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <HiSearch className="w-4 h-4 xs:w-5 xs:h-5" />
            </motion.button>
          </div>
        </div>



        {/* Enhanced Responsive Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-neutral-100"
            >
              <div className="px-4 xs:px-6 py-3 xs:py-4 bg-neutral-50/50">
                <div className="relative max-w-md mx-auto lg:max-w-lg">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, events, resources..."
                    className="w-full pl-10 pr-4 py-2.5 xs:py-3 text-sm xs:text-base border border-neutral-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm"
                    autoFocus
                  />
                  <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 xs:w-5 xs:h-5" />
                  
                  {/* Clear Search Button */}
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                    >
                      <HiX className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
                
                {/* Search Suggestions */}
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs xs:text-sm text-neutral-500 text-center"
                  >
                    Press Enter to search for "{searchQuery}"
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Responsive Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-neutral-100 bg-white/95 backdrop-blur-md"
            >
              <div className="px-4 xs:px-6 py-4 xs:py-6 space-y-1">
                {navigationData.menuItems.map((item, index) => (
                  <div key={item.name}>
                    <Link href={getHref(item.name)}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between py-3 px-4 text-base font-medium rounded-xl transition-all duration-200 cursor-pointer touch-target ${
                          isActive(item.name)
                            ? 'text-primary-600 bg-primary-50 shadow-sm'
                            : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <HiChevronRight className="w-4 h-4 text-neutral-400" />
                      </motion.div>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;