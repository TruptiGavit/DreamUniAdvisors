import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPassport, FaGlobe, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

const VisaGuideSection = () => {
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const countries = {
    usa: {
      name: "USA",
      processingTime: "2-4 weeks",
      fee: "$160",
      workPermit: "Up to 20 hours per week on-campus",
      documents: [
        "Valid passport",
        "Form I-20",
        "DS-160 form",
        "Proof of financial support",
        "Academic documents",
        "English proficiency scores"
      ]
    },
    uk: {
      name: "UK",
      processingTime: "3-4 weeks",
      fee: "£348",
      workPermit: "Up to 20 hours per week during term time",
      documents: [
        "Valid passport",
        "CAS number",
        "Financial proof",
        "English proficiency scores",
        "TB test results (if applicable)"
      ]
    },
    australia: {
      name: "Australia",
      processingTime: "4-6 weeks",
      fee: "AUD 620",
      workPermit: "Up to 40 hours per fortnight",
      documents: [
        "Confirmation of Enrolment (CoE)",
        "Valid Passport",
        "GTE Statement",
        "Proof of Financial Capacity (AUD 21,041/year)",
        "OSHC",
        "English Proficiency (IELTS/TOEFL)",
        "Form 157A",
        "Health Examination",
        "Police Clearance Certificate"
      ]
    },
    schengen: {
      name: "Schengen Area",
      processingTime: "4-8 weeks",
      fee: "€80",
      workPermit: "Varies by country",
      documents: [
        "Admission Letter",
        "Valid Passport (3 months beyond stay)",
        "Proof of Financial Means (€10,000-12,000/year)",
        "Proof of Accommodation",
        "Health Insurance (€30,000 coverage)",
        "Travel Itinerary",
        "Passport Photos",
        "Language Proficiency"
      ]
    }
  };

  const faqs = [
    {
      question: "When can we apply for a visa?",
      answer: "You can apply for your student visa after receiving your admission letter or Certificate of Eligibility (COE) from your university."
    },
    {
      question: "Is there a visa interview?",
      answer: "Yes, some countries require a visa interview. We offer 5 mock interview sessions with personalized feedback. For the USA, our interview preparation package costs INR 10,000."
    },
    {
      question: "What happens if my visa is rejected?",
      answer: "If your visa is rejected, we'll help analyze the reason and assist with reapplication, improving your chances of approval."
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
            Visa Application Guide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive support for your student visa application
          </p>
        </motion.div>

        {/* Country Selection */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {Object.keys(countries).map((country) => (
            <motion.button
              key={country}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-3 rounded-full font-medium ${
                selectedCountry === country
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {countries[country].name}
            </motion.button>
          ))}
        </div>

        {/* Visa Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
            <ul className="space-y-4">
              {countries[selectedCountry].documents.map((doc) => (
                <li key={doc} className="flex items-start">
                  <FaFileAlt className="mt-1 text-primary-500 mr-3" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Key Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPassport className="text-primary-500 mr-3" />
                <div>
                  <p className="font-medium">Processing Time</p>
                  <p className="text-gray-600">{countries[selectedCountry].processingTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-primary-500 mr-3" />
                <div>
                  <p className="font-medium">Visa Fee</p>
                  <p className="text-gray-600">{countries[selectedCountry].fee}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaFileAlt className="text-primary-500 mr-3" />
                <div>
                  <p className="font-medium">Work Permit</p>
                  <p className="text-gray-600">{countries[selectedCountry].workPermit}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="text-primary-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection; 