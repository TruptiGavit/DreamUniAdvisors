import { useState } from 'react';
import { motion } from 'framer-motion';
import UniversityFilters from '../components/universities/UniversityFilters';
import UniversityGrid from '../components/universities/UniversityGrid';
import ComparisonTool from '../components/universities/ComparisonTool';

const UniversitiesPage = () => {
  const [filters, setFilters] = useState({
    program: 'all',
    country: 'all',
    gmatRange: 'all',
    tuitionRange: 'all'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <UniversityFilters filters={filters} onChange={setFilters} />
        <UniversityGrid filters={filters} />
        <ComparisonTool />
      </div>
    </div>
  );
};

export default UniversitiesPage; 