import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaBriefcase, FaChartLine, FaGlobe, FaMoneyBillWave, FaUserGraduate } from 'react-icons/fa';

const questions = [
  {
    id: 'experience',
    question: 'How many years of work experience do you have?',
    icon: <FaBriefcase className="text-4xl text-primary-500 mb-4" />,
    options: [
      { value: '0-2', label: '0-2 years', description: 'Fresh graduate or early career', programs: ['mim', 'msba'] },
      { value: '2-5', label: '2-5 years', description: 'Mid-level professional', programs: ['mba', 'msba'] },
      { value: '5+', label: '5+ years', description: 'Experienced professional', programs: ['mba', 'executive'] }
    ]
  },
  {
    id: 'goal',
    question: 'What is your primary career goal?',
    icon: <FaChartLine className="text-4xl text-primary-500 mb-4" />,
    options: [
      { value: 'management', label: 'General Management', description: 'Lead teams and organizations', programs: ['mba', 'mim'] },
      { value: 'consulting', label: 'Consulting', description: 'Strategic advisory roles', programs: ['mba', 'mim'] },
      { value: 'analytics', label: 'Data Analytics', description: 'Data-driven decision making', programs: ['msba'] },
      { value: 'entrepreneurship', label: 'Entrepreneurship', description: 'Start your own venture', programs: ['mba'] }
    ]
  },
  {
    id: 'location',
    question: 'Preferred study location?',
    icon: <FaGlobe className="text-4xl text-primary-500 mb-4" />,
    options: [
      { value: 'global', label: 'Global', description: 'International business schools', programs: ['mba', 'mim', 'msba'] },
      { value: 'india', label: 'India', description: 'Indian institutions', programs: ['india'] },
      { value: 'flexible', label: 'Flexible', description: 'Open to all locations', programs: ['all'] }
    ]
  },
  {
    id: 'budget',
    question: 'What is your budget range (in INR)?',
    icon: <FaMoneyBillWave className="text-4xl text-primary-500 mb-4" />,
    options: [
      { value: 'low', label: '< 25 Lakhs', description: 'Budget-friendly options', programs: ['india', 'mim'] },
      { value: 'medium', label: '25-50 Lakhs', description: 'Mid-range programs', programs: ['mba', 'mim', 'msba'] },
      { value: 'high', label: '50+ Lakhs', description: 'Premium programs', programs: ['mba'] }
    ]
  },
  {
    id: 'background',
    question: 'What is your educational background?',
    icon: <FaUserGraduate className="text-4xl text-primary-500 mb-4" />,
    options: [
      { value: 'engineering', label: 'Engineering/Technology', programs: ['mba', 'msba'] },
      { value: 'business', label: 'Business/Commerce', programs: ['mba', 'mim'] },
      { value: 'science', label: 'Science/Mathematics', programs: ['msba', 'mba'] },
      { value: 'other', label: 'Other Disciplines', programs: ['mim', 'mba'] }
    ]
  }
];

const ProgramFinderSection = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');

  const handleAnswer = (questionId, answer, programs) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { answer, programs }
    }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const determineProgram = (answers) => {
    // Count program recommendations based on answers
    const programScores = {
      mba: 0,
      mim: 0,
      msba: 0,
      india: 0,
      executive: 0
    };

    // Calculate scores based on answers
    Object.values(answers).forEach(({ programs }) => {
      programs.forEach(program => {
        if (program === 'all') {
          Object.keys(programScores).forEach(key => programScores[key]++);
        } else {
          programScores[program]++;
        }
      });
    });

    // Find the program with the highest score
    const maxScore = Math.max(...Object.values(programScores));
    const recommendedProgram = Object.entries(programScores)
      .find(([_, score]) => score === maxScore)[0];

    // Calculate confidence percentage
    const confidence = Math.round((maxScore / questions.length) * 100);

    return {
      program: recommendedProgram,
      confidence,
      answers: Object.fromEntries(
        Object.entries(answers).map(([key, { answer }]) => [key, answer])
      )
    };
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      setError('Please answer all questions before proceeding.');
      return;
    }

    const recommendation = determineProgram(answers);
    navigate('/program-finder/results', { state: recommendation });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">
              Step {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-primary-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            {questions[currentStep].icon}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {questions[currentStep].question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(questions[currentStep].id, option.value, option.programs)}
                className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                  answers[questions[currentStep].id]?.answer === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="font-medium text-gray-900">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                )}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`px-4 py-2 text-gray-600 ${
                currentStep === 0 ? 'invisible' : ''
              }`}
            >
              Back
            </button>
            
            {currentStep === questions.length - 1 && (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Get Recommendations
              </button>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-red-500 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramFinderSection; 