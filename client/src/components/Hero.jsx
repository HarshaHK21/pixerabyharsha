import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-neon-purple/30 mb-6"
          >
            <Sparkles size={16} className="text-neon-purple" />
            <span className="text-sm font-medium text-gray-300">Welcome to Pixera by Harsha</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block mb-2">Elevate Your Brand's</span>
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-gold bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>

          {/* Sub Headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            We create stunning visual identities and digital experiences that set your brand apart. From concept to execution, we deliver top-tier creative design solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-black font-semibold group"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(182, 36, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-neon-blue text-neon-blue font-semibold hover:bg-neon-blue/10 transition"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-neon-purple/30 rounded-lg"
          animate={{
            y: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-20 h-20 border-2 border-neon-blue/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
