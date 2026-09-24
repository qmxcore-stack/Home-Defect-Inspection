import { motion } from 'motion/react';
import { Search, CircleDollarSign, FileText, Home, ClipboardCheck } from 'lucide-react';

const benefits = [
  {
    title: 'Kesan Defect Lebih Awal',
    description: 'Kenal pasti rekahan, kebocoran, jubin hollow dan pelbagai kecacatan lain sebelum menjadi lebih serius.',
    icon: Search,
  },
  {
    title: 'Jimat Kos Pembaikan',
    description: 'Defect yang dikenal pasti dalam tempoh DLP boleh dituntut untuk dibaiki oleh pihak pemaju secara percuma.',
    icon: CircleDollarSign,
  },
  {
    title: 'Dapatkan Laporan Profesional',
    description: 'Setiap kecacatan direkodkan dalam laporan pemeriksaan format PDF untuk memudahkan proses tuntutan.',
    icon: FileText,
  },
  {
    title: 'Lindungi Nilai Hartanah',
    description: 'Pastikan rumah berada dalam keadaan baik dan kecacatan tidak menjejaskan nilai hartanah anda.',
    icon: Home,
  },
  {
    title: 'Pemeriksaan Lebih Teliti',
    description: 'Pemeriksaan dilakukan secara sistematik berdasarkan skop dan garis panduan pemeriksaan bangunan standard industri.',
    icon: ClipboardCheck,
  }
];

export default function BenefitsSection() {
  return (
    <section id="kelebihan" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Kenapa Anda Perlu Buat <span className="text-blue-600">Defect Inspection?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base text-slate-600"
          >
            Pemeriksaan defect membantu anda mengenal pasti kecacatan rumah lebih awal sebelum tempoh DLP tamat.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-600/50 transition-all duration-300 flex flex-col items-center text-center ${
                index === benefits.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-600/10 text-blue-600">
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-[13px] text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
