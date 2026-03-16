import React, { useState } from 'react';
import Downloader from './components/Downloader';
import { Zap, MonitorPlay, Shield, LogIn, ChevronDown } from 'lucide-react';
import './styles/index.css';

const faqs = [
  {
    question: "Is this video downloader free?",
    answer: "Yes, our downloader is completely free."
  },
  {
    question: "Can I download Instagram reels?",
    answer: "Yes, paste the reel link and download instantly."
  },
  {
    question: "Is it safe to use?",
    answer: "Yes, we do not store your videos."
  },
  {
    question: "Do I need to login?",
    answer: "No login required."
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="z-10 w-full max-w-4xl mx-auto text-center mt-12 mb-8 animate-slide-up">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl mb-4 tracking-wider uppercase leading-none">
            INSTAGRAM REELS
            <br />
            VIDEO DOWNLOADER
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Download Instagram Reels, Twitter/X and Facebook videos instantly in HD.
          </p>
        </div>

        <div className="z-10 w-full animate-slide-up animation-delay-200">
          <Downloader />
        </div>

      </section>


      {/* FEATURES */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">

          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 tracking-wide uppercase">
            Why Use Our Video Downloader
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <FeatureCard icon={<Zap size={32} />} title="Fast Download" desc="Get your videos in seconds with our optimized servers." />

            <FeatureCard icon={<MonitorPlay size={32} />} title="HD Quality" desc="Download in the highest available resolution." />

            <FeatureCard icon={<LogIn size={32} />} title="No Login Required" desc="Use the tool instantly without making an account." />

            <FeatureCard icon={<Shield size={32} />} title="Free & Secure" desc="100% free forever. We don't track your downloads." />

          </div>

        </div>
      </section>


      {/* HOW TO DOWNLOAD */}
      <section className="py-24 px-4 bg-[#0a0a0a]">

        <div className="max-w-6xl mx-auto">

          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 tracking-wide uppercase">
            How To Download Videos
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <StepCard step="1" text="Copy the video link from Instagram, Twitter/X or Facebook." />

            <StepCard step="2" text="Paste the link into the downloader box." />

            <StepCard step="3" text="Click download and save the video instantly." />

          </div>

        </div>

      </section>


      {/* SUPPORTED PLATFORMS */}
      <section className="py-24 px-4 border-t border-white/10">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-wide uppercase">
            Supported Platforms
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">

            <PlatformBadge name="Instagram Reels" />

            <PlatformBadge name="Twitter / X Videos" />

            <PlatformBadge name="Facebook Videos" />

          </div>

        </div>

      </section>


      {/* FAQ */}
      <section className="py-24 px-4 bg-[#0a0a0a]">

        <div className="max-w-3xl mx-auto">

          <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 tracking-wide uppercase">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div key={index} className="bg-[#111111] rounded-xl overflow-hidden border border-white/5">

                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >

                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />

                </button>

                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center">

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-left">
            <h3 className="font-heading text-2xl uppercase tracking-wider">
              Video Downloader
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Fast & Secure
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400 font-medium">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}


const FeatureCard = ({ icon, title, desc }) => (

  <div className="bg-[#111111] p-8 rounded-2xl border border-white/5">

    <div className="mb-6 text-white bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
      {icon}
    </div>

    <h3 className="text-xl font-bold mb-3">
      {title}
    </h3>

    <p className="text-gray-400">
      {desc}
    </p>

  </div>

);


const StepCard = ({ step, text }) => (

  <div className="flex-1 bg-[#111111] p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center gap-6">

    <div className="w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center">
      {step}
    </div>

    <p className="text-lg text-gray-300 font-medium">
      {text}
    </p>

  </div>

);


const PlatformBadge = ({ name }) => (

  <div className="px-6 py-3 rounded-full border border-white/20 text-white font-medium bg-[#111111] hover:bg-white hover:text-black transition-colors">

    {name}

  </div>

);

export default App;
