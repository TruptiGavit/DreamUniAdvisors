import { motion } from 'framer-motion';
import { universitiesData } from '../../data/universities';
import ProgramLayout from '../../components/layout/ProgramLayout';
import UniversityCard from '../../components/universities/UniversityCard';

const requirements = [
  {
    title: "Academic Requirements",
    items: [
      "Bachelor's degree with strong academic record",
      "GMAT/GRE score (700+ recommended)",
      "English proficiency (IELTS 7.0+ or equivalent)"
    ]
  },
  {
    title: "Professional Experience",
    items: [
      "2-5 years of work experience",
      "Leadership potential",
      "Career progression"
    ]
  },
  {
    title: "Application Components",
    items: [
      "Essays and recommendations",
      "Resume/CV",
      "Interview (if shortlisted)",
      "Application fee"
    ]
  }
];

const MBAPage = () => {
  const mbaPrograms = universitiesData.mba || [];

  return (
    <ProgramLayout
      title="Full-time MBA Programs"
      description="Transform your career with a world-class MBA degree"
      overview="Our MBA programs offer comprehensive business education at top global institutions, preparing you for leadership roles across industries."
      benefits={[
        "World-class business education",
        "Strong global alumni network",
        "Career advancement opportunities",
        "Leadership development",
        "International exposure",
        "High ROI potential"
      ]}
      requirements={requirements}
      gradient="from-blue-600 to-indigo-600"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3" // Business/Corporate setting
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mbaPrograms.map((university, index) => (
          <motion.div
            key={university.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <UniversityCard university={university} />
          </motion.div>
        ))}
      </div>
    </ProgramLayout>
  );
};

export default MBAPage; 