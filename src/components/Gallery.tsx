import { motion } from 'motion/react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Modern Clinic Reception',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Advanced Dental Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Comfortable Treatment Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Sterilization Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Patient Consultation',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Dental Tools',
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-widest uppercase mb-3">Our Clinic</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A Glimpse Inside
          </h3>
          <p className="text-lg text-slate-600">
            Take a tour of our modern, clean, and welcoming dental clinic designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-lg px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
