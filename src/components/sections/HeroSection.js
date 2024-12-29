import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaGlobe } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-200/30 to-secondary-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-primary-200/30 to-secondary-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Your Journey to
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text"> Global Education</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Navigate your path to top business schools worldwide. Expert guidance 
              for MBA, MiM, and specialized master's programs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/program-finder"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Find Your Program
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to={ROUTES.BOOKING.ROOT}
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Book Your Free Consultation
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <FaGraduationCap className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">500+</div>
                    <div className="text-sm text-gray-600">Students Placed</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">50+</div>
                    <div className="text-sm text-gray-600">Partner Universities</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl transform -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Global Education"
                className="relative w-full rounded-3xl shadow-xl object-cover h-[500px]"
              />
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-8 right-12 bg-white rounded-2xl p-4 shadow-xl"
            >
              <FaGraduationCap className="text-3xl text-primary-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 left-12 bg-white rounded-2xl p-4 shadow-xl"
            >
              <FaGlobe className="text-3xl text-secondary-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 