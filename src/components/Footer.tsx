export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <a href="#home" className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">
                EVER-HEALTHY
              </span>
              <span className="text-xs font-medium text-secondary-500 tracking-widest uppercase">
                Dental Care
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Advanced Dental Care with a Gentle Touch. Providing expert dental services in Pathankot with over 6 years of experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary-400 transition-colors">Clinic Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Treatments</h4>
            <ul className="space-y-2 text-sm">
              <li>Teeth Cleaning</li>
              <li>Root Canal Treatment</li>
              <li>Dental Implants</li>
              <li>Braces / Orthodontics</li>
              <li>Teeth Whitening</li>
              <li>Tooth Extraction</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Ever-Healthy Dental Care. All rights reserved.</p>
          <p>Designed for Healthcare Excellence</p>
        </div>
      </div>
    </footer>
  );
}
