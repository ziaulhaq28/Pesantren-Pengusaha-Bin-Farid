import { useParams, Link } from 'react-router-dom';
import { FadeIn } from '@/src/components/FadeIn';
import { ChevronRight, Calendar, Users, Target, ShieldCheck, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import ngajiBisnisImg from '../assets/images/regenerated_image_1779153629316.jpg';
import musyawarahOwnerImg from '../assets/images/regenerated_image_1779153822168.jpg';
import klinikMuamalahImg from '../assets/images/regenerated_image_1779154311367.jpg';
import rihlahPengusahaImg from '../assets/images/regenerated_image_1779154427668.jpg';
import zalzalahSupportImg from '../assets/images/regenerated_image_1779166294495.jpg';

const programData: Record<string, any> = {
  'majelis-22-bin-farid': {
    title: 'Majelis 22 Bin Farid',
    subtitle: 'Titik Reuni Spiritual & Business Bonding',
    image: 'https://i.ibb.co.com/VdTTstr/close-up-still-life-hard-exams.jpg',
    longDesc: 'Majelis 22 adalah ruh dari Pesantren Pengusaha Bin Farid. Diadakan setiap tanggal 22, majelis ini bukan hanya sekadar pertemuan, melainkan ruang bagi para pemilik bisnis untuk menanggalkan jabatannya dan bersimpuh sebagai hamba. Di sini, ukhuwah dipererat, iman diperbarui, dan strategi bisnis dirumuskan dalam bingkai keberkahan.',
    features: [
      { icon: <Calendar size={20} />, label: 'Setiap Tanggal 22', desc: 'Konsistensi dalam pertemuan rutin bulanan.' },
      { icon: <Users size={20} />, label: 'Networking Ukhuwah', desc: 'Membangun jaringan bisnis yang berlandaskan iman.' },
      { icon: <Target size={20} />, label: 'Spiritual Recharge', desc: 'Kajian mendalam mengenai adab dan spiritualitas pengusaha.' }
    ],
    details: 'Program ini terbuka bagi seluruh Alumni dan Anggota Pesantren. Setiap pertemuan menghadirkan modul khusus yang mengombinasikan antara manajemen bisnis modern dengan nilai-nilai luhur kepesantrenan.',
    location: 'Yogyakarta (Hybrid)'
  },
  'ngaji-bisnis': {
    title: 'Ngaji Bisnis',
    subtitle: 'Bedah Strategi Muamalah Berkah',
    image: ngajiBisnisImg,
    longDesc: 'Ngaji Bisnis adalah program edukasi intensif yang membedah operasional bisnis dari hulu ke hilir. Fokus utama kami adalah memastikan setiap langkah strategis yang diambil pelaku usaha tidak bertentangan dengan syariat Islam, namun tetap kompetitif di pasar global.',
    features: [
      { icon: <ShieldCheck size={20} />, label: 'Audit Syariah', desc: 'Memastikan akad-akad bisnis bebas dari riba dan gharar.' },
      { icon: <Target size={20} />, label: 'Market Insight', desc: 'Analisis tren pasar dari perspektif ekonomi syariah.' },
      { icon: <Users size={20} />, label: 'Peer Learning', desc: 'Belajar dari studi kasus nyata sesama anggota.' }
    ],
    details: 'Materi disampaikan oleh praktisi bisnis yang telah tersertifikasi dalam fikih muamalah, memastikan audiens mendapatkan solusi praktis yang religius.',
    location: 'Offline & Online'
  },
  'musyawarah-owner': {
    title: 'Musyawarah Owner',
    subtitle: 'Private Mastermind for C-Level',
    image: musyawarahOwnerImg,
    longDesc: 'Ini adalah forum eksklusif bagi para Business Owner untuk berdiskusi secara mendalam mengenai visi jangka panjang perusahaan. Musyawarah Owner menjadi tempat di mana kerahasiaan terjaga dan setiap solusi lahir dari kearifan kolektif para pemimpin.',
    features: [
      { icon: <ShieldCheck size={20} />, label: 'Confidentiality', desc: 'Ruang aman untuk membahas tantangan internal perusahaan.' },
      { icon: <Users size={20} />, label: 'Mastermind Group', desc: 'Kolaborasi ide antar pemilik bisnis lintas industri.' },
      { icon: <Target size={20} />, label: 'Executive Mentoring', desc: 'Bimbingan strategis langsung dari dewan guru.' }
    ],
    details: 'Program ini dibatasi hanya untuk pemilik bisnis dengan kriteria tertentu guna menjaga kualitas diskusi yang strategis dan mendalam.',
    location: 'Exclusive Venues'
  },
  'zalzalah-support': {
    title: 'Zalzalah Support',
    subtitle: 'Bahu Sandaran Saat Ujian Datang',
    image: zalzalahSupportImg,
    longDesc: 'Bisnis tidak selamanya di atas. Zalzalah Support hadir sebagai sistem pendukung emosional dan spiritual ketika badai ujian menghantam. Kami percaya tidak ada pengusaha yang boleh berjuang sendirian dalam kesulitan.',
    features: [
      { icon: <ShieldCheck size={20} />, label: 'Emotional Support', desc: 'Pendampingan psikologis dan spiritual bagi owner.' },
      { icon: <Users size={20} />, label: 'Crisis Strategy', desc: 'Bantuan pemikiran untuk restrukturisasi bisnis.' },
      { icon: <Target size={20} />, label: 'Prayer Circle', desc: 'Dukungan doa kolektif dari seluruh anggota pesantren.' }
    ],
    details: 'Layanan ini bersifat responsif dan dapat diakses khusus oleh anggota resmi Pesantren Bin Farid yang sedang mengalami kendala signifikan.',
    location: 'Personalized'
  },
  'klinik-muamalah': {
    title: 'Klinik Muamalah',
    subtitle: 'Pembersihan Harta & Keberkahan Bisnis',
    image: klinikMuamalahImg,
    longDesc: 'Klinik Muamalah menyediakan jasa konsultasi privat untuk membedah kesehatan syariah sebuah perusahaan. Kami membantu mengidentifikasi potensi kebocoran keberkahan akibat praktik yang kurang tepat dalam akad maupun operasional.',
    features: [
      { icon: <ShieldCheck size={20} />, label: 'Contract Audit', desc: 'Review menyeluruh atas surat perjanjian dan akad kerja.' },
      { icon: <Target size={20} />, label: 'Debt Clearing', desc: 'Strategi pembersihan utang riba secara bertahap.' },
      { icon: <Users size={20} />, label: 'Zakat & Waqf', desc: 'Optimalisasi instrumen sosial Islam untuk pertumbuhan.' }
    ],
    details: 'Konsultasi dilakukan secara privat dengan pakar fikih muamalah yang memahami dinamika bisnis modern.',
    location: 'Headquarters / Online'
  },
  'rihlah-pengusaha': {
    title: 'Rihlah Pengusaha',
    subtitle: 'Tadabbur Alam & Reflection Journey',
    image: rihlahPengusahaImg,
    longDesc: 'Program rekreasi yang bermakna. Rihlah Pengusaha mengajak Anda menjauh sejenak dari angka-angka dan layar monitor untuk melihat kebesaran Allah melalui alam semesta. Sebuah perjalanan untuk menemukan kembali jati diri sebagai hamba.',
    features: [
      { icon: <MapPin size={20} />, label: 'Nature Retreat', desc: 'Destinasi terpilih yang mendukung refleksi diri.' },
      { icon: <Users size={20} />, label: 'Family Bonding', desc: 'Membangun keharmonisan keluarga para pengusaha.' },
      { icon: <Target size={20} />, label: 'Silent Contemplation', desc: 'Waktu khusus untuk muhasabah dan ketenangan jiwa.' }
    ],
    details: 'Diadakan secara berkala di lokasi-lokasi alam yang asri, dipadukan dengan sesi materi yang ringan namun inspiratif.',
    location: 'Nature Landmarks'
  }
};

export default function ProgramDetail() {
  const { id } = useParams();
  const program = id ? programData[id] : null;

  if (!program) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl">Program tidak ditemukan</h1>
        <Link to="/program" className="text-primary-green underline mt-4 inline-block">Kembali ke Program</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 bg-bone-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary-green/20 z-10" />
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6">
             <FadeIn>
               <span className="text-secondary-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Detail Program</span>
               <h1 className="text-5xl md:text-7xl text-white font-heading leading-tight">{program.title}</h1>
               <p className="text-white/90 text-lg md:text-xl font-light mt-4 max-w-2xl mx-auto italic">
                 "{program.subtitle}"
               </p>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 -mt-20 relative z-30">
        <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Desc */}
              <div className="lg:col-span-2 bg-white p-10 md:p-16 shadow-xl shadow-charcoal/5 border border-primary-green/5">
                 <FadeIn>
                   <h2 className="text-3xl font-heading text-primary-green mb-8">Deskripsi Program</h2>
                   <p className="text-muted-text text-lg leading-loose mb-10 font-light">
                     {program.longDesc}
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-primary-green/10 mb-10">
                      {program.features.map((f: any, i: number) => (
                        <div key={i} className="flex flex-col gap-4">
                           <div className="w-10 h-10 border border-primary-green/20 flex items-center justify-center text-primary-green rounded-sm">
                              {f.icon}
                           </div>
                           <h4 className="font-bold text-xs uppercase tracking-widest text-charcoal">{f.label}</h4>
                           <p className="text-[11px] text-muted-text leading-relaxed">{f.desc}</p>
                        </div>
                      ))}
                   </div>

                   <h3 className="text-xl font-heading text-primary-green mb-4">Informasi Tambahan</h3>
                   <p className="text-muted-text text-base leading-relaxed mb-10 font-light opacity-80">
                     {program.details}
                   </p>

                   <div className="flex items-center gap-4 p-6 bg-bone-white border-l-4 border-secondary-gold">
                      <MapPin className="text-primary-green" size={24} />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-muted-text font-bold block mb-1">Lokasi Pelaksanaan</span>
                        <span className="text-sm font-medium">{program.location}</span>
                      </div>
                   </div>
                 </FadeIn>
              </div>

              {/* Sidebar CTA */}
              <div className="lg:col-span-1 space-y-8">
                 <FadeIn direction="left" className="bg-primary-green p-10 text-white rounded-sm sticky top-32">
                    <h3 className="text-2xl font-heading mb-6 text-secondary-gold">Ingin Bergabung?</h3>
                    <p className="text-sm leading-relaxed mb-8 opacity-90">
                      Ambil langkah nyata untuk kebangkitan ekonomi umat melalui program ini. Konsultasikan kebutuhan Anda bersama admin kami.
                    </p>
                    <a 
                      href="https://wa.me/6281281682123" 
                      target="_blank" 
                      rel="referrer"
                      className="w-full py-4 bg-secondary-gold text-charcoal flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-lg"
                    >
                      Daftar Via WhatsApp
                      <ChevronRight size={16} />
                    </a>
                    <Link 
                      to="/pendaftaran"
                      className="w-full mt-4 py-4 border border-white/30 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all"
                    >
                      Isi Form Pendaftaran
                    </Link>
                 </FadeIn>

                 <div className="p-8 bg-bone-white border border-primary-green/10">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary-green mb-4">Butuh Info Cepat?</h4>
                    <p className="text-xs text-muted-text leading-loose mb-6 italic">
                      "Hubungi admin kami untuk detail jadwal terupdate dan persyaratan administrasi."
                    </p>
                    <p className="text-sm font-bold text-charcoal">+62 812-8168-2123</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
