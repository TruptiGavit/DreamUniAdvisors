import { motion } from 'framer-motion';
import { universitiesData } from '../../data/universities';
import ProgramLayout from '../../components/layout/ProgramLayout';
import UniversityCard from '../../components/universities/UniversityCard';

const requirements = [
  {
    title: "Academic Requirements",
    items: [
      "Bachelor's degree (50% or above)",
      "CAT/XAT/GMAT score",
      "Strong academic record",
      "English proficiency"
    ]
  },
  {
    title: "Entrance Exams",
    items: [
      "CAT (Common Admission Test)",
      "XAT (Xavier Aptitude Test)",
      "GMAT (For select institutes)",
      "Institute-specific tests"
    ]
  },
  {
    title: "Application Components",
    items: [
      "Online application form",
      "Academic transcripts",
      "Work experience (if any)",
      "Personal interview",
      "Group discussion"
    ]
  }
];

const IndianMBAPage = () => {
  const indianPrograms = universitiesData.india || [];

  return (
    <ProgramLayout
      title="Indian MBA Programs"
      description="Top-tier management education in India's premier business schools"
      overview="Indian MBA programs offer world-class business education with strong industry connections and excellent placement records. Programs like IIM's PGDM are globally recognized and provide outstanding value for money."
      benefits={[
        "World-class education at affordable cost",
        "Strong industry connections",
        "Excellent placement records",
        "Diverse peer group",
        "Rich alumni network",
        "Strong focus on Indian business context"
      ]}
      requirements={requirements}
      gradient="from-orange-500 to-red-500"
      heroImage="https://images.unsplash.com/photo-1598574933478-a8076ba3fb6e"
    >
      {/* Quick Stats Section */}
      <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Average Package", value: "₹25L+" },
          { label: "ROI Ranking", value: "#1" },
          { label: "Placement Rate", value: "98%" },
          { label: "Global Recognition", value: "Top 100" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center"
          >
            <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Top Programs Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {indianPrograms.map((university, index) => (
          <motion.div
            key={university.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <UniversityCard 
              university={{
                ...university,
                gmat: university.exam,
                ielts: "Not Required",
                tuition: `₹${(university.fees / 100000).toFixed(1)}L`,
                details: university.details || `One of India's premier management institutions with excellent placement record and strong alumni network.`
              }}
              gradient="from-orange-500 to-red-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 bg-white rounded-2xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-bold mb-4">Why Choose Indian MBA?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-3">Advantages</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                High Return on Investment
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Strong Industry Connections
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Excellent Placement Records
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Quality Education at Lower Cost
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Career Opportunities</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Top Management Roles
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Consulting Opportunities
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Entrepreneurship Support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Global Career Paths
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </ProgramLayout>
  );
};

export default IndianMBAPage; 