import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaClock, FaDollarSign, FaArrowRight } from 'react-icons/fa';
import { getRandomUnsplashId } from '../../utils/imageUtils';

const UniversityCard = ({ 
  university, 
  gradient = "from-primary-500 to-secondary-500" // Default gradient
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* University Image */}
      <div className="relative h-48">
        <img
          src={`https://images.unsplash.com/photo-${
            university.image || getRandomUnsplashId(university.name)
          }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={university.name}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-t-xl" />
        
        {/* Rank Badge */}
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-900">#{university.rank}</span>
        </div>

        {/* University Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {university.name}
          </h3>
          <p className="text-gray-200 text-sm flex items-center">
            <FaGlobe className="mr-2" />
            {university.country}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Requirements Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <FaGraduationCap className="text-gray-400 mr-2" />
              GMAT
            </div>
            <div className="font-semibold text-gray-900">{university.gmat}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <FaGlobe className="text-gray-400 mr-2" />
              IELTS
            </div>
            <div className="font-semibold text-gray-900">{university.ielts}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <FaClock className="text-gray-400 mr-2" />
              Experience
            </div>
            <div className="font-semibold text-gray-900">{university.workExp}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <FaDollarSign className="text-gray-400 mr-2" />
              Tuition
            </div>
            <div className="font-semibold text-gray-900">{university.tuition}</div>
          </div>
        </div>

        {/* Details */}
        <div className="text-sm text-gray-600 mb-6 line-clamp-2">
          {university.details}
        </div>

        {/* Action Button */}
        <button className="w-full bg-white border-2 border-gray-200 text-gray-700 py-2.5 rounded-lg font-medium flex items-center justify-center group-hover:border-primary-500 group-hover:text-primary-500 transition-colors">
          <span>View Details</span>
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Accent Line */}
      <div className={`h-0.5 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </motion.div>
  );
};

export default UniversityCard; 