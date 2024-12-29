import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const VisaFAQSection = () => {
  const faqs = [
    {
      question: "How can we apply for a visa?",
      answer: "We guide you through the online application process, ensuring that all the required documents are submitted accurately and on time. From filling out application forms to ensuring you meet the country-specific requirements, we take care of everything for you."
    },
    {
      question: "When can we apply for a visa?",
      answer: "You can apply for your student visa after receiving your admission letter or Certificate of Eligibility (COE) from your university. Our experts will guide you on the best time to apply based on your program's start date and visa processing times, making sure there are no delays."
    },
    {
      question: "How long does it take to get the visa?",
      answer: "Visa processing times vary by country: USA: 2-4 weeks, UK: 3-4 weeks, Canada: 4-6 weeks. We'll track your application, provide regular updates, and help expedite the process if possible."
    },
    {
      question: "What documents are required for a visa?",
      answer: "Typically required documents include: Valid passport, Admission letter or Form I-20 (USA)/CAS (UK)/COE (Japan), Proof of financial support, Visa application form, Passport-sized photos, Medical records (if required), and Biometric submission (if applicable). We provide a detailed checklist for your specific country."
    },
    {
      question: "Is there a visa interview, and how will you help me prepare?",
      answer: "Yes, some countries, such as the USA, require a visa interview. We offer 5 mock interview sessions to ensure you're fully prepared. These sessions simulate real interview scenarios and provide personalized feedback. For the USA, our interview preparation package costs INR 10,000 and includes all five sessions."
    },
    {
      question: "What financial documents are required for the visa?",
      answer: "You need to provide financial proof showing you can support yourself during your studies. This includes: Bank statements (3-6 months), Financial sponsorship letters, and Scholarship/grant confirmation letters (if applicable). We review all documents to ensure they meet requirements."
    },
    {
      question: "Do I need medical or travel insurance for my student visa?",
      answer: "Yes, many countries require proof of medical or travel insurance to cover health-related expenses during your stay. We'll help you find an appropriate insurance plan that meets visa requirements."
    },
    {
      question: "Can I work on a student visa while studying?",
      answer: "Yes, most countries allow part-time work: USA: Up to 20 hours per week on-campus, UK: Up to 20 hours per week during term time, Canada: Up to 20 hours per week off-campus, Germany: Up to 120 full days or 240 half days per year."
    },
    {
      question: "What happens if my visa application is rejected?",
      answer: "If your visa is rejected, we'll help analyze the reason and assist with reapplication. Our team will review your previous application, identify issues, and guide you in improving your chances for approval."
    },
    {
      question: "Can I extend my student visa if my course takes longer?",
      answer: "Yes, most countries allow visa extensions if your course duration extends. We assist with the extension process, ensuring all necessary documents are submitted on time."
    },
    {
      question: "Can my family members apply for visas to join me?",
      answer: "Yes, many countries allow dependent visas: USA: F-2 visa for F-1 visa holders' dependents, UK: Dependent visa for Tier 4 visa holders, Canada: Dependent visas for spouses and children. We guide family members through their applications."
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
            Visa Application FAQs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find detailed answers to common visa-related questions
          </p>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-6 py-4 text-left text-lg font-medium text-gray-900 shadow-md hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary-500">
                        <span>{faq.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-primary-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pt-4 pb-6 text-gray-600">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaFAQSection; 