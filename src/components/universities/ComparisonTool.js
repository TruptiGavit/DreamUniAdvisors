import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCompressAlt, FaChartBar, FaGraduationCap, FaMoneyBillWave } from 'react-icons/fa';

const ComparisonTool = ({ universities }) => {
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  const addToComparison = (university) => {
    if (selectedUniversities.length < 3) {
      setSelectedUniversities([...selectedUniversities, university]);
    }
  };

  const removeFromComparison = (universityName) => {
    setSelectedUniversities(selectedUniversities.filter(u => u.name !== universityName));
  };

  const ComparisonCard = ({ university }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold">{university.name}</h3>
        <button
          onClick={() => removeFromComparison(university.name)}
          className="text-gray-400 hover:text-red-500"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <FaGraduationCap className="w-5 h-5 text-primary-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600">GMAT</p>
            <p className="font-medium">{university.gmat}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaMoneyBillWave className="w-5 h-5 text-green-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Tuition</p>
            <p className="font-medium">{university.tuition}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaChartBar className="w-5 h-5 text-blue-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600">Average Salary</p>
            <p className="font-medium">{university.salary}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div>
      {/* Comparison Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsComparing(!isComparing)}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-50 ${
          isComparing ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
        }`}
      >
        <FaCompressAlt className="w-6 h-6" />
      </motion.button>

      {/* Comparison Panel */}
      <AnimatePresence>
        {isComparing && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t shadow-lg p-6 z-40"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Compare Universities</h2>
                <p className="text-gray-600">
                  {selectedUniversities.length}/3 selected
                </p>
              </div>

              {selectedUniversities.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedUniversities.map(uni => (
                    <ComparisonCard key={uni.name} university={uni} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-gray-600">
                    Select universities to compare (max 3)
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComparisonTool; 