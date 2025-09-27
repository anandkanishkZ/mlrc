'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiClock, HiUser, HiEye, HiX } from 'react-icons/hi';
import { articlesData } from '@/data/mockData';
import Image from 'next/image';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

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
    <section id="articles" className="section-padding bg-white">
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
              {articlesData.title}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {articlesData.description}
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.articles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card group cursor-pointer overflow-hidden"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      article.id === 1 ? '1481627834876-6357b2dd7c0e' :
                      article.id === 2 ? '1507003211169-0a1dd7228f2d' :
                      '1434030216411-0b793f4b4173'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <HiUser className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <HiClock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <HiEye className="w-4 h-4" />
                    <span>Read More</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-lg px-8"
            >
              View All Articles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={`https://images.unsplash.com/photo-${
                  selectedArticle.id === 1 ? '1481627834876-6357b2dd7c0e' :
                  selectedArticle.id === 2 ? '1507003211169-0a1dd7228f2d' :
                  '1434030216411-0b793f4b4173'
                }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={selectedArticle.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200"
              >
                <HiX className="w-5 h-5 text-neutral-800" />
              </button>
              <div className="absolute bottom-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedArticle.category}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center justify-between text-sm text-neutral-500 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <HiUser className="w-4 h-4" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <HiClock className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  {selectedArticle.excerpt}
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This is a comprehensive article that delves deep into the subject matter, 
                  providing valuable insights and research findings that contribute to our 
                  understanding of the topic. The research methodology employed ensures 
                  accuracy and reliability of the findings presented.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The implications of this research extend beyond academic circles and have 
                  practical applications in various fields. The detailed analysis and 
                  evidence-based conclusions make this a valuable resource for researchers, 
                  students, and practitioners alike.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  For the complete article with detailed references, methodology, and 
                  comprehensive analysis, please visit our physical library or contact 
                  our research department for digital access.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-primary"
                >
                  Close Article
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Articles;