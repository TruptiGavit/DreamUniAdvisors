import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSort, FaFilter, FaSearch } from 'react-icons/fa';

const UniversityRankingsSection = () => {
  const [programType, setProgramType] = useState('mba');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [filterCountry, setFilterCountry] = useState('all');

  const universities = {
    mba: [
      {
        name: "Harvard Business School",
        country: "USA",
        program: "HBS 2+2 Program",
        rank: 1,
        gmat: "720+",
        ielts: "7.0+",
        workExp: "2-4 years",
        salary: "$148,750",
        tuition: "$146,880",
        details: "Deferred MBA program with guaranteed admission"
      },
      {
        name: "Stanford GSB",
        country: "USA",
        program: "Deferred Enrollment",
        rank: 2,
        gmat: "730+",
        ielts: "7.0+",
        workExp: "2-4 years",
        salary: "$160,000+",
        tuition: "$149,412",
        details: "Leading deferred MBA program"
      },
      // Add more universities from the document
    ],
    mim: [
      {
        name: "HEC Paris",
        country: "France",
        program: "Master in Management",
        rank: 1,
        gmat: "700+",
        ielts: "7.0+",
        workExp: "0-2 years",
        salary: "$116,000",
        tuition: "€49,200",
        details: "Top-ranked MiM program globally"
      },
      {
        name: "London Business School",
        country: "UK",
        program: "MiM",
        rank: 2,
        gmat: "680+",
        ielts: "7.0+",
        workExp: "0-2 years",
        salary: "$105,000",
        tuition: "£47,000",
        details: "Leading European business school"
      },
      // Add more universities from the document
    ],
    msba: [
      {
        name: "MIT Sloan",
        country: "USA",
        program: "MSBA",
        rank: 1,
        gmat: "710+",
        ielts: "7.0+",
        workExp: "Not required",
        salary: "$115,000",
        tuition: "$86,300",
        details: "Top-ranked MSBA program"
      },
      // Add more universities from the document
    ]
  };

  const filteredUniversities = universities[programType]
    .filter(uni => 
      (filterCountry === 'all' || uni.country === filterCountry) &&
      (uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       uni.program.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'rank': return a.rank - b.rank;
        case 'salary': return parseFloat(b.salary.replace(/[^0-9.]/g, '')) - parseFloat(a.salary.replace(/[^0-9.]/g, ''));
        case 'tuition': return parseFloat(b.tuition.replace(/[^0-9.]/g, '')) - parseFloat(a.tuition.replace(/[^0-9.]/g, ''));
        default: return 0;
      }
    });

  const countries = [...new Set(universities[programType].map(uni => uni.country))];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            University Rankings
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compare top business schools worldwide
          </p>
        </motion.div>

        {/* Controls */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {/* Program Type Selection */}
          <div className="flex space-x-4">
            {Object.keys(universities).map(type => (
              <button
                key={type}
                onClick={() => setProgramType(type)}
                className={`px-4 py-2 rounded-lg uppercase ${
                  programType === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>

          {/* Country Filter */}
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="rank">Sort by Rank</option>
            <option value="salary">Sort by Salary</option>
            <option value="tuition">Sort by Tuition</option>
          </select>
        </div>

        {/* University Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUniversities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
                  <p className="text-gray-600">{uni.program}</p>
                </div>
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm">
                  Rank #{uni.rank}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Country</span>
                  <span className="font-medium">{uni.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GMAT</span>
                  <span className="font-medium">{uni.gmat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Work Experience</span>
                  <span className="font-medium">{uni.workExp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Salary</span>
                  <span className="font-medium text-green-600">{uni.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tuition</span>
                  <span className="font-medium">{uni.tuition}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-primary-500 text-white py-2 rounded-lg font-medium"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityRankingsSection; 