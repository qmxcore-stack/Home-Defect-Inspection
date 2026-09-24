import { motion } from 'motion/react';
import { 
  Square, ArrowUp, LayoutGrid, AppWindow, DoorClosed, 
  Home, Zap, Droplets, Fence 
} from 'lucide-react';

const scopes = [
  {
    title: 'Pemeriksaan Dinding',
    icon: Square,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-05_21_43-PM.png',
    items: ['Rekahan (Crack)', 'Permukaan tidak rata', 'Cat mengelupas', 'Dinding lembap', 'Kesan kebocoran', 'Hollow plaster']
  },
  {
    title: 'Pemeriksaan Siling',
    icon: ArrowUp,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-05_23_19-PM.png',
    items: ['Rekahan', 'Tompokan air', 'Kebocoran', 'Permukaan tidak rata', 'Cat menggelembung', 'Kemasan tidak sempurna']
  },
  {
    title: 'Pemeriksaan Lantai',
    icon: LayoutGrid,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-05_36_56-PM.png',
    items: ['Jubin hollow', 'Jubin retak / pecah', 'Lippage / tidak rata', 'Sambungan grout rosak', 'Kecacatan kemasan', 'Cerun lantai tidak sekata']
  },
  {
    title: 'Pemeriksaan Tingkap',
    icon: AppWindow,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-05_41_59-PM.png',
    items: ['Sukar dibuka', 'Kaca retak', 'Bingkai tidak sejajar', 'Getah pengedap rosak', 'Kebocoran air', 'Kunci tingkap rosak']
  },
  {
    title: 'Pemeriksaan Pintu',
    icon: DoorClosed,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-05_46_02-PM.png',
    items: ['Pintu tidak align', 'Sukar buka / tutup', 'Kerosakan daun pintu', 'Bingkai tidak kemas', 'Kunci tidak berfungsi', 'Jurang tidak sekata']
  },
  {
    title: 'Pemeriksaan Bumbung',
    icon: Home,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/c226c0f1-8a7a-42d1-9526-bd1415aaa156.png',
    items: ['Genting retak / beralih', 'Ridge cap pecah', 'Kebocoran bumbung', 'Gutter tersumbat', 'Masalah cerun', 'Sealant rosak']
  },
  {
    title: 'Pemeriksaan Elektrik',
    icon: Zap,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-05_59_23-PM.png',
    items: ['Fungsi suis lampu', 'Ujian soket elektrik', 'Lampu & fitting', 'Kondisi DB Board', 'RCCB/ELCB trip test', 'Pendawaian terdedah']
  },
  {
    title: 'Plumbing & Sanitary',
    icon: Droplets,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-06_02_48-PM.png',
    items: ['Tekanan aliran air', 'Kebocoran paip/injap', 'Sinki & Wash basin', 'Mangkuk tandas/flush', 'Floor trap & cerun', 'Sealant sanitary']
  },
  {
    title: 'Pagar & Gate',
    icon: Fence,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-06_04_56-PM.png',
    items: ['Struktur pagar/tiang', 'Alignment gate', 'Engsel & roda sliding', 'Kunci & stopper', 'Kemasan cat & kimpalan', 'Rekahan struktur']
  }
];

export default function ScopeSection() {
  return (
    <section id="skop" className="pt-8 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-slate-200 mx-auto mb-8 rounded-full"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Apa Yang Kami <span className="text-blue-600">Periksa?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-slate-600"
          >
            Pemeriksaan kami merangkumi bahagian-bahagian utama rumah untuk memastikan kecacatan dapat dikenal pasti dengan lebih menyeluruh.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopes.map((scope, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col hover:border-blue-600/30 transition-colors"
            >
              {scope.image && (
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 shrink-0">
                  <img src={scope.image} alt={scope.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex flex-col items-center justify-center gap-3 mb-6 text-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <scope.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg text-center">{scope.title}</h3>
              </div>
              <ul className="space-y-2 flex flex-col items-center text-center">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-slate-600 text-sm text-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
