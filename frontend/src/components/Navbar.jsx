import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="text-white font-semibold text-lg">
          VideoAI
        </div>

        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>
        </div>

        <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
          Sign up
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
