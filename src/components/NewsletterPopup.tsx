import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Tunjuk popup selepas 3 saat halaman dimuatkan
    const hasSeenPopup = sessionStorage.getItem('hasSeenDefectPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Simpan di sessionStorage supaya tidak ganggu pengguna setiap kali refresh
    sessionStorage.setItem('hasSeenDefectPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row"
          >
            {/* Butang Tutup (Close Button) */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 rounded-full backdrop-blur-md transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Bahagian Gambar */}
            <div className="w-full sm:w-2/5 h-48 sm:h-auto relative bg-slate-100 flex-shrink-0">
              <img 
                src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-20-2026-11_39_12-PM.png" 
                alt="Rumah Rosak Teruk" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:hidden"></div>
            </div>
            
            {/* Bahagian Kandungan */}
            <div className="w-full sm:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white relative z-10">
              <span className="inline-block text-red-600 font-bold text-[10px] tracking-widest uppercase mb-3 px-3 py-1 bg-red-50 rounded-full w-fit">
                JANGAN TUNGGU RUMAH ROSAK TERUK
              </span>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 leading-tight tracking-tight">
                Retak Kecil Hari Ini,<br />
                <span className="text-blue-600">Masalah Besar Esok.</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Banyak kerosakan rumah bermula dengan tanda kecil yang sering diabaikan. Retakan dinding, kesan lembap atau kebocoran mungkin nampak biasa — tetapi boleh menjadi lebih serius jika dibiarkan.
              </p>
              
              <a 
                href="#hubungi"
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                  setTimeout(() => {
                    document.getElementById('hubungi')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 text-sm rounded-full transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
              >
                CHECK RUMAH ANDA
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
