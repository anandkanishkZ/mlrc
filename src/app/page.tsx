'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import TimelineScroll from '@/components/TimelineScroll';
import { motion } from 'framer-motion';
import { HiDocument, HiCalendar, HiMail } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: HiDocument,
      title: "Research Articles", 
      description: "Read latest scholarly publications",
      link: "/articles",
      color: "bg-secondary-500"
    },
    {
      icon: HiCalendar,
      title: "Events & Workshops",
      description: "Join our educational programs",
      link: "/events", 
      color: "bg-accent-500"
    },
    {
      icon: HiMail,
      title: "Contact Us",
      description: "Get in touch with our research team",
      link: "/contact",
      color: "bg-primary-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Explore Our Services
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Discover the wealth of resources and services available at Madhesh Library & Research Center
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link key={service.title} href={service.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="card text-center group cursor-pointer"
                  >
                    <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600">
                      {service.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                  About Madhesh Library
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Established as a beacon of knowledge and cultural preservation, Madhesh Library & Research Center serves as a premier institution dedicated to advancing education, research, and cultural understanding.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Comprehensive academic resources",
                    "Cultural heritage preservation", 
                    "Research excellence support",
                    "Community service commitment"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-neutral-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Learn More About Us
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Library Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-primary-500 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
              <p className="text-xl text-primary-100">
                Making knowledge accessible to thousands of researchers and students
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Books & Manuscripts" },
                { number: "2,500+", label: "Research Papers" },
                { number: "5,000+", label: "Digital Resources" },
                { number: "50+", label: "Events Annually" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary-200">
                    {stat.number}
                  </div>
                  <div className="text-primary-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-primary-50 rounded-2xl p-12"
            >
              <HiMail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Ready to Begin Your Research Journey?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Get in touch with our team to learn more about our services and research initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Contact Us Today
                  </motion.button>
                </Link>
                <Link href="/articles">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline"
                  >
                    Read Articles
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineScroll />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}