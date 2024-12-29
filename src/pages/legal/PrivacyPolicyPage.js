import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Introduction",
      content: "At DreamUni, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services."
    },
    {
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          items: [
            "Name and contact information",
            "Educational background",
            "Professional experience",
            "Test scores (GMAT, GRE, TOEFL, IELTS)",
            "Application documents and essays"
          ]
        },
        {
          subtitle: "Usage Information",
          items: [
            "Browser and device information",
            "IP address and location data",
            "Website interaction data",
            "Cookies and tracking technologies"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      items: [
        "To provide personalized admission consulting services",
        "To improve our website and services",
        "To communicate with you about our services",
        "To send relevant updates and marketing communications",
        "To comply with legal obligations"
      ]
    },
    {
      title: "Information Sharing",
      content: "We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and providing our services."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "Your Rights",
      items: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Opt-out of marketing communications",
        "Control cookie preferences"
      ]
    },
    {
      title: "Contact Us",
      content: "If you have questions about this Privacy Policy, please contact us at privacy@dreamuni.com"
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
              Privacy Policy
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
                        <ul className="space-y-2">
                          {subsection.items.map((item, j) => (
                            <li key={j} className="flex items-start text-gray-600">
                              <div className="h-2 w-2 bg-primary-500 rounded-full mt-2 mr-3" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
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

export default PrivacyPolicyPage; 