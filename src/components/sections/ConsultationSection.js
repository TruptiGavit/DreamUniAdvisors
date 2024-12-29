import { motion } from 'framer-motion';
import { FaUserGraduate, FaClipboardList, FaBullseye, FaRocket, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const timelineItems = [
  {
    title: "Warm Welcome & Introduction",
    duration: "5 minutes",
    icon: <FaUserGraduate />,
    items: [
      "Warm greeting and establishing rapport",
      "Share consultant's background and expertise",
      "Overview of the consultation process"
    ]
  },
  {
    title: "Candidate's Story",
    duration: "15 minutes",
    icon: <FaClipboardList />,
    items: [
      "Personal educational journey",
      "Career milestones and achievements",
      "Motivations for pursuing further education"
    ]
  },
  {
    title: "In-Depth Profile Assessment",
    duration: "15 minutes",
    icon: <FaBullseye />,
    items: [
      "Academic analysis (GPA, coursework)",
      "Professional experience evaluation",
      "Standardized test scores review",
      "Extracurricular activities assessment",
      "Personal attributes discussion"
    ]
  },
  {
    title: "Target Programs & School Selection",
    duration: "5 minutes",
    icon: <FaUserGraduate />,
    items: [
      "Profile-program alignment analysis",
      "School culture and fit discussion",
      "Unique opportunities exploration"
    ]
  },
  {
    title: "Strategic Action Plan",
    duration: "10 minutes",
    icon: <FaRocket />,
    items: [
      "Key takeaways and recommendations",
      "Application enhancement roadmap",
      "Timeline and milestone planning",
      "Additional support options"
    ]
  }
];

const ConsultationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            60-Minute Profile Evaluation Call
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized insights and actionable recommendations for your MBA/MIM journey
          </p>
          <div className="mt-4 inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full">
            <FaClock className="mr-2" />
            <span className="font-semibold">₹1,000</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== timelineItems.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary-100" />
              )}

              {/* Timeline Content */}
              <div className="relative">
                {/* Icon */}
                <div className="absolute -left-8 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-500">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Consultation?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Approach</h4>
              <p className="text-gray-600">
                Tailored experience meeting your individual needs and aspirations
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Actionable Insights</h4>
              <p className="text-gray-600">
                Practical steps and strategies to improve your application
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Commitment to Success</h4>
              <p className="text-gray-600">
                Dedicated guidance throughout your admissions journey
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 transition-opacity"
          >
            Book Your Consultation
            <FaRocket className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection; 