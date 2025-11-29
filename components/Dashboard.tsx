import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { AlertTriangle, TrendingUp, Activity, ShieldAlert } from 'lucide-react';

const MOCK_CRIME_DATA = [
  { name: '00:00', complaints: 120, risk: 80 },
  { name: '04:00', complaints: 50, risk: 40 },
  { name: '08:00', complaints: 180, risk: 60 },
  { name: '12:00', complaints: 450, risk: 55 },
  { name: '16:00', complaints: 380, risk: 70 },
  { name: '20:00', complaints: 600, risk: 90 },
  { name: '23:59', complaints: 300, risk: 85 },
];

const MOCK_REGIONAL_RISK = [
  { name: 'North Zone', value: 400, risk: 75 },
  { name: 'East Zone', value: 300, risk: 45 },
  { name: 'South Zone', value: 550, risk: 60 },
  { name: 'West Zone', value: 700, risk: 88 },
  { name: 'Central', value: 200, risk: 30 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Daily Complaints</p>
            <h3 className="text-2xl font-bold text-slate-800">~8,000</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Real-time Withdrawals</p>
            <h3 className="text-2xl font-bold text-slate-800">1,245</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
            <ShieldAlert size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Active Hotspots</p>
            <h3 className="text-2xl font-bold text-slate-800">14</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-lg">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Intervention Rate</p>
            <h3 className="text-2xl font-bold text-slate-800">82%</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Chart 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Complaint Volume vs Risk Timeframes</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CRIME_DATA}>
                <defs>
                  <linearGradient id="colorComplaints" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="complaints" stroke="#3b82f6" fillOpacity={1} fill="url(#colorComplaints)" />
                <Area type="monotone" dataKey="risk" stroke="#ef4444" fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Main Chart 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Regional Threat Analysis</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_REGIONAL_RISK}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" fill="#64748b" radius={[4, 4, 0, 0]} barSize={40} />
                <Line type="monotone" dataKey="risk" stroke="#f59e0b" strokeWidth={3} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">Live Alert System Active</h3>
                <p className="text-slate-300 max-w-xl">
                    The predictive engine is currently monitoring 14,203 data points across the banking network. 
                    Real-time synchronization with I4C is active.
                </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-lg font-medium text-sm flex items-center">
                View Live Feed <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </button>
         </div>
         {/* Decorative BG element */}
         <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};
