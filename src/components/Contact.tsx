"use client";
import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-10 md:px-14 relative bg-[#F8FAFC]">
      <div className="w-full h-px bg-[#E2E8F0] mb-16" />

      <FadeIn>
        <div
          className="relative rounded-[32px] p-8 sm:p-12 md:p-16 bg-white border border-[#CBD5E1] overflow-hidden text-center shadow-[0px_8px_24px_rgba(15,23,42,0.06)]"
        >
          {/* Solid green accent top strip */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-emerald-600" />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-block uppercase text-emerald-800 font-bold text-xs tracking-wider mb-3">
              Direct Communication
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif tracking-[-0.03em] text-[#0f172a] mb-4">
              Let&apos;s build something <br className="hidden sm:inline" />
              <span className="text-emerald-700">meaningful.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-8">
              Feedback on our apps, partnership proposals, or Google Play support inquiries - we reply directly from our studio desk.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:hello@papercranelabs.com"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-sm font-bold shadow-[0px_4px_14px_rgba(5,150,105,0.3)] hover:shadow-[0px_8px_24px_rgba(5,150,105,0.45)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-200">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>hello@papercranelabs.com</span>
              </a>

              <a
                href="/privacy"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F1F5F9] hover:bg-white active:scale-[0.98] text-[#0f172a] text-sm font-bold border border-[#CBD5E1] hover:border-[#94a3b8] transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <span>Privacy & Policy</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}