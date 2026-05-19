import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ad6cd248931?q=80&w=2670&auto=format&fit=crop',
    title: 'Konglomerat Dunia Akhirat',
    subtitle: 'Saat Bisnis Butuh Strategi, dan Jiwa Butuh Sandaran.',
    desc: 'Pesantren Pengusaha Bin Farid adalah ruang belajar kehidupan bagi para pengusaha muslim yang ingin bertumbuh dalam bisnis dan dikuatkan dalam ujian.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ad6cd248931?q=80&w=2670&auto=format&fit=crop',
    title: 'Ukhuwah Sejati',
    subtitle: 'Persaudaraan yang Menguatkan dalam Ujian.',
    desc: 'Kami membangun keluarga besar yang saling mendukung di saat lapang maupun sempit di bawah naungan Ridho-Nya.'
  },
  {
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fdf423740?q=80&w=2670&auto=format&fit=crop',
    title: 'Strategi Langit',
    subtitle: 'Membangun Bisnis dengan Nilai Keberkahan.',
    desc: 'Kami percaya bahwa keberhasilan sejati dimulai dari adab, ketaatan, dan amanah yang terjaga dalam setiap akad and transaksi ekonomi umat.'
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Faster transition (5s)
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden bg-bone-white"
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${current}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeOut' }} // Slightly faster transition
            className="absolute inset-0"
          >
            <img 
              src={slides[current].image} 
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Blurred Overlay - Thicker on the left, fading to right */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-bone-white/60 backdrop-blur-md [mask-image:linear-gradient(to_right,black_20%,transparent_80%)] md:[mask-image:linear-gradient(to_right,black_40%,transparent_90%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-8 md:px-24 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-secondary-gold uppercase tracking-[0.4em] text-[11px] md:text-[13px] font-bold mb-6 block">
              {slides[current].subtitle}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[110px] text-primary-green mb-8 leading-[0.9] font-heading font-normal">
              {slides[current].title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-xl italic font-heading text-muted-text leading-relaxed mb-12 border-l-2 border-secondary-gold pl-6 max-w-lg">
              "{slides[current].desc}"
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                to="/tentang"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary-green text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-charcoal transition-all duration-300 w-full sm:w-auto rounded-sm shadow-xl shadow-primary-green/10"
              >
                Jelajahi Visi
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-secondary-gold/50"></div>
                {/* Removed "Kajian 22 Yogyakarta" text as requested */}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute right-8 md:right-24 bottom-12 z-30 flex items-center gap-4">
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-primary-green/20 text-primary-green hover:bg-primary-green hover:text-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-primary-green/20 text-primary-green hover:bg-primary-green hover:text-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="ml-8 flex gap-3">
             {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={cn(
                  "h-[2px] transition-all duration-700 rounded-full",
                  current === i ? "w-12 bg-primary-green" : "w-4 bg-primary-green/20 hover:bg-primary-green/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
