import { Link, useLocation } from 'react-router-dom';

const ProgramsNav = () => {
  const location = useLocation();
  
  const programs = [
    { path: '/programs/mba', label: 'MBA' },
    { path: '/programs/deferred-mba', label: 'Deferred MBA' },
    { path: '/programs/mim', label: 'MiM' },
    { path: '/programs/msba', label: 'MSBA' },
    { path: '/programs/india', label: 'Indian MBA' }
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {programs.map((program) => (
            <Link
              key={program.path}
              to={program.path}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                location.pathname === program.path
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {program.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsNav; 