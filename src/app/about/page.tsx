'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { HiEye, HiHeart, HiLightBulb, HiUsers } from 'react-icons/hi';
import { aboutData } from '@/data/mockData';
import Image from 'next/image';

export default function AboutPage() {
  const iconMap = {
    'Madheshi Perspective': HiLightBulb,
    'Critical Engagement': HiHeart,
    'Digital Access': HiEye,
    'Youth Empowerment': HiUsers,
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary-500 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Discover our mission, vision, and commitment to advancing knowledge and preserving cultural heritage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                  {aboutData.title}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  {aboutData.description}
                </p>
                <div className="space-y-6">
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">Our Mission</h3>
                    <p className="text-neutral-700">{aboutData.mission}</p>
                  </div>
                  <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-600">
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Our Vision</h3>
                    <p className="text-neutral-700">{aboutData.vision}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/library-photo.jpg"
                    alt="Madhesh Library & Research Center - Our Space"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Photo caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <p className="text-base font-semibold text-neutral-800">MLRC Reading Hall</p>
                      <p className="text-sm text-neutral-600">Research & Study Environment</p>
                      <p className="text-xs text-primary-600 font-medium">📍 Aloknagar, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">Our Core Values</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                These fundamental principles guide everything we do at Madhesh Library & Research Center.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.values.map((value, index) => {
                const IconComponent = iconMap[value.title as keyof typeof iconMap];
                
                if (!IconComponent) {
                  console.warn(`No icon found for: "${value.title}"`);
                  return null;
                }
                
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="card text-center"
                  >
                    <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>




      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}