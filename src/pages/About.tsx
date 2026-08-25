import { FadeIn } from '@/src/components/FadeIn';
import { Quote, CheckCircle2, Award, History } from 'lucide-react';

export default function About() {
  return (
    <div id="about-page" className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Mengenal Lebih Dekat</span>
            <h1 className="text-5xl md:text-7xl mb-8 max-w-4xl leading-tight">Rumah Pulang Para <br className="hidden md:block"/> Pebisnis Muslim</h1>
          </FadeIn>
        </div>
      </section>

      {/* Manifesto Part 1 */}
      <section className="px-6 md:px-12 py-32 bg-bone-white border-t border-b border-primary-green/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <div className="aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-xl border border-charcoal/5 bg-white p-8 md:p-12 flex items-center justify-center">
                 <img 
                    src="https://i.ibb.co.com/ym2ZzXSv/logo-pesantren-bin-farid-tnpa.jpg" 
                    alt="Pesantren Pengusaha Bin Farid" 
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                 />
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <span className="text-secondary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Karakter Kami</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-heading text-primary-green">Bukan Pesantren Formal, Melainkan Ekosistem Kehidupan</h2>
               <div className="space-y-8 text-charcoal/80 leading-loose text-base font-light">
                 <p className="italic font-heading text-xl text-muted-text border-l-2 border-secondary-gold pl-6">
                   Pesantren Pengusaha Bin Farid lahir dari sebuah kegelisahan: Banyak pengusaha muslim yang sukses secara materi, namun merasa hampa dalam jiwanya.
                 </p>
                 <p>
                   Kami di sini bukan untuk memberikan gelar akademis, melainkan untuk memberikan <strong>Persaudaraan Seumur Hidup</strong>. Kami membangun ruang di mana owner bisnis bisa melepaskan beban jabatannya sejenak.
                 </p>
                 <p>
                   Di sini, strategi bisnis tidak hanya dibahas secara teknis, tapi juga secara spiritual. Kami percaya bahwa saat hubungan dengan Sang Pencipta rapi, maka urusan dunia pun akan teratur dengan rapi.
                 </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-32 px-6 md:px-12 bg-bone-white-dark/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Founder Image Column */}
            <div className="lg:col-span-5">
              <FadeIn direction="right" className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-bone-white">
                  <img 
                    src="https://i.ibb.co.com/prJrQ9Ss/IMG-7400.jpg" 
                    alt="Ustadz H. Farid Triwidodo (UFA)" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                    <span className="text-secondary-gold text-xs font-bold uppercase tracking-[0.25em] block mb-1">Founder & Pembina</span>
                    <h3 className="text-2xl font-heading font-semibold">Ustadz H. Farid Triwidodo</h3>
                    <p className="text-white/80 text-sm font-light">Akrab disapa UFA</p>
                  </div>
                </div>

                {/* Floating quote badge */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 bg-primary-green text-white p-6 rounded-2xl shadow-xl max-w-xs border border-secondary-gold/20">
                  <p className="text-xs uppercase tracking-widest text-secondary-gold font-bold mb-1">Visi Perjuangan</p>
                  <p className="text-sm font-heading italic leading-snug">"Melahirkan Konglomerat Akhirat untuk Kejayaan Umat."</p>
                </div>

                {/* Decorative background blur */}
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary-gold/15 rounded-full blur-3xl -z-1" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-green/10 rounded-full blur-3xl -z-1" />
              </FadeIn>
            </div>

            {/* Founder Biography & Highlights */}
            <div className="lg:col-span-7 space-y-8">
              <FadeIn direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-8 bg-secondary-gold inline-block" />
                  <span className="text-secondary-gold text-xs font-bold uppercase tracking-[0.3em]">Profil Pendiri</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading text-primary-green mb-3 leading-tight">
                  Ustadz H. Farid Triwidodo <span className="text-secondary-gold text-3xl md:text-4xl font-normal">(UFA)</span>
                </h2>
                <p className="text-sm md:text-base font-medium text-muted-text uppercase tracking-wider mb-8">
                  Pengusaha • Investor • Mentor Bisnis • Penggerak Ekonomi Umat
                </p>

                <div className="space-y-6 text-charcoal/80 leading-relaxed text-base font-light">
                  <p>
                    <strong>Ustadz H. Farid Triwidodo</strong>, yang akrab disapa <strong>UFA</strong>, merupakan pengusaha, investor, mentor bisnis, dan penggerak pemberdayaan ekonomi umat yang berbasis di Yogyakarta. Dengan pengalaman lebih dari tiga dekade di dunia bisnis, beliau aktif membangun dan mengembangkan berbagai usaha di sektor kesehatan, retail, kuliner, kemitraan, hingga investasi.
                  </p>
                  <p>
                    Bagi UFA, bisnis bukan semata-mata tentang mengejar keuntungan, tetapi juga bagian dari ikhtiar membangun kehidupan yang bernilai dan menjadi sarana ibadah. Pemikiran tersebut menjadi dasar dalam perjalanan beliau membangun ekosistem bisnis yang memadukan profesionalisme, kolaborasi, dan nilai-nilai syariah.
                  </p>
                </div>

                {/* Core Philosophy Callout */}
                <div className="bg-bone-white border-l-4 border-secondary-gold p-6 rounded-r-2xl shadow-sm my-6">
                  <div>
                    <h4 className="font-heading text-lg text-primary-green font-semibold mb-1">Gagasan "Konglomerat Akhirat"</h4>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      Sebuah visi tentang bagaimana pengusaha Muslim dapat membangun kekuatan ekonomi sekaligus menjadikan harta dan aktivitas bisnis sebagai sarana kebermanfaatan bagi umat.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-charcoal/80 leading-relaxed text-base font-light">
                  <p>
                    Pendidikan, pembinaan pengusaha, dan penguatan literasi ekonomi syariah menjadi bagian penting dari pengabdiannya. Melalui berbagai komunitas dan inisiatif pendidikan-termasuk <strong>Pesantren Investor</strong> dan <strong>Pesantren Bin Farid</strong>—beliau mendorong para pengusaha memahami bisnis tidak hanya dari sisi teknis finansial, tetapi juga fikih muamalah, kemitraan, investasi, mentalitas, serta tanggung jawab spiritual.
                  </p>
                  <p className="italic text-primary-green font-medium">
                    "Membangun pengusaha bukan sekadar mencetak orang yang mampu menghasilkan keuntungan. Lebih jauh, pengusaha diharapkan mampu membangun kemandirian ekonomi, menciptakan kebermanfaatan, dan menjadikan aktivitas ekonominya sebagai bagian dari perjuangan menuju keberkahan dunia dan akhirat."
                  </p>
                </div>

                {/* Network & Entity Badges */}
                <div className="pt-6 border-t border-charcoal/10">
                  <span className="text-xs uppercase tracking-widest text-muted-text font-bold block mb-3">
                    Jejaring Bisnis & Kolaborasi:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'KalCo Group (Kaliurang Connection)',
                      'Bani Farid Corpora (BFC Group)',
                      'PT Indah Medika Indonesia',
                      'PT Saboten Millenial Indonesia',
                      'PT Elang Muda Corporation',
                      'Pesantren Investor',
                      'Pesantren Pengusaha Bin Farid'
                    ].map((entity) => (
                      <span 
                        key={entity} 
                        className="px-3.5 py-1.5 bg-white border border-charcoal/10 rounded-full text-xs text-charcoal/80 font-medium shadow-2xs"
                      >
                        {entity}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Filosofi Logo',
                icon: <Award className="text-secondary-gold mb-6" size={40} />,
                desc: 'Geometri Islam yang saling bertautan melambangkan ukhuwah, harmonisasi peran, dan pertumbuhan kolektif yang berpusat pada kepemimpinan spiritual.'
              },
              {
                title: 'Misi Kami',
                icon: <History className="text-secondary-gold mb-6" size={40} />,
                desc: 'Menjadi tempat perlindungan dan pusat kekuatan bagi pengusaha muslim agar tetap teguh dalam adab dan iman di tengah kerasnya persaingan dunia.'
              },
              {
                title: 'Nilai Hidup',
                icon: <CheckCircle2 className="text-secondary-gold mb-6" size={40} />,
                desc: 'Amanah di atas segalanya. Keberhasilan tidak diukur dari angka di rekening, melainkan dari berapa besar ketaatan yang dihasilkan dari kekayaan tersebut.'
              }
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1} className="bg-bone-white p-10 rounded-3xl border border-charcoal/5 shadow-sm">
                {item.icon}
                <h3 className="text-2xl mb-4 font-heading">{item.title}</h3>
                <p className="text-muted-text leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Deep Dive */}
      <section className="py-24 bg-primary-green text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
           <div className="flex-1">
             <FadeIn direction="right">
                <span className="text-secondary-gold text-sm font-bold uppercase tracking-[0.2em] mb-6 block">Visi</span>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Membangun 1000 Peradaban Bisnis yang Berkah</h2>
                <p className="text-white/70 leading-loose">
                  Kami memimpikan masa depan di mana ekonomi umat digerakkan oleh para pemilik bisnis yang berkarakter, memiliki kedekatan dengan Allah, dan bangga dengan identitas Islamnya. Pebisnis yang tangguh secara mental dan cemerlang secara intelektual.
                </p>
             </FadeIn>
           </div>
           <div className="flex-1 space-y-8">
             {[
               "Mengokohkan spiritualitas pengusaha melalui majelis ilmu.",
               "Membangun jejaring bisnis berbasis kejujuran dan ukhuwah.",
               "Menyediakan sistem pendukung saat bisnis sedang krisis.",
               "Mendakwahkan nilai-nilai muamalah syar'i dalam praktik nyata."
             ].map((text, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="left" className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-gold flex items-center justify-center text-charcoal shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg text-white/90">{text}</p>
                </FadeIn>
             ))}
           </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 md:px-12 bg-bone-white">
         <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Quote className="text-secondary-gold/20 mx-auto mb-8" size={60} />
              <p className="text-2xl md:text-3xl font-heading italic leading-relaxed text-muted-text">
                "Dunia itu letaknya di tangan, bukan di hati. Jika ia di tangan, ia akan mudah kau berikan. Namun jika ia di hati, ia akan membuatmu tersesat dalam ketakutan akan kehilangan."
              </p>
            </FadeIn>
         </div>
      </section>
    </div>
  );
}
