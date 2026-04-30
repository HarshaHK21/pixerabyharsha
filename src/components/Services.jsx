import React from 'react';
import { Palette, Smartphone, Share2, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Brand Identity',
      description: 'We craft unique visual identities that tell your brand story and resonate with your target audience.',
      icon: Palette,
      color: 'from-neon-purple to-neon-blue',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Stunning user interfaces and experiences that are intuitive, beautiful, and conversion-focused.',
      icon: Smartphone,
      color: 'from-neon-blue to-neon-gold',
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      description: 'Strategic content and campaigns that amplify your brand presence across all social platforms.',
      icon: Share2,
      color: 'from-neon-gold to-neon-purple',
    },
    {
      id: 4,
      title: 'Content Creation',
      description: 'Compelling visual and written content that engages, inspires, and converts your audience.',
      icon: PenTool,
      color: 'from-neon-purple to-neon-gold',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Comprehensive creative solutions tailored to elevate your brand
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -5 }}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-bg rounded-xl border border-dark-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative p-8 rounded-xl border border-dark-border bg-dark-card/50 backdrop-blur-sm group-hover:border-neon-purple/50 transition-colors duration-300 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-dark-card rounded-lg flex items-center justify-center">
                      <IconComponent size={28} className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
