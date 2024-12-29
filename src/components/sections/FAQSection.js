import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "What kind of support do you provide?",
    answer: "I provide end-to-end application support, including profile evaluation, school selection, essay editing, interview preparation, and scholarship guidance. My approach is personalized to each student's unique background and goals."
  },
  {
    question: "How do you help with school selection?",
    answer: "Based on your profile, career goals, and preferences, I help identify schools where you have the best chances of admission. This includes analyzing factors like GMAT scores, work experience, academic background, and post-MBA goals."
  },
  {
    question: "What is your success rate?",
    answer: "I maintain a high success rate with 95% of my students receiving admits from their target schools. Many students also receive significant scholarships, totaling over $150,000 in recent admissions."
  },
  {
    question: "Do you help with GMAT/GRE preparation?",
    answer: "Yes, I provide strategic guidance for test preparation, including study plans, resource recommendations, and test-taking strategies based on my personal experience of scoring 740 on the GMAT."
  },
  {
    question: "How long does the application process take?",
    answer: "The timeline varies depending on your readiness and target schools, but typically ranges from 3-6 months. I recommend starting early to ensure sufficient time for test preparation and application refinement."
  },
  {
    question: "What makes your guidance unique?",
    answer: "Having successfully navigated the journey from a non-English medium background to top global MBA programs, I bring firsthand experience and deep understanding of the challenges international applicants face."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about the application process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-500 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 