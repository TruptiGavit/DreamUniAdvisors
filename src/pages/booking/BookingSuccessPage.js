import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import PageLayout from '../../components/layout/PageLayout';

const BookingSuccessPage = () => {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for scheduling a consultation. We'll send you a confirmation email shortly.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default BookingSuccessPage; 