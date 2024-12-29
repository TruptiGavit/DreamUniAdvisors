import { motion } from 'framer-motion';
import { FaUserCheck, FaSchool, FaFileAlt, FaLaptop, FaComments, FaHandshake } from 'react-icons/fa';

const WhyChooseUs = () => {
  const steps = [
    {
      icon: <FaUserCheck />,
      title: "Profile Evaluation",
      description: "Comprehensive analysis of your academic background, work experience, and goals",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaSchool />,
      title: "School Selection",
      description: "Strategic school selection based on your profile and career aspirations",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaFileAlt />,
      title: "Application Strategy",
      description: "Crafting compelling essays and building a powerful resume",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <FaLaptop />,
      title: "Documentation",
      description: "Guidance on preparing and reviewing all required documents",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaComments />,
      title: "Interview Prep",
      description: "Mock interviews and personalized feedback sessions",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaHandshake />,
      title: "Post-Admit Support",
      description: "Scholarship guidance and visa application assistance",
      color: "from-red-500 to-red-600"
    }
  ];

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
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our 6-Step Process to Your Dream School
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl shadow-lg p-8"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r ${step.color}`} />
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${step.color} text-white text-2xl`}>
                  {step.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of successful applicants who achieved their dreams with our guidance
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-500 text-white rounded-full font-medium text-lg shadow-lg shadow-primary-500/30"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 