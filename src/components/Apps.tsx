"use client";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

export function Apps() {
  return (
    <section id="apps" className="py-20 px-6 sm:px-10 md:px-14 relative bg-[#F8FAFC]">
      <div className="w-full h-px bg-[#E2E8F0] mb-16" />

      <FadeIn>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="uppercase text-emerald-800 font-bold text-xs tracking-wider mb-2">
              Featured Release · Android
            </h3>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0f172a] tracking-[-0.03em]">
              Apps built with care
            </h2>
          </div>
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#0f172a] shadow-xs">
            1 Live Release
          </span>
        </div>
      </FadeIn>

      {/* Flagship App Hero Card with smooth tactile lift */}
      <FadeIn>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group relative flex flex-col p-8 sm:p-10 md:p-12 rounded-[28px] bg-white border border-[#CBD5E1] overflow-hidden shadow-[0px_6px_20px_rgba(15,23,42,0.06)] hover:shadow-[0px_16px_36px_rgba(15,23,42,0.1)] transition-all duration-200 mb-8"
        >
          {/* Solid green accent top strip */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-emerald-600" />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              {/* App Icon Badge with subtle scale on hover */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] bg-emerald-600 group-hover:bg-emerald-700 flex items-center justify-center text-white shadow-[0px_6px_16px_rgba(5,150,105,0.3)] group-hover:scale-[1.03] transition-all duration-200 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10" />
                  <path d="M6 10h10" />
                </svg>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-700" />
                    </span>
                    Live on Google Play
                  </span>
                  <span className="text-[11px] text-[#475569] uppercase tracking-wider font-bold">
                    Books & Reference
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#0f172a] tracking-tight">
                  Daily Quran Verse
                </h3>
                <p className="text-xs text-[#64748b] font-mono mt-0.5">
                  com.fstorm007.qurandaily
                </p>
              </div>
            </div>

            {/* Direct Google Play Store CTA */}
            <a
              href="https://play.google.com/store/apps/details?id=com.fstorm007.qurandaily"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-sm font-bold shadow-[0px_4px_16px_rgba(5,150,105,0.3)] hover:shadow-[0px_8px_24px_rgba(5,150,105,0.45)] transition-all duration-200 hover:-translate-y-0.5 shrink-0 self-start"
            >
              <svg className="w-5 h-5 fill-current group-hover/btn:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.19-.19-.31-.45-.31-.74V2.554c0-.29.12-.55.31-.74zM15.207 13.414l2.25 2.25-11.83 6.64 9.58-8.89zm0-2.828l-9.58-8.89 11.83 6.64-2.25 2.25zm1.414 1.414l3.19 1.79c.67.38.67 1.01 0 1.39l-3.19 1.79-1.41-1.41 1.41-1.41z" />
              </svg>
              <span>Get on Google Play</span>
            </a>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-8 max-w-3xl">
            A calm, distraction-free daily companion designed to help you build a lifelong habit of reflecting on the Holy Quran. Receive one inspiring Ayah each day with authentic Arabic calligraphy, dual English and Bengali translations, and audio recitation.
          </p>

          {/* Core Feature Highlights with clean hover micro-lift */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]">
            {[
              {
                title: "Daily Curated Ayah",
                desc: "One meaningful verse delivered daily with clear Arabic Uthmanic script.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
              {
                title: "Dual Translations",
                desc: "Includes Saheeh International (English) and Muhiuddin Khan (Bengali).",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                  </svg>
                ),
              },
              {
                title: "Audio Recitation",
                desc: "Listen to high-clarity recitations for reflection and proper pronunciation.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                ),
              },
              {
                title: "Reading Tracker",
                desc: "Visual streaks and daily consistency tracking to maintain your reading habit.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                ),
              },
              {
                title: "Favorites & Sharing",
                desc: "Save beloved verses and share clean reflection cards to messaging and socials.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                ),
              },
              {
                title: "Clean & Respectful",
                desc: "Built with respectful design, offline accessibility, and zero data selling.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group/item p-4 rounded-[18px] bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-emerald-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all duration-200">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-sm text-[#0f172a] mb-1">{feature.title}</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </FadeIn>

      {/* Laboratory Pipeline Note */}
      <FadeIn delay={0.2}>
        <div className="p-6 rounded-[22px] bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#475569]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <div>
              <p className="font-bold text-[#0f172a] text-sm">Future Studio Releases</p>
              <p>Daily Quran Verse is our debut Android app. New purposeful tools are continuously being researched.</p>
            </div>
          </div>
          <span className="font-bold uppercase tracking-wider text-[11px] px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155] shrink-0">
            Pipeline Active
          </span>
        </div>
      </FadeIn>
    </section>
  );
}