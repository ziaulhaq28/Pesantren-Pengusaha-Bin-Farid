import { FadeIn } from '@/src/components/FadeIn';
import { Quote, CheckCircle2, Award, History } from 'lucide-react';
import manifestoImg from '../assets/images/regenerated_image_1779166598398.jpg';

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
              <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                 <img 
                    src={manifestoImg} 
                    alt="Bukan sekadar pesantren" 
                    className="w-full h-full object-cover"
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
