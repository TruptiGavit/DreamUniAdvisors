import { motion } from 'framer-motion';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const VisaProcessSection = () => {
  const visaServices = [
    {
      title: "Document Preparation",
      description: "We guide you through the entire document preparation process, ensuring accuracy and completeness.",
      points: [
        "Detailed document checklist for each country",
        "Document review and verification",
        "Assistance with form filling",
        "Translation services if required"
      ]
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive interview preparation package to boost your confidence.",
      points: [
        "5 mock interview sessions",
        "Country-specific interview questions",
        "Personalized feedback",
        "Body language and communication tips",
        "INR 10,000 for USA visa interview package"
      ]
    },
    {
      title: "Financial Documentation",
      description: "Expert guidance on financial requirements and documentation.",
      points: [
        "Bank statements review",
        "Sponsorship letter preparation",
        "Scholarship documentation",
        "Financial capacity proof guidance"
      ]
    },
    {
      title: "Post-Visa Support",
      description: "Continued support after visa approval.",
      points: [
        "Travel guidance",
        "Accommodation assistance",
        "Pre-departure briefing",
        "Insurance arrangement support"
      ]
    }
  ];

  const countryRequirements = {
    australia: {
      title: "Australia - Student Visa (Subclass 500)",
      requirements: [
        "Confirmation of Enrolment (CoE)",
        "Valid Passport",
        "Genuine Temporary Entrant (GTE) Statement",
        "Proof of Financial Capacity (AUD 21,041/year)",
        "Overseas Student Health Cover (OSHC)",
        "English Proficiency (IELTS/TOEFL)",
        "Visa Application Form (Form 157A)",
        "Biometrics (if required)",
        "Health Examination",
        "Police Clearance Certificate"
      ]
    },
    europe: {
      title: "Europe (Schengen Area) - Student Visa",
      requirements: [
        "Admission Letter from University",
        "Valid Passport (3 months beyond stay)",
        "Proof of Financial Means (€10,000-12,000/year)",
        "Proof of Accommodation",
        "Health Insurance (€30,000 coverage)",
        "Visa Application Form",
        "Travel Itinerary",
        "Passport-Sized Photos",
        "Biometric Data",
        "Language Proficiency (if applicable)"
      ]
    }
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
            Our Visa Support Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive visa application support for your study abroad journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {visaServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <FaCheckCircle className="text-primary-500 mt-1 mr-3" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Country Requirements */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Country-Specific Requirements
          </h3>
          <div className="space-y-12">
            {Object.values(countryRequirements).map((country) => (
              <motion.div
                key={country.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h4 className="text-xl font-bold mb-6">{country.title}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {country.requirements.map((req) => (
                    <div key={req} className="flex items-start">
                      <FaInfoCircle className="text-primary-500 mt-1 mr-3" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcessSection; 