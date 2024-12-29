import PageLayout from '../../components/layout/PageLayout';
import { motion } from 'framer-motion';
import { universitiesData } from '../../data/universities';
import UniversityCard from '../../components/universities/UniversityCard';
import { programRequirements } from '../../data/programRequirements';
import { FaChartLine, FaDatabase, FaCode, FaBrain } from 'react-icons/fa';

const MSBAPage = () => {
  const msbaUniversities = universitiesData.msba;
  const requirements = programRequirements.msba.general;

  const keyFeatures = [
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Learn advanced analytics techniques and statistical methods"
    },
    {
      icon: <FaDatabase />,
      title: "Big Data",
      description: "Master big data technologies and database management"
    },
    {
      icon: <FaCode />,
      title: "Programming",
      description: "Develop skills in Python, R, and SQL"
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Apply AI and machine learning to business problems"
    }
  ];

  return (
    <PageLayout
      title="Master of Science in Business Analytics"
      description="Transform data into business insights with an MSBA degree"
    >
      {/* Program Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">About MSBA</h3>
            <p className="text-gray-600">
              The Master of Science in Business Analytics program combines data science, 
              statistical methods, and business knowledge to help organizations make 
              data-driven decisions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Career Outcomes</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Data Scientist</li>
              <li>• Business Intelligence Analyst</li>
              <li>• Analytics Consultant</li>
              <li>• Quantitative Analyst</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-3xl text-primary-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Universities */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Top Universities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {msbaUniversities.map((university) => (
            <UniversityCard key={university.name} university={university} />
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Requirements</h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Academic Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {requirements.education}</li>
                <li>• Work Experience: {requirements.workExperience}</li>
                {requirements.tests.map((test) => (
                  <li key={test}>• {test}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-600">
                {requirements.documents.map((doc) => (
                  <li key={doc}>• {doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6">Get expert guidance for your MSBA application</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-500 px-8 py-3 rounded-full font-medium"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default MSBAPage; 