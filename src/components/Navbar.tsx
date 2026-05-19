import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const logo = 'https://i.ibb.co.com/PscCGZCL/logo-pesantren-bin-farid.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Program', path: '/program' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Artikel', path: '/artikel' },
  { name: 'Pendaftaran', path: '/pendaftaran' },
  { name: 'Kontak', path: '/kontak' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoZoomed, setIsLogoZoomed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        id="main-nav"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6 px-12",
          isScrolled ? "bg-bone-white/80 backdrop-blur-md border-b border-primary-green/10 py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 shrink-0 cursor-zoom-in active:scale-95 transition-transform"
              onClick={() => setIsLogoZoomed(true)}
            >
               <img src={logo} alt="Bin Farid Logo" className="w-full h-full object-contain" />
            </div>
            <Link to="/" className="group flex flex-col">
              <div className={cn(
                "flex flex-col transition-colors",
                isScrolled || isMobileMenuOpen ? "text-primary-green" : "text-white"
              )}>
                <span className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-70 group-hover:text-secondary-gold transition-colors">Pesantren Pengusaha</span>
                <span className="font-heading font-bold text-2xl leading-none tracking-tight group-hover:text-secondary-gold transition-colors">BIN FARID</span>
              </div>
            </Link>
          </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-primary-green relative py-1",
                isScrolled ? "text-muted-text" : "text-white/80",
                location.pathname === link.path && "text-primary-green border-b border-secondary-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/pendaftaran"
            className={cn(
              "px-8 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-all rounded-sm",
              isScrolled 
                ? "bg-primary-green text-white hover:bg-charcoal" 
                : "bg-white text-primary-green hover:bg-secondary-gold hover:text-charcoal"
            )}
          >
            Konsultasi
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled || isMobileMenuOpen ? "text-charcoal" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[72px] bg-bone-white z-40 lg:hidden overflow-y-auto px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-2xl font-heading text-charcoal border-b border-charcoal/10 pb-4",
                    location.pathname === link.path && "text-primary-green"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/kajian-22"
                className="bg-primary-green text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest mt-4"
              >
                Kajian 22
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* Logo Zoom Modal */}
      <AnimatePresence>
        {isLogoZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-lg flex items-center justify-center p-6 cursor-zoom-out"
            onClick={() => setIsLogoZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-2xl w-full aspect-square bg-white rounded-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal transition-colors"
                onClick={() => setIsLogoZoomed(false)}
              >
                <X size={32} />
              </button>
              <img src={logo} alt="Bin Farid Logo Detail" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
