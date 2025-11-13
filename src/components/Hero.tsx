'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRegCalendarCheck, FaUserTie, FaUsers, FaAward } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const trustIndicators = [
    { icon: <FaUserTie />, text: '15+ שנים של ניסיון' },
    { icon: <FaUsers />, text: '1000+ לקוחות מרוצים' },
    { icon: <FaAward />, text: 'זכייה בפרסי מצוינות' },
  ];

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] text-right"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#96CEB4]/30 to-[#FFEEAD]/30 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight"
              style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
            >
              משרד עורכי דין מוביל <span className="text-[#96CEB4]">בישראל</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 text-gray-600"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <button
                onClick={scrollToContact}
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#96CEB4] rounded-lg overflow-hidden group"
                style={{
                  boxShadow: '6px 6px 12px rgba(150, 206, 180, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                }}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                <span className="relative flex items-center">
                  <FaRegCalendarCheck className="ml-2" />
                  קבע תור עכשיו
                </span>
              </button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-4 mt-12"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg"
                  style={{
                    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.05), -2px -2px 6px rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <span className="text-[#96CEB4] ml-2">{indicator.icon}</span>
                  <span className="text-gray-700 text-sm font-medium">{indicator.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-lg h-[400px] md:h-[500px]">
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#96CEB4]/40 to-[#FFEEAD]/40 backdrop-blur-sm z-10 mix-blend-overlay"></div>
                <Image
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                  alt="משרד עורכי דין דלתא - עורכי דין מובילים בתחום הבידור"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFEEAD]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#96CEB4]/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;