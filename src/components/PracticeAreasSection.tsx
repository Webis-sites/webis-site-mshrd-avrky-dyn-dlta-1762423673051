'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PracticeArea {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const PracticeAreasSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const practiceAreas: PracticeArea[] = [
    {
      id: 1,
      icon: <div className="w-8 h-8">📚</div>,
      title: 'חוק חינוך',
      description: 'ייעוץ משפטי מקיף בכל היבטי דיני החינוך',
      details: 'ייצוג מול משרד החינוך, ערעורים על החלטות מנהליות, וליווי משפטי שוטף למוסדות חינוך'
    },
    {
      id: 2,
      icon: <div className="w-8 h-8">👥</div>,
      title: 'זכויות תלמידים',
      description: 'הגנה על זכויות התלמידים והוריהם',
      details: 'ייצוג בועדות משמעת, ערעורים על החלטות פסילה, והגנה על זכות לחינוך'
    },
    {
      id: 3,
      icon: <div className="w-8 h-8">💼</div>,
      title: 'דיני עבודה למורים',
      description: 'ייצוג משפטי למורים ועובדי הוראה',
      details: 'תביעות עבודה, הליכי פיטורים, זכויות סוציאליות ומשא ומתן קיבוצי'
    },
    {
      id: 4,
      icon: <div className="w-8 h-8">🎓</div>,
      title: 'מוסדות אקדמיים',
      description: 'ייעוץ משפטי למוסדות להשכלה גבוהה',
      details: 'רגולציה אקדמית, הליכי הסמכה, וניהול סכסוכים עם סטודנטים וסגל'
    },
    {
      id: 5,
      icon: <div className="w-8 h-8">⚖️</div>,
      title: 'משמעת בית ספרית',
      description: 'ייצוג בהליכי משמעת ובתי דין',
      details: 'ליווי משפטי בועדות משמעת, ערעורים ופתרון סכסוכים במערכת החינוך'
    },
    {
      id: 6,
      icon: <div className="w-8 h-8">📄</div>,
      title: 'מדיניות חינוכית',
      description: 'ייעוץ בעיצוב מדיניות ותקנונים',
      details: 'עריכת תקנונים, מדיניות קבלה, ופיתוח נהלים משפטיים למוסדות חינוך'
    },
    {
      id: 7,
      icon: <div className="w-8 h-8">🛡️</div>,
      title: 'חינוך מיוחד',
      description: 'זכויות תלמידים עם צרכים מיוחדים',
      details: 'ייצוג בוועדות שילוב, תביעות לשירותים מיוחדים, והגנה על זכויות'
    },
    {
      id: 8,
      icon: <div className="w-8 h-8">🏆</div>,
      title: 'ניהול בתי ספר',
      description: 'ייעוץ משפטי להנהלות ומנהלים',
      details: 'ליווי משפטי שוטף, ניהול סיכונים משפטיים, וייעוץ בקבלת החלטות'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="practice-areas-section" 
      ref={sectionRef}
      className="relative w-full py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            תחומי התמחות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מומחיות משפטית מקיפה בכל תחומי החינוך
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {practiceAreas.map((area) => (
            <motion.div
              key={area.id}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#588C7E] mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 mb-3">{area.description}</p>
              <p className="text-sm text-gray-500">{area.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;