import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaSortAmountDown, FaGlobeAmericas } from 'react-icons/fa';
import PageLayout from '../../components/layout/PageLayout';
import UniversityCard from '../../components/universities/UniversityCard';
import { universitiesData } from '../../data/universities';

const GlobalUniversitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    program: 'all',
    country: 'all',
    tuitionRange: 'all'
  });
  const [sortBy, setSortBy] = useState('rank');

  // Combine all universities
  const allUniversities = useMemo(() => {
    return Object.values(universitiesData).flat();
  }, []);

  // Filter universities
  const filteredUniversities = useMemo(() => {
    return allUniversities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          uni.country.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesProgram = filters.program === 'all' || uni.program === filters.program;
      const matchesCountry = filters.country === 'all' || uni.country === filters.country;
      
      return matchesSearch && matchesProgram && matchesCountry;
    });
  }, [allUniversities, searchTerm, filters]);

  // Sort universities
  const sortedUniversities = useMemo(() => {
    return [...filteredUniversities].sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'tuition':
          return parseFloat(a.tuition.replace(/[^0-9.]/g, '')) - 
                 parseFloat(b.tuition.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });
  }, [filteredUniversities, sortBy]);

  // Get unique countries for filter
  const countries = [...new Set(allUniversities.map(uni => uni.country))];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="Universities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Global Universities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Explore top business schools worldwide and find your perfect match
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={filters.program}
                onChange={(e) => setFilters({...filters, program: e.target.value})}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Programs</option>
                <option value="MBA">MBA</option>
                <option value="MiM">MiM</option>
                <option value="MSBA">MSBA</option>
              </select>

              <select
                value={filters.country}
                onChange={(e) => setFilters({...filters, country: e.target.value})}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="rank">Sort by Rank</option>
                <option value="name">Sort by Name</option>
                <option value="tuition">Sort by Tuition</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Found {sortedUniversities.length} universities
            </p>
          </div>

          {/* Universities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedUniversities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UniversityCard university={university} />
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedUniversities.length === 0 && (
            <div className="text-center py-12">
              <FaGlobeAmericas className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No universities found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default GlobalUniversitiesPage; 