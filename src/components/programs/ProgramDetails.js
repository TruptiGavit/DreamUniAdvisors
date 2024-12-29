import { motion } from 'framer-motion';
import { programRequirements } from '../../data/programRequirements';

const ProgramDetails = ({ program }) => {
  const details = programRequirements[program].general;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mt-8"
    >
      <h3 className="text-2xl font-bold mb-4">Program Details</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Education Requirements</h4>
          <p className="text-gray-600">{details.education}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Work Experience</h4>
          <p className="text-gray-600">{details.workExperience}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramDetails; 