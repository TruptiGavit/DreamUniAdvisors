import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import ProgramFinderSection from '../components/sections/ProgramFinderSection';
import FeaturedProgramsSection from '../components/sections/FeaturedProgramsSection';
import StatsSection from '../components/sections/StatsSection';
import ProcessStepsSection from '../components/sections/ProcessStepsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import ConsultationSection from '../components/sections/ConsultationSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramFinderSection />
      <FeaturedProgramsSection />
      <StatsSection />
      <ProcessStepsSection />
      <TestimonialsSection />
      <ConsultationSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage; 