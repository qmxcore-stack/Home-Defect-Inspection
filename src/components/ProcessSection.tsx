import { motion } from 'motion/react';
import { Calendar, Search, FileText, Send, Handshake } from 'lucide-react';

const steps = [
  {
    title: 'Sebut Harga & Penetapan Tarikh',
    description: 'Kami berikan sebut harga yang telus dan tetapkan tarikh pemeriksaan mengikut kesesuaian masa anda.',
    icon: Calendar,
  },
  {
    title: 'Pemeriksaan Menyeluruh',
    description: 'Pemeriksa profesional kami akan menjalankan semakan terperinci di rumah anda menggunakan peralatan khusus.',
    icon: Search,
  },
  {
    title: 'Penyediaan Laporan Lengkap',
    description: 'Setiap defect yang ditemui direkodkan berserta bukti bergambar dalam laporan PDF yang komprehensif mengikut standard QLASSIC.',
    icon: FileText,
  },
  {
    title: 'Serahan Kepada Pemaju',
    description: 'Laporan rasmi akan diserahkan kepada pihak pemaju bagi memastikan kelancaran proses tuntutan pembaikan rumah anda.',
    icon: Send,
  },
  {
    title: 'Pemeriksaan Bersama (Pilihan)',
    description: 'Pemeriksaan susulan (joint inspection) bersama wakil pemaju bagi memastikan kesemua kerja pembaikan telah disiapkan dengan sempurna.',
    icon: Handshake,
  }
];

export default function ProcessSection() {
  return (
    <section id="proses" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-100/40 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3">Bagaimana Pemeriksaan Rumah Anda Dilakukan</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Proses Pemeriksaan <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Kami menjadikan proses mengenal pasti dan menuntut pembaikan defect rumah anda semudah 5 langkah.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[26px] md:left-[46px] top-6 bottom-6 w-1 bg-gradient-to-b from-transparent via-zinc-800 to-transparent rounded-full" />
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-6 md:gap-12 group"
              >
                {/* Icon Node */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 md:w-24 md:h-24 bg-white border-4 border-slate-200 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-xl shadow-slate-200/50 group-hover:border-blue-600/30 group-hover:scale-110 group-hover:shadow-blue-600/20 group-hover:-rotate-3 transition-all duration-300">
                   <step.icon className="w-6 h-6 md:w-10 md:h-10 text-blue-600" />
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-600/40 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1">
                   {/* Watermark Number */}
                   <div className="absolute -right-4 -bottom-6 text-[100px] md:text-[160px] font-black text-zinc-800/50 leading-none select-none group-hover:text-blue-600/10 transition-colors duration-500 pointer-events-none">
                     0{index + 1}
                   </div>
                   
                   <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                        <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600/20 text-blue-500 font-bold text-xs md:text-sm">
                          {index + 1}
                        </span>
                        <span className="text-xs md:text-sm font-bold text-slate-500 tracking-wider uppercase">Langkah</span>
                      </div>
                      <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-slate-600 text-sm md:text-lg leading-relaxed max-w-xl">{step.description}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
