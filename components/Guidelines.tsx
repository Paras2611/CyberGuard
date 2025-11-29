import React, { useState } from 'react';
import { SIH_GUIDELINES_DATA } from '../constants';
import { ChevronDown, ChevronUp, BookOpen, Briefcase, Cpu, Users } from 'lucide-react';
import { GuidelinePoint } from '../types';

export const Guidelines: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'General' | 'Finance' | 'Technical' | 'Coordination'>('All');

  const filteredData = filter === 'All' 
    ? SIH_GUIDELINES_DATA 
    : SIH_GUIDELINES_DATA.filter(g => g.category === filter);

  const getIcon = (category: string) => {
    switch(category) {
        case 'Finance': return <Briefcase className="w-5 h-5 text-emerald-500" />;
        case 'Technical': return <Cpu className="w-5 h-5 text-indigo-500" />;
        case 'Coordination': return <Users className="w-5 h-5 text-blue-500" />;
        default: return <BookOpen className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">SIH 2025 Implementation Guidelines</h2>
        <p className="text-slate-500">Official protocol for deploying winning solutions post-hackathon.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {['All', 'General', 'Technical', 'Finance', 'Coordination'].map((cat) => (
            <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                    ${filter === cat 
                        ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
                {cat}
            </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredData.map((item) => (
          <GuidelineCard key={item.id} item={item} icon={getIcon(item.category)} />
        ))}
        {filteredData.length === 0 && (
            <div className="text-center p-12 text-slate-400">
                No guidelines found for this category.
            </div>
        )}
      </div>
    </div>
  );
};

const GuidelineCard: React.FC<{ item: GuidelinePoint; icon: React.ReactNode }> = ({ item, icon }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-md
                ${isExpanded ? 'ring-2 ring-blue-500/20' : ''}`}
        >
            <div className="p-5 flex items-start gap-4">
                <div className="mt-1 bg-slate-50 p-2 rounded-lg border border-slate-100 shrink-0">
                    <span className="font-bold text-slate-400 text-sm">#{item.id.toString().padStart(2, '0')}</span>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {icon}
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <div className={`text-slate-600 mt-2 leading-relaxed transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {item.description}
                    </div>
                    {!isExpanded && (
                        <p className="text-slate-400 text-sm mt-1 truncate">{item.description}</p>
                    )}
                </div>
                <div className="mt-1 text-slate-400">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>
        </div>
    );
};
