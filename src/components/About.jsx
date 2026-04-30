import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    'Creative Excellence',
    'Client-Centric Approach',
    'Innovation & Quality',
    'Timely Delivery',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">Pixera</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
            </div>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At Pixera by Harsha, we are passionate about creating exceptional digital experiences and brand identities. With a team of talented designers, strategists, and creatives, we collaborate with brands to tell their unique stories and elevate their digital presence.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our creative process is built on research, strategy, and artistic excellence. We believe that great design is not just aesthetically beautiful—it's strategic, purposeful, and drives real results.
            </p>

            {/* Values */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value) => (
                <motion.div
                  key={value}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={24} className="text-neon-purple flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-96 lg:h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative Elements */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Box */}
              <motion.div
                className="absolute w-64 h-64 border-2 border-neon-purple/30 rounded-2xl"
                animate={{
                  rotate: [0, 5, 0],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Secondary Box */}
              <motion.div
                className="absolute w-48 h-48 border-2 border-neon-blue/30 rounded-full right-0 bottom-0"
                animate={{
                  rotate: [0, -5, 0],
                  x: [0, 20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Accent Circle */}
              <motion.div
                className="absolute w-32 h-32 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-lg left-0 top-0 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Center Glow */}
              <motion.div
                className="absolute w-40 h-40 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Projects', value: '150+' },
            { label: 'Happy Clients', value: '80+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Team Members', value: '20+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-lg bg-dark-card border border-dark-border">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
