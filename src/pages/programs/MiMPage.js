import { motion } from 'framer-motion';
import { universitiesData } from '../../data/universities';
import ProgramLayout from '../../components/layout/ProgramLayout';
import UniversityCard from '../../components/universities/UniversityCard';

const MiMPage = () => {
  const mimPrograms = universitiesData.mim || [];

  return (
    <ProgramLayout
      title="Master in Management"
      description="Kickstart your global business career with a prestigious MiM degree"
      overview="Perfect for recent graduates, our Master in Management programs provide strong business foundations and international exposure at top European and global institutions."
      benefits={[
        "Ideal for recent graduates",
        "Strong business fundamentals",
        "Global perspective",
        "Career development support",
        "Industry connections",
        "Fast-track your career"
      ]}
      requirements={[
        {
          title: "Academic Requirements",
          items: [
            "Bachelor's degree (any discipline)",
            "Strong academic record",
            "GMAT/GRE (optional for some schools)",
            "English proficiency"
          ]
        },
        {
          title: "Experience",
          items: [
            "0-2 years work experience",
            "Leadership potential",
            "Extracurricular activities",
            "International exposure"
          ]
        },
        {
          title: "Application Process",
          items: [
            "Online application",
            "Essays and CV",
            "References",
            "Video/Personal interview"
          ]
        }
      ]}
      gradient="from-purple-500 to-pink-500"
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3" // Modern campus/young professionals
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mimPrograms.map((university, index) => (
          <motion.div
            key={university.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <UniversityCard 
              university={university}
              gradient="from-purple-500 to-pink-500"
            />
          </motion.div>
        ))}
      </div>
    </ProgramLayout>
  );
};

export default MiMPage; 