import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';
import ProgramOverviewSection from '../../components/sections/ProgramOverviewSection';

const ProgramsPage = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to MBA, MiM, and specialized master's programs
            </p>
          </motion.div>
        </div>
      </section>

      <ProgramOverviewSection />
    </PageLayout>
  );
};

export default ProgramsPage; 