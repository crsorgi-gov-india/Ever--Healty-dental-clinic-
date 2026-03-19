import { motion } from 'motion/react';
import { Sparkles, Activity, Syringe, Smile, Wind, Scissors } from 'lucide-react';

const services = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to remove plaque and tartar, ensuring healthy gums and fresh breath.',
    icon: Sparkles,
    color: 'text-sky-500',
    bgColor: 'bg-sky-50'
  },
  {
    title: 'Root Canal Treatment',
    description: 'Painless endodontic therapy to save infected teeth and relieve severe toothaches effectively.',
    icon: Activity,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth that restore full function and aesthetics.',
    icon: Syringe,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  },
  {
    title: 'Braces / Orthodontics',
    description: 'Straighten misaligned teeth and correct bites with traditional braces or clear aligners.',
    icon: Smile,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50'
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced bleaching treatments to remove stains and brighten your smile by several shades.',
    icon: Wind,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    title: 'Tooth Extraction',
    description: 'Safe and comfortable removal of damaged or impacted teeth, including wisdom teeth.',
    icon: Scissors,
    color: 'text-slate-500',
    bgColor: 'bg-slate-50'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary-600 tracking-widest uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Dental Solutions
          </h3>
          <p className="text-lg text-slate-600">
            We offer a wide range of dental treatments using state-of-the-art technology to address all your oral health needs under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
