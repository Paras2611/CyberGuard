import React from 'react';
import { PROBLEM_STATEMENT_TEXT } from '../constants';
import { FileText, Target, Shield, Bell } from 'lucide-react';

export const ProjectDetails: React.FC = () => {
    // Basic parsing to split the text for better rendering, strictly based on PDF content
    const sections = PROBLEM_STATEMENT_TEXT.split('\n\n');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl text-blue-600 font-bold mb-2 tracking-wide uppercase">Problem Statement</h2>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                Predictive Analytics Framework for Cybercrime Intervention
            </h1>
            <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-slate-100 px-4 py-2 rounded-lg flex items-center gap-2 text-slate-700 text-sm font-medium">
                    <Shield size={16} />
                    National Cybercrime Reporting Portal
                </div>
                <div className="bg-slate-100 px-4 py-2 rounded-lg flex items-center gap-2 text-slate-700 text-sm font-medium">
                    <Target size={16} />
                    Proactive Mitigation
                </div>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                    <FileText className="text-blue-500" size={20} />
                    Background
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                    The National Cybercrime Reporting Portal is central to India's defense, receiving ~8000 complaints daily. 
                    With numbers rising, a purely reactive approach is insufficient. Law Enforcement Agencies (LEAs) and Banks 
                    need actionable intelligence to act before crimes occur.
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                    <Target className="text-red-500" size={20} />
                    Solution Goal
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                    Develop a framework to forecast likely cash withdrawal locations. This enables LEAs to deploy teams proactively 
                    and alert banks/ATMs in high-risk zones, significantly increasing fund recovery chances and blocking fraudulent flows.
                </p>
            </div>
        </div>

        {/* Deliverables */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Key Deliverables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <h4 className="font-bold text-blue-400">01. Predictive Analytics Engine</h4>
                    <p className="text-slate-400 text-sm">AI/ML system analyzing historical data to predict withdrawal hotspots with geospatial risk modeling.</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-blue-400">02. Risk Heatmap Dashboard</h4>
                    <p className="text-slate-400 text-sm">GIS-enabled dashboard visualizing real-time risk zones with drill-down filters (time, location, crime category).</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-blue-400">03. LEA Interface</h4>
                    <p className="text-slate-400 text-sm">Secure portal for investigators to access intelligence reports and evidence documentation.</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-blue-400">04. Alert System</h4>
                    <p className="text-slate-400 text-sm">Real-time notifications via SMS/Email/API to law enforcement, banks, and I4C officers.</p>
                </div>
            </div>
        </div>
    </div>
  );
};
