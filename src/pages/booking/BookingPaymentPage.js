import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCreditCard, FaLock } from 'react-icons/fa';
import PageLayout from '../../components/layout/PageLayout';
import { ROUTES } from '../../constants/routes';

const BookingPaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Implement payment gateway integration
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      navigate(ROUTES.BOOKING.SUCCESS);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Your Booking
              </h1>
              <p className="text-gray-600">
                Secure payment powered by Razorpay
              </p>
            </div>

            <div className="mb-8 p-4 bg-primary-50 rounded-lg">
              <h2 className="font-semibold text-gray-900 mb-2">Booking Summary</h2>
              <div className="flex justify-between text-gray-600">
                <span>60-min Consultation</span>
                <span>₹1,000</span>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center ${
                  loading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <FaCreditCard className="mr-2" />
                    Pay Now
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
              <FaLock className="mr-2" />
              Your payment is secure and encrypted
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BookingPaymentPage; 