import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/pixerabyharsha', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { title: 'Company', links: ['About', 'Services', 'Portfolio', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'FAQ', 'Support', 'Documentation'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'License'] },
  ];

  return (
    <footer id="contact" className="bg-dark-bg border-t border-dark-border pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your brand?</h3>
            <p className="text-gray-400 text-lg mb-6">Let's work together to create something extraordinary for your business.</p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:hello@pixera.com"
              className="flex-1 px-6 py-4 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-black font-semibold text-center hover:shadow-glow-purple transition inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-neon-blue text-neon-blue font-semibold text-center hover:bg-neon-blue/10 transition inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us
              <Phone size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-dark-border">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-4">
              Pixera by Harsha
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming brands through creative design and strategic digital solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-neon-purple hover:border-neon-purple transition"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-neon-blue transition inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-0 h-0.5 bg-neon-blue group-hover:w-2 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-4">
              <a href="https://pixerabyharshalive.vercel.app/#home" className="flex items-center gap-3 text-gray-400 hover:text-neon-blue transition group">
                <Mail size={20} className="text-neon-purple group-hover:scale-110 transition" />
                <span>pixerabyharshalive.vercel.app</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-neon-blue transition group">
                <Phone size={20} className="text-neon-purple group-hover:scale-110 transition" />
                <span>+94 78 84 88 969</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="text-neon-purple flex-shrink-0" />
                <span>BY harshakarunarathna.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; 2024 Pixera by Harsha. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-neon-blue transition">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue transition">Terms of Service</a>
            <a href="#" className="hover:text-neon-blue transition">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
