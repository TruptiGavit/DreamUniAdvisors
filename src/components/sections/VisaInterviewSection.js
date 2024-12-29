import { motion } from 'framer-motion';
import { FaUserGraduate, FaMoneyBillWave, FaPlane, FaHome } from 'react-icons/fa';

const VisaInterviewSection = () => {
  const interviewTopics = [
    {
      icon: <FaUserGraduate />,
      title: "Academic Background",
      questions: [
        "Why did you choose this program?",
        "How does this course align with your previous studies?",
        "What are your academic achievements?",
        "Why did you choose this university?"
      ]
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Financial Preparation",
      questions: [
        "How will you finance your studies?",
        "Who is your sponsor?",
        "Do you have any education loans?",
        "How much are your total expenses?"
      ]
    },
    {
      icon: <FaPlane />,
      title: "Travel & Stay",
      questions: [
        "Where will you stay during your studies?",
        "Have you arranged accommodation?",
        "Do you have relatives in the country?",
        "What are your post-study plans?"
      ]
    },
    {
      icon: <FaHome />,
      title: "Ties to Home Country",
      questions: [
        "Why do you plan to return to your home country?",
        "What are your career plans after graduation?",
        "Do you have family responsibilities back home?",
        "How will this degree help your career in your country?"
      ]
    }
  ];

  const mockInterviewPackage = {
    title: "Mock Interview Package",
    price: "₹10,000",
    features: [
      "5 comprehensive mock interview sessions",
      "Country-specific interview scenarios",
      "Detailed feedback after each session",
      "Body language and communication tips",
      "Common questions and best answers",
      "Interview confidence building",
      "Documentation review",
      "Last-minute preparation tips"
    ]
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Visa Interview Preparation
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive preparation for your visa interview success
          </p>
        </motion.div>

        {/* Interview Topics */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interviewTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-3xl text-primary-500 mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{topic.title}</h3>
              <ul className="space-y-2">
                {topic.questions.map((question) => (
                  <li key={question} className="text-gray-600 text-sm">
                    • {question}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mock Interview Package */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{mockInterviewPackage.title}</h3>
              <p className="text-3xl font-bold mb-6">{mockInterviewPackage.price}</p>
              <ul className="space-y-3">
                {mockInterviewPackage.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-500 px-8 py-3 rounded-full font-medium text-lg shadow-lg"
              >
                Book Mock Interview
              </motion.button>
              <p className="mt-4 text-sm opacity-90">
                * Package includes all materials and personalized feedback
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tips Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Interview Success Tips</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="font-bold text-lg mb-4">Before Interview</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Review all application documents</li>
                <li>• Research your program thoroughly</li>
                <li>• Prepare required documentation</li>
                <li>• Practice common questions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="font-bold text-lg mb-4">During Interview</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Maintain eye contact</li>
                <li>• Speak clearly and confidently</li>
                <li>• Provide concise answers</li>
                <li>• Stay calm and professional</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="font-bold text-lg mb-4">Key Points</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Show strong ties to home country</li>
                <li>• Demonstrate financial preparedness</li>
                <li>• Be clear about future plans</li>
                <li>• Show genuine intent to study</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInterviewSection; 