import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const UnderConstruction = ({ pageName }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaTools className="mx-auto h-12 w-12 text-primary-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Coming Soon
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The {pageName} page is currently under construction. Please check back later!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderConstruction; 