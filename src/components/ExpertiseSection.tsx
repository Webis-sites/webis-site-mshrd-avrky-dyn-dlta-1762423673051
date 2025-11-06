'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface StatisticProps {
  value: string;
  label: string;
  delay: number;
}

const StatisticCard: React.FC<StatisticProps> = ({ value, label, delay }) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#588C7E' }}>
        {numericValue ? `${count}${suffix}` : value}
      </div>
      <div className="text-gray-600 text-sm md:text-base">{label}</div>
    </motion.div>
  );
};

export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const statistics = [
    { value: '15+', label: 'שנות ניסיון' },
    { value: '200+', label: 'לקוחות מרוצים' },
    { value: '95%', label: 'שיעור הצלחה' },
    { value: '500+', label: 'תיקים שטופלו' }
  ];

  return (
    <section
      id="expertise-section"
      ref={containerRef}
      dir="rtl"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side - Right on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-right"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              המומחיות שלנו
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 text-right"
            >
              אנחנו משרד עורכי דין מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו
              מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 text-right"
            >
              הצוות המקצועי שלנו מביא ידע מעמיק ומומחיות בלתי מתפשרת בכל תיק. אנו מחויבים
              להשגת התוצאות הטובות ביותר עבור לקוחותינו תוך שמירה על סטנדרטים מקצועיים
              גבוהים ושירות אישי ומסור.
            </motion.p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {statistics.map((stat, index) => (
                <StatisticCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Side - Left on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
                alt="משרד עורכי דין דלתא - צוות מקצועי של עורכי דין בסביבה משרדית מודרנית"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}