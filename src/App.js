import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GlobalUniversitiesPage from './pages/universities/GlobalUniversitiesPage';
import IndianUniversitiesPage from './pages/universities/IndianUniversitiesPage';
import MBAPage from './pages/programs/MBAPage';
import MiMPage from './pages/programs/MiMPage';
import MSBAPage from './pages/programs/MSBAPage';
import DeferredMBAPage from './pages/programs/DeferredMBAPage';
import RecommendationPage from './pages/RecommendationPage';
import PageNotFound from './components/common/PageNotFound';
import IndianMBAPage from './pages/programs/IndianMBAPage';
import ProgramFinderPage from './pages/ProgramFinderPage';
import ApplicationGuidePage from './pages/ApplicationGuidePage';
import ExamPrepPage from './pages/ExamPrepPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import ProgramsPage from './pages/programs/ProgramsPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';
import { ROUTES } from './constants/routes';
import FAQPage from './pages/FAQPage';
import BookingPage from './pages/BookingPage';
import BookingSuccessPage from './pages/booking/BookingSuccessPage';
import BookingPaymentPage from './pages/booking/BookingPaymentPage';
import VisaPage from './pages/VisaPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/universities/global" element={<GlobalUniversitiesPage />} />
            <Route path="/universities/india" element={<IndianUniversitiesPage />} />
            <Route path="/programs/mba" element={<MBAPage />} />
            <Route path="/programs/mim" element={<MiMPage />} />
            <Route path="/programs/msba" element={<MSBAPage />} />
            <Route path="/programs/deferred-mba" element={<DeferredMBAPage />} />
            <Route path="/program-finder/results" element={<RecommendationPage />} />
            <Route path="/programs/india" element={<IndianMBAPage />} />
            <Route path="/program-finder" element={<ProgramFinderPage />} />
            <Route path="/application-guide" element={<ApplicationGuidePage />} />
            <Route path="/exam-prep" element={<ExamPrepPage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path={ROUTES.LEGAL.PRIVACY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.LEGAL.TERMS} element={<TermsOfServicePage />} />
            <Route path={ROUTES.RESOURCES.FAQS} element={<FAQPage />} />
            <Route path={ROUTES.BOOKING.ROOT} element={<BookingPage />} />
            <Route path={ROUTES.BOOKING.SUCCESS} element={<BookingSuccessPage />} />
            <Route path={ROUTES.BOOKING.PAYMENT} element={<BookingPaymentPage />} />
            <Route path={ROUTES.RESOURCES.VISA} element={<VisaPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 