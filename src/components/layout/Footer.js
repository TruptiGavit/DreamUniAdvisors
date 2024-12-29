import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Programs: [
      { name: 'MBA Programs', path: '/programs/mba' },
      { name: 'Deferred MBA', path: '/programs/deferred-mba' },
      { name: 'Master in Management', path: '/programs/mim' },
      { name: 'MS Business Analytics', path: '/programs/msba' },
      { name: 'Indian MBA', path: '/programs/india' }
    ],
    Services: [
      { name: 'Profile Evaluation', path: '/services#evaluation' },
      { name: 'Application Strategy', path: '/services#strategy' },
      { name: 'Essay Editing', path: '/services#essays' },
      { name: 'Interview Prep', path: '/services#interview' },
      { name: 'Visa Guidance', path: '/services#visa' }
    ],
    Resources: [
      { name: 'Program Finder', path: '/program-finder' },
      { name: 'University Rankings', path: '/rankings' },
      { name: 'Success Stories', path: '/testimonials' },
      { name: 'Blog', path: '/blog' },
      { name: 'FAQs', path: '/faqs' }
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebookF />, path: 'https://facebook.com' },
    { icon: <FaTwitter />, path: 'https://twitter.com' },
    { icon: <FaInstagram />, path: 'https://instagram.com' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com' },
    { icon: <FaYoutube />, path: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} DreamUni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 