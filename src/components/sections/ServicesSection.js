import { motion } from 'framer-motion';
import { FaGraduationCap, FaPassport, FaChartLine } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "MBA Admissions",
      description: "Expert guidance for top MBA programs worldwide with comprehensive application support.",
      features: [
        "Profile Evaluation",
        "School Selection",
        "Essay Writing",
        "Interview Preparation",
        "Scholarship Guidance"
      ]
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "MiM & MSBA Programs",
      description: "Specialized consulting for Masters in Management and Business Analytics programs.",
      features: [
        "Program Selection",
        "Application Strategy",
        "Document Preparation",
        "Career Planning",
        "University Shortlisting"
      ]
    },
    {
      icon: <FaPassport className="w-8 h-8" />,
      title: "Visa Assistance",
      description: "End-to-end visa application support for all major study destinations.",
      features: [
        "Document Review",
        "Interview Preparation",
        "Application Filing",
        "Follow-up Support",
        "Travel Guidance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900"
          >
            Our Services
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive support for your educational journey
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-500 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full bg-primary-500 text-white py-3 rounded-full font-medium"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 