import { motion } from 'motion/react';
import { Send, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="hubungi" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-5"
          >
            Rumah Baru Anda Sepatutnya Bebas Daripada Defect.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-slate-600 mb-5"
          >
            Jangan tunggu sehingga tempoh DLP tamat. Pastikan setiap kecacatan dikenal pasti, direkodkan dan dituntut kepada pemaju dalam tempoh yang sepatutnya.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-[1.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-blue-600 p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-1.5">Dapatkan Sebut Harga Pemeriksaan</h3>
            <p className="text-blue-100/80 text-xs font-medium">Isi maklumat di bawah dan kami akan hubungi anda dengan segera.</p>
          </div>
          
          <form className="p-6 md:p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Nama Penuh</label>
                <input type="text" placeholder="Masukkan nama anda" className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Nombor Telefon / WhatsApp</label>
                <input type="tel" placeholder="Contoh: 0123456789" className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Lokasi Rumah / Projek</label>
              <input type="text" placeholder="Contoh: Setia Alam, Selangor" className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Jenis Hartanah</label>
                <select className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900">
                  <option value="">Pilih Jenis Rumah</option>
                  <option value="teres">Rumah Teres</option>
                  <option value="semid">Semi-D</option>
                  <option value="banglo">Banglo</option>
                  <option value="condo">Apartment / Condo</option>
                  <option value="lain">Lain-lain</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Saiz / Keluasan (sqft)</label>
                <input type="text" placeholder="Contoh: 1500 sqft" className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Status DLP</label>
                <input type="text" placeholder="Bilakah tarikh serahan kunci?" className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Tarikh Pemeriksaan Diinginkan</label>
                <input type="date" className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Mesej / Maklumat Tambahan</label>
              <textarea rows={3} placeholder="Sebarang maklumat tambahan yang kami perlu tahu..." className="text-sm w-full px-3 py-2.5 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50 text-slate-900 resize-none"></textarea>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button type="button" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20 text-sm">
                <Send className="w-4 h-4" />
                Hantar Permohonan
              </button>
              <a 
                href="https://wa.me/60172450285?text=Saya%20nak%20sebut%20harga%20pemeriksaan%20rumah%20saya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-600/20 text-sm"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                WhatsApp Kami
              </a>
            </div>
            <p className="text-center text-[10px] text-slate-500 font-medium">Kami akan hubungi anda melalui WhatsApp atau Panggilan Telefon untuk pengesahan harga dan tarikh.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
