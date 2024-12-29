import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgramTabs from '../components/programs/ProgramTabs';
import ProgramDetails from '../components/programs/ProgramDetails';
import RequirementsList from '../components/programs/RequirementsList';
import CareerOutcomes from '../components/programs/CareerOutcomes';

const ProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState('mba');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProgramTabs 
          selectedProgram={selectedProgram} 
          onSelect={setSelectedProgram} 
        />
        
        <div className="mt-8">
          <ProgramDetails program={selectedProgram} />
          <RequirementsList program={selectedProgram} />
          <CareerOutcomes program={selectedProgram} />
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage; 