'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const FinalCTA: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleCTAClick = (): void => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="final-cta"
      dir="rtl"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4ECDC4] via-[#588C7E] to-[#3a6d61] py-20 px-4"
      ref={ref}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Legal office background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/90 via-[#588C7E]/85 to-[#3a6d61]/90"></div>
      </div>

      {/* Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl w-full mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 lg:p-16">
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-right mb-6 leading-tight"
          >
            מוכנים לקבל ייצוג משפטי מקצועי?
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-white/95 text-right mb-8 leading-relaxed max-w-3xl mr-auto"
          >
            אל תחכו עד שיהיה מאוחר מדי. קבלו ייעוץ משפטי מקצועי מהמומחים המובילים בתחום החינוך. 
            אנחנו כאן כדי להגן על הזכויות שלכם ולהבטיח את העתיד שלכם.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 justify-end"
          >
            <div className="flex items-center gap-3 text-right">
              <span className="text-white text-base md:text-lg font-medium">
                פגישת ייעוץ ראשונית ללא התחייבות
              </span>
              <FaCheckCircle className="text-white text-2xl flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 text-right">
              <span className="text-white text-base md:text-lg font-medium">
                ניסיון של שנים רבות בתחום
              </span>
              <FaCheckCircle className="text-white text-2xl flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 text-right">
              <span className="text-white text-base md:text-lg font-medium">
                זמינות 24/7
              </span>
              <FaCheckCircle className="text-white text-2xl flex-shrink-0" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <motion.button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: isHovered
                  ? '0 20px 60px rgba(0, 0, 0, 0.4)'
                  : '0 10px 40px rgba(0, 0, 0, 0.3)',
              }}
              className="group relative bg-white text-[#588C7E] px-10 md:px-14 py-5 md:py-6 rounded-2xl text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 hover:bg-opacity-95 shadow-2xl overflow-hidden"
              aria-label="קבע תור עכשיו"
            >
              {/* Animated Background Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4]/20 to-[#588C7E]/20 rounded-2xl"
              ></motion.div>

              {/* Button Content */}
              <span className="relative flex items-center gap-4 justify-center">
                <motion.span
                  animate={{ x: isHovered ? -8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowLeft className="text-2xl md:text-3xl" />
                </motion.span>
                <span>קבע תור עכשיו</span>
              </span>

              {/* Neumorphic Shadow Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-inner opacity-20 pointer-events-none"></div>
            </motion.button>
          </motion.div>

          {/* Urgency Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center md:text-right text-white/90 text-sm md:text-base mt-6 font-medium"
          >
            ⏰ מקומות מוגבלים - אל תפספסו את ההזדמנות לקבל ייצוג משפטי מהשורה הראשונה
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        ></motion.div>
      </motion.div>

      {/* Additional Floating Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-20 w-24 h-24 bg-white/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-32 right-32 w-32 h-32 bg-white/20 rounded-full blur-xl"
      ></motion.div>
    </section>
  );
};

export default FinalCTA;