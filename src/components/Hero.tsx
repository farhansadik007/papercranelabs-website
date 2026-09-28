"use client";
import { motion } from "framer-motion";
import { OrigamiCraneLogo } from "./OrigamiCraneLogo";

export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-14 md:pt-20 pb-16 px-6 sm:px-10 md:px-14 overflow-hidden">
      <div className="relative z-10 max-w-[700px]">
        {/* Subhead category - High contrast pill badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] shadow-xs mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <h3 className="uppercase text-emerald-800 font-bold text-xs tracking-wider">
            Mobile App Studio · <span className="text-emerald-700">Android & Play Store</span>
          </h3>
        </motion.div>

        {/* Editorial headline with floating origami crane */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h1 className="text-[#0f172a] text-[36px] sm:text-[50px] lg:text-[58px] leading-[1.14] font-serif tracking-[-0.03em] mb-6">
            The{" "}
            <span className="inline-flex align-middle mx-1 w-10 h-10 md:w-14 md:h-14 text-[#0f172a]">
              <OrigamiCraneLogo strokeWidth={18} animated />
            </span>{" "}
            studio for apps that <span className="text-[#64748b]">simply refuse</span> to be ordinary.
          </h1>
        </motion.div>

        {/* Description body with readable high-contrast dark slate */}
        <motion.p
          className="text-base sm:text-lg text-[#334155] font-normal leading-relaxed max-w-[560px] mb-9"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We build calm, focused mobile tools for Android. Every interaction is shaped with care and intention - nothing unnecessary, everything essential.
        </motion.p>

        {/* Dual button cluster with smooth tactile micro-animations */}
        <motion.div
          className="flex flex-wrap items-center gap-3.5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#apps"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-sm font-bold shadow-[0px_4px_14px_rgba(5,150,105,0.3)] hover:shadow-[0px_8px_24px_rgba(5,150,105,0.45)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Explore Our App</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#about"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F8FAFC] hover:bg-white active:scale-[0.98] text-[#0f172a] text-sm font-bold border border-[#CBD5E1] hover:border-[#94a3b8] transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
          >
            <span>Read Story</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}