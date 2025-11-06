'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHandshake, FaSearch, FaChartLine, FaRocket, FaHeadset } from 'react-icons/fa';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'פגישת היכרות ראשונית',
      description: 'פגישה אישית להבנת הצרכים והאתגרים המשפטיים שלך, ללא התחייבות',
      icon: <FaHandshake className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'ניתוח מקרה מעמיק',
      description: 'בדיקה יסודית של כל המסמכים והפרטים הרלוונטיים לבניית תמונה מלאה',
      icon: <FaSearch className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'בניית אסטרטגיה משפטית',
      description: 'פיתוח תוכנית פעולה מותאמת אישית המבוססת על ניסיוננו והמומחיות שלנו',
      icon: <FaChartLine className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'ביצוע וליווי',
      description: 'יישום האסטרטגיה בשטח עם ליווי צמוד ותקשורת שוטפת לאורך כל הדרך',
      icon: <FaRocket className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'מעקב והמשך תמיכה',
      description: 'המשך ליווי גם לאחר סיום התיק להבטחת שמירה על הזכויות שלך',
      icon: <FaHeadset className="w-8 h-8" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="work-process-section"
      ref={sectionRef}
      dir="rtl"
      className="w-full py-16 px-4 md:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-right md:text-center"
          >
            תהליך העבודה שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-right md:text-center">
            מסע מובנה ושקוף שמבטיח את הטיפול המיטבי בתיק שלך
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="hidden lg:block relative"
        >
          {/* Connecting Line */}
          <div className="absolute top-20 right-0 left-0 h-1 bg-gray-200" aria-hidden="true">
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-full bg-[#588C7E]"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="flex flex-col items-center text-center relative"
              >
                {/* Number Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                  className="w-16 h-16 rounded-full bg-[#588C7E] text-white flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-lg"
                  aria-label={`שלב ${step.id}`}
                >
                  {step.id}
                </motion.div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#D4A5A5] bg-opacity-20 flex items-center justify-center text-[#588C7E] mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 text-right leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="lg:hidden relative"
        >
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 right-8 w-1 bg-gray-200" aria-hidden="true">
            <motion.div
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="w-full bg-[#588C7E]"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="flex gap-6 relative"
              >
                {/* Number Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                  className="w-16 h-16 flex-shrink-0 rounded-full bg-[#588C7E] text-white flex items-center justify-center text-2xl font-bold relative z-10 shadow-lg"
                  aria-label={`שלב ${step.id}`}
                >
                  {step.id}
                </motion.div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#D4A5A5] bg-opacity-20 flex items-center justify-center text-[#588C7E] mb-3 mr-auto">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 text-right leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-gray-700 mb-6 text-right md:text-center">
            מוכנים להתחיל? אנחנו כאן כדי לעזור לך בכל שלב
          </p>
          <button
            className="bg-[#588C7E] hover:bg-[#4a7569] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            aria-label="צור קשר עכשיו"
          >
            צור קשר עכשיו
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;