import { FadeIn } from '@/src/components/FadeIn';
import { Hero } from '@/src/components/Hero';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Heart, Users, Anchor, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import founderImg from '@/src/assets/images/founder.png';
import manifestoImg from '@/src/assets/images/manifesto.jpg';
import ngajiBisnisImg from '@/src/assets/images/ngaji_bisnis.jpg';
import zalzalahSupportImg from '@/src/assets/images/zalzalah_support.jpg';

const logo = 'https://i.ibb.co.com/PscCGZCL/logo-pesantren-bin-farid.jpg';

export default function Home() {
  return (
    <div id="home-page" className="pb-20">
      <Hero />

      {/* Manifesto Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-bone-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src={manifestoImg} 
                  alt="Ukhuwah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-green/10 rounded-full blur-3xl -z-1" />
              <div className="absolute -top-10 -left-10 text-primary-green/5 font-heading text-9xl select-none">
                بركة
              </div>
            </FadeIn>
            
           <FadeIn direction="left">
              <span className="text-secondary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Manifesto Pesantren</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl mb-8 leading-[1.1] text-primary-green">
                Bukan Sekadar Komunitas Bisnis Biasa
              </h2>
              <p className="text-muted-text text-xl leading-relaxed mb-8 font-heading italic border-l-2 border-secondary-gold pl-6">
                "Pesantren Pengusaha Bin Farid bukanlah institusi formal yang terbatas oleh ruang kelas, melainkan ikatan ukhuwah seumur hidup."
              </p>
              <p className="text-charcoal/80 text-base leading-loose mb-10 max-w-xl">
                Kami membangun ekosistem di mana pertumbuhan omzet berjalan beriringan dengan ketaatan. Tempat di mana saat bisnis Anda dihantam badai, ada bahu saudara yang siap menyangga.
              </p>
              <Link 
                to="/tentang"
                className="inline-flex items-center gap-4 text-primary-green font-bold uppercase tracking-[0.2em] text-[11px] group"
              >
                Selengkapnya Tentang Kami
                <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-primary-green text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-end justify-center">
           <svg width="120%" height="80%" viewBox="0 0 1000 300" className="translate-y-20">
             {/* Simple Silhouettes of people standing in a row */}
             {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
               <g key={x} transform={`translate(${x}, 0)`}>
                 <circle cx="50" cy="50" r="25" fill="currentColor" />
                 <path d="M25 80 Q50 75 75 80 L85 280 Q50 270 15 280 Z" fill="currentColor" />
                 <path d="M30 100 Q50 110 70 100" stroke="currentColor" strokeWidth="4" fill="none" />
               </g>
             ))}
           </svg>
         </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="text-secondary-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Visi Besar Kami</span>
            <h2 className="text-4xl md:text-6xl mb-8">
              Melahirkan 1000 Pebisnis Berkaliber Dunia dengan Iman dan Adab.
            </h2>
            <div className="w-24 h-[2px] bg-secondary-gold mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-bone-white-dark px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Nilai-Nilai Kami</span>
              <h2 className="text-4xl md:text-5xl">Pondasi Keberkahan</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Ukhuwah', icon: <Users size={32} />, desc: 'Persaudaraan tanpa batas karena Allah.' },
              { title: 'Keberkahan', icon: <TrendingUp size={32} />, desc: 'Mengejar barakah di atas angka.' },
              { title: 'Keteguhan', icon: <Anchor size={32} />, desc: 'Tegar di atas nilai meski dalam ujian.' },
              { title: 'Amanah', icon: <ShieldCheck size={32} />, desc: 'Integritas tingkat tinggi dalam muamalah.' },
              { title: 'Pertumbuhan', icon: <Heart size={32} />, desc: 'Bertumbuh secara spiritual & bisnis.' }
            ].map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.1} className="bg-bone-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-charcoal/5">
                <div className="w-16 h-16 bg-primary-green/5 rounded-xl flex items-center justify-center text-primary-green mb-6 group-hover:bg-primary-green group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-4 font-heading">{value.title}</h3>
                <p className="text-muted-text text-sm leading-relaxed">{value.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-bone-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <FadeIn direction="right" className="max-w-2xl">
              <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Ikhtiar Bersama</span>
              <h2 className="text-4xl md:text-5xl">Program & Majelis</h2>
            </FadeIn>
            <FadeIn direction="left">
              <Link 
                to="/program"
                className="px-8 py-3 border border-primary-green text-primary-green text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-primary-green hover:text-white transition-all rounded-sm"
              >
                Lihat Semua Program
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                id: 'majelis-22-bin-farid',
                title: 'Majelis 22', 
                img: 'https://i.ibb.co.com/VdTTstr/close-up-still-life-hard-exams.jpg',
                desc: 'Kajian spiritual khusus pengusaha setiap tanggal 22 di Yogyakarta.'
              },
              { 
                id: 'ngaji-bisnis',
                title: 'Ngaji Bisnis', 
                img: ngajiBisnisImg,
                desc: 'Bedah strategi muamalah kontemporer berbasis nilai-nilai Islam.'
              },
              { 
                id: 'zalzalah-support',
                title: 'Zalzalah Support', 
                img: zalzalahSupportImg,
                desc: 'Ruang penguatan spiritual dan dukungan saat bisnis menghadapi ujian berat.'
              }
            ].map((prog, idx) => (
              <Link to={`/program/${prog.id}`} key={prog.title}>
                <FadeIn delay={idx * 0.1} className="group relative aspect-[4/5] rounded-3xl overflow-hidden h-full">
                  <img 
                    src={prog.img} 
                    alt={prog.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-10">
                    <h3 className="text-2xl text-white mb-2">{prog.title}</h3>
                    <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {prog.desc}
                    </p>
                    <div className="w-10 h-10 bg-secondary-gold rounded-full flex items-center justify-center text-charcoal translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </FadeIn>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-bone-white-dark px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <Quote size={60} className="mx-auto text-secondary-gold/30 mb-8" />
            <p className="text-3xl md:text-4xl text-charcoal leading-relaxed font-heading mb-12">
              "Kekayaan bukanlah tentang seberapa banyak yang kau kumpulkan, tapi tentang seberapa banyak keberkahan yang kau tebar dan seberapa kuat hatimu bersandar pada-Nya."
            </p>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary-green">
                 <img src={founderImg} alt="Founder" className="w-full h-full object-cover" />
               </div>
               <span className="font-bold text-charcoal uppercase tracking-widest text-xs">Ustaz Farid Tri Widodo</span>
               <span className="text-muted-text text-[10px] tracking-widest uppercase mt-1">Pembimbing Spiritual</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12">
        <FadeIn className="max-w-7xl mx-auto bg-primary-green rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] scale-150" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8">Siap Bergabung dalam <br className="hidden md:block"/> Persaudaraan Langit?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Jadilah bagian dari ekosistem pengusaha muslim yang saling menguatkan. Berjuang bersama untuk kesuksesan dunia dan kemuliaan akhirat.
            </p>
            <Link 
              to="/pendaftaran"
              className="inline-block px-12 py-5 bg-secondary-gold text-charcoal rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-all transform hover:-translate-y-1"
            >
              Mulai Perjalanan Bersama
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
