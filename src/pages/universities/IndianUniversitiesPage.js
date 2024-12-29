import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUniversity, FaRupeeSign, FaMapMarkerAlt } from 'react-icons/fa';
import PageLayout from '../../components/layout/PageLayout';
import UniversityCard from '../../components/universities/UniversityCard';
import { indianUniversitiesData } from '../../data/universities';

const regions = [
  "All India",
  "North India",
  "South India",
  "East India",
  "West India",
  "Central India"
];

const IndianUniversitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    program: 'all',
    region: 'all',
    feeRange: 'all'
  });
  const [sortBy, setSortBy] = useState('rank');

  // Filter universities
  const filteredUniversities = useMemo(() => {
    return indianUniversitiesData.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          uni.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesProgram = filters.program === 'all' || uni.program === filters.program;
      const matchesRegion = filters.region === 'all' || uni.region === filters.region;
      
      return matchesSearch && matchesProgram && matchesRegion;
    });
  }, [searchTerm, filters]);

  // Sort universities
  const sortedUniversities = useMemo(() => {
    return [...filteredUniversities].sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'fees':
          return a.fees - b.fees;
        default:
          return 0;
      }
    });
  }, [filteredUniversities, sortBy]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1598574933478-a8076ba3fb6e"
            alt="Indian Universities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Top Indian Business Schools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover India's premier institutions for management education
          </motion.p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "IIMs", value: "20+" },
              { label: "Top B-Schools", value: "100+" },
              { label: "Average Package", value: "₹12L+" },
              { label: "Placement Rate", value: "95%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
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
                <option value="PGDM">PGDM</option>
                <option value="MBA">MBA</option>
                <option value="Executive">Executive</option>
              </select>

              <select
                value={filters.region}
                onChange={(e) => setFilters({...filters, region: e.target.value})}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="rank">Sort by NIRF Rank</option>
                <option value="name">Sort by Name</option>
                <option value="fees">Sort by Fees</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Found {sortedUniversities.length} institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedUniversities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UniversityCard 
                  university={university}
                  gradient="from-orange-500 to-red-500"
                />
              </motion.div>
            ))}
          </div>

          {sortedUniversities.length === 0 && (
            <div className="text-center py-12">
              <FaUniversity className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No institutions found</h3>
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

export default IndianUniversitiesPage; 