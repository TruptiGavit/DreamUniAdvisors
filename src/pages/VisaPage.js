import React from 'react';
import VisaGuideSection from '../components/sections/VisaGuideSection';
import VisaProcessSection from '../components/sections/VisaProcessSection';
import VisaInterviewSection from '../components/sections/VisaInterviewSection';
import VisaFAQSection from '../components/sections/VisaFAQSection';

const VisaPage = () => {
  return (
    <div className="pt-20">
      <VisaGuideSection />
      <VisaProcessSection />
      <VisaInterviewSection />
      <VisaFAQSection />
    </div>
  );
};

export default VisaPage; 