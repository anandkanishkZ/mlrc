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
      title: "Library Services", 
      description: "Physical and digital collection of books, research papers about Madhesh with media coverage",
      link: "/articles",
      color: "bg-secondary-600",
      features: ["Historical manuscripts", "Contemporary literature", "Research papers", "Media coverage"]
    },
    {
      icon: HiCalendar,
      title: "Discourse & Dialogue",
      description: "Weekly Madhesh Samvad and book discussion series",
      link: "/events", 
      color: "bg-primary-600",
      features: ["Madhesh Samvad", "Book discussions", "Youth engagement", "Critical analysis"]
    },
    {
      icon: HiMail,
      title: "Research Initiatives",
      description: "In-depth research on Madhesh politics, culture, and history",
      link: "/contact",
      color: "bg-accent-600",
      features: ["Academic collaboration", "Policy research", "Cultural studies", "Historical documentation"]
    }
  ];

  const coreValues = [
    {
      title: "ज्ञान सत्ता (Knowledge as Power)",
      description: "Democratizing information from Madhesh perspectives",
      icon: "📚"
    },
    {
      title: "Inclusivity & Diversity",
      description: "Engaging youths from मधेश यर्थात २२ जिल्ला और मधेश प्रदेश ८ जिल्ला - all districts and communities",
      icon: "🤝"
    },
    {
      title: "Critical Thinking",
      description: "Evidence-based learning beyond personal experiences",
      icon: "🧠"
    },
    {
      title: "Cultural Heritage",
      description: "Preserving history from Janak, Vidyapati, Buddha to contemporary movements",
      icon: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Core Services Section */}
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
                Our Core Services
              </h2>
              <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
                Empowering Madhesh through knowledge, dialogue, and research - building bridges between past and present
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-800 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-center mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-neutral-600 text-sm">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <Link 
                      href={service.link}
                      className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Explore More
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Guided by principles that shape our mission to democratize knowledge and preserve Madhesh heritage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
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
                  About Madhesh Library & Research Center
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  The Madhesh Library & Research Center (MLRC) is a dedicated space for the preservation, dissemination, and critical analysis of knowledge related to <strong>मधेश यर्थात २२ जिल्ला</strong> (Madhesh meaning 22 districts) and <strong>मधेश प्रदेश ८ जिल्ला</strong> (Madhesh Province's 8 districts).
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our mission extends beyond traditional library services - we are a hub for intellectual discourse, cultural preservation, and youth engagement across all districts and communities of the broader Madhesh region.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Physical & digital collection of Madhesh-related materials",
                    "Weekly Madhesh Samvad dialogue series", 
                    "Youth engagement programs across all districts",
                    "Critical analysis beyond personal experiences"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
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
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/library-photo.jpg"
                    alt="Madhesh Library & Research Center Interior"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-transparent to-secondary-900/20 opacity-60"></div>
                  {/* Floating info badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <p className="text-sm font-semibold text-primary-700">🏛️ Est. 2023</p>
                    </div>
                  </motion.div>
                  {/* Bottom info overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gradient-to-r from-primary-600/90 to-secondary-600/90 backdrop-blur-sm rounded-xl p-4 text-white">
                      <p className="font-semibold">Madhesh Library & Research Center</p>
                      <p className="text-sm opacity-90">Preserving Heritage • Building Knowledge</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Impact Section */}
        <section className="section-padding bg-primary-600 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
                To democratize information from Madhesh perspectives and provide a platform for evidence-based learning, 
                preserving our rich heritage from Janak to Vidyapati, Buddha to contemporary movements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "27+", label: "Madhesh Samvad Sessions" },
                { number: "22", label: "Madhesh Districts" },
                { number: "Weekly", label: "Book Discussions" },
                { number: "1000+", label: "Community Members" }
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

        {/* Heritage & Legacy Section */}
        <section className="section-padding bg-gradient-to-br from-secondary-600 to-primary-700 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                Preserving Madhesh Heritage
              </h2>
              <p className="text-xl text-secondary-100 max-w-4xl mx-auto">
                From ancient kingdoms to modern movements - we preserve the continuous thread of Madhesh civilization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  era: "Ancient Legacy",
                  icon: "🏛️",
                  description: "From King Janak's court to Buddha's birthplace, preserving millennia of wisdom",
                  highlights: ["Janakpur heritage", "Buddhist philosophy", "Ancient manuscripts", "Sanskrit literature"]
                },
                {
                  era: "Cultural Renaissance", 
                  icon: "📚",
                  description: "Vidyapati's poetry to folk traditions - celebrating our literary and cultural achievements",
                  highlights: ["Maithili literature", "Folk traditions", "Classical poetry", "Cultural practices"]
                },
                {
                  era: "Contemporary Movements",
                  icon: "✊",
                  description: "Modern political awakening and the ongoing struggle for recognition and rights",
                  highlights: ["Political movements", "Social reforms", "Contemporary struggles", "Future aspirations"]
                }
              ].map((period, index) => (
                <motion.div
                  key={period.era}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{period.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-secondary-100">
                    {period.era}
                  </h3>
                  <p className="text-white/90 mb-6 text-center">
                    {period.description}
                  </p>
                  <ul className="space-y-2">
                    {period.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-secondary-100 text-sm">
                        <span className="w-2 h-2 bg-secondary-300 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Movement CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12"
            >
              <div className="text-6xl mb-6">🤝</div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Join the Madhesh Knowledge Movement
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Be part of our community that believes in ज्ञान सत्ता (Knowledge as Power). 
                Whether you're a researcher, student, or passionate about Madhesh heritage - there's a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Join Madhesh Samvad
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
                <Link href="/articles">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline"
                  >
                    View Media Coverage
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