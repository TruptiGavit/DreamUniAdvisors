import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaChartLine, FaGlobe, FaCheck, FaBriefcase } from 'react-icons/fa';

const programData = {
  mba: {
    title: "Master of Business Administration (MBA)",
    description: "A graduate-level degree designed to equip students with comprehensive business knowledge and leadership skills.",
    sections: [
      {
        title: "What is an MBA Program?",
        content: "A Master of Business Administration (MBA) is a graduate-level degree designed to equip students with comprehensive business knowledge and leadership skills. MBA programs typically cover a broad range of subjects, including finance, marketing, human resources, and operations management. The goal is to prepare graduates for managerial roles across various industries."
      },
      {
        title: "How Can I Get an MBA?",
        points: [
          "Research: Identify schools and programs that align with your career goals",
          "Prepare for Entrance Exams: Take GMAT or GRE",
          "Application Process: Complete forms and submit required documents",
          "Interview: Prepare for and complete school interviews",
          "Acceptance and Enrollment: Follow school guidelines for enrollment"
        ]
      },
      {
        title: "Basic Requirements",
        points: [
          "Bachelor's degree from an accredited institution",
          "Competitive GMAT or GRE score",
          "Professional work experience (2-5 years preferred)",
          "Letters of recommendation",
          "Personal statement or essay outlining goals and motivations"
        ]
      },
      {
        title: "Why Pursue an MBA?",
        points: [
          "Career Advancement: Enhance prospects and increase earning potential",
          "Skill Development: Gain essential leadership and strategic thinking skills",
          "Networking Opportunities: Access valuable professional networks",
          "Entrepreneurial Aspirations: Gain knowledge for starting businesses"
        ]
      },
      {
        title: "Job Options After MBA",
        points: [
          "Management Consultant",
          "Financial Analyst",
          "Marketing Manager",
          "Operations Manager",
          "Business Development Manager",
          "Human Resources Manager",
          "Entrepreneur",
          "Investment Banker"
        ]
      },
      {
        title: "Value of International MBA",
        content: "An MBA from an internationally recognized institution can enhance your resume and expand your career opportunities, particularly in a globalized job market. Many employers value diverse educational backgrounds and international perspectives. An MBA from abroad can also provide exposure to different business practices and cultures, making graduates more adaptable in their careers."
      }
    ]
  },
  mim: {
    title: "Master in Management (MiM)",
    description: "A graduate-level degree focused on providing recent graduates with foundational business knowledge and management skills.",
    sections: [
      {
        title: "What is a MiM Program?",
        content: "A Master in Management (MiM) is a graduate-level degree focused on providing students with foundational business knowledge and management skills. Unlike an MBA, which is geared toward experienced professionals, a MiM is designed for recent graduates or those with limited work experience."
      },
      {
        title: "How Can I Get a MiM?",
        points: [
          "Research Programs: Identify MiM programs that fit your aspirations",
          "Prepare Required Documents: Application form, transcripts, recommendations",
          "Entrance Exams: Take GMAT/GRE if required",
          "Interviews: Complete school interviews if required",
          "Acceptance and Enrollment: Follow enrollment procedures"
        ]
      },
      {
        title: "Basic Requirements",
        points: [
          "Bachelor's degree from an accredited institution",
          "Strong academic transcripts",
          "Letters of recommendation",
          "Personal statement detailing motivation and goals",
          "GMAT/GRE scores (program dependent)"
        ]
      },
      {
        title: "Why Pursue a MiM?",
        points: [
          "Early Career Advancement: Fast track to management positions",
          "Skill Acquisition: Gain essential business and leadership skills",
          "Networking Opportunities: Access valuable professional networks",
          "Global Perspective: Prepare for international business"
        ]
      },
      {
        title: "Work Experience Requirements",
        content: "Most MiM programs do not require prior work experience, making them ideal for recent graduates. Some programs may prefer candidates with internship experience, but this is not mandatory. Programs typically accept candidates straight from undergraduate studies.",
        points: [
          "No mandatory work experience required",
          "Internship experience beneficial but optional",
          "Suitable for fresh graduates",
          "0-2 years experience preferred"
        ]
      },
      {
        title: "Job Options After MiM",
        points: [
          "Management Consultant",
          "Business Analyst",
          "Project Manager",
          "Marketing Coordinator",
          "Financial Analyst",
          "Operations Manager",
          "Human Resources Associate"
        ]
      },
      {
        title: "Value of International MiM",
        content: "A MiM from a globally recognized institution can enhance career prospects and provide graduates with a competitive edge in the job market. Employers often value the international perspective and diverse skill set that MiM graduates bring, especially in an increasingly interconnected global economy."
      }
    ]
  },
  msba: {
    title: "Master of Science in Business Analytics (MSBA)",
    description: "A specialized master's degree that combines business knowledge with data analytics expertise.",
    sections: [
      {
        title: "What is an MSBA Program?",
        content: "The Master of Science in Business Analytics (MSBA) is a specialized graduate program that bridges the gap between business and data science. It equips students with the skills to analyze complex data sets, derive meaningful insights, and make data-driven business decisions."
      },
      {
        title: "Program Structure",
        points: [
          "Core business fundamentals",
          "Advanced analytics and statistics",
          "Programming and data visualization",
          "Machine learning applications",
          "Big data technologies",
          "Business intelligence tools"
        ]
      },
      {
        title: "Who Should Apply?",
        content: "MSBA programs are ideal for candidates interested in combining business acumen with technical expertise.",
        points: [
          "Recent graduates with quantitative backgrounds",
          "Early career professionals in analytics roles",
          "Those seeking to transition into data-driven roles",
          "Business professionals wanting to add analytics skills"
        ]
      },
      {
        title: "Basic Requirements",
        points: [
          "Bachelor's degree (preferably in STEM/Business)",
          "Strong quantitative background",
          "Programming basics (Python/R preferred)",
          "GRE/GMAT scores",
          "English proficiency (TOEFL/IELTS)"
        ]
      },
      {
        title: "Career Opportunities",
        points: [
          "Data Scientist",
          "Business Analytics Manager",
          "Quantitative Analyst",
          "Data Strategy Consultant",
          "Marketing Analytics Manager",
          "Supply Chain Analyst",
          "Risk Analytics Specialist"
        ]
      },
      {
        title: "Industry Demand",
        content: "The demand for MSBA graduates continues to grow as organizations increasingly rely on data-driven decision making. Graduates enjoy high employment rates and competitive salaries across various industries.",
        points: [
          "High employment rate in tech companies",
          "Growing demand across all sectors",
          "Competitive starting salaries",
          "Global career opportunities"
        ]
      },
      {
        title: "Program Benefits",
        points: [
          "Cutting-edge technical skills",
          "Real-world project experience",
          "Industry partnerships",
          "Strong alumni network",
          "Career services support",
          "Internship opportunities"
        ]
      }
    ]
  }
};

const ProgramOverviewSection = () => {
  const [activeProgram, setActiveProgram] = useState('mba');

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Program Selection */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(programData).map((program) => (
            <button
              key={program}
              onClick={() => setActiveProgram(program)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeProgram === program
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {program === 'msba' ? 'MSBA' : program.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Program Content */}
        <motion.div
          key={activeProgram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {programData[activeProgram].title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {programData[activeProgram].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programData[activeProgram].sections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                {section.content && (
                  <p className="text-gray-600 mb-4">{section.content}</p>
                )}
                {section.points && (
                  <ul className="space-y-2">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start text-gray-600">
                        <FaCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection; 