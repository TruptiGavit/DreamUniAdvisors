import { motion } from 'framer-motion';
import { FaGraduationCap, FaChartLine, FaUserTie } from 'react-icons/fa';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: <FaGraduationCap />,
      title: "MBA Programs",
      description: "Transform your career with a Master of Business Administration from top global universities.",
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80",
      features: ["2+ years work experience", "GMAT/GRE required", "Full-time & Part-time options"]
    },
    {
      icon: <FaUserTie />,
      title: "MiM Programs",
      description: "Kickstart your management career with a Master in Management degree.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      features: ["Fresh graduates", "GMAT optional", "1-2 year duration"]
    },
    {
      icon: <FaChartLine />,
      title: "MSBA Programs",
      description: "Master the world of data with a Master of Science in Business Analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      features: ["Technical background", "Strong analytical skills", "Data-driven curriculum"]
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
            Our Featured Programs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the program that best fits your career goals
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-3xl mb-2">{program.icon}</div>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-600">{program.description}</p>
                <ul className="mt-4 space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-primary-500 text-white py-3 rounded-lg font-medium transition-colors hover:bg-primary-600"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms; 