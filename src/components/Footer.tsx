import { Link } from 'react-router-dom';
import { Users, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
const logo = 'https://i.ibb.co.com/PscCGZCL/logo-pesantren-bin-farid.jpg';

export const Footer = () => {
  return (
    <footer id="main-footer" className="bg-primary-green text-bone-white/80 py-16 px-6 md:px-12 border-t border-primary-green/20 relative overflow-hidden">
      {/* Islamic Mosaic Illustration Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden mix-blend-multiply">
        <svg width="100%" height="100%" className="text-[#0a2e1d]">
          <filter id="emboss">
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite operator="out" in="SourceGraphic" in2="blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.5" />
            <feComposite operator="in" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
          <pattern id="mosaic-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
             <g filter="url(#emboss)">
               <path d="M60 0 L75 45 L120 60 L75 75 L60 120 L45 75 L0 60 L45 45 Z" fill="currentColor" opacity="0.3" />
               <circle cx="60" cy="60" r="15" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.2" />
               <path d="M20 20 L40 40 M100 100 L80 80 M20 100 L40 80 M100 20 L80 40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
               <rect x="55" y="55" width="10" height="10" transform="rotate(45 60 60)" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.2" />
             </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#mosaic-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
        {/* Brand & Philosophy */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 shrink-0 bg-white p-1 rounded-sm shadow-inner">
               <img src={logo} alt="Bin Farid Logo" className="w-full h-full object-contain" />
            </div>
            <Link to="/" className="flex flex-col text-white group">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-60 group-hover:text-secondary-gold transition-colors">Pesantren Pengusaha</span>
              <span className="font-heading font-bold text-2xl leading-none tracking-tight group-hover:text-secondary-gold transition-colors">BIN FARID</span>
            </Link>
          </div>
          <p className="text-xs leading-loose font-light opacity-70 italic border-l border-secondary-gold pl-4">
            "Konglomerat Dunia Akhirat" — Persaudaraan yang bertumbuh dalam iman dan adab.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="referrer" className="hover:text-secondary-gold transition-all"><Instagram size={18} /></a>
            <a href="https://youtube.com" target="_blank" rel="referrer" className="hover:text-secondary-gold transition-all"><Youtube size={18} /></a>
            <a href="https://wa.me/6281281682123" target="_blank" rel="referrer" className="hover:text-secondary-gold transition-all flex items-center gap-2"><Phone size={18} /> <span className="text-[9px]">Hubungi Admin</span></a>
          </div>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-secondary-gold uppercase tracking-[0.2em] text-[11px] font-bold">Navigasi Utama</h4>
          <nav className="flex flex-col gap-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'Tentang', path: '/tentang' },
              { name: 'Program', path: '/program' },
              { name: 'Galeri', path: '/galeri' },
              { name: 'Artikel', path: '/artikel' },
              { name: 'Pendaftaran', path: '/pendaftaran' },
              { name: 'Kontak', path: '/kontak' },
            ].map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-[11px] uppercase tracking-widest hover:text-secondary-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Location Info */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <h4 className="text-secondary-gold uppercase tracking-[0.2em] text-[11px] font-bold">Lokasi Kajian Rutin</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-[11px] leading-relaxed opacity-70">
              <p className="mb-4">
                <mark>Citra Grand Mutiara Blok A</mark> - Pereng Dawe, Jatipereng, Balecatur, Gamping, Sleman Regency, Special Region of Yogyakarta 55295
              </p>
              <div className="flex items-center gap-2 text-secondary-gold font-bold">
                 <div className="w-4 h-[1px] bg-secondary-gold" />
                 
              </div>
            </div>
            <div className="h-44 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group hover:scale-[1.02] transition-transform duration-500">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.832448378546!2d110.30154065!3d-7.79425415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7e91eb7dd1d%3A0xe7cba68c78c3c13e!2sPereng%20dawe%2C%20Balecatur%2C%20Gamping%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1716035000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kajian"
                className="opacity-90 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] opacity-40">
        <div>&copy; {new Date().getFullYear()} Pesantren Pengusaha Bin Farid</div>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};
