'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLaptopCode, FaAppleAlt, FaHandshake, FaTrophy } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      dir="rtl"
    >
      <div className="flex flex-col items-end text-right">
        <div className="mb-4 text-4xl" style={{ color: '#588C7E' }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 text-right">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-right">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-50px' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <FaLaptopCode />,
      title: 'מומחיות בתחום הטכנולוגיה',
      description: 'הבנה עמוקה של הצרכים המשפטיים הייחודיים של תעשיית הטכנולוגיה, כולל קניין רוחני, הגנת מידע ורגולציה דיגיטלית.'
    },
    {
      icon: <FaAppleAlt />,
      title: 'ניסיון בתעשיית המזון',
      description: 'ידע מתמחה בדיני המזון והתקנות הרלוונטיות, כולל בטיחות מזון, תיוג, רישוי ועמידה בתקנים הבינלאומיים.'
    },
    {
      icon: <FaHandshake />,
      title: 'גישה אישית ומסורה',
      description: 'אנו מאמינים ביצירת קשרים ארוכי טווח עם לקוחותינו, תוך מתן שירות מותאם אישית והקשבה לצרכים הייחודיים של כל עסק.'
    },
    {
      icon: <FaTrophy />,
      title: 'שיעור הצלחה גבוה',
      description: 'רקורד מוכח של הצלחות משפטיות, עם שיעור זכייה גבוה בתיקים ופתרונות יעילים שחוסכים זמן וכסף ללקוחותינו.'
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section
      id="why-choose-us"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F9F7F7' }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          dir="rtl"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 text-right sm:text-center">
            למה לבחור בנו?
          </h2>
          <div
            className="w-24 h-1 mx-auto sm:mx-auto mr-0 sm:mr-auto"
            style={{ backgroundColor: '#588C7E' }}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir="rtl">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
          dir="rtl"
        >
          <div
            className="inline-block px-8 py-4 rounded-lg"
            style={{ backgroundColor: '#D4A5A5', opacity: 0.2 }}
          >
            <p className="text-gray-800 text-lg font-medium text-right">
              משרד עורכי דין דלתא - השותף המשפטי שלכם להצלחה
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;