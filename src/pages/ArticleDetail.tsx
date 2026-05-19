import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FadeIn } from '@/src/components/FadeIn';
import { Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

const articleData: Record<number, any> = {
  1: {
    title: 'Adab Berdagang dalam Syariat: Fondasi Keberkahan Bisnis',
    author: 'Ust. Farid Tri Widodo',
    date: '12 Mei 2026',
    category: 'Spiritual Business',
    img: 'https://i.ibb.co.com/p6KNvvd8/Whats-App-Image-2026-05-19-at-11-40-15.jpg',
    content: `
      <p>Dalam Islam, perniagaan bukan sekadar pertukaran barang dengan uang. Ia adalah manifestasi ketaatan kepada Sang Pencipta. Sebagaimana Rasulullah SAW bersabda, "Pedagang yang jujur dan terpercaya akan bersama para nabi, orang-orang benar, dan para syuhada."</p>
      
      <h3>Prinsip Kejujuran (Ash-Shidqu)</h3>
      <p>Kejujuran adalah mata uang yang tak pernah terdevaluasi. Seorang pedagang muslim harus transparan mengenai kondisi barangnya. Menutupi cacat barang adalah bentuk penipuan yang menghilangkan keberkahan dalam transaksi.</p>
      
      <h3>Pembersihan dari Riba</h3>
      <p>Keberkahan tidak akan pernah bersanding dengan riba. Memastikan akad-akad bisnis bersih dari unsur bunga dan gharar (ketidakpastian) adalah kewajiban mutlak bagi setiap pengusaha yang mengharap ridha Allah.</p>
      
      <blockquote>
        "Harta yang didapat dengan jujur akan menenangkan jiwa, sedang harta yang didapat dengan curang akan mendatangkan kegelisahan tanpa henti."
      </blockquote>
      
      <h3>Adab terhadap Pembeli</h3>
      <p>Melayani dengan ramah, tidak bersumpah palsu untuk melariskan dagangan, dan memudahkan urusan pembeli adalah bagian dari adab yang diajarkan. Bisnis adalah sarana dakwah, bukan sekadar sarana akumulasi harta.</p>
    `
  },
  2: {
    title: 'Menghadapi "Zalzalah" dalam Bisnis dengan Tawakal',
    author: 'Ust. Ahmad',
    date: '08 Mei 2026',
    category: 'Leadership',
    img: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?q=80&w=2670&auto=format&fit=crop',
    content: `
      <p>Zalzalah atau guncangan adalah sunnatullah dalam kehidupan, termasuk dalam dunia bisnis. Tidak ada grafik yang selamanya naik tanpa hambatan. Namun, bagi seorang mukmin, guncangan adalah sarana kenaikan derajat.</p>
      
      <h3>Sabar dalam Perencanaan</h3>
      <p>Saat krisis melanda, langkah pertama bukanlah panik, melainkan refleksi. Apakah ada yang salah dalam sistem kita? Ataukah ini murni ujian kesabaran? Sabar aktif berarti tetap berusaha semaksimal mungkin sambil terus memperbaiki strategi.</p>
      
      <h3>Tawakal yang Proporsional</h3>
      <p>Banyak yang salah mengartikan tawakal sebagai sikap pasif. Tawakal yang benar adalah melakukan ikhtiar hingga batas maksimal kemampuan manusia, lalu menyerahkan hasilnya secara total kepada Allah.</p>
      
      <h3>Membangun "Support System"</h3>
      <p>Kita tidak diciptakan untuk memikul beban sendirian. Dalam Pesantren Bin Farid, kita diajarkan untuk saling menguatkan. Berbagi beban dengan saudara seiman dapat meringankan tekanan mental yang dihadapi seorang owner.</p>
    `
  },
  3: {
    title: 'Leadership Berbasis Amanah di Era Digital',
    author: 'Fulan Al-Habsi',
    date: '02 Mei 2026',
    category: 'Entrepreneurship',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    content: `
      <p>Di era digital yang serba cepat ini, nilai-nilai kepemimpinan seringkali tereduksi menjadi angka-angka performa semata. Namun, pondasi kepemimpinan Islam tetaplah Amanah.</p>
      
      <h3>Pemimpin sebagai Pelayan (Al-Qaid Khadimul Ummah)</h3>
      <p>Seorang leader bukan untuk dilayani, melainkan untuk melayani timnya. Memastikan kesejahteraan karyawan, baik lahir maupun batin, adalah bagian dari amanah yang akan dimintai pertanggungjawaban di akhirat kelak.</p>
      
      <h3>Integritas di Tengah Disrupsi</h3>
      <p>Teknologi berubah, namun prinsip tidak. Kejujuran dalam data, transparansi dalam pembagian tugas, dan keadilan dalam memberikan reward adalah nilai-nilai abadi yang harus dijaga meski persaingan semakin ketat.</p>
    `
  },
  4: {
    title: 'Kekuatan Ukhuwah dalam Memperluas Rezeki',
    author: 'Bin Farid',
    date: '28 Apr 2026',
    category: 'Brotherhood',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop',
    content: `
      <p>Rezeki seringkali datang melalui pintu-pintu yang tidak terduga, dan salah satu pintu terbesarnya adalah silaturahmi. Ukhuwah Islamiyah bukan sekadar networking bisnis biasa, tapi ikatan hati.</p>
      
      <h3>Sinergi Tanpa Hasad</h3>
      <p>Dalam komunitas kita, keberhasilan saudara adalah kebahagiaan kita. Membuang jauh-jauh rasa iri (hasad) adalah kunci agar rezeki kolektif kita terus mengalir deras.</p>
      
      <h3>Berkolaborasi untuk Umat</h3>
      <p>Ketika para pengusaha bersatu, daya dobrak ekonomi umat akan menjadi sangat luar biasa. Mari kita bangun kolaborasi yang sehat, saling melengkapi, dan berorientasi pada kemaslahatan bersama.</p>
    `
  }
};

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articleData[Number(id)];

  if (!article) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl mb-4">Artikel tidak ditemukan</h2>
        <Link to="/artikel" className="text-primary-green font-bold">Kembali ke Artikel</Link>
      </div>
    );
  }

  return (
    <div id="article-detail-page" className="pt-32 pb-20 px-6 md:px-12 bg-bone-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="right" className="mb-12">
          <Link to="/artikel" className="inline-flex items-center gap-2 text-primary-green font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all mb-8">
            <ArrowLeft size={16} />
            Kembali ke Daftar Artikel
          </Link>
          <span className="text-secondary-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{article.category}</span>
          <h1 className="text-4xl md:text-6xl font-heading text-primary-green leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-xs text-charcoal/50 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <User size={14} className="text-secondary-gold" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-secondary-gold" />
              <span>{article.date}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-16">
          <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute top-6 right-6 flex gap-2">
               <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-charcoal transition-all">
                  <Share2 size={18} />
               </button>
               <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-charcoal transition-all">
                  <Bookmark size={18} />
               </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <FadeIn delay={0.4} className="lg:col-span-8">
            <div 
              className="prose prose-lg prose-primary max-w-none 
                prose-headings:font-heading prose-headings:text-primary-green 
                prose-p:text-muted-text prose-p:leading-loose
                prose-blockquote:italic prose-blockquote:border-secondary-gold prose-blockquote:bg-bone-white-dark prose-blockquote:p-6 prose-blockquote:rounded-xl
                prose-strong:text-charcoal"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </FadeIn>

          <FadeIn delay={0.6} className="lg:col-span-4">
             <div className="sticky top-32 space-y-12">
               <div className="p-8 bg-bone-white-dark rounded-3xl border border-charcoal/5">
                  <h4 className="text-primary-green font-bold text-xs uppercase tracking-widest mb-6">Penulis</h4>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center font-bold text-primary-green">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-charcoal">{article.author}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-text">Kontributor Bin Farid</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Seorang penggiat ekonomi syariah yang berfokus pada integrasi nilai-nilai spiritual dalam ekosistem bisnis modern.
                  </p>
               </div>

               <div className="space-y-6">
                  <h4 className="text-primary-green font-bold text-xs uppercase tracking-widest px-4">Artikel Terkait</h4>
                  <div className="space-y-4">
                    {Object.values(articleData).filter(a => a.title !== article.title).slice(0, 2).map((rel: any) => (
                      <div key={rel.title} className="group p-4 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-charcoal/5">
                        <span className="text-[9px] font-bold text-secondary-gold uppercase tracking-[0.2em] mb-2 block">{rel.category}</span>
                        <h5 className="font-heading text-sm group-hover:text-primary-green transition-colors line-clamp-2">{rel.title}</h5>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
