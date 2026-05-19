import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import Home from '@/src/pages/Home';
import About from '@/src/pages/About';
import Program from '@/src/pages/Program';
import ProgramDetail from '@/src/pages/ProgramDetail';
import Gallery from '@/src/pages/Gallery';
import Article from '@/src/pages/Article';
import ArticleDetail from '@/src/pages/ArticleDetail';
import Register from '@/src/pages/Register';
import Contact from '@/src/pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/artikel" element={<Article />} />
            <Route path="/artikel/:id" element={<ArticleDetail />} />
            <Route path="/pendaftaran" element={<Register />} />
            <Route path="/kontak" element={<Contact />} />
            {/* Alias for Kajian 22 if user clicks the button, redirecting to pendaftaran for now as it's an invitation */}
            <Route path="/kajian-22" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
