'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  outcome: string;
  imageUrl: string;
  category: string;
}

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'ייצוג חברת הייטק בעסקת מיזוג',
      description: 'ליווי משפטי מלא של חברת טכנולוגיה בעסקת מיזוג בשווי 50 מיליון דולר',
      outcome: 'העסקה הושלמה בהצלחה תוך 6 חודשים עם תנאים מיטביים ללקוח',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      category: 'מיזוגים ורכישות'
    },
    {
      id: 2,
      title: 'ליווי משפטי לסטארטאפ מזון',
      description: 'ייעוץ משפטי מקיף לסטארטאפ בתחום המזון החל משלב הקמה ועד לגיוס סבב A',
      outcome: 'הסטארטאפ גייס 5 מיליון דולר והשיק את המוצר בהצלחה בשוק',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      category: 'סטארטאפים'
    },
    {
      id: 3,
      title: 'הגנה בתביעת קניין רוחני',
      description: 'ייצוג חברת תוכנה בתביעת הפרת פטנט מורכבת',
      outcome: 'התביעה נדחתה במלואה והלקוח זוכה מתשלום הוצאות משפט',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      category: 'קניין רוחני'
    },
    {
      id: 4,
      title: 'ייצוג בהליך רגולטורי',
      description: 'ליווי חברת פינטק בהליך רישוי מול רשות ניירות ערך',
      outcome: 'הרישוי אושר תוך 4 חודשים והחברה החלה לפעול בישראל',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      category: 'רגולציה'
    },
    {
      id: 5,
      title: 'עסקת השקעה בחברת פודטק',
      description: 'ניהול משא ומתן וניסוח הסכמי השקעה לחברת מזון טכנולוגי',
      outcome: 'השקעה של 3 מיליון דולר הושלמה עם הגנות מיטביות למייסדים',
      imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      category: 'השקעות'
    },
    {
      id: 6,
      title: 'הסכם שיתוף פעולה בינלאומי',
      description: 'ניסוח והתאמת הסכמי שיתוף פעולה בין חברה ישראלית לשותפים אירופאים',
      outcome: 'שיתוף הפעולה הוביל להרחבת פעילות החברה ל-5 מדינות נוספות',
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      category: 'עסקאות בינלאומיות'
    },
    {
      id: 7,
      title: 'ייצוג בסכסוך שותפים',
      description: 'פתרון סכסוך מורכב בין מייסדי חברת טכנולוגיה',
      outcome: 'הושג הסדר פשרה הוגן שאפשר המשך פעילות החברה',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      category: 'יישוב סכסוכים'
    },
    {
      id: 8,
      title: 'ליווי משפטי בהנפקה',
      description: 'ייעוץ משפטי מלא לחברת טכנולוגיה בתהליך הנפקה בבורסה',
      outcome: 'ההנפקה הושלמה בהצלחה והחברה גייסה 20 מיליון דולר',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      category: 'שוק ההון'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
      id="portfolio-section"
      ref={sectionRef}
      dir="rtl"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right">
            תיק העבודות שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-right">
            גאים להציג את ההצלחות המשפטיות שלנו - מקרים נבחרים המדגימים את המומחיות והמסירות שלנו ללקוחותינו
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              variants={cardVariants}
              className={`group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#588C7E] via-[#588C7E]/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#D4A5A5] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy.category}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white transform translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-right">
                  {caseStudy.title}
                </h3>
                <p className="text-sm md:text-base text-gray-100 mb-2 text-right line-clamp-2">
                  {caseStudy.description}
                </p>
                
                {/* Hidden content that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  <p className="text-sm text-gray-50 mb-4 text-right mt-2">
                    {caseStudy.outcome}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 text-[#D4A5A5] hover:text-white font-medium transition-colors duration-200"
                    aria-label={`קרא עוד על ${caseStudy.title}`}
                  >
                    <span>קרא עוד</span>
                    <HiArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6 text-right">
            מעוניינים לשמוע עוד על ההצלחות שלנו או להתייעץ לגבי המקרה שלכם?
          </p>
          <button
            className="bg-[#588C7E] hover:bg-[#588C7E]/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            aria-label="צור קשר עם משרד עורכי דין דלתא"
          >
            צור קשר
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;