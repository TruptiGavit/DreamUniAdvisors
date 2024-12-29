import { motion } from 'framer-motion';

const CareerOutcomes = ({ program }) => {
  const careers = {
    mba: [
      'Management Consultant',
      'Investment Banker',
      'Product Manager',
      'Strategy Manager',
      'Business Development Director'
    ],
    mim: [
      'Business Analyst',
      'Project Manager',
      'Marketing Manager',
      'Operations Manager',
      'Management Trainee'
    ],
    msba: [
      'Data Scientist',
      'Business Intelligence Analyst',
      'Analytics Consultant',
      'Quantitative Analyst',
      'Data Analytics Manager'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mt-8"
    >
      <h3 className="text-2xl font-bold mb-4">Career Outcomes</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Common Career Paths</h4>
          <ul className="space-y-2">
            {careers[program].map((career, index) => (
              <li key={index} className="text-gray-600">• {career}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerOutcomes; 