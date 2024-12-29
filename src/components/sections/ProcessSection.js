import { motion } from 'framer-motion';
import { FaUserGraduate, FaSearch, FaFileAlt, FaClipboardCheck, FaComments, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserGraduate />,
    title: "Profile Evaluation",
    description: "Comprehensive analysis of your academic background, work experience, and goals."
  },
  {
    icon: <FaSearch />,
    title: "School Selection",
    description: "Strategic selection of schools based on your profile and career aspirations."
  },
  {
    icon: <FaFileAlt />,
    title: "Application Prep",
    description: "Crafting compelling essays and optimizing your application materials."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Document Review",
    description: "Thorough review and refinement of all application components."
  },
  {
    icon: <FaComments />,
    title: "Interview Prep",
    description: "Mock interviews and personalized feedback to build confidence."
  },
  {
    icon: <FaHandshake />,
    title: "Final Decision",
    description: "Guidance on school selection and scholarship negotiations."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary-500/[0.03] -z-1" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Our Application Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A structured approach to maximize your chances of admission
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 