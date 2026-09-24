import { motion } from 'motion/react';
import { Check, Star, Quote, Award, Building, FileBadge } from 'lucide-react';

const features = [
  'Pemeriksaan defect menyeluruh',
  'Pemeriksaan visual & NDT',
  'Pemeriksaan dinding, siling & lantai',
  'Pemeriksaan pintu & tingkap',
  'Pemeriksaan bumbung & elektrik',
  'Pemeriksaan plumbing & sanitary',
  'Laporan pemeriksaan dalam PDF',
  'Membantu tuntutan defect pemaju'
];

export default function TrustPricingSection() {
  return (
    <section id="testimonial" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Trust Factors */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight text-center">
              Dipercayai Untuk Membantu Mengenal Pasti Defect Rumah.
            </h2>
            <p className="text-base text-slate-300 mb-8 text-center">
              Berpengalaman. Berkelayakan. Mengikut Standard.
            </p>
            
            <div className="space-y-6 w-full flex flex-col items-center text-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-center">13 Tahun Pengalaman</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed text-center">Berpengalaman dalam industri pembinaan dan perundingan juruukur bangunan, termasuk Building Condition Assessment dan Dilapidation Survey.</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mb-3">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-center">Berdaftar SSM & MOF</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed text-center">Syarikat berdaftar secara rasmi untuk urusan perniagaan dan berdaftar dengan Kementerian Kewangan Malaysia (MOF).</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mb-3">
                  <FileBadge className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-center">Kelayakan Profesional (RISM)</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed text-center">Kelayakan Degree Ukur Bangunan serta keahlian Royal Institution of Surveyors Malaysia (RISM) – Building Surveying Division.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { text: "Pemeriksaan sangat teliti dan laporan yang diberikan sangat membantu kami membuat tuntutan defect kepada pemaju.", author: "Ahmad Faizal" },
              { text: "Banyak defect yang kami sendiri tak perasan berjaya dikenal pasti semasa pemeriksaan. Berbaloi sangat servis ini.", author: "Siti Nadhirah" }
            ].map((review, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-[1.5rem] border border-slate-700 relative flex flex-col items-center text-center">
                <Quote className="absolute top-5 right-5 w-8 h-8 text-zinc-800 opacity-50" />
                <div className="flex justify-center gap-1 text-blue-400 mb-3">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-slate-300 text-[13px] italic mb-5 leading-relaxed relative z-10 text-center">"{review.text}"</p>
                <div className="font-bold text-sm text-white text-center">— {review.author}, Pemilik Rumah</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pricing Offer */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-blue-900/50 border border-blue-400/30"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-slate-900/10 text-white font-semibold text-[11px] mb-5 backdrop-blur-sm uppercase tracking-wider">
              PAKEJ LENGKAP
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white text-center">Pemeriksaan Rumah Profesional</h2>
            <p className="text-blue-200 text-base mb-8 max-w-2xl mx-auto font-medium text-center">
              Dapatkan ketenangan minda dengan pemeriksaan menyeluruh untuk rumah baru anda.
            </p>

            <div className="bg-slate-900/5 rounded-2xl p-6 mb-8 backdrop-blur-sm text-center mx-auto max-w-2xl border border-white/10">
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-center justify-center gap-2.5 text-center">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span className="text-sm text-white font-medium text-center">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-blue-200 uppercase tracking-widest text-xs font-bold mb-2">Harga Bermula Daripada</p>
              <div className="text-4xl md:text-6xl font-extrabold text-white">RM XXX</div>
              <p className="text-blue-200 mt-3 text-xs font-medium">*Harga bergantung kepada jenis dan saiz hartanah anda.</p>
            </div>

            <a 
              href="#hubungi" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hubungi')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-slate-900 text-blue-400 hover:bg-slate-900 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-xl border ">
              Dapatkan Sebut Harga Rasmi
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
