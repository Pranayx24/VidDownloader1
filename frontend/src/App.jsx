import React from 'react';
import Downloader from './components/Downloader';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex flex-col items-center justify-center py-12">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>
      
      <Downloader />
      
      <footer className="mt-12 text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Premium Video Downloader. Fast & Secure.
      </footer>
    </div>
  );
}

export default App;
