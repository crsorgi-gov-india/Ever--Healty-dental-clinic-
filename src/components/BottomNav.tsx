import { Home, Stethoscope, Image as ImageIcon, MapPin, Phone } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Services', href: '#services', icon: Stethoscope },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
    { name: 'Contact', href: '#contact', icon: MapPin },
    { name: 'Call', href: 'tel:+919877205554', icon: Phone, isPrimary: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          if (item.isPrimary) {
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center w-14 h-14 -mt-6 bg-primary-600 rounded-full text-white shadow-lg border-4 border-white transition-transform active:scale-95"
              >
                <Icon className="w-6 h-6" />
                <span className="text-[10px] font-medium mt-0.5">{item.name}</span>
              </a>
            );
          }
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center w-14 text-slate-500 hover:text-primary-600 transition-colors active:scale-95"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-1 uppercase tracking-tighter">{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
