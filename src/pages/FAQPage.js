import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

const faqs = {
  general: [
    {
      question: "What services do you provide?",
      answer: "We provide comprehensive admissions consulting services including profile evaluation, school selection, application strategy, essay editing, interview preparation, and post-admission support."
    },
    {
      question: "How do you help with school selection?",
      answer: "We analyze your profile, career goals, and preferences to recommend schools where you have the best chances of admission. This includes evaluating factors like GMAT scores, work experience, academic background, and post-MBA goals."
    },
    {
      question: "What is your success rate?",
      answer: "We maintain a high success rate with 95% of our students receiving admits from their target schools. Many students also receive significant scholarships."
    }
  ],
  application: [
    {
      question: "When should I start my application process?",
      answer: "We recommend starting 8-12 months before your target application deadlines. This gives enough time for test preparation, profile building, and creating strong applications."
    },
    {
      question: "Do you help with GMAT/GRE preparation?",
      answer: "Yes, we provide strategic guidance for test preparation, including study plans, resource recommendations, and test-taking strategies based on personal experience of scoring 740 on the GMAT."
    },
    {
      question: "How do you assist with essays?",
      answer: "We help brainstorm ideas, provide detailed feedback on content and structure, and ensure your essays effectively communicate your story while maintaining your authentic voice."
    }
  ],
  programs: [
    {
      question: "What's the difference between MBA and MiM?",
      answer: "MBA programs typically require 2-5 years of work experience and focus on advanced management concepts, while MiM programs are designed for recent graduates with limited work experience."
    },
    {
      question: "Should I consider a deferred MBA program?",
      answer: "Deferred MBA programs are ideal for current students or recent graduates who want to secure a spot in a top MBA program while gaining work experience."
    },
    {
      question: "Is MSBA right for me?",
      answer: "MSBA is ideal if you're interested in combining business knowledge with data analytics. It's particularly suitable for those with quantitative backgrounds or interest in data-driven roles."
    }
  ],
  fees: [
    {
      question: "What are your consulting fees?",
      answer: "Our fees vary based on the package and number of schools. We offer flexible packages starting from ₹35,000 for single-school applications."
    },
    {
      question: "Do you offer refunds?",
      answer: "Refund policies vary by service type and are evaluated on a case-by-case basis. Please contact us for specific details."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No, our packages are all-inclusive with no hidden costs. All fees are clearly communicated upfront."
    }
  ]
};

const categories = [
  { id: 'general', label: 'General Questions' },
  { id: 'application', label: 'Application Process' },
  { id: 'programs', label: 'Programs' },
  { id: 'fees', label: 'Fees & Payment' }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeQuestion, setActiveQuestion] = useState(null);

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and admission process
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faqs[activeCategory].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm"
                  >
                    <button
                      onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <FaChevronDown
                        className={`text-gray-400 transition-transform ${
                          activeQuestion === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeQuestion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQPage; 