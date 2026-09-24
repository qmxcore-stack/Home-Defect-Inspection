import { motion } from 'motion/react';
import { Shield, BookOpen, CheckCircle2 } from 'lucide-react';

export default function SolutionGallerySection() {
  return (
    <section className="pt-24 pb-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Solution Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight text-center">
              Kami Periksa Rumah Anda Dengan <span className="text-blue-600">Lebih Teliti.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed text-center">
              Dengan pengalaman <strong>13 tahun dalam industri pembinaan dan perundingan building surveying</strong>, kami menjalankan pemeriksaan secara visual serta <strong>Non-Destructive Test (NDT)</strong> bagi membantu mengenal pasti kecacatan yang terdapat pada rumah anda.
            </p>
            
            <div className="space-y-5 w-full flex flex-col items-center text-center">
              <h3 className="font-bold text-slate-900 text-base flex items-center justify-center gap-2 text-center">
                <Shield className="w-4 h-4 text-blue-600" />
                Pemeriksaan Mengikut Standard Industri
              </h3>
              <ul className="space-y-2.5 flex flex-col items-center text-center">
                {[
                  'CIS 7 – Quality Assessment System for Building Construction Work',
                  'QLASSIC (Quality Assessment System in Construction)',
                  'Pemeriksaan Visual Menyeluruh',
                  'Non-Destructive Test (NDT)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2.5 text-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/5">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Pemeriksaan Bangunan Profesional" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-slate-600 font-medium">Standard</p>
                <p className="text-slate-900 font-bold">CIS 7 & QLASSIC</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
