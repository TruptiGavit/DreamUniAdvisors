import { motion } from 'framer-motion';
import UniversityCard from './UniversityCard';

const UniversityGrid = ({ universities = [], filters = {} }) => {
  // Filter universities based on criteria
  const filteredUniversities = universities.filter(uni => {
    if (filters.searchTerm && !uni.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    if (filters.gmatRange !== 'all') {
      const gmat = parseInt(uni.gmat);
      const [min, max] = filters.gmatRange.split('-').map(Number);
      if (max && (gmat < min || gmat > max)) return false;
      if (!max && gmat < min) return false;
    }
    // Add more filters as needed
    return true;
  });

  // Sort universities
  const sortedUniversities = [...filteredUniversities].sort((a, b) => {
    switch (filters.sortBy) {
      case 'rank':
        return a.rank - b.rank;
      case 'gmat':
        return parseInt(b.gmat) - parseInt(a.gmat);
      case 'tuition':
        return parseFloat(a.tuition.replace(/[^0-9.]/g, '')) - parseFloat(b.tuition.replace(/[^0-9.]/g, ''));
      case 'salary':
        return parseFloat(b.salary.replace(/[^0-9.]/g, '')) - parseFloat(a.salary.replace(/[^0-9.]/g, ''));
      default:
        return 0;
    }
  });

  if (!universities.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No universities available.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedUniversities.map((university, index) => (
        <motion.div
          key={university.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <UniversityCard university={university} />
        </motion.div>
      ))}
      
      {sortedUniversities.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-600">No universities found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default UniversityGrid; 