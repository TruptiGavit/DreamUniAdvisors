import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChartLine, FaLaptopCode, FaArrowRight } from 'react-icons/fa';

const programs = [
  {
    id: 'mba',
    icon: <FaGraduationCap className="text-4xl text-white" />,
    title: "MBA Programs",
    description: "Full-time and deferred MBA programs at top business schools worldwide.",
    features: [
      "2+ years work experience",
      "GMAT/GRE required",
      "Leadership focus",
      "Global networking"
    ],
    path: "/programs/mba",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 'mim',
    icon: <FaChartLine className="text-4xl text-white" />,
    title: "Master in Management",
    description: "Perfect for recent graduates looking to kickstart their business career.",
    features: [
      "0-2 years experience",
      "GMAT/GRE optional",
      "Business fundamentals",
      "International exposure"
    ],
    path: "/programs/mim",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 'msba',
    icon: <FaLaptopCode className="text-4xl text-white" />,
    title: "MS Business Analytics",
    description: "Combine business knowledge with data analytics and technology.",
    features: [
      "Technical background",
      "Data-driven focus",
      "Industry projects",
      "Tech career path"
    ],
    path: "/programs/msba",
    gradient: "from-green-500 to-teal-600"
  }
];

const programBackgrounds = {
  mba: 'photo-1454165804606-c3d57bc86b40',
  mim: 'photo-1552664730-d307ca884978',
  msba: 'photo-1460925895917-afdab827c52f'
};

const FeaturedProgramsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl" />
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
            Find Your Perfect Program
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our range of specialized business programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                {/* Program Image */}
                <div className="h-48 relative">
                  <img
                    src={`https://images.unsplash.com/${programBackgrounds[program.id]}?auto=format&fit=crop&w=800&q=80`}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className={`w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-xl flex items-center justify-center mb-2`}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={program.path}
                    className={`inline-flex items-center justify-center w-full px-6 py-3 text-white font-medium rounded-xl bg-gradient-to-r ${program.gradient} hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgramsSection; 