import { useState } from 'react';
import { FadeIn } from '@/src/components/FadeIn';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'Kajian', img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=2670&auto=format&fit=crop', title: 'Keagungan Ka\'bah' },
  { id: 2, category: 'Diskusi', img: 'https://images.unsplash.com/photo-1591604129931-e1846b457884?q=80&w=2670&auto=format&fit=crop', title: 'Pemandangan Kota Makkah' },
  { id: 3, category: 'Persaudaraan', img: 'https://images.unsplash.com/photo-1596484552934-22ff37cbe02b?q=80&w=2670&auto=format&fit=crop', title: 'Masjid Nabawi, Madinah' },
  { id: 4, category: 'Rihlah', img: 'https://images.unsplash.com/photo-1588613254904-89d146660fb1?q=80&w=2670&auto=format&fit=crop', title: 'Menara Jam Makkah' },
  { id: 5, category: 'Kajian', img: 'https://images.unsplash.com/photo-1621236166133-c157ae9f563d?q=80&w=2670&auto=format&fit=crop', title: 'Pintu Ka\'bah' },
  { id: 6, category: 'Diskusi', img: 'https://images.unsplash.com/photo-1631520638531-1e9bf434938f?q=80&w=2670&auto=format&fit=crop', title: 'Malam di Makkah' },
  { id: 7, category: 'Persaudaraan', img: 'https://images.unsplash.com/photo-1623912911226-039775f0a149?q=80&w=2670&auto=format&fit=crop', title: 'Interior Masjid Nabawi' },
  { id: 8, category: 'Rihlah', img: 'https://images.unsplash.com/photo-1628103126786-896898492040?q=80&w=2670&auto=format&fit=crop', title: 'Payung Masjid Nabawi' },
  { id: 9, category: 'Kajian', img: 'https://images.unsplash.com/photo-1610411132684-17721e7fc936?q=80&w=2670&auto=format&fit=crop', title: 'Kubah Hijau Madinah' },
];

const categories = ['Semua', 'Kajian', 'Diskusi', 'Persaudaraan', 'Rihlah'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  const filteredItems = activeCategory === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div id="gallery-page" className="pt-32 pb-20">
      <section className="px-6 md:px-12 mb-16 text-center">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-primary-green text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Momen Berharga</span>
            <h1 className="text-5xl md:text-6xl mb-8">Galeri Program</h1>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12 border-b border-charcoal/5 pb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary-green text-white shadow-lg' 
                      : 'hover:text-primary-green text-muted-text bg-bone-white-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors z-10 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-300" size={32} />
                </div>
                <img src={item.img} alt={item.title} className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                   <p className="text-white font-heading text-lg">{item.title}</p>
                   <span className="text-secondary-gold text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-secondary-gold transition-colors">
              <X size={40} />
            </button>
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="max-w-5xl h-auto relative bg-white/5 p-2 rounded-2xl md:p-4"
               onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryItems.find(i => i.id === selectedImage)?.img} 
                alt="Selected" 
                className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
              />
              <div className="mt-6 text-center">
                 <h3 className="text-white text-2xl font-heading mb-2">{galleryItems.find(i => i.id === selectedImage)?.title}</h3>
                 <span className="text-secondary-gold uppercase tracking-[0.2em] text-xs font-bold">{galleryItems.find(i => i.id === selectedImage)?.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
