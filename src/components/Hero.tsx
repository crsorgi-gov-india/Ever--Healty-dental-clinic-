import { motion } from 'motion/react';
import { Calendar, Phone, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary-100/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary-700 font-medium text-sm mb-6 shadow-sm border border-primary-100">
              <ShieldCheck className="w-4 h-4 text-secondary-500" />
              <span>Advanced Dental Care with a Gentle Touch</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your Smile, <br />
              <span className="text-primary-600">Our Priority</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Providing expert dental care with 6+ years of experience. We combine modern technology with compassionate care to give you the healthy, beautiful smile you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/919877205554?text=Hello,%20I%20want%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>
              <a 
                href="tel:+919877205554"
                className="flex items-center justify-center gap-2 bg-white text-primary-700 border-2 border-primary-100 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 hover:border-primary-200 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-500" />
                <span>6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary-500" />
                <span>Certified Care</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/clinic-photo.png" 
                alt="Ever-Healthy Dental Care Clinic" 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100 hidden sm:flex">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Hygiene Standard</p>
                  <p className="text-slate-900 font-bold">100% Sterilized</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
