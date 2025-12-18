
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'projects', icon: '📝', label: 'Mening tadqiqotlarim' },
    { id: 'resources', icon: '📚', label: 'Resurslar bazasi' },
    { id: 'ai-mentor', icon: '🤖', label: 'AI Ilmiy-Maslahatchi' },
    { id: 'methodology', icon: '⚙️', label: 'Metodologiya' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-slate-200 flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-indigo-700">EduResearch Hub</h1>
        <p className="text-xs text-slate-500 mt-1">Pedagogik Tadqiqotlar Platformasi</p>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === item.id 
                ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center space-x-3 p-2 bg-slate-50 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
            AT
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[11px] font-bold text-slate-800 truncate leading-tight">Ahunova Tamannoxon</p>
            <p className="text-[10px] text-indigo-600 font-medium">PhD Izlanuvchi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
