'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'שירותים', href: '/services' },
    { name: 'תיק עבודות', href: '/portfolio' },
    { name: 'מוצרים', href: '/products' },
    { name: 'צור קשר', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'תנאי שימוש', href: '/terms' },
    { name: 'מדיניות פרטיות', href: '/privacy' },
    { name: 'הצהרת נגישות', href: '/accessibility' },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'רחוב הרצל 123, תל אביב, ישראל' },
    { icon: FaPhone, text: '03-1234567' },
    { icon: FaEnvelope, text: 'info@delta-law.co.il' },
  ];

  return (
    <footer id="footer-delta-law" className="bg-[#3a5a52] text-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Business Information Column */}
          <div className="text-right">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4 text-white"
            >
              משרד עורכי דין דלתא
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 mb-6 text-sm leading-relaxed"
            >
              משרד עורכי דין מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. מתמחים במתן שירות מקצועי ואיכותי.
            </motion.p>
            <div className="flex gap-4 justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#D4A5A5' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#588C7E] flex items-center justify-center text-white hover:bg-[#D4A5A5] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:ring-offset-2 focus:ring-offset-[#3a5a52]"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-right">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4 text-white"
            >
              קישורים מהירים
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4A5A5] transition-colors duration-300 inline-block focus:outline-none focus:text-[#D4A5A5] focus:underline"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="text-right">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4 text-white"
            >
              צור קשר
            </motion.h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 justify-end"
                >
                  <span className="text-gray-300 text-sm">{item.text}</span>
                  <item.icon className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="text-right">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4 text-white"
            >
              מידע משפטי
            </motion.h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4A5A5] transition-colors duration-300 inline-block focus:outline-none focus:text-[#D4A5A5] focus:underline"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-600 my-8"
        />

        {/* Copyright Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-400 text-sm"
        >
          <p>© {currentYear} משרד עורכי דין דלתא. כל הזכויות שמורות.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;