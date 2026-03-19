import { motion } from 'motion/react';
import { Award, Microscope, IndianRupee, ShieldCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    title: '6+ Years Experience',
    description: 'A proven track record of successful treatments and happy patients.',
    icon: Award,
  },
  {
    title: 'Modern Equipment',
    description: 'State-of-the-art dental technology for precise diagnosis and care.',
    icon: Microscope,
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent and reasonable costs without compromising on quality.',
    icon: IndianRupee,
  },
  {
    title: 'High Hygiene Standards',
    description: 'Strict sterilization protocols to ensure a 100% safe environment.',
    icon: ShieldCheck,
  },
  {
    title: 'Friendly & Professional',
    description: 'A welcoming atmosphere with a team that genuinely cares about you.',
    icon: HeartHandshake,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-700 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary-200 tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Setting the Standard for Dental Excellence
            </h3>
            <p className="text-lg text-primary-100 mb-10 leading-relaxed">
              At Ever-Healthy Dental Care, we don't just treat teeth; we care for people. Our commitment to quality, comfort, and affordability makes us the preferred choice for families in Pathankot.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <Icon className="w-5 h-5 text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{reason.title}</h4>
                      <p className="text-primary-100">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Clinic Interior" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Modern Equipment" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
