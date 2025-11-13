'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const services: Service[] = [
    {
      id: 1,
      title: 'ייעוץ משפטי בתחום הטכנולוגיה',
      description: 'ייעוץ מקצועי ומעמיק בכל היבטי המשפט הטכנולוגי, כולל הגנת מידע, אבטחת סייבר וחוזים דיגיטליים.',
      icon: <div className="w-8 h-8">⚖️</div>,
    },
    {
      id: 2,
      title: 'ייצוג משפטי בתעשיית המזון',
      description: 'ייצוג משפטי מלא בכל הנוגע לתעשיית המזון, תקנות בריאות, רישוי ותקני איכות.',
      icon: <div className="w-8 h-8">🍽️</div>,
    },
    {
      id: 3,
      title: 'ניהול משא ומתן',
      description: 'ניהול משא ומתן אסטרטגי ומקצועי עבור עסקאות מורכבות, חוזים ושותפויות עסקיות.',
      icon: <div className="w-8 h-8">💬</div>,
    },
    {
      id: 4,
      title: 'ליווי עסקאות',
      description: 'ליווי משפטי מלא לאורך כל תהליך העסקה, מהערכת נאותות ועד לחתימה וסגירה.',
      icon: <div className="w-8 h-8">💼</div>,
    },
    {
      id: 5,
      title: 'הגנה על קניין רוחני',
      description: 'הגנה מקיפה על זכויות קניין רוחני, סימני מסחר, פטנטים וזכויות יוצרים בישראל ובעולם.',
      icon: <div className="w-8 h-8">🛡️</div>,
    },
    {
      id: 6,
      title: 'ייעוץ רגולטורי',
      description: 'ייעוץ מקצועי בנושאי רגולציה, תקינה ועמידה בדרישות חוק בתחומי הטכנולוגיה והמזון.',
      icon: <div className="w-8 h-8">📄</div>,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="services-section"
      ref={sectionRef}
      dir="rtl"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-right mb-4">
            השירותים שלנו
          </h2>
          <div className="w-24 h-1 bg-[#588C7E] mr-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#588C7E] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">
                {service.title}
              </h3>
              <p className="text-gray-600 text-right leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;