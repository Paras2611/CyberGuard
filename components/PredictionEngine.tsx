import React, { useState } from 'react';
import { generateRiskPrediction } from '../services/geminiService';
import { RiskPrediction } from '../types';
import { AlertCircle, CheckCircle, Search, Loader2 } from 'lucide-react';

export const PredictionEngine: React.FC = () => {
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [density, setDensity] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<RiskPrediction | null>(null);

    const handlePredict = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const data = await generateRiskPrediction(location, time, density);
            setResult(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Predictive Analytics Engine</h2>
                <p className="text-slate-500 mt-2">
                    Enter environmental parameters to forecast cybercrime withdrawal hotspot risks.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-100">
                    <form onSubmit={handlePredict} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Target Location</label>
                                <input 
                                    type="text"
                                    required
                                    placeholder="e.g., Connaught Place, New Delhi"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Time of Analysis</label>
                                <input 
                                    type="time"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Area Density & Characteristics</label>
                                <input 
                                    type="text"
                                    required
                                    placeholder="e.g., High footfall, multiple unmonitored ATMs, near highway"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={density}
                                    onChange={(e) => setDensity(e.target.value)}
                                />
                            </div>
                        </div>
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    <span>Processing AI Model...</span>
                                </>
                            ) : (
                                <>
                                    <Search className="w-5 h-5" />
                                    <span>Generate Risk Forecast</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Results Section */}
                {result && (
                    <div className="p-8 bg-slate-50 animate-slide-up">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-slate-800">Forecast Results</h3>
                            <div className={`px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide
                                ${result.riskLevel === 'Critical' ? 'bg-red-100 text-red-700' :
                                result.riskLevel === 'High' ? 'bg-orange-100 text-orange-700' :
                                result.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                                }`}>
                                {result.riskLevel} Risk
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="mb-4">
                                    <p className="text-sm text-slate-500 mb-1">Probability Score</p>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-black text-slate-900">{result.probability}%</span>
                                        <div className="h-4 w-32 bg-slate-200 rounded-full mb-2 overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full transition-all duration-1000 ease-out
                                                    ${result.probability > 75 ? 'bg-red-500' : 
                                                      result.probability > 50 ? 'bg-orange-500' : 
                                                      'bg-green-500'}`}
                                                style={{ width: `${result.probability}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-slate-500 mb-2">Key Risk Factors</p>
                                    <ul className="space-y-2">
                                        {result.factors.map((factor, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                <AlertCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                                                {factor}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-3 text-blue-700">
                                    <CheckCircle className="w-5 h-5" />
                                    <h4 className="font-bold">Recommended Action</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {result.recommendedAction}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
