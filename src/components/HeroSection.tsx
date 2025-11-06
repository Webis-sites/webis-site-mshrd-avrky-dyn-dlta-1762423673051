'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero-section-delta-law"
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt="Professional law office background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(88, 140, 126, 0.92) 0%, rgba(212, 165, 165, 0.88) 100%)`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-right leading-tight"
            style={{ direction: 'rtl' }}
          >
            משרד עורכי דין מוביל בישראל
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 text-right max-w-3xl mx-auto leading-relaxed"
            style={{ direction: 'rtl' }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* Subtext - Business Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-10 text-right max-w-2xl mx-auto leading-relaxed"
            style={{ direction: 'rtl' }}
          >
            אנחנו משרד עורכי דין מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <button
              className="group relative px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
              style={{ backgroundColor: '#588C7E' }}
              aria-label="קבע תור עכשיו - לחץ כדי לקבוע פגישה עם משרד עורכי דין דלתא"
            >
              <span className="relative z-10">קבע תור עכשיו</span>
              <div
                className="absolute inset-0 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                style={{ direction: 'rtl' }}
              />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/80 text-sm sm:text-base"
            dir="rtl"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-right">ניסיון של שנים רבות</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-right">מומחים בטכנולוגיה ומזון</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-right">שירות מקצועי ואיכותי</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}