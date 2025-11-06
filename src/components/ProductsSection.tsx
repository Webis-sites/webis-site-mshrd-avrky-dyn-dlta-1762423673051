'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface ServicePackage {
  id: string;
  title: string;
  services: string[];
  pricing: string;
}

const ProductsSection: React.FC = () => {
  const packages: ServicePackage[] = [
    {
      id: 'basic-consulting',
      title: 'חבילת ייעוץ בסיסית',
      services: [
        'ייעוץ משפטי ראשוני',
        'סקירת מסמכים משפטיים',
        'ייצוג בפגישות עסקיות',
        'הכנת חוזים בסיסיים',
        'ליווי טלפוני שוטף'
      ],
      pricing: 'החל מ-₪5,000'
    },
    {
      id: 'full-business',
      title: 'חבילת ליווי עסקי מלא',
      services: [
        'ליווי משפטי מלא לעסק',
        'ניהול הליכים משפטיים',
        'ייצוג בבתי משפט',
        'ייעוץ אסטרטגי שוטף',
        'זמינות 24/7'
      ],
      pricing: 'לפי בקשה'
    },
    {
      id: 'ip-protection',
      title: 'חבילת הגנה על קניין רוחני',
      services: [
        'רישום סימני מסחר',
        'הגנה על פטנטים',
        'ניהול זכויות יוצרים',
        'טיפול בהפרות קניין רוחני',
        'ייעוץ בהסכמי סודיות'
      ],
      pricing: 'החל מ-₪8,000'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="products-section"
      dir="rtl"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right md:text-center">
            המוצרים והחבילות שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-right md:text-center">
            בחרו את החבילה המתאימה ביותר לצרכים המשפטיים שלכם
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-lg border-2 border-[#D4A5A5] hover:border-[#588C7E] transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">
                  {pkg.title}
                </h3>

                {/* Services List */}
                <ul className="space-y-4 mb-8" role="list">
                  {pkg.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-right"
                    >
                      <FaCheck
                        className="text-[#588C7E] mt-1 flex-shrink-0"
                        size={16}
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 text-right flex-1">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mb-6 text-right">
                  <p className="text-2xl font-bold text-[#588C7E]">
                    {pkg.pricing}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#588C7E] hover:bg-[#4a7569] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#588C7E] focus:ring-offset-2"
                  aria-label={`בקש הצעת מחיר עבור ${pkg.title}`}
                >
                  בקש הצעת מחיר
                </motion.button>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[#588C7E] to-[#D4A5A5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            לא מצאתם את מה שחיפשתם?{' '}
            <a
              href="#contact"
              className="text-[#588C7E] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#588C7E] rounded"
            >
              צרו איתנו קשר
            </a>{' '}
            לפתרון מותאם אישית
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;