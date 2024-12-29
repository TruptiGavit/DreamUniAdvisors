import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegFileAlt, FaRegHandshake, FaRegStar } from 'react-icons/fa';

const ProcessTimeline = () => {
  const timelineSteps = [
    {
      icon: <FaRegLightbulb />,
      title: "Initial Consultation",
      description: "Free 60-minute strategy session to understand your goals",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRegFileAlt />,
      title: "Profile Building",
      description: "Crafting your unique story and application strategy",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-200",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRegHandshake />,
      title: "Application Support",
      description: "End-to-end guidance through the application process",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
      borderColor: "border-pink-200",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRegStar />,
      title: "Success & Beyond",
      description: "Interview prep and post-admission support",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-200",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Your Journey to Success
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A streamlined process designed for your success
          </p>
        </motion.div>

        <div className="mt-16">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } mb-16 last:mb-0`}
            >
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-primary-500 to-secondary-500" />

              {/* Content */}
              <div className="w-1/2 px-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-2xl overflow-hidden ${step.bgColor} p-8 border-2 ${step.borderColor}`}
                >
                  <div className="relative z-10">
                    <div className={`text-4xl ${step.iconColor} mb-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 rounded-full blur-lg" />
                </motion.div>
              </div>

              {/* Timeline Point */}
              <div className="absolute left-1/2 -ml-4 w-8 h-8">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-full h-full bg-white rounded-full border-4 border-primary-500 shadow-lg"
                />
              </div>

              {/* Image */}
              <div className="w-1/2 px-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium text-lg shadow-lg"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline; 