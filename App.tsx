
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ResearchTracker from './components/ResearchTracker';
import AIMentor from './components/AIMentor';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleDownload = (id: number, title: string) => {
    setDownloadingId(id);
    
    // Haqiqiy yuklab olish jarayonini simulyatsiya qilish (2 sekund)
    setTimeout(() => {
      setDownloadingId(null);
      setShowToast(true);
      
      // Bildirishnomani 3 sekunddan keyin yopish
      setTimeout(() => setShowToast(false), 3000);
      
      // Agar real URL bo'lsa, quyidagicha yuklab olish mumkin:
      // window.open('https://example.com/path/to/book.pdf', '_blank');
      console.log(`${title} yuklab olindi.`);
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                    PhD Tadqiqot Ishi
                  </span>
                  <h2 className="text-3xl font-extrabold mb-3 leading-tight">
                    Xush kelibsiz, <br/>Ahunova Tamannoxon!
                  </h2>
                  <p className="opacity-90 text-sm max-w-md leading-relaxed mb-6 font-medium">
                    "Elektron axborot ta'lim muhitida talabalarning ilmiy tadqiqot faoliyatini rivojlantirish texnologiyasi" mavzusidagi platformaga xush kelibsiz.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/20">
                      <p className="text-[10px] opacity-70 uppercase">Muallif</p>
                      <p className="text-xs font-bold">A.T. Zokir qizi</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/20">
                      <p className="text-[10px] opacity-70 uppercase">Yo'nalish</p>
                      <p className="text-xs font-bold">Pedagogika</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </section>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800">EATMning asosiy elementlari</h3>
                  <span className="text-indigo-600 text-xs font-semibold cursor-pointer hover:underline">Barchasi →</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 group hover:bg-indigo-50 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">📂</div>
                    <p className="text-sm font-bold text-slate-800">Raqamli kutubxona</p>
                    <p className="text-[11px] text-slate-500 mt-1">12,000+ metodik materiallar</p>
                  </div>
                  <div className="p-4 bg-violet-50/50 rounded-2xl border border-violet-100 group hover:bg-violet-50 transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">⚙️</div>
                    <p className="text-sm font-bold text-slate-800">Virtual Laboratoriya</p>
                    <p className="text-[11px] text-slate-500 mt-1">Pedagogik tajriba maydoni</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <ResearchTracker />
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4">Mavzu dolzarbligi</h3>
                <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed italic">
                  "Bugungi kunda talabalarda ilmiy tadqiqot ko'nikmalarini shakllantirishda raqamli texnologiyalarning o'rni beqiyos. Mazkur texnologiya ta'lim sifatini yangi bosqichga olib chiqadi."
                </div>
              </div>
            </div>
          </div>
        );
      case 'ai-mentor':
        return <div className="h-[calc(100vh-160px)]"><AIMentor /></div>;
      case 'resources':
        return (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 min-h-[400px]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Ilmiy-Metodik Resurslar</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold">Barchasi</button>
                <button className="px-4 py-2 text-slate-500 rounded-lg text-sm font-medium hover:bg-slate-50">Maqolalar</button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { id: 1, title: "Pedagogik tadqiqotlar metodologiyasi", author: "R. Jo'rayev", type: "Darslik", date: "2023", size: "14.5 MB" },
                { id: 2, title: "Ta'limda axborot texnologiyalari", author: "M. Aripov", type: "Qo'llanma", date: "2022", size: "8.2 MB" },
                { id: 3, title: "Elektron ta'lim resurslarini yaratish", author: "N. Taylaqov", type: "Maqola", date: "2024", size: "2.1 MB" },
              ].map((res) => (
                <div key={res.id} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all shadow-sm hover:shadow-md group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">📖</div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{res.title}</h4>
                      <p className="text-xs text-slate-500">
                        {res.author} • <span className="text-indigo-500 font-medium">{res.type}</span> • {res.date} • <span className="font-semibold text-slate-400">{res.size}</span>
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDownload(res.id, res.title)}
                    disabled={downloadingId === res.id}
                    className={`min-w-[120px] px-4 py-2 rounded-lg text-xs font-bold border transition-all flex items-center justify-center space-x-2 ${
                      downloadingId === res.id 
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-indigo-600 border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
                    }`}
                  >
                    {downloadingId === res.id ? (
                      <>
                        <svg className="animate-spin h-3 w-3 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Yuklanmoqda...
                      </>
                    ) : (
                      <>
                        <span>⬇️ Yuklab olish</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <div className="text-4xl mb-4">🚧</div>
            <p className="italic">Ushbu bo'lim loyiha doirasida ishlab chiqilmoqda...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <nav className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              <span>Platforma</span>
              <span>/</span>
              <span className="text-indigo-600">{activeTab === 'dashboard' ? 'Boshqaruv' : activeTab}</span>
            </nav>
            <h1 className="text-3xl font-black text-slate-800">
              {activeTab === 'dashboard' ? 'Tadqiqot Muhiti' : activeTab === 'ai-mentor' ? 'AI Maslahatchi' : 'Resurslar'}
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <button className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">🔍</button>
              <button className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm relative hover:bg-slate-50 transition-colors">
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white"></span>
                🔔
              </button>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-slate-800 leading-none mb-1">Ahunova T.Z.</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">PhD Candidate</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
                AT
              </div>
            </div>
          </div>
        </header>

        <div className="animate-fade-in pb-12">
          {renderContent()}
        </div>

        <footer className="mt-auto pt-8 border-t border-slate-200 flex justify-between items-center">
          <p className="text-[10px] text-slate-400 font-medium">© 2024 EduResearch Hub platformasi. Barcha huquqlar himoyalangan.</p>
          <p className="text-[10px] text-slate-500 font-bold uppercase">Muallif: Ahunova Tamannoxon Zokir qizi</p>
        </footer>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-10 z-50 animate-bounce">
          <div className="bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border-4 border-white">
            <span className="text-xl">✅</span>
            <div>
              <p className="font-bold text-sm">Muvaffaqiyatli yuklandi!</p>
              <p className="text-[10px] opacity-80">Fayl qurilmangiz xotirasiga saqlandi.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
