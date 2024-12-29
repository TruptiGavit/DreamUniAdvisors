import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "1-School Package",
    subtitle: "Ultimate Edition",
    price: "₹35,000",
    features: [
      "Full application support for one school with ultimate precision and care",
      "100% guarantee for securing an application fee waiver",
      "Tailored essay and resume guidance with unlimited revisions until perfection",
      "Scholarship support to increase your chances of financial aid",
      "Personalized video interview preparation sessions for top performance",
      "Exclusive access to alumni connections and support for crafting cold emails to connect with them"
    ],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "3-School Package",
    subtitle: "Premium Edition",
    price: "₹85,000",
    popular: true,
    features: [
      "Strategic support for 3 schools with in-depth, customized application assistance",
      "Guaranteed application fee waivers for each school",
      "Comprehensive essay and resume edits with up to 5 rounds of feedback per school",
      "Scholarship support to optimize financial aid opportunities",
      "Complete video interview preparation sessions for each school",
      "Access to alumni networks and strategic cold email guidance for effective networking"
    ],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "5-School Package",
    subtitle: "Ultimate Call",
    price: "₹1,00,000",
    features: [
      "Elite-level support for 5 schools with unmatched attention to detail and strategy",
      "Guaranteed application fee waivers for all schools",
      "Unlimited essay and resume reviews until the final product shines",
      "Scholarship maximization assistance to secure the best financial packages",
      "Comprehensive video interview preparation to ensure you ace the interviews",
      "Personalized alumni connection strategies and networking support, including cold email crafting and outreach plans"
    ],
    gradient: "from-green-500 to-teal-600"
  }
];

const PricingSection = () => {
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
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive application support packages tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-xl text-sm font-medium">
                  Popular Choice
                </div>
              )}

              {/* Header */}
              <div className={`p-8 bg-gradient-to-r ${pkg.gradient} text-white`}>
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-white/90 mb-4">{pkg.subtitle}</p>
                <div className="text-3xl font-bold">{pkg.price}</div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className={`mt-1.5 mr-3 flex-shrink-0 text-gradient-to-r ${pkg.gradient}`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`mt-8 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-gradient-to-r ${pkg.gradient} hover:opacity-90 transition-opacity`}
                >
                  Get Started
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            All packages include personalized guidance and support throughout your application journey.
            <br />
            Contact us for custom packages or specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 