import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, EyeOff, XCircle, Zap } from 'lucide-react';

const problems = [
  {
    title: 'Defect Terlepas Pandang',
    description: 'Rekahan, kebocoran, jubin hollow dan kecacatan kemasan mungkin tidak disedari oleh mata kasar pemilik rumah.',
    icon: EyeOff,
  },
  {
    title: 'Terpaksa Tanggung Kos Sendiri',
    description: 'Apabila tempoh DLP tamat, pihak pemaju mungkin tidak lagi bertanggungjawab terhadap kecacatan tersebut.',
    icon: CircleDollarSignIcon, // Will define below to avoid import error
  },
  {
    title: 'Kerosakan Menjadi Lebih Serius',
    description: 'Kebocoran kecil boleh menyebabkan kerosakan teruk pada siling, dinding, lantai dan kemasan rumah jika dibiarkan.',
    icon: TrendingDown,
  },
  {
    title: 'Nilai Hartanah Terjejas',
    description: 'Rumah yang mempunyai banyak kecacatan tersembunyi boleh menjejaskan keadaan dan daya tarikan hartanah di pasaran.',
    icon: XCircle,
  },
  {
    title: 'Risiko Keselamatan',
    description: 'Masalah elektrik, struktur dan pemasangan yang tidak sempurna boleh menyebabkan risiko bahaya kepada penghuni.',
    icon: Zap,
  }
];

// Helper icon
function CircleDollarSignIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-5/12 text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-[11px] mb-5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Amaran Kepada Pemilik Rumah Baru
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight text-center">
                2 Tahun DLP Bukan Masa Untuk <span className="text-red-400">Ambil Mudah.</span>
              </h2>
              <p className="text-base text-slate-300 mb-6 leading-relaxed text-center">
                Apa yang berlaku jika anda tidak buat pemeriksaan defect sebelum tempoh jaminan (DLP) tamat?
              </p>
              <p className="text-sm text-slate-300 mb-8 text-center">
                Banyak kecacatan rumah mungkin kelihatan kecil pada awalnya. Tetapi apabila dibiarkan, ia boleh menjadi masalah yang lebih besar dan mahal untuk dibaiki sendiri.
              </p>
              
              <a href="#hubungi" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-600/20">
                Tempah Pemeriksaan Sekarang
              </a>
            </motion.div>
          </div>

          <div className="lg:w-7/12">
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((prob, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-slate-800/80 border border-slate-100 p-5 rounded-2xl flex flex-col items-center text-center ${
                    index === 0 ? 'sm:col-span-2 bg-slate-800' : ''
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-red-400 font-bold text-base">
                      {index === 0 ? <prob.icon className="w-5 h-5" /> : `0${index}`}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-white mb-1.5">{prob.title}</h3>
                      <p className="text-slate-300 text-[11.5px] leading-relaxed">{prob.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
