import { motion } from 'motion/react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';

export default function Appointment() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-50 rounded-3xl overflow-hidden shadow-sm border border-primary-100">
          <div className="grid lg:grid-cols-2">
            
            {/* CTA Content */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ready for a Brighter Smile?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Book your appointment today and take the first step towards optimal dental health. Our team is ready to provide you with the best care possible.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919877205554?text=Hello,%20I%20want%20to%20book%20a%20dental%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-600 transition-colors w-full sm:w-auto text-lg shadow-md"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Book via WhatsApp (Fastest)</span>
                </a>
                
                <a 
                  href="tel:+919877205554"
                  className="flex items-center justify-center gap-3 bg-white text-primary-700 border-2 border-primary-200 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors w-full sm:w-auto text-lg"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Us: 9877205554</span>
                </a>
              </div>
            </div>

            {/* Simple Form */}
            <div className="bg-white p-10 lg:p-16 border-l border-primary-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Callback</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    placeholder="Briefly describe your dental issue..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Request Appointment</span>
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  We will get back to you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
