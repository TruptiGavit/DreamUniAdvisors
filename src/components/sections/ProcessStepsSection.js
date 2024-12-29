import { motion } from 'framer-motion';
import { FaUserCheck, FaUniversity, FaFileAlt, FaClipboardCheck, FaUserTie, FaMoneyBillWave } from 'react-icons/fa';

const processSteps = [
  {
    title: "Comprehensive Profile Evaluation",
    description: "In-depth analysis of your academic background, work experience, skills, and long-term goals to align with top business school requirements.",
    icon: <FaUserCheck />
  },
  {
    title: "Targeted School Selection",
    description: "Identify and narrow down best-fit schools matching your career ambitions, location preferences, and program structure.",
    icon: <FaUniversity />
  },
  {
    title: "Strategic Resume and Essays",
    description: "Build a powerful resume highlighting leadership and achievements, plus write compelling essays showcasing your story.",
    icon: <FaFileAlt />
  },
  {
    title: "Application Preparation and Review",
    description: "Step-by-step guidance in completing applications, including transcripts, LORs, and certifications.",
    icon: <FaClipboardCheck />
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews with feedback on communication, body language, and responses to ensure confident performance.",
    icon: <FaUserTie />
  },
  {
    title: "Scholarship and Financial Aid",
    description: "Help explore scholarship opportunities, apply for financial aid, and negotiate offers.",
    icon: <FaMoneyBillWave />
  }
];

const ProcessStepsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            6-Step Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Applying to top MBA and MIM programs is a detailed and strategic journey. I simplify this process for you and ensure your application stands out with a tailored, step-by-step approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 relative group hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xl mb-4">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why This Process Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why This Process Works
          </h3>
          <p className="text-gray-600">
            By breaking the complex application process into manageable steps, I offer clear, personalized guidance at each stage. With my experience in helping candidates gain admission to elite institutions across the USA, UK, Australia, Germany, Canada, and beyond, I will ensure your application is competitive and complete.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessStepsSection; 