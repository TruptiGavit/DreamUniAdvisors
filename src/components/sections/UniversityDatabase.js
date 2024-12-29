import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

const UniversityDatabase = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const programs = [
    {
      type: "MBA Programs",
      schools: [
        {
          name: "Harvard Business School",
          location: "USA",
          gmat: "720+",
          workExp: "2-4 years",
          avgSalary: "$148,750",
          tuition: "$146,880",
        },
        {
          name: "Stanford GSB",
          location: "USA",
          gmat: "730+",
          workExp: "2-4 years",
          avgSalary: "$160,000+",
          tuition: "$149,412",
        },
        {
          name: "INSEAD",
          location: "France/Singapore",
          gmat: "710+",
          workExp: "2-4 years",
          avgSalary: "$140,000+",
          tuition: "$143,000",
        },
        // Add more schools as needed
      ]
    },
    {
      type: "MiM Programs",
      schools: [
        {
          name: "HEC Paris",
          location: "France",
          gmat: "700+",
          workExp: "0-2 years",
          avgSalary: "$116,000",
          tuition: "€49,200",
        },
        {
          name: "London Business School",
          location: "UK",
          gmat: "680+",
          workExp: "0-2 years",
          avgSalary: "$105,000",
          tuition: "£47,000",
        },
        // Add more schools
      ]
    },
    {
      type: "MSBA Programs",
      schools: [
        {
          name: "MIT Sloan",
          location: "USA",
          gmat: "710+",
          workExp: "Not required",
          avgSalary: "$115,000",
          tuition: "$86,300",
        },
        {
          name: "UCLA Anderson",
          location: "USA",
          gmat: "710",
          workExp: "2.5 years avg",
          avgSalary: "$102,600",
          tuition: "$66,709",
        },
        // Add more schools
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            University Database
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore top business schools worldwide
          </p>
        </motion.div>

        <Tab.Group onChange={setSelectedTab}>
          <Tab.List className="mt-12 flex space-x-2 rounded-xl bg-white p-1 shadow-lg">
            {programs.map((program) => (
              <Tab
                key={program.type}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 text-sm font-medium leading-5
                  ${selected
                    ? 'bg-primary-500 text-white shadow'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`
                }
              >
                {program.type}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-8">
            {programs.map((program, idx) => (
              <Tab.Panel
                key={idx}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {program.schools.map((school) => (
                  <motion.div
                    key={school.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900">{school.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{school.location}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">GMAT</span>
                        <span className="font-medium">{school.gmat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Work Experience</span>
                        <span className="font-medium">{school.workExp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Salary</span>
                        <span className="font-medium">{school.avgSalary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuition</span>
                        <span className="font-medium">{school.tuition}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full bg-primary-500 text-white py-2 rounded-lg font-medium"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default UniversityDatabase; 