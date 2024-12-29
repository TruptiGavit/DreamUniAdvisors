import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaLinkedinIn } from 'react-icons/fa';

const testimonials = [
  {
    name: "Priya Sharma",
    program: "MBA, Harvard Business School",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "The guidance I received was invaluable. From GMAT prep to interview coaching, every step was meticulously planned. Now I'm living my dream at HBS!",
    rating: 5,
    location: "New Delhi, India",
    linkedin: "https://linkedin.com",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "Rahul Verma",
    program: "MiM, London Business School",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "The personalized attention and strategic approach to school selection made all the difference. Secured admission with a substantial scholarship!",
    rating: 5,
    location: "Mumbai, India",
    linkedin: "https://linkedin.com",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Ananya Patel",
    program: "MSBA, MIT Sloan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Expert guidance on positioning my technical background for business analytics programs. Couldn't have made it to MIT without their support!",
    rating: 5,
    location: "Bangalore, India",
    linkedin: "https://linkedin.com",
    gradient: "from-orange-500 to-red-600"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-grid-primary-500/[0.02]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-yellow-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our students who made it to their dream schools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl transition-transform duration-300 group-hover:scale-105" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                {/* Quote Icon */}
                <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                  <FaQuoteLeft className="text-sm text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className={`text-sm bg-gradient-to-r ${testimonial.gradient} text-transparent bg-clip-text font-medium`}>
                        {testimonial.program}
                      </p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-b-2xl transition-all duration-300 group-hover:w-full`} style={{ width: '30%' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 