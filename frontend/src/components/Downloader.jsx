import React, { useState } from 'react';
import axios from 'axios';
import { Download, Link as LinkIcon, Loader2, Play, CheckCircle2, AlertCircle } from 'lucide-react';

const Downloader = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const API_URL = 'https://viddownloader1.onrender.com';

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
        <div className="w-full max-w-3xl mx-auto px-4">

            {/* Glass container */}
            <div className="bg-[#0b0b0b]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden group">

                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.02] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                <form onSubmit={handleDownload} className="relative z-10">

                    <div className="relative flex flex-col md:flex-row items-stretch gap-4">

                        <div className="relative w-full flex items-center">

                            <div className="absolute left-6 text-gray-500">
                                <LinkIcon size={24} />
                            </div>

                            <input
                                type="text"
                                placeholder="Paste video URL here..."
                                className="w-full bg-[#0a0a0a] border border-white/10 text-white pl-16 pr-6 py-5 rounded-xl focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all text-lg font-medium placeholder:text-gray-600"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto px-10 py-5 bg-white text-black hover:bg-green-400 hover:text-black font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/40 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-lg uppercase tracking-wider"
                        >

                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin flex-shrink-0" size={24} />
                                    <span>Fetching...</span>
                                </>
                            ) : (
                                <>
                                    <Download size={24} className="flex-shrink-0" />
                                    <span>Download</span>
                                </>
                            )}

                        </button>

                    </div>

                </form>


                {error && (
                    <div className="mt-6 bg-red-950/30 border border-red-900/50 text-red-500 px-6 py-4 rounded-xl flex items-center gap-3 animate-slide-up relative z-10">
                        <AlertCircle size={24} className="flex-shrink-0" />
                        <p className="font-medium text-lg">{error}</p>
                    </div>
                )}


                {result && (
                    <div className="mt-8 space-y-6 animate-slide-up relative z-10">

                        <div className="flex flex-col md:flex-row gap-8 p-6 bg-[#0a0a0a] rounded-xl border border-white/5 text-left">

                            {result.thumbnail && (
                                <div className="relative group/thumb w-full md:w-64 aspect-video overflow-hidden rounded-lg bg-black/50 flex-shrink-0">

                                    <img
                                        src={result.thumbnail}
                                        alt={result.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                                        <Play className="text-white fill-white" size={48} />
                                    </div>

                                </div>
                            )}

                            <div className="flex-1 flex flex-col justify-between py-2 min-w-0">

                                <div>

                                    <div className="flex items-center gap-2 text-white/50 text-sm font-bold uppercase tracking-widest mb-3">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                        <span>Ready to Download</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white line-clamp-2 mb-3 leading-snug">
                                        {result.title || 'Video Title'}
                                    </h3>

                                    <div className="flex flex-wrap gap-4 md:gap-6 text-gray-400 font-medium">
                                        {result.duration && <span>{result.duration}</span>}
                                        {result.source && <span className="capitalize">{result.source}</span>}
                                    </div>

                                </div>

                                <a
                                    href={result.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 w-full md:w-max px-8 py-4 border border-white bg-white text-black hover:bg-transparent hover:text-white font-bold rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-3 text-lg uppercase tracking-wider"
                                >
                                    <Download size={20} className="flex-shrink-0" />
                                    Save Video
                                </a>

                            </div>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Downloader;
