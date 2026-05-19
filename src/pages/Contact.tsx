import { FadeIn } from '@/src/components/FadeIn';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact-page" className="pt-32 pb-20">
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
             { title: 'WhatsApp Layanan', info: '+62 812-8168-2123', sub: 'Hubungi via chat (Respons Cepat)', icon: <Phone size={32} /> },
             { title: 'Korespondensi', info: 'info@pesantrenbinfarid.com', sub: 'Untuk proposal & kolaborasi formal', icon: <Mail size={32} /> },
             { title: 'Lokasi Kajian', info: 'Gamping, Sleman, Yogyakarta', sub: 'Kawasan Pereng Dawe, Jatipereng', icon: <MapPin size={32} /> }
           ].map((contact, idx) => (
             <FadeIn key={contact.title} delay={idx * 0.1} className="bg-bone-white-dark p-12 rounded-[2.5rem] border border-charcoal/5 flex flex-col items-center text-center group hover:bg-primary-green transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-green mb-8 shadow-sm group-hover:bg-secondary-gold group-hover:text-charcoal transition-colors">
                   {contact.icon}
                </div>
                <h3 className="text-2xl mb-4 font-heading group-hover:text-white transition-colors">{contact.title}</h3>
                <p className="text-charcoal font-bold mb-2 group-hover:text-secondary-gold transition-colors">{contact.info}</p>
                <p className="text-muted-text text-sm group-hover:text-white/70 transition-colors uppercase tracking-widest text-[10px] font-bold">{contact.sub}</p>
             </FadeIn>
           ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="bg-white p-4 rounded-[4rem] shadow-[0_30px_90px_rgba(0,0,0,0.15)] border border-charcoal/5 h-[600px] overflow-hidden group relative">
             <div className="w-full h-full rounded-[3.5rem] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.832448378546!2d110.30154065!3d-7.79425415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7e91eb7dd1d%3A0xe7cba68c78c3c13e!2sPereng%20dawe%2C%20Balecatur%2C%20Gamping%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1716035000000!5m2!1sen!2sid" 
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
               <p className="text-lg">Pereng Dawe, Jatipereng, Balecatur, Gamping, Sleman Regency, DI Yogyakarta 55295</p>
             </div>
             <a 
               href="https://maps.google.com" 
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
    </div>
  );
}
