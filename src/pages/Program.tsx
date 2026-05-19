import { FadeIn } from '@/src/components/FadeIn';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import ngajiBisnisImg from '@/src/assets/images/ngaji_bisnis.jpg';
const musyawarahOwnerImg = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop';
import klinikMuamalahImg from '@/src/assets/images/klinik_muamalah.jpg';
import rihlahPengusahaImg from '@/src/assets/images/rihlah_pengusaha.jpg';
import zalzalahSupportImg from '@/src/assets/images/zalzalah_support.jpg';

const programs = [
  {
    id: 'majelis-22-bin-farid',
    title: 'Majelis 22 Bin Farid',
    image: 'https://i.ibb.co.com/VdTTstr/close-up-still-life-hard-exams.jpg',
    desc: 'Kajian rutin bulanan setiap tanggal 22 yang berlokasi di Yogyakarta. Majelis ini menjadi titik temu spiritual bagi pengusaha muslim.',
    category: 'Spiritual',
    objectives: ['Recharge iman', 'Networking ukhuwah', 'Diskusi adab'],
    who: 'Owner Bisnis, Manager, Professional'
  },
  {
    id: 'ngaji-bisnis',
    title: 'Ngaji Bisnis',
    image: ngajiBisnisImg,
    desc: 'Bukan sekadar seminar bisnis, tapi bedah muamalah kontemporer. Mendalami strategi harian selaras dengan fikih muamalah.',
    category: 'Edukasi',
    objectives: ['Fikih Muamalah', 'Strategi Syar\'i', 'Analisis Kasus'],
    who: 'Entrepreneurs, Start-up Founders'
  },
  {
    id: 'musyawarah-owner',
    title: 'Musyawarah Owner',
    image: musyawarahOwnerImg,
    desc: 'Ruang diskusi tertutup tingkat "C-Level" untuk saling bertukar insight, pengalaman, dan solusi strategis antar pemilik bisnis.',
    category: 'Brotherhood',
    objectives: ['Peer Insight', 'Problem Solving', 'Strategic Sharing'],
    who: 'Business Owners Only'
  },
  {
    id: 'zalzalah-support',
    title: 'Zalzalah Support',
    image: zalzalahSupportImg,
    desc: 'Support system spiritual dan emosional bagi member yang bisnisnya sedang mengalami keguncangan atau kesulitan besar.',
    category: 'Support',
    objectives: ['Mental Wellness', 'Dukungan Doa', 'Bantuan Strategis'],
    who: 'Anggota Aktif yang Membutuhkan'
  },
  {
    id: 'klinik-muamalah',
    title: 'Klinik Muamalah',
    image: klinikMuamalahImg,
    desc: 'Konsultasi privat untuk memastikan struktur bisnis, akad, dan operasional perusahaan terbebas dari jeratan riba dan gharar.',
    category: 'Konsultasi',
    objectives: ['Audit Akad', 'Cek Bebas Riba', 'Manajemen Berkah'],
    who: 'Pengusaha di Semua Skala'
  },
  {
    id: 'rihlah-pengusaha',
    title: 'Rihlah Pengusaha',
    image: rihlahPengusahaImg,
    desc: 'Tadabbur alam bersama pengusaha lainnya. Melepaskan penat sambil mensyukuri keagungan ciptaan Allah.',
    category: 'Retreat',
    objectives: ['Tadabbur Alam', 'Bonding Keluarga', 'Refleksi Diri'],
    who: 'Pengusaha & Keluarga'
  }
];

export default function Program() {
  return (
    <div id="program-page" className="pt-32 pb-20">
      <section className="px-6 md:px-12 mb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-secondary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Ekosistem Kami</span>
            <h1 className="text-5xl md:text-6xl mb-6 font-heading text-primary-green">Program & Majelis</h1>
            <p className="text-muted-text text-lg leading-relaxed font-light">
              Kami menyusun berbagai program yang komprehensif, mencakup aspek spiritual, intelektual, hingga dukungan emosional bagi pemilik bisnis.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary-green/10">
          {programs.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1} className="bg-bone-white border-r border-b border-primary-green/10 flex flex-col group hover:bg-bone-white-dark transition-all duration-500 relative">
              <Link to={`/program/${item.id}`} className="absolute inset-0 z-10" />
              <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-secondary-gold text-[10px] font-bold uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-3xl mb-6 font-heading group-hover:text-primary-green transition-colors leading-tight">{item.title}</h3>
                <p className="text-muted-text text-[13px] mb-8 leading-loose flex-1 font-light">
                  {item.desc}
                </p>
                
                <div className="mb-8 space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal/30 block">Fokus Utama:</span>
                  <div className="flex flex-wrap gap-2">
                    {item.objectives.map(obj => (
                      <span key={obj} className="text-[10px] uppercase tracking-wider text-muted-text bg-primary-green/5 px-2 py-1">{obj}</span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 text-primary-green font-bold text-[11px] uppercase tracking-[0.2em] group">
                  Daftar Program
                  <div className="w-8 h-[1px] bg-primary-green group-hover:w-12 transition-all" />
                  <ChevronRight size={14} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Program Summary CTA */}
      <section className="mt-24 px-6 md:px-12">
         <FadeIn className="max-w-7xl mx-auto py-20 px-10 bg-bone-white-dark rounded-[2.5rem] text-center border-2 border-dashed border-primary-green/20">
            <h2 className="text-3xl md:text-4xl mb-6">Punya Kebutuhan Spesifik?</h2>
            <p className="text-muted-text max-w-2xl mx-auto mb-10 leading-relaxed">
              Jika Anda memerlukan konsultasi bisnis dari sisi muamalah atau ingin berkolaborasi dalam dakwah ekonomi pengusaha, jangan ragu untuk menghubungi kami.
            </p>
            <Link 
              to="/kontak"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary-green text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary-gold hover:text-charcoal transition-all"
            >
              Hubungi Kami
              <ExternalLink size={16} />
            </Link>
         </FadeIn>
      </section>
    </div>
  );
}
