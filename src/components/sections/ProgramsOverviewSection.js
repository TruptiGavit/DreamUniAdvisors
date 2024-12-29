import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaChartLine } from 'react-icons/fa';

const ProgramsOverviewSection = () => {
  const [activeTab, setActiveTab] = useState('mba');

  const programs = {
    mba: {
      title: "Master of Business Administration (MBA)",
      description: "A graduate-level degree designed to equip students with comprehensive business knowledge and leadership skills.",
      details: [
        {
          title: "Who Can Apply",
          content: "Individuals from diverse academic backgrounds including business, engineering, healthcare, and humanities. Most programs prefer 2-5 years of work experience."
        },
        {
          title: "Requirements",
          list: [
            "Bachelor's degree from accredited institution",
            "Competitive GMAT/GRE score",
            "Professional work experience (2-5 years preferred)",
            "Letters of recommendation",
            "Personal statement/essays"
          ]
        },
        {
          title: "Career Opportunities",
          list: [
            "Management Consultant",
            "Financial Analyst",
            "Marketing Manager",
            "Operations Manager",
            "Business Development Manager",
            "Investment Banker"
          ]
        }
      ]
    },
    mim: {
      title: "Master in Management (MiM)",
      description: "A graduate-level degree focused on providing foundational business knowledge and management skills for recent graduates.",
      details: [
        {
          title: "Who Can Apply",
          content: "Recent graduates from any academic background. Ideal for those with 0-2 years of work experience."
        },
        {
          title: "Requirements",
          list: [
            "Bachelor's degree from accredited institution",
            "Strong academic record",
            "GMAT/GRE (not always required)",
            "Letters of recommendation",
            "Personal statement"
          ]
        },
        {
          title: "Career Opportunities",
          list: [
            "Business Analyst",
            "Project Manager",
            "Marketing Coordinator",
            "Financial Analyst",
            "Operations Manager",
            "HR Associate"
          ]
        }
      ]
    },
    msba: {
      title: "Master of Science in Business Analytics (MSBA)",
      description: "A specialized degree combining data science, machine learning, statistics, and business strategy.",
      details: [
        {
          title: "Who Can Apply",
          content: "Recent graduates and early-career professionals, especially those from quantitative backgrounds."
        },
        {
          title: "Requirements",
          list: [
            "Bachelor's degree (preferably in quantitative field)",
            "GMAT score of 650+ or GRE equivalent",
            "IELTS 7.0+ or TOEFL 100+ for international students",
            "Strong resume with relevant projects/internships",
            "Statement of Purpose"
          ]
        },
        {
          title: "Career Opportunities",
          list: [
            "Data Analyst",
            "Business Intelligence Analyst",
            "Data Scientist",
            "Consultant",
            "Operations Analyst",
            "Marketing Analyst"
          ]
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Programs Overview
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our comprehensive guide to top business programs
          </p>
        </motion.div>

        {/* Program Selection Tabs */}
        <div className="mt-12 flex justify-center space-x-4">
          {Object.keys(programs).map((program) => (
            <motion.button
              key={program}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(program)}
              className={`px-6 py-3 rounded-full font-medium uppercase ${
                activeTab === program
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {program}
            </motion.button>
          ))}
        </div>

        {/* Program Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {programs[activeTab].title}
            </h3>
            <p className="text-gray-600 mb-8">
              {programs[activeTab].description}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {programs[activeTab].details.map((detail) => (
                <div key={detail.title} className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {detail.title}
                  </h4>
                  {detail.content ? (
                    <p className="text-gray-600">{detail.content}</p>
                  ) : (
                    <ul className="space-y-2">
                      {detail.list.map((item) => (
                        <li key={item} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 text-primary-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsOverviewSection; 