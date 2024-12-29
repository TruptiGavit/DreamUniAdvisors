import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaChartLine, FaGlobe } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';
import UniversityCard from '../components/universities/UniversityCard';

const programInfo = {
  mba: {
    title: "Full-time MBA",
    description: "Traditional 2-year MBA program for experienced professionals",
    icon: <FaGraduationCap />,
    gradient: "from-blue-500 to-indigo-600",
    path: "/programs/mba"
  },
  deferredMBA: {
    title: "Deferred MBA",
    description: "Secure early admission to top MBA programs",
    icon: <FaGraduationCap />,
    gradient: "from-purple-500 to-pink-600",
    path: "/programs/deferred-mba"
  },
  mim: {
    title: "Master in Management",
    description: "Perfect for recent graduates starting their business career",
    icon: <FaChartLine />,
    gradient: "from-green-500 to-teal-600",
    path: "/programs/mim"
  },
  msba: {
    title: "MS Business Analytics",
    description: "Combine business knowledge with data analytics expertise",
    icon: <FaGlobe />,
    gradient: "from-orange-500 to-red-600",
    path: "/programs/msba"
  },
  india: {
    title: "Indian MBA",
    description: "Top-tier management education in India's premier institutions",
    icon: <FaGraduationCap />,
    gradient: "from-orange-500 to-red-500",
    path: "/programs/india"
  }
};

const RecommendationPage = () => {
  const location = useLocation();
  const { answers, recommendation } = location.state || {};

  if (!recommendation) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">No recommendation found</h2>
            <p className="mt-2 text-gray-600">Please try the program finder again</p>
            <Link 
              to="/program-finder"
              className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              Go to Program Finder
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const program = programInfo[recommendation.program];

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
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${program.gradient} text-white text-2xl mb-6`}>
              {program.icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              We Recommend: {program.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {program.description}
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-gray-600 mr-2">Match Score:</span>
              <span className="text-lg font-bold text-primary-600">{recommendation.confidence}%</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Profile Summary</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(answers).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="text-sm text-gray-500 mb-1 capitalize">{key}</div>
                <div className="font-semibold text-gray-900 capitalize">{value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Universities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommended Universities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendation.universities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <UniversityCard 
                  university={university}
                  gradient={program.gradient}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to={program.path}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Explore Program Details</h3>
              <p className="text-gray-600 mb-4">Learn more about the program structure, requirements, and universities</p>
              <span className="text-primary-600 group-hover:text-primary-700 flex items-center">
                View Details
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Get Expert Guidance</h3>
              <p className="text-gray-600 mb-4">Schedule a consultation with our admission experts</p>
              <span className="text-primary-600 group-hover:text-primary-700 flex items-center">
                Book Consultation
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/program-finder"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-bold text-lg mb-2">Try Different Criteria</h3>
              <p className="text-gray-600 mb-4">Explore other program options based on different preferences</p>
              <span className="text-primary-600 group-hover:text-primary-700 flex items-center">
                Start Over
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RecommendationPage; 