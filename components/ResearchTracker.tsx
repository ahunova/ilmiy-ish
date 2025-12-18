
import React, { useState } from 'react';
import { Milestone } from '../types';

const initialMilestones: Milestone[] = [
  { id: '1', label: 'Mavzuni tanlash va asoslash', isCompleted: true, description: 'Muammoning dolzarbligini belgilash.' },
  { id: '2', label: 'Adabiyotlar tahlili', isCompleted: true, description: 'Mavzuga oid manbalarni o\'rganish.' },
  { id: '3', label: 'Metodologiyani ishlab chiqish', isCompleted: false, description: 'Tadqiqot usullari va vositalarini tanlash.' },
  { id: '4', label: 'Tajriba-sinov ishlari', isCompleted: false, description: 'Gipotezani tekshirish.' },
  { id: '5', label: 'Xulosa va tavsiyalar', isCompleted: false, description: 'Natijalarni umumlashtirish.' },
];

const ResearchTracker: React.FC = () => {
  const [milestones, setMilestones] = useState(initialMilestones);

  const toggleMilestone = (id: string) => {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, isCompleted: !m.isCompleted } : m));
  };

  const progress = Math.round((milestones.filter(m => m.isCompleted).length / milestones.length) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800">Tadqiqot Bosqichlari</h2>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
          {progress}% bajarildi
        </span>
      </div>
      
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-8 text-xs flex rounded bg-indigo-50">
          <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all duration-500"></div>
        </div>
      </div>

      <div className="space-y-4">
        {milestones.map((m) => (
          <div key={m.id} className="flex items-start space-x-4 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" onClick={() => toggleMilestone(m.id)}>
            <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${m.isCompleted ? 'bg-indigo-500 border-indigo-500' : 'border-slate-300'}`}>
              {m.isCompleted && <span className="text-white text-[10px]">✓</span>}
            </div>
            <div>
              <p className={`font-semibold text-sm ${m.isCompleted ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                {m.label}
              </p>
              <p className="text-xs text-slate-500">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchTracker;
