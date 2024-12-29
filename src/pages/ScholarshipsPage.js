import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaMoneyBillWave, FaGlobe, FaSearch } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

const ScholarshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    region: 'all',
    amount: 'all'
  });

  const scholarships = [
    {
      title: "Merit-Based MBA Scholarship",
      provider: "Global Business School",
      amount: "$50,000",
      type: "merit",
      region: "global",
      deadline: "December 15, 2024",
      eligibility: [
        "GMAT score of 700+",
        "Strong academic record",
        "Leadership experience",
        "International exposure"
      ],
      description: "Full-tuition scholarship for exceptional candidates demonstrating outstanding academic and professional achievements."
    },
    {
      title: "Women in Business Scholarship",
      provider: "Business Leaders Foundation",
      amount: "$25,000",
      type: "diversity",
      region: "global",
      deadline: "January 30, 2024",
      eligibility: [
        "Female candidates",
        "3+ years work experience",
        "Demonstrated leadership",
        "Clear career goals"
      ],
      description: "Supporting women leaders in their pursuit of business education and leadership roles."
    },
    {
      title: "Future Tech Leaders Scholarship",
      provider: "Tech Innovation Fund",
      amount: "$40,000",
      type: "industry",
      region: "global",
      deadline: "March 15, 2024",
      eligibility: [
        "Technology background",
        "Innovation focus",
        "Entrepreneurial mindset",
        "STEM degree"
      ],
      description: "Supporting tech professionals pursuing business education to bridge technology and management."
    },
    // Add more scholarships...
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filters.type === 'all' || scholarship.type === filters.type;
    const matchesRegion = filters.region === 'all' || scholarship.region === filters.region;
    
    return matchesSearch && matchesType && matchesRegion;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Scholarships & Financial Aid
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover scholarships and funding opportunities for your business education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Scholarships", value: "50+" },
              { label: "Total Value", value: "$2M+" },
              { label: "Success Rate", value: "65%" },
              { label: "Countries", value: "20+" }
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

      {/* Search and Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-grow max-w-md relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Types</option>
              <option value="merit">Merit-based</option>
              <option value="diversity">Diversity</option>
              <option value="industry">Industry-specific</option>
            </select>
            <select
              value={filters.region}
              onChange={(e) => setFilters({...filters, region: e.target.value})}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Regions</option>
              <option value="global">Global</option>
              <option value="regional">Regional</option>
              <option value="country">Country-specific</option>
            </select>
          </div>
        </div>
      </section>

      {/* Scholarships List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {scholarship.title}
                      </h3>
                      <p className="text-gray-600">{scholarship.provider}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">
                        {scholarship.amount}
                      </div>
                      <div className="text-sm text-gray-500">
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {scholarship.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {scholarship.eligibility.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredScholarships.length === 0 && (
            <div className="text-center py-12">
              <FaMoneyBillWave className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No scholarships found</h3>
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

export default ScholarshipsPage; 