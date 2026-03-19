import { motion } from 'motion/react';
import { Stethoscope, HeartPulse, ShieldPlus } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Dentist" 
                className="w-full h-auto object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="font-semibold text-xl mb-1">Dr. Nitish Sharma (M.D.S.)</p>
                <p className="font-semibold text-xl mb-1">Dr. Bandna Sharma (B.D.S.)</p>
                <p className="text-slate-200">Chief Dental Surgeons</p>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600 mb-1">6+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years of<br/>Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary-600 tracking-widest uppercase mb-3">About The Doctor</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Committed to Excellence in Dental Healthcare
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 6 years of dedicated experience in healthcare, our clinic is built on a foundation of trust, expertise, and patient satisfaction. We believe that every smile tells a story, and our goal is to make yours brilliant.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Expert Diagnosis</h4>
                  <p className="text-slate-600">Thorough examinations using modern technology to identify and treat dental issues accurately.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center text-secondary-600">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Compassionate Care</h4>
                  <p className="text-slate-600">A gentle touch and a patient-first approach to ensure a comfortable, pain-free experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                  <ShieldPlus className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">High Hygiene Standards</h4>
                  <p className="text-slate-600">Strict sterilization protocols to guarantee a safe and clean environment for every patient.</p>
                </div>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            >
              Learn More About Us
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
