'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBalanceScale, FaStar, FaHandshake } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)] border border-white/20 transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.12),-8px_-8px_20px_rgba(255,255,255,0.8)] hover:translate-y-[-5px]">
      <div className="flex items-center justify-end mb-4">
        <div className="text-brand-primary text-2xl ml-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-right">{description}</p>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about-us" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:w-1/2 text-right">
            <div className="inline-block bg-brand-secondary/20 backdrop-blur-sm px-4 py-2 rounded-lg mb-4">
              <h2 className="text-brand-primary text-lg font-medium">אודותינו</h2>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">משרד עורכי דין דלתא</h1>
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.07),-5px_-5px_15px_rgba(255,255,255,0.5)] border border-white/30 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                אנחנו משרד עורכי דין מוביל בתחום <span className="font-bold text-brand-primary">הבידור</span> עם ניסיון של שנים רבות. 
                אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו בכל הקשור לעולם הבידור והיצירה.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                הצוות המקצועי שלנו מלווה אמנים, יוצרים, מפיקים וחברות בידור בכל ההיבטים המשפטיים של פעילותם, 
                תוך הבנה מעמיקה של האתגרים הייחודיים בתעשייה זו.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<FaBalanceScale />} 
                title="ניסיון רב שנים" 
                description="למעלה מ-15 שנות ניסיון בליווי משפטי של גופי בידור מובילים"
              />
              <FeatureCard 
                icon={<FaStar />} 
                title="מומחיות בתחום הבידור" 
                description="התמחות ייחודית בחוזי אמנים, זכויות יוצרים והפקות"
              />
              <FeatureCard 
                icon={<FaHandshake />} 
                title="שירות אישי" 
                description="ליווי צמוד ואישי לכל לקוח, זמינות גבוהה ומענה מהיר"
              />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={imageVariants} className="lg:w-1/2 h-full">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-[10px_10px_30px_rgba(0,0,0,0.15),-10px_-10px_30px_rgba(255,255,255,0.8)] border-2 border-white/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 backdrop-blur-sm z-10 mix-blend-overlay"></div>
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="משרד עורכי דין דלתא - צוות מקצועי"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;