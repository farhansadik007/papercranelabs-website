"use client";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 md:px-14 relative bg-white">
      <div className="w-full h-px bg-[#E2E8F0] mb-16" />

      <div className="relative">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Studio Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-[-0.03em] text-[#0f172a] leading-tight mb-8">
            Built from one fold, <br className="hidden sm:inline" />
            <span className="text-emerald-700">shaped with intention.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <FadeIn className="lg:col-span-7">
            <div className="space-y-5 text-base sm:text-lg text-[#334155] leading-relaxed">
              <p className="font-semibold text-[#0f172a]">
                PaperCrane Labs is an independent Android studio focused on mobile experiences that feel considered, calm, and genuinely useful.
              </p>
              <p>
                Like traditional origami, every app begins from a single sheet - folded with deliberate care until only purposeful clarity remains. No bloatware, no dark patterns, no noise.
              </p>
              <p>
                Based on the internet. Shipping directly on Google Play.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-5 flex flex-col gap-3.5">
            {[
              {
                title: "100% Native Focus",
                desc: "Optimized for modern Android gesture navigation and clean framerates.",
                value: "Zero Lag",
                accent: "text-emerald-800 bg-emerald-50 border-emerald-200"
              },
              {
                title: "Privacy by Design",
                desc: "No unnecessary tracking SDKs or behavioral monetization.",
                value: "0 Trackers",
                accent: "text-emerald-800 bg-emerald-50 border-emerald-200"
              },
              {
                title: "Independent Craft",
                desc: "Self-sustained studio answerable exclusively to our users.",
                value: "Pure Craft",
                accent: "text-emerald-800 bg-emerald-50 border-emerald-200"
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-[20px] bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-emerald-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-bold text-sm text-[#0f172a] group-hover:text-emerald-800 transition-colors duration-200">{stat.title}</h4>
                  <span className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded border ${stat.accent}`}>{stat.value}</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}