import React, { useState } from 'react';
import { View } from './types';
import { Dashboard } from './components/Dashboard';
import { Guidelines } from './components/Guidelines';
import { ProjectDetails } from './components/ProjectDetails';
import { PredictionEngine } from './components/PredictionEngine';
import { ChatAssistant } from './components/ChatAssistant';
import { LayoutDashboard, Book, BrainCircuit, Shield, MessageSquareText, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: View.DASHBOARD, label: 'Risk Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: View.PREDICTION_ENGINE, label: 'Prediction Engine', icon: <BrainCircuit size={20} /> },
    { id: View.PROJECT_DETAILS, label: 'Problem Statement', icon: <Shield size={20} /> },
    { id: View.GUIDELINES, label: 'SIH Guidelines', icon: <Book size={20} /> },
    { id: View.AI_ASSISTANT, label: 'AI Consultant', icon: <MessageSquareText size={20} /> },
  ];

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD: return <Dashboard />;
      case View.GUIDELINES: return <Guidelines />;
      case View.PROJECT_DETAILS: return <ProjectDetails />;
      case View.PREDICTION_ENGINE: return <PredictionEngine />;
      case View.AI_ASSISTANT: return <ChatAssistant />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center shadow-md z-50">
        <div className="flex items-center gap-2">
          <Shield className="text-blue-500" />
          <span className="font-bold text-lg">CyberGuard SIH</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:relative top-0 left-0 h-full w-72 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8 border-b border-slate-800 hidden md:block">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                    <Shield className="text-white w-6 h-6" />
                </div>
                <div>
                    <h1 className="font-bold text-white text-lg">CyberGuard</h1>
                    <p className="text-xs text-slate-500">SIH 2025 Analytics</p>
                </div>
            </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => {
                        setCurrentView(item.id);
                        setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                        ${currentView === item.id 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                            : 'hover:bg-slate-800 hover:text-white'}`}
                >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                </button>
            ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
            <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-2">System Status</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-emerald-400">Operational</span>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-[calc(100vh-64px)] md:h-screen overflow-hidden flex flex-col">
        {/* Top Bar (Desktop) */}
        <header className="hidden md:flex h-20 bg-white border-b border-slate-200 items-center justify-between px-8">
            <div>
                <h2 className="text-xl font-bold text-slate-800">
                    {navItems.find(i => i.id === currentView)?.label}
                </h2>
                <p className="text-sm text-slate-400">Smart India Hackathon 2025 Implementation</p>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded text-slate-500">v1.0.2 Stable</span>
                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://picsum.photos/100/100" alt="User" className="w-full h-full object-cover" />
                </div>
            </div>
        </header>

        {/* Scrollable View Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
            {renderView()}
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
