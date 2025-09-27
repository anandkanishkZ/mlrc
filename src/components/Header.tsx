'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiSearch } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/data/mockData';

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
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="MLRC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary-500">
                  {navigationData.logo}
                </h1>
                <p className="text-xs text-secondary-500">Research Center</p>
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

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200"
            >
              <HiSearch className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
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
                placeholder="Search articles or events..."
                className="w-full p-3 pl-10 pr-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navigationData.menuItems.map((item, index) => (
              <Link key={item.name} href={getHref(item.name)}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : -20 
                  }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive(item.name)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;