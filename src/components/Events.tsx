'use client';

import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiLocationMarker, HiUsers } from 'react-icons/hi';
import { eventsData } from '@/data/mockData';
import Image from 'next/image';

const Events = () => {
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
    <section id="events" className="section-padding bg-neutral-50">
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
              {eventsData.title}
            </h2>
            <div className="w-24 h-1 bg-secondary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {eventsData.description}
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
              Upcoming Events
            </h3>
            {eventsData.upcomingEvents.length === 0 ? (
              <div className="text-center py-12">
                <HiCalendar className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <p className="text-xl text-neutral-600 mb-2">No upcoming events scheduled</p>
                <p className="text-neutral-500">Check back soon for new programs and discussions!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventsData.upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card group overflow-hidden"
                >
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        event.id === 1 ? '1524178232319-70d503eec903' :
                        event.id === 2 ? '1507003211169-0a1dd7228f2d' :
                        '1434030216411-0b793f4b4173'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-neutral-800 group-hover:text-secondary-600 transition-colors duration-200">
                      {event.title}
                    </h4>

                    <p className="text-neutral-600 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-2 text-sm text-neutral-500">
                      <div className="flex items-center space-x-2">
                        <HiCalendar className="w-4 h-4 text-secondary-600" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiClock className="w-4 h-4 text-secondary-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiLocationMarker className="w-4 h-4 text-secondary-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 py-2 bg-gradient-to-r from-secondary-600 to-primary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <HiUsers className="w-4 h-4" />
                      <span>Register Now</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
              </div>
            )}
          </motion.div>

          {/* Past Events */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
              Past Events
            </h3>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                {eventsData.pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-secondary-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-neutral-800 mb-1">
                        {event.title}
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        {event.description}
                      </p>
                    </div>
                    <div className="text-right text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <HiCalendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Events
            </h3>
            <p className="text-xl mb-8 text-secondary-100">
              Subscribe to our newsletter and never miss an event!
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-secondary-600 font-semibold px-6 py-3 rounded-lg hover:bg-secondary-50 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;