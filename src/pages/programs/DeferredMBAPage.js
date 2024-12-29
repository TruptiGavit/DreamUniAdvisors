import { motion } from 'framer-motion';
import ProgramLayout from '../../components/layout/ProgramLayout';
import { universitiesData } from '../../data/universities';
import UniversityCard from '../../components/universities/UniversityCard';

const DeferredMBAPage = () => {
  const deferredMBAPrograms = universitiesData.deferredMBA || [];

  return (
    <ProgramLayout
      title="Deferred MBA Programs"
      description="Secure your MBA admission while still in university or early in your career"
      overview="Deferred MBA programs allow undergraduate students and early career professionals to secure a place in a future MBA class while gaining valuable work experience."
      benefits={[
        "Guaranteed MBA admission",
        "Flexibility to gain work experience",
        "Early career planning",
        "Access to school resources",
        "Network building opportunities"
      ]}
    >
      {/* Universities Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deferredMBAPrograms.map((university) => (
            <UniversityCard 
              key={university.name} 
              university={university}
            />
          ))}
        </div>
      </section>
    </ProgramLayout>
  );
};

export default DeferredMBAPage; 