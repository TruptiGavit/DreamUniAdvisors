import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaGlobe, FaHandshake, FaChartLine, FaAward, FaLinkedin, FaInstagram, FaYoutube, FaUserCheck, FaUniversity, FaFileAlt, FaClipboardCheck, FaUserTie, FaMoneyBillWave } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

const AboutPage = () => {
  const achievements = [
    { label: "GMAT Score", value: "740", icon: <FaGraduationCap /> },
    { label: "IELTS Score", value: "8.5", icon: <FaChartLine /> },
    { label: "Students Mentored", value: "22+", icon: <FaUsers /> },
    { label: "Scholarship Won", value: "$150K", icon: <FaAward /> }
  ];

  const universities = [
    "University of North Carolina",
    "Michigan Ross",
    "University of Washington",
    "Boston University",
    "Warwick Business School",
    "University of Melbourne",
    "University of Sydney",
    "Frankfurt Business School",
    "Monash University",
    "University of Toronto"
  ];

  const socialLinks = [
    { platform: "LinkedIn", icon: <FaLinkedin />, url: "#", color: "bg-blue-600" },
    { platform: "Instagram", icon: <FaInstagram />, url: "#", color: "bg-pink-600" },
    { platform: "YouTube", icon: <FaYoutube />, url: "#", color: "bg-red-600" }
  ];

  const processSteps = [
    {
      title: "Comprehensive Profile Evaluation",
      description: "In-depth analysis of your academic background, work experience, skills, and long-term goals to align with top business school requirements.",
      icon: <FaUserCheck />
    },
    {
      title: "Targeted School Selection",
      description: "Identify and narrow down best-fit schools matching your career ambitions, location preferences, and program structure.",
      icon: <FaUniversity />
    },
    {
      title: "Strategic Resume and Essays",
      description: "Build a powerful resume highlighting leadership and achievements, plus write compelling essays showcasing your story.",
      icon: <FaFileAlt />
    },
    {
      title: "Application Preparation and Review",
      description: "Step-by-step guidance in completing applications, including transcripts, LORs, and certifications.",
      icon: <FaClipboardCheck />
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews with feedback on communication, body language, and responses to ensure confident performance.",
      icon: <FaUserTie />
    },
    {
      title: "Scholarship and Financial Aid",
      description: "Help explore scholarship opportunities, apply for financial aid, and negotiate offers.",
      icon: <FaMoneyBillWave />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-8">
              <img
                src="/path-to-your-image.jpg" // Add your profile image
                alt="Rajpal"
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello, I'm Rajpal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small village in Rajasthan to top global MBA programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">My Journey</h2>
              <p>
                I come from a small village in Rajasthan, India, where opportunities for education were limited and English was rarely spoken. Growing up, I attended a government school that didn't offer English as a medium of instruction, but that didn't deter my dreams. Instead, it ignited a passion for language that would shape my future.
              </p>
              <p>
                I pursued a degree in Japanese at the English and Foreign Languages University in Hyderabad, a decision that opened new horizons for me. My career took off when I joined JSW as a Japanese language consultant, where I had the incredible opportunity to collaborate with JFE Japan.
              </p>
              <p>
                Currently, I work as a Senior Compliance and Operations Associate at Amazon in Bangalore. Balancing a demanding job while preparing for the GMAT and IELTS was challenging, yet I thrived under pressure, achieving a GMAT score of 740 and an IELTS score of 8.5.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Work with Me: 6-Step Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Applying to top MBA and MIM programs is a detailed and strategic journey. I simplify this process for you and ensure your application stands out with a tailored, step-by-step approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 relative group hover:shadow-xl transition-shadow"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xl mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why This Process Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why This Process Works
            </h3>
            <p className="text-gray-600">
              By breaking the complex application process into manageable steps, I offer clear, personalized guidance at each stage. With my experience in helping candidates gain admission to elite institutions across the USA, UK, Australia, Germany, Canada, and beyond, I will ensure your application is competitive and complete.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accepted Universities</h2>
            <p className="text-xl text-gray-600">With $150,000 in scholarships</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={university}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">{university}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Me</h2>
            <p className="text-xl text-gray-600 mb-8">Follow my journey and get in touch</p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${social.color} text-white p-4 rounded-full hover:opacity-90 transition-opacity`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage; 