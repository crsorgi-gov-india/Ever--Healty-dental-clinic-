import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    text: 'Excellent service! The doctor was very patient and explained the entire root canal procedure. Highly recommended for anyone looking for painless treatment.',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    text: 'Very clean and hygienic clinic. I got my teeth whitening done here and the results are amazing. The staff is also very polite and professional.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    text: 'Affordable pricing and top-notch equipment. I have visited many dentists in Pathankot, but Ever-Healthy Dental Care is by far the best experience I\'ve had.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-widest uppercase mb-3">Patient Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our Patients Say
          </h3>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Read about the experiences of our happy patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
