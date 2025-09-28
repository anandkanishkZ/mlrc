'use client';

import { motion } from 'framer-motion';
import { HiEye, HiHeart, HiLightBulb, HiUsers } from 'react-icons/hi';
import { aboutData } from '@/data/mockData';
import Image from 'next/image';

const About = () => {
  const iconMap = {
    'Knowledge Access': HiLightBulb,
    'Cultural Preservation': HiHeart,
    'Research Excellence': HiEye,
    'Community Service': HiUsers,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              {aboutData.title}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {aboutData.description}
            </p>
          </motion.div>

          {/* Mission and Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/library-photo.jpg"
                  alt="Madhesh Library & Research Center - Our Facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Photo caption overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-medium text-neutral-800">MLRC Library Space</p>
                    <p className="text-xs text-neutral-600">Aloknagar, Kathmandu</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-600">
                <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                  <HiEye className="w-6 h-6 mr-3" />
                  Our Mission
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>

              <div className="bg-secondary-50 p-8 rounded-2xl border-l-4 border-secondary-600">
                <h3 className="text-2xl font-bold text-secondary-800 mb-4 flex items-center">
                  <HiLightBulb className="w-6 h-6 mr-3" />
                  Our Vision
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {aboutData.vision}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-neutral-800 mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.values.map((value, index) => {
                const IconComponent = iconMap[value.title as keyof typeof iconMap];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="card text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-neutral-800 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Research Journey?
            </h3>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of researchers, students, and knowledge seekers who trust us.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#media-coverage')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Media Coverage
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;