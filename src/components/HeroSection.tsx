import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Menu, 
  ShieldCheck, 
  FileText, 
  Users, 
  Search, 
  FileCheck, 
  Calendar, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2,
  Building2,
  Briefcase,
  X,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#0f172a] text-white min-h-screen flex flex-col overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 mx-auto max-w-7xl w-full flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <img 
            src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-04_08_13-PM-1-scaled.png" 
            alt="Home Defect Inspection Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Nav Stats */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-300" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white leading-tight">PROFESIONAL</span>
              <span className="text-[10px] text-slate-500">Bertauliah</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-slate-300" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white leading-tight">LAPORAN LENGKAP</span>
              <span className="text-[10px] text-slate-500">& Terperinci</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-slate-300" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white leading-tight">13 TAHUN</span>
              <span className="text-[10px] text-slate-500">Pengalaman</span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors shadow-lg shadow-yellow-500/30 ml-4 text-white"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden bg-blue-600 p-2.5 rounded-lg text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-50 flex flex-col bg-[#020817]/80 overflow-y-auto"
          >
             {/* Header */}
             <div className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full shrink-0">
                <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-04_08_13-PM-1-scaled.png" alt="Logo" className="h-10 w-auto" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-950/50 border border-blue-500/30 hover:bg-blue-900/50 p-3 rounded-xl text-white backdrop-blur-md transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  <X className="w-6 h-6" />
                </button>
             </div>

             {/* Content */}
             <div className="px-6 pb-10 max-w-2xl mx-auto w-full flex flex-col gap-6 pt-4 shrink-0">
                
                {/* Menu List */}
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-[2rem] p-4 flex flex-col gap-2 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                  
                  {[
                    { title: 'Kelebihan', icon: Star, href: '#kelebihan' },
                    { title: 'Skop Pemeriksaan', icon: Search, href: '#skop' },
                    { title: 'Proses', icon: ShieldCheck, href: '#proses' },
                    { title: 'Testimonial', icon: MessageCircle, href: '#testimonial' },
                  ].map((item, idx) => (
                    <a key={idx} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 transition-all group">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-950/50 transition-colors">
                             <item.icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <span className="text-white font-medium text-lg">{item.title}</span>
                       </div>
                       <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </a>
                  ))}

                  <a href="https://wa.me/60172450285?text=Saya%20nak%20sebut%20harga%20pemeriksaan%20rumah%20saya" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-400/30 shadow-inner">
                    <MessageCircle className="w-5 h-5" /> Hubungi Kami
                  </a>
                </div>

                {/* Features Grid */}
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-[2rem] p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                  {[
                    { title: 'PEMERIKSAAN MENYELURUH', desc: 'Lebih 200+ titik pemeriksaan', icon: Search },
                    { title: 'LAPORAN LENGKAP & TERPERINCI', desc: 'Sedia bukti tuntutan pembaikan', icon: FileCheck },
                    { title: 'INSPECTOR PROFESIONAL', desc: 'Berpengalaman & diperakui', icon: ShieldCheck },
                    { title: 'TEMPAH SEKARANG', desc: 'Slot pemeriksaan kami fleksibel untuk anda', icon: Calendar },
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                         <feat.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-white font-bold text-xs tracking-wide leading-tight mb-1">{feat.title}</span>
                        <span className="text-slate-400 text-xs leading-tight">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-0 sm:px-6 py-4 md:py-8 mx-auto max-w-7xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* Hero Image Full Size */}
          <div className="w-full mx-auto mb-8 flex justify-center">
            <img 
              src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-18-2026-11_45_13-PM.png"
              alt="Pemeriksaan Defect Rumah"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block mx-auto max-w-full md:max-w-4xl lg:max-w-5xl"
            />
          </div>

          {/* Buttons */}
          <div className="px-4 flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 w-full max-w-md sm:max-w-none">
            <a 
              href="#hubungi" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hubungi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
            >
              Dapatkan Sebut Harga
              <div className="bg-slate-900 rounded-full p-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
            <a 
              href="https://wa.me/60172450285?text=Saya%20nak%20sebut%20harga%20pemeriksaan%20rumah%20saya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all border border-blue-600/30"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Kami
            </a>
          </div>

          {/* Bottom Checkmarks */}
          <div className="px-4 flex w-full justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-xs text-slate-300 font-medium bg-slate-900/60 backdrop-blur-md border border-slate-700/50 px-5 py-2.5 rounded-full">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" /> Teliti</span>
              <span className="w-px h-3 bg-zinc-700"></span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" /> Jelas</span>
              <span className="w-px h-3 bg-zinc-700"></span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" /> Boleh Dipercayai</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accreditations Bar */}
      <div className="relative z-20 px-6 pb-6 pt-12 mx-auto max-w-7xl w-full mt-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-slate-200/50 border border-slate-200"
        >
          <div className="flex-shrink-0 text-center lg:text-left lg:border-r lg:border-slate-200 lg:pr-8">
            <h3 className="text-slate-900 font-extrabold text-sm leading-tight">BERDAFTAR &<br/>DIKTIRAF</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/logo-ssm.png" alt="SSM Logo" className="h-10 object-contain" />
              <p className="text-[9px] uppercase font-bold text-slate-500 leading-tight">Berdaftar Dengan<br/>SSM</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center gap-3 relative">
              <div className="hidden md:block absolute -left-4 top-1/4 bottom-1/4 w-px bg-slate-200"></div>
              <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Ministry-Of-Finance-Malaysia-Logo-Vector.svg-.png" alt="MOF Logo" className="h-12 object-contain" />
              <p className="text-[9px] uppercase font-bold text-slate-500 leading-tight">Berdaftar Dengan<br/>Kementerian Kewangan<br/>Malaysia (MOF)</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center gap-3 relative">
              <div className="hidden md:block absolute -left-4 top-1/4 bottom-1/4 w-px bg-slate-200"></div>
              <img src="https://th.bing.com/th?q=Royal+Institution+of+Surveyors+Malaysia+Logo.png" alt="RISM Logo" className="h-16 object-contain" />
              <p className="text-[9px] uppercase font-bold text-slate-500 leading-tight">Ahli RISM<br/>(Building Surveying<br/>Division)</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center gap-3 relative">
              <div className="hidden md:block absolute -left-4 top-1/4 bottom-1/4 w-px bg-slate-200"></div>
              <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Untitled-17-August-2026-at-19.35.35-scaled.png" alt="CIS 7 & QLASSIC Logo" className="h-10 object-contain" />
              <p className="text-[9px] uppercase font-bold text-slate-500 leading-tight">Mengikut Garis Panduan<br/>CIS 7 & QLASSIC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

