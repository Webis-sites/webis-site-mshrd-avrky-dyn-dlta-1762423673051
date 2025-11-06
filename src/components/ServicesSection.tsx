'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, Utensils, MessageSquare, Briefcase, Shield, FileText } from 'lucide-react';

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
      icon: <Scale className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'ייצוג משפטי בתעשיית המזון',
      description: 'ייצוג משפטי מלא בכל הנוגע לתעשיית המזון, תקנות בריאות, רישוי ותקני איכות.',
      icon: <Utensils className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'ניהול משא ומתן',
      description: 'ניהול משא ומתן אסטרטגי ומקצועי עבור עסקאות מורכבות, חוזים ושותפויות עסקיות.',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'ליווי עסקאות',
      description: 'ליווי משפטי מלא לאורך כל תהליך העסקה, מהערכת נאותות ועד לחתימה וסגירה.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: 5,
      title: 'הגנה על קניין רוחני',
      description: 'הגנה מקיפה על זכויות קניין רוחני, סימני מסחר, פטנטים וזכויות יוצרים בישראל ובעולם.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      id: 6,
      title: 'ייעוץ רגולטורי',
      description: 'ייעוץ מקצועי בנושאי רגולציה, תקינה ועמידה בדרישות חוק בתחומי הטכנולוגיה והמזון.',
      icon: <FileText className="w-8 h-8" />,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 focus-within:ring-2 focus-within:ring-[#588C7E] focus-within:ring-offset-2"
              tabIndex={0}
              role="article"
              aria-labelledby={`service-title-${service.id}`}
            >
              {/* Accent Border */}
              <div className="absolute top-0 right-0 w-1 h-16 bg-[#D4A5A5] rounded-tr-xl rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Container */}
              <div className="flex justify-end mb-4">
                <div className="p-3 bg-[#588C7E] bg-opacity-10 rounded-lg text-[#588C7E] group-hover:bg-opacity-20 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3
                id={`service-title-${service.id}`}
                className="text-xl font-bold text-gray-900 text-right mb-3 group-hover:text-[#588C7E] transition-colors duration-300"
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 text-right leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#588C7E] to-[#D4A5A5] opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 h-px bg-gradient-to-l from-[#588C7E] via-[#D4A5A5] to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;