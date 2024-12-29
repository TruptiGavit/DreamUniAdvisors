import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';

const UniversityFilters = ({ filters, onChange }) => {
  const gmatRanges = [
    { value: 'all', label: 'All GMAT Scores' },
    { value: '600-650', label: '600-650' },
    { value: '650-700', label: '650-700' },
    { value: '700+', label: '700+' }
  ];

  const tuitionRanges = [
    { value: 'all', label: 'All Tuition Ranges' },
    { value: '0-50000', label: 'Under $50,000' },
    { value: '50000-100000', label: '$50,000 - $100,000' },
    { value: '100000+', label: 'Above $100,000' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-6">
        <FaFilter className="text-primary-500 mr-2" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search universities..."
            value={filters.searchTerm}
            onChange={(e) => onChange({ ...filters, searchTerm: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* GMAT Range */}
        <div>
          <select
            value={filters.gmatRange}
            onChange={(e) => onChange({ ...filters, gmatRange: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            {gmatRanges.map(range => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tuition Range */}
        <div>
          <select
            value={filters.tuitionRange}
            onChange={(e) => onChange({ ...filters, tuitionRange: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            {tuitionRanges.map(range => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <select
            value={filters.sortBy}
            onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="rank">Sort by Rank</option>
            <option value="gmat">Sort by GMAT</option>
            <option value="tuition">Sort by Tuition</option>
            <option value="salary">Sort by Salary</option>
          </select>
        </div>
      </div>

      {/* Active Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (value !== 'all' && value !== '') {
            return (
              <motion.span
                key={key}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm flex items-center"
              >
                {key}: {value}
                <button
                  onClick={() => onChange({ ...filters, [key]: 'all' })}
                  className="ml-2 hover:text-primary-900"
                >
                  ×
                </button>
              </motion.span>
            );
          }
          return null;
        })}
      </div>
    </motion.div>
  );
};

export default UniversityFilters; 