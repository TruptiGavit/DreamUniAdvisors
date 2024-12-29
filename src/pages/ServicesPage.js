import { motion } from 'framer-motion';
import { FaGraduationCap, FaFileAlt, FaUserTie, FaChartLine, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Profile Evaluation",
      description: "Comprehensive assessment of your academic and professional profile to identify the best-fit programs.",
      features: [
        "In-depth profile analysis",
        "School shortlisting",
        "Admission probability",
        "Personalized roadmap"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FaFileAlt />,
      title: "Application Support",
      description: "End-to-end assistance with your business school applications.",
      features: [
        "Essay brainstorming & editing",
        "Resume crafting",
        "Recommendation strategy",
        "Application review"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaUserTie />,
      title: "Interview Preparation",
      description: "Comprehensive interview preparation with mock sessions and feedback.",
      features: [
        "Mock interviews",
        "Personalized feedback",
        "Common questions prep",
        "School-specific guidance"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <FaChartLine />,
      title: "Test Preparation",
      description: "Expert guidance for GMAT, GRE, and English proficiency tests.",
      features: [
        "Customized study plan",
        "Practice materials",
        "Mock tests",
        "Score improvement strategies"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <FaLaptopCode />,
      title: "Career Counseling",
      description: "Career guidance and post-admission support for your journey.",
      features: [
        "Career path planning",
        "Industry insights",
        "Network building",
        "Post-MBA guidance"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <FaGlobe />,
      title: "Visa & Immigration",
      description: "Support with visa applications and immigration procedures.",
      features: [
        "Document preparation",
        "Application guidance",
        "Interview preparation",
        "Process assistance"
      ],
      gradient: "from-rose-500 to-pink-600"
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your business school journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative m-[1px] bg-white rounded-xl p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center text-xl mb-4`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <button className={`mt-8 w-full py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium opacity-90 hover:opacity-100 transition-opacity`}>
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a free consultation with our admissions experts
            </p>
            <button className="px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage; 