import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaUsers, FaGlobe, FaTrophy, FaHandshake } from 'react-icons/fa';

const stats = [
  {
    icon: <FaGraduationCap />,
    number: "500+",
    label: "Students Placed",
    description: "Successfully admitted to top global universities",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: <FaUniversity />,
    number: "50+",
    label: "Partner Universities",
    description: "Collaborations with leading institutions",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: <FaTrophy />,
    number: "95%",
    label: "Success Rate",
    description: "Of our students secure their preferred programs",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: <FaHandshake />,
    number: "₹2Cr+",
    label: "Scholarships",
    description: "Total scholarships secured for students",
    gradient: "from-green-500 to-teal-600"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-grid-primary-500/[0.02]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Track record of success in global education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl transition-transform duration-300 group-hover:scale-105" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center text-2xl text-white transform transition-transform duration-300 group-hover:rotate-6`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-900 mt-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-gray-600 mt-2">
                  {stat.description}
                </div>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-2xl transition-all duration-300 group-hover:w-full`} style={{ width: '30%' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 