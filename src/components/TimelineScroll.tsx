'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TimelineScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to create the 3D effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -1000]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 75]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const strugglesAndChallenges = [
    {
      issue: "Colonisation",
      description: "Historical and ongoing patterns of external control over Madheshi land, resources, and political autonomy, limiting self-governance and decision-making power."
    },
    {
      issue: "Racism and Discrimination", 
      description: "Systematic prejudice and discriminatory practices against Madheshi people based on ethnicity, language, and cultural identity in various spheres of life."
    },
    {
      issue: "Slavery",
      description: "Historical and modern forms of bonded labor, forced work, and exploitative labor practices that have particularly affected marginalized Madheshi communities."
    },
    {
      issue: "Displacement",
      description: "Forced migration and relocation of Madheshi communities from their ancestral lands due to political conflicts, development projects, and discriminatory policies."
    },
    {
      issue: "Ethnic Cleansing & Riots",
      description: "Organized violence and systematic attacks targeting Madheshi communities, including mass displacement and destruction of property and lives."
    },
    {
      issue: "Denial of Fundamental Rights",
      description: "Systematic exclusion from basic constitutional rights including citizenship, voting rights, property ownership, and equal treatment under the law."
    },
    {
      issue: "Economic Exploitation",
      description: "Unfair extraction of wealth and resources from Madhesh region while denying equitable development, employment opportunities, and economic benefits to local populations."
    },
    {
      issue: "Cultural Imperialism",
      description: "Forced imposition of dominant cultural practices, languages, and values while suppressing and marginalizing indigenous Madheshi culture, traditions, and identity."
    },
    {
      issue: "Unfair Laws",
      description: "Discriminatory legislation and legal frameworks that systematically disadvantage Madheshi people and communities in areas of citizenship, land rights, and political participation."
    },
    {
      issue: "Border Area Torture",
      description: "Physical and psychological violence, harassment, and abuse of Madheshi people in border regions by security forces and administrative authorities."
    },
    {
      issue: "Extrajudicial Killings",
      description: "Unlawful murders and assassinations of Madheshi activists, leaders, and civilians by state and non-state actors without due process of law."
    },
    {
      issue: "Lack of Development",
      description: "Systematic neglect and underdevelopment of Madhesh region in terms of infrastructure, education, healthcare, and economic opportunities despite contributing significantly to national economy."
    }
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white"></div>
      
      {/* Header */}
      <div className="relative z-30 text-center pt-24 pb-16 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-500 drop-shadow-sm"
        >
          Struggles of Madhesh
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Understanding the challenges and injustices faced by the Madheshi people throughout history
        </motion.p>
      </div>

      {/* 3D Scrolling Content */}
      <div className="relative h-screen flex items-start justify-center perspective-1000 pt-8">
        <motion.div
          style={{ 
            y,
            rotateX,
            opacity,
            transformStyle: "preserve-3d"
          }}
          className="text-center space-y-8 max-w-5xl mx-auto px-8"
        >
          {strugglesAndChallenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, z: -100 }}
              whileInView={{ opacity: 1, z: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              className="mb-12 transform-gpu"
            >
              <div className="text-secondary-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide drop-shadow-sm">
                {item.issue}
              </div>
              <div className="text-neutral-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-normal">
                {item.description}
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mt-8 opacity-60"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-neutral-50/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TimelineScroll;