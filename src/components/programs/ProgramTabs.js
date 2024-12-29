import { motion } from 'framer-motion';

const ProgramTabs = ({ selectedProgram, onSelect }) => {
  const tabs = [
    { id: 'mba', label: 'MBA' },
    { id: 'mim', label: 'MiM' },
    { id: 'msba', label: 'MSBA' }
  ];

  return (
    <div className="flex space-x-4 border-b">
      {tabs.map(tab => (
        <motion.button
          key={tab.id}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => onSelect(tab.id)}
          className={`px-6 py-3 font-medium transition-colors relative ${
            selectedProgram === tab.id
              ? 'text-primary-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.label}
          {selectedProgram === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default ProgramTabs; 