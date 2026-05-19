import { FadeIn } from '@/src/components/FadeIn';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Adab Berdagang dalam Syariat: Fondasi Keberkahan Bisnis',
    excerpt: 'Mengapa kejujuran dalam timbangan dan akad jauh lebih penting daripada persentase margin yang didapat? Mari selami adab para pedagang muslim terdahulu.',
    author: 'Ust. Farid Tri Widodo',
    date: '12 Mei 2026',
    category: 'Spiritual Business',
    img: 'https://i.ibb.co.com/p6KNvvd8/Whats-App-Image-2026-05-19-at-11-40-15.jpg'
  },
  {
    id: 2,
    title: 'Menghadapi "Zalzalah" dalam Bisnis dengan Tawakal',
    excerpt: 'Saat omzet menurun dan tantangan datang bertubi-tubi, apa yang harus dilakukan seorang owner? Inilah strategi langit menghadapi guncangan.',
    author: 'Ust. Ahmad',
    date: '08 Mei 2026',
    category: 'Leadership',
    img: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Leadership Berbasis Amanah di Era Digital',
    excerpt: 'Kepemimpinan bukan soal kekuasaan, tapi soal tanggung jawab (Mas\'uliyyah). Bagaimana menerapkannya di tengah budaya hustle culture?',
    author: 'Fulan Al-Habsi',
    date: '02 Mei 2026',
    category: 'Entrepreneurship',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Kekuatan Ukhuwah dalam Memperluas Rezeki',
    excerpt: 'Silaturahmi memanjangkan umur dan meluaskan rezeki. Bagaimana mengintegrasikan nilai ini dalam jejaring bisnis Anda tanpa mengabaikan profesionalisme.',
    author: 'Bin Farid',
    date: '28 Apr 2026',
    category: 'Brotherhood',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop'
  }
];

export default function Article() {
  return (
    <div id="article-page" className="pt-32 pb-20">
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <FadeIn direction="right" className="max-w-3xl">
            <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Arsip Pemikiran</span>
            <h1 className="text-5xl md:text-6xl mb-6">Artikel & Insight</h1>
            <p className="text-muted-text text-lg leading-relaxed">
              Kajian mendalam tentang pertautan antara dunia bisnis dan prinsip-prinsip spiritual Islam.
            </p>
          </FadeIn>
          <FadeIn direction="left" className="hidden lg:block pb-4">
             <div className="flex items-center gap-2 text-primary-green font-bold text-xs uppercase tracking-widest border-b border-primary-green/20 pb-2">
                <BookOpen size={16} />
                <span>4 Artikel Terbaru</span>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="bg-bone-white-dark rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-charcoal/5">
             <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={articles[0].img} 
                  alt="Featured" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
             </div>
             <div className="p-8 md:p-14 lg:w-1/2 flex flex-col justify-center">
                <span className="text-primary-green text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Artikel Utama</span>
                <h2 className="text-3xl md:text-4xl mb-6 leading-tight">{articles[0].title}</h2>
                <p className="text-muted-text leading-relaxed mb-8 text-lg">{articles[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-10 text-xs text-charcoal/60 uppercase tracking-widest font-bold">
                   <div className="flex items-center gap-2">
                     <User size={14} className="text-secondary-gold" />
                     {articles[0].author}
                   </div>
                   <div className="flex items-center gap-2">
                     <Calendar size={14} className="text-secondary-gold" />
                     {articles[0].date}
                   </div>
                </div>
                <div>
                   <Link to={`/artikel/${articles[0].id}`} className="inline-flex items-center gap-3 bg-primary-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary-gold hover:text-charcoal transition-all">
                      Baca Selengkapnya
                      <ArrowRight size={16} />
                   </Link>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Regular Cards */}
      <section className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((art, idx) => (
            <FadeIn key={art.id} delay={idx * 0.1} className="group flex flex-col bg-bone-white rounded-3xl overflow-hidden border border-charcoal/5 hover:shadow-2xl transition-all duration-500">
               <div className="aspect-[16/10] overflow-hidden">
                 <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>
               <div className="p-8 flex flex-col flex-1">
                 <span className="text-secondary-gold text-[10px] font-bold uppercase tracking-widest mb-4 block">{art.category}</span>
                 <h3 className="text-xl mb-4 font-heading group-hover:text-primary-green transition-colors leading-snug">{art.title}</h3>
                 <p className="text-muted-text text-sm mb-8 leading-relaxed line-clamp-3">
                   {art.excerpt}
                 </p>
                 <div className="mt-auto flex justify-between items-center pt-6 border-t border-charcoal/5">
                    <span className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest">{art.date}</span>
                    <Link to={`/artikel/${art.id}`} className="text-primary-green font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                       Baca
                       <ArrowRight size={14} />
                    </Link>
                 </div>
               </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-32 px-6 md:px-12">
         <FadeIn className="max-w-4xl mx-auto text-center py-20 px-6 border-y border-charcoal/10">
            <h2 className="text-3xl mb-6">Dapatkan Kajian dalam Inbox Anda</h2>
            <p className="text-muted-text mb-8 max-w-xl mx-auto">Bergabunglah dengan ratusan pengusaha lainnya untuk mendapatkan seri pemikiran terbaru tentang keberkahan bisnis.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Email aktif Anda..." 
                  className="flex-1 bg-bone-white-dark border border-charcoal/10 px-6 py-4 rounded-full text-sm outline-none focus:border-primary-green transition-colors"
                  required
               />
               <button className="bg-primary-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary-gold hover:text-charcoal transition-all">
                  Berlangganan
               </button>
            </form>
         </FadeIn>
      </section>
    </div>
  );
}
