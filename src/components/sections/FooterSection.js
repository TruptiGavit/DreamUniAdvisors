import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';

const footerLinks = {
  programs: [
    { title: 'MBA Programs', path: ROUTES.PROGRAMS.MBA },
    { title: 'MiM Programs', path: ROUTES.PROGRAMS.MIM },
    { title: 'MSBA Programs', path: ROUTES.PROGRAMS.MSBA },
    { title: 'Deferred MBA', path: ROUTES.PROGRAMS.DEFERRED_MBA },
    { title: 'Indian MBA', path: ROUTES.PROGRAMS.INDIAN_MBA }
  ],
  resources: [
    { title: 'Program Finder', path: ROUTES.RESOURCES.PROGRAM_FINDER },
    { title: 'Application Guide', path: ROUTES.RESOURCES.APPLICATION_GUIDE },
    { title: 'GMAT/GRE Prep', path: ROUTES.RESOURCES.EXAM_PREP },
    { title: 'Scholarships', path: ROUTES.RESOURCES.SCHOLARSHIPS },
    { title: 'FAQs', path: ROUTES.RESOURCES.FAQS },
    { title: 'Visa Guide', path: ROUTES.RESOURCES.VISA }
  ],
  universities: [
    { title: 'Global Universities', path: ROUTES.UNIVERSITIES.GLOBAL },
    { title: 'Indian Universities', path: ROUTES.UNIVERSITIES.INDIAN }
  ],
  company: [
    { title: 'About Us', path: ROUTES.COMPANY.ABOUT },
    { title: 'Services', path: ROUTES.COMPANY.SERVICES },
    { title: 'Contact', path: ROUTES.COMPANY.CONTACT },
    { title: 'Privacy Policy', path: ROUTES.LEGAL.PRIVACY },
    { title: 'Terms of Service', path: ROUTES.LEGAL.TERMS }
  ]
};

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Universities</h3>
            <ul className="space-y-2">
              {footerLinks.universities.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <div className="text-sm">
              © 2024 DreamUniAdvisors. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 