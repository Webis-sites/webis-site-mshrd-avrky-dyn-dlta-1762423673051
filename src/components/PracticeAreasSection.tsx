'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Briefcase, GraduationCap, Scale, FileText, Shield, Award } from 'lucide-react';

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
      icon: <BookOpen className="w-8 h-8" />,
      title: 'חוק חינוך',
      description: 'ייעוץ משפטי מקיף בכל היבטי דיני החינוך',
      details: 'ייצוג מול משרד החינוך, ערעורים על החלטות מנהליות, וליווי משפטי שוטף למוסדות חינוך'
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: 'זכויות תלמידים',
      description: 'הגנה על זכויות התלמידים והוריהם',
      details: 'ייצוג בועדות משמעת, ערעורים על החלטות פסילה, והגנה על זכות לחינוך'
    },
    {
      id: 3,
      icon: <Briefcase className="w-8 h-8" />,
      title: 'דיני עבודה למורים',
      description: 'ייצוג משפטי למורים ועובדי הוראה',
      details: 'תביעות עבודה, הליכי פיטורים, זכויות סוציאליות ומשא ומתן קיבוצי'
    },
    {
      id: 4,
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'מוסדות אקדמיים',
      description: 'ייעוץ משפטי למוסדות להשכלה גבוהה',
      details: 'רגולציה אקדמית, הליכי הסמכה, וניהול סכסוכים עם סטודנטים וסגל'
    },
    {
      id: 5,
      icon: <Scale className="w-8 h-8" />,
      title: 'משמעת בית ספרית',
      description: 'ייצוג בהליכי משמעת ובתי דין',
      details: 'ליווי משפטי בועדות משמעת, ערעורים ופתרון סכסוכים במערכת החינוך'
    },
    {
      id: 6,
      icon: <FileText className="w-8 h-8" />,
      title: 'מדיניות חינוכית',
      description: 'ייעוץ בעיצוב מדיניות ותקנונים',
      details: 'עריכת תקנונים, מדיניות קבלה, ופיתוח נהלים משפטיים למוסדות חינוך'
    },
    {
      id: 7,
      icon: <Shield className="w-8 h-8" />,
      title: 'חינוך מיוחד',
      description: 'זכויות תלמידים עם צרכים מיוחדים',
      details: 'ייצוג בוועדות שילוב, תביעות לשירותים מיוחדים, והגנה על זכויות'
    },
    {
      id: 8,
      icon: <Award className="w-8 h-8" />,
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
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      dir="rtl"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#4ECDC4]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#588C7E]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right">
            תחומי התמחות
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-[#4ECDC4] to-[#588C7E] mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
            משרד עורכי דין דלתא מתמחה בדיני חינוך ומספק שירות משפטי מקצועי ומקיף בכל תחומי המשפט החינוכי
          </p>
        </motion.div>

        {/* Practice Areas Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {practiceAreas.map((area) => (
            <motion.div
              key={area.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div 
                className="relative h-full bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden"
                role="article"
                aria-label={`תחום התמחות: ${area.title}`}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/0 to-[#588C7E]/0 group-hover:from-[#4ECDC4]/5 group-hover:to-[#588C7E]/5 transition-all duration-500 rounded-2xl" />
                
                {/* Neumorphic Icon Container */}
                <div className="relative mb-6 inline-flex">
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#4ECDC4] to-[#588C7E] text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    {area.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#588C7E] transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                    {area.description}
                  </p>
                  
                  {/* Details - Revealed on Hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {area.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#4ECDC4]/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#588C7E]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-700 mb-6 text-right">
            זקוקים לייעוץ משפטי בתחום החינוך? אנחנו כאן כדי לעזור
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-l from-[#4ECDC4] to-[#588C7E] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="צור קשר עם משרד עורכי דין דלתא"
          >
            צור קשר לייעוץ ראשוני
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;