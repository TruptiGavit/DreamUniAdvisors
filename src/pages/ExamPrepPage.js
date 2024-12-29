import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBook, FaCalculator, FaPencilAlt, FaClock, FaBrain, FaChartLine } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

const ExamPrepPage = () => {
  const [activeExam, setActiveExam] = useState('gmat');
  const [activeSection, setActiveSection] = useState('overview');

  const exams = [
    { id: 'gmat', label: 'GMAT' },
    { id: 'gre', label: 'GRE' }
  ];

  const sections = [
    { id: 'overview', label: 'Overview', icon: <FaBook /> },
    { id: 'sections', label: 'Test Sections', icon: <FaPencilAlt /> },
    { id: 'preparation', label: 'Preparation', icon: <FaBrain /> },
    { id: 'strategy', label: 'Strategy', icon: <FaChartLine /> },
    { id: 'resources', label: 'Resources', icon: <FaCalculator /> },
    { id: 'timeline', label: 'Timeline', icon: <FaClock /> }
  ];

  const content = {
    gmat: {
      overview: {
        title: "GMAT Overview",
        description: "The Graduate Management Admission Test (GMAT) is the most widely used exam for business school admissions",
        sections: [
          {
            title: "Test Format",
            items: [
              "Computer Adaptive Test (CAT)",
              "3 hours 7 minutes total time",
              "Score range: 200-800",
              "Valid for 5 years"
            ]
          },
          {
            title: "Key Features",
            items: [
              "Adaptive testing - questions get harder as you answer correctly",
              "No negative marking for Verbal and Quant",
              "Integrated Reasoning and AWA are separate scores",
              "Option to choose section order"
            ]
          }
        ]
      },
      sections: {
        title: "GMAT Sections",
        description: "Understanding the four main components of the GMAT",
        sections: [
          {
            title: "Quantitative (62 mins)",
            items: [
              "31 questions",
              "Problem Solving",
              "Data Sufficiency",
              "Focus on logic and reasoning"
            ]
          },
          {
            title: "Verbal (65 mins)",
            items: [
              "36 questions",
              "Reading Comprehension",
              "Critical Reasoning",
              "Sentence Correction"
            ]
          },
          {
            title: "Integrated Reasoning (30 mins)",
            items: [
              "12 questions",
              "Multi-source Reasoning",
              "Graphics Interpretation",
              "Table Analysis"
            ]
          },
          {
            title: "Analytical Writing (30 mins)",
            items: [
              "1 essay",
              "Analysis of an Argument",
              "Score range: 0-6",
              "Tests critical thinking"
            ]
          }
        ]
      },
      // Add other sections...
    },
    gre: {
      overview: {
        title: "GRE Overview",
        description: "The Graduate Record Examination (GRE) is accepted by many business schools as an alternative to GMAT",
        sections: [
          {
            title: "Test Format",
            items: [
              "Computer-based adaptive by section",
              "3 hours 45 minutes total time",
              "Score range: 130-170 per section",
              "Valid for 5 years"
            ]
          },
          {
            title: "Key Features",
            items: [
              "Section-level adaptation",
              "ScoreSelect® option",
              "Review and change answers within a section",
              "Accepted by most business schools"
            ]
          }
        ]
      },
      // Add other sections...
    }
  };

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
              GMAT & GRE Preparation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive preparation guides and resources for business school entrance exams
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exam Selection */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {exams.map((exam) => (
              <button
                key={exam.id}
                onClick={() => setActiveExam(exam.id)}
                className={`py-4 px-8 font-medium text-lg transition-colors ${
                  activeExam === exam.id
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {exam.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="border-b bg-white sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.icon}
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={`${activeExam}-${activeSection}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-3xl mx-auto">
              {content[activeExam][activeSection] && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {content[activeExam][activeSection].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {content[activeExam][activeSection].description}
                  </p>

                  {content[activeExam][activeSection].sections.map((section) => (
                    <div key={section.title} className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                            </div>
                            <span className="ml-3 text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExamPrepPage; 