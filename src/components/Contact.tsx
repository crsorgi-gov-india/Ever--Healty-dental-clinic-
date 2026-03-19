import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-primary-400 tracking-widest uppercase mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              We're Here to Help
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Clinic Address</h4>
                  <p className="leading-relaxed">
                    Opposite Gulati Departmental Store,<br />
                    Defence Road, Mamoon,<br />
                    Pathankot-145001, Punjab
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone & WhatsApp</h4>
                  <p className="mb-1">
                    <a href="tel:+919877205554" className="hover:text-primary-400 transition-colors">+91 98772 05554</a>
                  </p>
                  <p className="mb-1">
                    <a href="tel:+919465824004" className="hover:text-primary-400 transition-colors">+91 94658 24004</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Clinic Timings</h4>
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.654064375323!2d75.6430!3d32.2668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f0000000000%3A0x0!2sDefence%20Road%2C%20Mamoon%2C%20Pathankot!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
