'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg border border-white/30 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.7)]"
      dir="rtl"
    >
      <div className="text-right">
        <div className="text-5xl font-bold mb-2" style={{ color: '#4ECDC4' }}>
          {number}
        </div>
        <div className="text-lg text-gray-700 font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

export default function AboutSection(): JSX.Element {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const textInView = useInView(textRef, { once: true, margin: '-100px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about-section"
      className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)',
      }}
      dir="rtl"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#4ECDC4' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#588C7E' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          dir="rtl"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 text-right md:text-center">
            אודות משרד דלתא
          </h2>
          <div className="w-24 h-1 mx-auto md:mx-auto mr-0 md:mr-auto rounded-full" style={{ background: '#4ECDC4' }}></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
            dir="rtl"
          >
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/40 shadow-[12px_12px_24px_rgba(0,0,0,0.08),-12px_-12px_24px_rgba(255,255,255,0.8)]">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-right" style={{ color: '#588C7E' }}>
                המומחים שלכם בדיני חינוך
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6 text-right">
                אנחנו משרד עורכי דין מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 text-right">
                הצוות המקצועי שלנו מורכב מעורכי דין מנוסים ומומחים בתחום דיני החינוך, המחויבים להגנה על זכויות התלמידים, ההורים והמוסדות החינוכיים. אנו מציעים ייצוג משפטי מקיף, ייעוץ אסטרטגי ופתרונות יצירתיים המותאמים לצרכים הייחודיים של כל לקוח.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-semibold text-white text-lg shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #4ECDC4 0%, #588C7E 100%)' }}
                >
                  צור קשר עכשיו
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
            dir="rtl"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[16px_16px_32px_rgba(0,0,0,0.12),-16px_-16px_32px_rgba(255,255,255,0.9)] border border-white/50">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="משרד עורכי דין דלתא - סביבת עבודה מקצועית"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          dir="rtl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
            ההישגים שלנו במספרים
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="25+" label="שנות ניסיון" delay={0.2} />
            <StatCard number="1,500+" label="תיקים שטופלו בהצלחה" delay={0.4} />
            <StatCard number="98%" label="שביעות רצון לקוחות" delay={0.6} />
          </div>
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
          dir="rtl"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg border border-white/30 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.7)]">
            <p className="text-xl md:text-2xl text-gray-800 font-medium text-center leading-relaxed">
              "המחויבות שלנו היא להעניק לכל לקוח את הייצוג המשפטי הטוב ביותר, תוך שמירה על ערכי יושרה, מקצועיות ומצוינות."
            </p>
            <div className="mt-6">
              <div className="inline-block px-6 py-2 rounded-full text-sm font-semibold" style={{ background: '#4ECDC4', color: 'white' }}>
                משרד עורכי דין דלתא
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}