import React, { useState } from 'react';
import axios from 'axios';
import { Download, Link as LinkIcon, Loader2, Play, CheckCircle2, AlertCircle } from 'lucide-react';

const Downloader = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const API_URL = "https://viddownloader1.onrender.com";

    const handleDownload = async (e) => {
        e.preventDefault();
        if (!url) {
            setError('Please paste a valid video URL');
            return;
        }

        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await axios.post(`${API_URL}/download`, { url });
            setResult(response.data);
        } catch (err) {
            setError(err.response?.data?.error || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="glass-morphism p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold mb-2 gradient-text">Video Downloader</h1>
                    <p className="text-slate-400">Instagram • Facebook • Twitter / X</p>
                </div>

                <form onSubmit={handleDownload} className="relative mb-8">
                    <div className="relative flex items-center">
                        <div className="absolute left-4 text-slate-400">
                            <LinkIcon size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Paste video URL here..."
                            className="w-full bg-slate-800/50 border border-slate-700 text-white pl-12 pr-32 py-4 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    <span>Fetching...</span>
                                </>
                            ) : (
                                <>
                                    <Download size={18} />
                                    <span>Download</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-center gap-3 mb-6 animate-pulse">
                        <AlertCircle size={20} />
                        <p>{error}</p>
                    </div>
                )}

                {result && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col md:flex-row gap-6 p-4 bg-slate-800/30 rounded-2xl border border-slate-700">
                            {result.thumbnail && (
                                <div className="relative group w-full md:w-48 aspect-video md:aspect-square overflow-hidden rounded-xl">
                                    <img src={result.thumbnail} alt={result.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play className="text-white fill-white" size={40} />
                                    </div>
                                </div>
                            )}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-sky-400 text-sm font-bold uppercase tracking-wider mb-2">
                                        <CheckCircle2 size={16} />
                                        <span>Ready to Download</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white line-clamp-2 mb-2">{result.title || 'Video Title'}</h3>
                                    <div className="flex gap-4 text-slate-400 text-sm">
                                        {result.duration && <span>Duration: {result.duration}</span>}
                                        {result.source && <span>Source: {result.source}</span>}
                                    </div>
                                </div>
                                <a
                                    href={result.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 w-full md:w-max px-8 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-sky-900/20 transition-all text-center flex items-center justify-center gap-2"
                                >
                                    <Download size={20} />
                                    Save Video
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                    <p className="text-slate-500 text-sm">
                        Supported platforms: Instagram (Reels), Facebook (Videos), Twitter / X
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Downloader;
