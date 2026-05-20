import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '@/src/components/FadeIn';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, X, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('pesantrenpengusahabinfarid@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div id="contact-page" className="pt-32 pb-20 overflow-x-hidden">
      <section className="px-6 md:px-12 mb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Terhubung Dengan Kami</span>
            <h1 className="text-5xl md:text-6xl mb-6">Pintu Selalu Terbuka</h1>
            <p className="text-muted-text text-lg leading-relaxed">
              Ada pertanyaan? Ingin silaturahmi langsung? Atau butuh bantuan spiritual terkait bisnis Anda? Silakan hubungi kami.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { id: 'whatsapp', title: 'WhatsApp Layanan', info: '+62 812-8168-2123', sub: 'Hubungi via Chat (Respons Cepat)', icon: <Phone size={32} /> },
             { id: 'email', title: 'Korespondensi', info: 'pesantrenpengusahabinfarid@gmail.com', sub: 'Hubungi via Email Resmi', icon: <Mail size={32} /> },
             { id: 'location', title: 'Lokasi Kajian', info: 'Citra Grand Mutiara Blok A', sub: 'Kawasan Perumahan, Yogyakarta', icon: <MapPin size={32} /> }
           ].map((contact, idx) => {
             const handleClick = () => {
               if (contact.id === 'whatsapp') {
                 navigate('/pendaftaran');
               } else if (contact.id === 'email') {
                 setIsEmailModalOpen(true);
               } else if (contact.id === 'location') {
                 setIsLocationModalOpen(true);
               }
             };
             return (
               <FadeIn 
                 key={contact.title} 
                 delay={idx * 0.1} 
                 className="bg-bone-white-dark p-12 rounded-[2.5rem] border border-charcoal/5 flex flex-col items-center text-center group hover:bg-primary-green hover:scale-[1.02] cursor-pointer transition-all duration-500 relative"
                 onClick={handleClick}
               >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-green mb-8 shadow-sm group-hover:bg-secondary-gold group-hover:text-charcoal transition-colors">
                     {contact.icon}
                  </div>
                  <h3 className="text-2xl mb-4 font-heading group-hover:text-white transition-colors">{contact.title}</h3>
                  <p className="text-charcoal font-bold mb-2 group-hover:text-secondary-gold transition-colors break-all max-w-full text-sm md:text-base leading-relaxed px-2">{contact.info}</p>
                  <p className="text-muted-text text-sm group-hover:text-white/70 transition-colors uppercase tracking-widest text-[10px] font-bold">{contact.sub}</p>
               </FadeIn>
             );
           })}
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="bg-white p-4 rounded-[4rem] shadow-[0_30px_90px_rgba(0,0,0,0.15)] border border-charcoal/5 h-[600px] overflow-hidden group relative">
             <div className="w-full h-full rounded-[3.5rem] overflow-hidden animate-fade-in">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.832448378546!2d110.30154065!3d-7.79425415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7e91eb7dd1d%3A0xe7cba68c78c3c13e!2sCitra%20Grand%20Mutiara%20Blok%20A%2C%20Balecatur%2C%20Gamping%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1716035000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kajian"
                  className="opacity-95 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />
             </div>
          </FadeIn>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-primary-green p-10 rounded-[2.5rem] text-white">
             <div className="text-center md:text-left mb-8 md:mb-0">
               <h4 className="text-secondary-gold uppercase tracking-widest text-xs font-bold mb-2">Alamat Detail</h4>
               <p className="text-lg">Citra Grand Mutiara Blok A, Jatipereng, Balecatur, Gamping, Sleman Regency, DI Yogyakarta 55295</p>
             </div>
             <a 
               href="https://maps.google.com/?q=Citra%20Grand%20Mutiara%20Blok%20A%20Yogyakarta" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-primary-green px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary-gold hover:text-charcoal transition-all shadow-xl"
             >
                Buka di Maps
             </a>
          </div>
        </div>
      </section>

      {/* Social Support */}
      <section className="px-6 md:px-12 text-center">
         <FadeIn>
            <h2 className="text-3xl mb-12">Ikuti Jejak Kami</h2>
            <div className="flex justify-center gap-10">
               <a href="#" className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 bg-bone-white-dark rounded-full flex items-center justify-center text-muted-text border border-charcoal/5 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                    <Instagram size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 group-hover:text-primary-green transition-colors">Instagram</span>
               </a>
               <a href="#" className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 bg-bone-white-dark rounded-full flex items-center justify-center text-muted-text border border-charcoal/5 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                    <Youtube size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 group-hover:text-primary-green transition-colors">Youtube</span>
               </a>
               <a href="#" className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 bg-bone-white-dark rounded-full flex items-center justify-center text-muted-text border border-charcoal/5 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                    <Facebook size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 group-hover:text-primary-green transition-colors">Facebook</span>
               </a>
            </div>
         </FadeIn>
      </section>

      {/* Zoom-in Modal: Email Korespondensi */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setIsEmailModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white max-w-md w-full rounded-[2.5rem] p-10 shadow-2xl relative border border-charcoal/5 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal p-1.5 rounded-full hover:bg-bone-white transition-all"
                onClick={() => setIsEmailModalOpen(false)}
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-primary-green/10 text-primary-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              
              <h3 className="text-2xl font-heading mb-3 text-secondary-gold">Korespondensi Email</h3>
              <p className="text-muted-text text-sm mb-6">Klik alamat email di bawah ini untuk menyalin secara otomatis.</p>
              
              <div 
                onClick={handleCopyEmail}
                className="bg-bone-white p-5 rounded-2xl border border-charcoal/10 hover:border-primary-green/35 cursor-pointer active:scale-[0.98] transition-all group relative overflow-hidden flex items-center justify-center"
              >
                <span className="font-mono text-xs md:text-sm break-all font-semibold block text-primary-green pr-8 group-hover:text-secondary-gold transition-colors">
                  pesantrenpengusahabinfarid@gmail.com
                </span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 group-hover:text-primary-green transition-colors">
                  {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                </div>
              </div>
              
              {copied && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-xs font-bold uppercase tracking-wider mt-3"
                >
                  Email berhasil disalin ke clipboard!
                </motion.p>
              )}
              
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => setIsEmailModalOpen(false)}
                  className="flex-1 py-4 bg-bone-white hover:bg-bone-white-dark rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors"
                >
                  Tutup
                </button>
                <a 
                  href="mailto:pesantrenpengusahabinfarid@gmail.com"
                  className="flex-1 py-4 bg-primary-green text-white hover:bg-secondary-gold hover:text-charcoal rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors flex items-center justify-center gap-2"
                >
                  Kirim Email <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom-in Modal: Lokasi Kajian */}
      <AnimatePresence>
        {isLocationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setIsLocationModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white max-w-md w-full rounded-[2.5rem] p-10 shadow-2xl relative border border-charcoal/5 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal p-1.5 rounded-full hover:bg-bone-white transition-all"
                onClick={() => setIsLocationModalOpen(false)}
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-primary-green/10 text-primary-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              
              <h3 className="text-2xl font-heading mb-3 text-secondary-gold">Lokasi Kajian</h3>
              <p className="text-muted-text text-sm mb-6">Pesantren Pengusaha Bin Farid berlokasi di area perumahan yang tenang dan nyaman.</p>
              
              <div className="text-xs font-semibold mb-8 text-primary-green bg-bone-white p-4 rounded-xl border border-charcoal/10 leading-relaxed">
                Slot Utama Kajian Berlokasi di: <br />
                <span className="font-bold text-sm block mt-1 text-charcoal">Citra Grand Mutiara Blok A, Yogyakarta</span>
              </div>
              
              <a 
                href="https://maps.google.com/?q=Citra%20Grand%20Mutiara%20Blok%20A%20Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-primary-green text-white hover:bg-secondary-gold hover:text-charcoal rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-xl shadow-primary-green/20 text-center mb-4 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Klik disini untuk cek lokasi <ExternalLink size={14} />
              </a>
              
              <button 
                onClick={() => setIsLocationModalOpen(false)}
                className="w-full py-4 bg-bone-white hover:bg-bone-white-dark rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors"
                >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
