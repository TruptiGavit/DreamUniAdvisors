import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'Programs',
      subItems: [
        {
          title: 'Program Overview',
          path: '/programs'
        },
        {
          title: 'MBA Programs',
          items: [
            { title: 'Full-time MBA', path: '/programs/mba' },
            { title: 'Deferred MBA', path: '/programs/deferred-mba' },
            { title: 'Indian MBA', path: '/programs/india' }
          ]
        },
        {
          title: 'Specialized Masters',
          items: [
            { title: 'Master in Management (MiM)', path: '/programs/mim' },
            { title: 'MS Business Analytics', path: '/programs/msba' }
          ]
        }
      ]
    },
    { 
      title: 'Universities',
      subItems: [
        { title: 'Global Universities', path: '/universities/global' },
        { title: 'Indian Universities', path: '/universities/india' }
      ]
    },
    {
      title: 'Resources',
      subItems: [
        { title: 'Program Finder', path: ROUTES.RESOURCES.PROGRAM_FINDER },
        { title: 'Application Guide', path: ROUTES.RESOURCES.APPLICATION_GUIDE },
        { title: 'GMAT/GRE Prep', path: ROUTES.RESOURCES.EXAM_PREP },
        { title: 'Scholarships', path: ROUTES.RESOURCES.SCHOLARSHIPS },
        { title: 'Visa Guide', path: ROUTES.RESOURCES.VISA },
        { title: 'FAQs', path: ROUTES.RESOURCES.FAQS }
      ]
    },
    { title: 'Services', path: '/services' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  const handleMouseEnter = (title) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderDropdownMenu = (items) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 border border-gray-100"
    >
      {items.map((item, index) => (
        <div key={item.title || item.path}>
          {item.items ? (
            <div className="py-2">
              <div className="px-4 py-1 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {item.title}
              </div>
              {item.items.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500"
                >
                  {subItem.title}
                </Link>
              ))}
              {index < items.length - 1 && <div className="my-1 border-b border-gray-100" />}
            </div>
          ) : (
            <Link
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </motion.div>
  );

  const renderMobileMenu = (items) => (
    items.map((item) => (
      <div key={item.title || item.path} className="py-1">
        {item.items ? (
          <>
            <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {item.title}
            </div>
            {item.items.map((subItem) => (
              <Link
                key={subItem.path}
                to={subItem.path}
                className="block px-6 py-2 text-gray-600 hover:text-primary-500"
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </>
        ) : (
          <Link
            to={item.path}
            className="block px-4 py-2 text-gray-700 hover:text-primary-500"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        )}
      </div>
    ))
  );

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              DreamUniAdvisors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.subItems ? (
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors">
                    <span>{item.title}</span>
                    <FaChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-primary-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.title && renderDropdownMenu(item.subItems)}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to={ROUTES.BOOKING.ROOT}
              className="bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {renderMobileMenu(navItems)}
              <Link
                to={ROUTES.BOOKING.ROOT}
                className="w-full mt-4 bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 