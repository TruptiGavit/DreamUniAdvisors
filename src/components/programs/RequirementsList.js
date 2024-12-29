import { motion } from 'framer-motion';
import { programRequirements } from '../../data/programRequirements';

const RequirementsList = ({ program }) => {
  const requirements = programRequirements[program].general;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mt-8"
    >
      <h3 className="text-2xl font-bold mb-4">Requirements</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Test Requirements</h4>
          <ul className="space-y-2">
            {requirements.tests.map((test, index) => (
              <li key={index} className="text-gray-600">• {test}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Required Documents</h4>
          <ul className="space-y-2">
            {requirements.documents.map((doc, index) => (
              <li key={index} className="text-gray-600">• {doc}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default RequirementsList; 