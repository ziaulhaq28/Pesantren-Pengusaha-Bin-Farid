import { FadeIn } from '@/src/components/FadeIn';
import { ShieldCheck, MessageSquare, Briefcase, MapPin, User, ChevronRight } from 'lucide-react';

export default function Register() {
  return (
    <div id="pendaftaran-page" className="pt-32 pb-20">
      <section className="px-6 md:px-12 mb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Bergabung Ukhuwah</span>
            <h1 className="text-5xl md:text-6xl mb-6">Mulai Perjalanan Bersama</h1>
            <p className="text-muted-text text-lg leading-relaxed">
              Jadilah bagian dari ikatan persaudaraan pengusaha muslim yang berorientasi pada keberkahan dunia dan kemuliaan akhirat.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
             <FadeIn direction="right">
                <div className="bg-primary-green text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-gold/10 rounded-full blur-3xl -z-1" />
                   <h2 className="text-3xl mb-6 font-heading">Kenapa Bergabung?</h2>
                   <div className="space-y-6">
                      {[
                        { title: 'Persaudaraan Lifelong', desc: 'Kami bukan sekadar networking, tapi keluarga baru bagi Anda.' },
                        { title: 'Bimbingan Muamalah', desc: 'Pastikan bisnis Anda terbebas dari jeratan riba dan gharar.' },
                        { title: 'Support Zalzalah', desc: 'Dikuatkan saat bisnis goyang melalui dukungan spiritual jamaah.' }
                      ].map(item => (
                        <div key={item.title} className="flex gap-4">
                           <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center text-charcoal shrink-0 mt-1">
                              <ShieldCheck size={14} />
                           </div>
                           <div>
                              <h4 className="font-bold text-white mb-1">{item.title}</h4>
                              <p className="text-white/70 text-sm">{item.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </FadeIn>

             <FadeIn direction="right" delay={0.2} className="p-8 bg-bone-white-dark rounded-[2.5rem] border border-charcoal/5">
                <blockquote className="italic text-muted-text border-l-4 border-secondary-gold pl-6 mb-6">
                  "Seorang mukmin dengan mukmin lainnya seperti sebuah bangunan yang saling menguatkan."
                </blockquote>
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal/30">— HR. Bukhari & Muslim</p>
             </FadeIn>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
             <FadeIn direction="left" className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-primary-green/5 border border-charcoal/5">
                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                            <User size={14} /> Nama Lengkap
                         </label>
                         <input 
                            type="text" 
                            className="w-full bg-bone-white border border-charcoal/5 px-6 py-4 rounded-2xl text-charcoal focus:border-primary-green/30 outline-none transition-all"
                            placeholder="John Doe"
                            required
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                            <span className="font-bold">@</span> Nomor WhatsApp aktif
                         </label>
                         <input 
                            type="tel" 
                            className="w-full bg-bone-white border border-charcoal/5 px-6 py-4 rounded-2xl text-charcoal focus:border-primary-green/30 outline-none transition-all"
                            placeholder="0812..."
                            required
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                            <MapPin size={14} /> Kota Domisili
                         </label>
                         <input 
                            type="text" 
                            className="w-full bg-bone-white border border-charcoal/5 px-6 py-4 rounded-2xl text-charcoal focus:border-primary-green/30 outline-none transition-all"
                            placeholder="Yogyakarta"
                            required
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                            <Briefcase size={14} /> Bidang Usaha
                         </label>
                         <select 
                            className="w-full bg-bone-white border border-charcoal/5 px-6 py-4 rounded-2xl text-charcoal focus:border-primary-green/30 outline-none transition-all"
                            required
                         >
                            <option value="">Pilih Sektor...</option>
                            <option value="fnb">Food & Beverage</option>
                            <option value="fashion">Fashion & Apparel</option>
                            <option value="tech">Tech & Digital</option>
                            <option value="service">Services</option>
                            <option value="property">Property</option>
                            <option value="other">Lainnya</option>
                         </select>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 flex items-center gap-2">
                         <MessageSquare size={14} /> Ceritakan Perjalanan Bisnis & Motivasi Bergabung
                      </label>
                      <textarea 
                         rows={4}
                         className="w-full bg-bone-white border border-charcoal/5 px-6 py-4 rounded-2xl text-charcoal focus:border-primary-green/30 outline-none transition-all resize-none"
                         placeholder="Ceritakan singkat perjuangan dan harapan Anda..."
                         required
                      ></textarea>
                   </div>

                   <div className="pt-4">
                      <button className="w-full bg-primary-green text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-secondary-gold hover:text-charcoal transition-all shadow-xl shadow-primary-green/20 flex items-center justify-center gap-3">
                         Kirim Pendaftaran
                         <ChevronRight size={18} />
                      </button>
                      <p className="text-[10px] text-charcoal/30 text-center mt-6 uppercase tracking-widest leading-relaxed">
                         Data Anda aman. Kami menjamin privasi setiap calon saudara seperjuangan. <br/> Tim kami akan menghubungi Anda melalui WhatsApp.
                      </p>
                   </div>
                </form>
             </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
