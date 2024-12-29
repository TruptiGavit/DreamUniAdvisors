import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing and using DreamUni's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services."
    },
    {
      title: "Services Description",
      content: "DreamUni provides educational consulting services, including but not limited to admissions guidance, application support, and program recommendations for various graduate business programs.",
      items: [
        "Profile evaluation and program recommendations",
        "Application strategy and support",
        "Essay review and editing assistance",
        "Interview preparation",
        "Post-admission support"
      ]
    },
    {
      title: "User Responsibilities",
      items: [
        "Provide accurate and truthful information",
        "Maintain confidentiality of account credentials",
        "Comply with all applicable laws and regulations",
        "Respect intellectual property rights",
        "Use services for legitimate educational purposes only"
      ]
    },
    {
      title: "Payment Terms",
      subsections: [
        {
          subtitle: "Fees",
          content: "Service fees are as listed on our website. All fees are in INR unless otherwise specified."
        },
        {
          subtitle: "Payment Methods",
          content: "We accept payments through secure payment gateways, including credit cards, debit cards, and bank transfers."
        },
        {
          subtitle: "Refund Policy",
          content: "Refund requests are evaluated on a case-by-case basis. Please refer to our refund policy for detailed information."
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: "All content on DreamUni's website, including text, graphics, logos, and software, is the property of DreamUni and is protected by intellectual property laws.",
      items: [
        "Content may not be copied or reproduced without permission",
        "Users retain rights to their submitted materials",
        "DreamUni may use anonymized data for research purposes"
      ]
    },
    {
      title: "Limitation of Liability",
      content: "DreamUni strives to provide accurate information and quality services but makes no guarantees about admission outcomes. We are not liable for any damages arising from the use of our services.",
      items: [
        "No guarantee of admission results",
        "Users are responsible for their application decisions",
        "Service interruptions may occur for maintenance"
      ]
    },
    {
      title: "Termination",
      content: "We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason deemed appropriate.",
      items: [
        "Immediate termination for terms violation",
        "Refund policy applies to terminated services",
        "Users may terminate services with written notice"
      ]
    },
    {
      title: "Changes to Terms",
      content: "DreamUni reserves the right to modify these terms at any time. Users will be notified of significant changes, and continued use of services constitutes acceptance of modified terms."
    },
    {
      title: "Contact Information",
      content: "For questions about these Terms of Service, please contact us at legal@dreamuni.com"
    }
  ];

  return (
    <PageLayout>
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: March 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-gray-600 mb-4">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-3" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, i) => (
                      <div key={i} className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {subsection.subtitle}
                        </h3>
                        <p className="text-gray-600 mb-2">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfServicePage; 