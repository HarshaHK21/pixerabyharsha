import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Digital Brand Strategy',
      category: 'Branding',
      image: '/src/assets/Brand (2).jpg',
    },
    {
      id: 2,
      title: 'Modern UI Design',
      category: 'UI/UX',
      image: '/src/assets/UIUX (1).jpg',
    },
    {
      id: 3,
      title: 'Social Campaign',
      category: 'Marketing',
      image: '/src/assets/Social Campaign.jpg',
    },
    {
      id: 4,
      title: 'Creative Direction',
      category: 'Branding',
      image: '/src/assets/Creative Direction.jpg',
    },
    {
      id: 5,
      title: 'Tech Product Design',
      category: 'Web Development',
      image: '/src/assets/Tech Product Design.jpg',
    },
    {
      id: 6,
      title: 'Content Production',
      category: 'Content',
      image: '/src/assets/Content Production (1).jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Showcasing our latest creative work and design excellence
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-dark-border bg-dark-card cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content Overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0,
                    y: hoveredId === item.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye size={32} className="text-neon-blue mb-2" />
                  <span className="text-sm font-medium text-neon-blue">View Project</span>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-xs font-semibold text-neon-purple mb-2">{item.category}</p>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>

              {/* Border Accent */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 rounded-lg border-2 border-neon-blue text-neon-blue font-semibold hover:bg-neon-blue/10 transition"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
