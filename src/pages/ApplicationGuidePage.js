import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGraduationCap, FaFileAlt, FaUserTie, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

const ApplicationGuidePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaGraduationCap /> },
    { id: 'requirements', label: 'Requirements', icon: <FaFileAlt /> },
    { id: 'timeline', label: 'Timeline', icon: <FaCalendarAlt /> },
    { id: 'essays', label: 'Essays', icon: <FaFileAlt /> },
    { id: 'interview', label: 'Interview', icon: <FaUserTie /> },
    { id: 'tests', label: 'Tests', icon: <FaChartLine /> }
  ];

  const content = {
    overview: {
      title: "Application Process Overview",
      description: "A comprehensive guide to business school applications",
      sections: [
        {
          title: "Understanding the Process",
          content: "The business school application process typically spans 6-8 months and involves multiple components including standardized tests, essays, recommendations, and interviews."
        },
        {
          title: "Key Components",
          items: [
            "Standardized Tests (GMAT/GRE)",
            "Academic Transcripts",
            "Essays and Statement of Purpose",
            "Letters of Recommendation",
            "Resume/CV",
            "Interview"
          ]
        }
      ]
    },
    requirements: {
      title: "Application Requirements",
      description: "Essential requirements for business school applications",
      sections: [
        {
          title: "Academic Requirements",
          items: [
            "Bachelor's degree from an accredited institution",
            "Strong academic record (GPA typically 3.0+)",
            "GMAT/GRE scores (varies by program)",
            "English proficiency (TOEFL/IELTS)"
          ]
        },
        {
          title: "Professional Requirements",
          items: [
            "Work experience (varies by program)",
            "Leadership experience",
            "International exposure (preferred)",
            "Extracurricular activities"
          ]
        }
      ]
    },
    timeline: {
      title: "Application Timeline",
      description: "Month-by-month guide to the application process",
      sections: [
        {
          title: "12-18 Months Before",
          items: [
            "Research programs and schools",
            "Prepare for GMAT/GRE",
            "Plan finances and scholarships",
            "Build profile through activities"
          ]
        },
        {
          title: "6-12 Months Before",
          items: [
            "Take GMAT/GRE",
            "Write essays",
            "Secure recommendations",
            "Prepare application materials"
          ]
        },
        {
          title: "3-6 Months Before",
          items: [
            "Submit applications",
            "Prepare for interviews",
            "Apply for scholarships",
            "Plan finances"
          ]
        }
      ]
    },
    essays: {
      title: "Essay Writing Guide",
      description: "Tips for writing compelling application essays",
      sections: [
        {
          title: "Essay Types",
          items: [
            "Personal Statement",
            "Goals Essay",
            "Why MBA/School Essay",
            "Leadership Essay",
            "Failure/Challenge Essay"
          ]
        },
        {
          title: "Writing Tips",
          items: [
            "Be authentic and personal",
            "Show don't tell",
            "Focus on growth and learning",
            "Be specific with examples",
            "Address all parts of the prompt"
          ]
        }
      ]
    },
    interview: {
      title: "Interview Preparation",
      description: "Comprehensive guide to ace your business school interviews",
      sections: [
        {
          title: "Common Questions",
          items: [
            "Why MBA/this school?",
            "Career goals and plans",
            "Leadership experiences",
            "Strengths and weaknesses",
            "Contribution to the program"
          ]
        },
        {
          title: "Interview Tips",
          items: [
            "Research the program thoroughly",
            "Prepare specific examples",
            "Practice with mock interviews",
            "Be authentic and confident",
            "Follow up appropriately"
          ]
        }
      ]
    },
    tests: {
      title: "Test Preparation",
      description: "Guide to GMAT, GRE, and English proficiency tests",
      sections: [
        {
          title: "GMAT/GRE",
          items: [
            "Understanding test format",
            "Study plan and resources",
            "Practice tests and timing",
            "Score improvement strategies",
            "Test day preparation"
          ]
        },
        {
          title: "TOEFL/IELTS",
          items: [
            "Test format overview",
            "Preparation resources",
            "Practice strategies",
            "Common mistakes to avoid",
            "Score requirements"
          ]
        }
      ]
    }
  };

  return (
    <PageLayout>
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Application Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive guide to business school applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {content[activeTab].title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {content[activeTab].description}
              </p>

              {content[activeTab].sections.map((section, index) => (
                <div key={section.title} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  {section.content && (
                    <p className="text-gray-600 mb-4">{section.content}</p>
                  )}
                  {section.items && (
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
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ApplicationGuidePage; 