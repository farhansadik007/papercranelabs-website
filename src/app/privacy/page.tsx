import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - PaperCrane Labs",
  description: "Privacy policy and compliance information for mobile software by PaperCrane Labs.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 2024";

  return (
    <div className="w-full max-w-[1080px] mx-auto min-h-screen p-6 sm:p-10 md:p-14 bg-white rounded-[28px] md:rounded-[36px] border border-[#CBD5E1] shadow-[0px_4px_16px_rgba(15,23,42,0.06)] font-sans">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[#0f172a] hover:text-emerald-700 font-bold transition-colors mb-8"
      >
        <span>←</span>
        <span>Back to Studio</span>
      </Link>

      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-serif tracking-[-0.03em] text-[#0f172a] mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-wider text-emerald-800 font-bold mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-6 text-[#334155] text-sm sm:text-base leading-relaxed">
          <section className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h2 className="text-base font-serif text-[#0f172a] mb-2">
              1. Overview
            </h2>
            <p>
              PaperCrane Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) develops and maintains mobile applications for Android, including <strong>Daily Quran Verse</strong> (package: <code className="text-xs bg-[#E2E8F0] px-1.5 py-0.5 rounded text-[#0f172a]">com.fstorm007.qurandaily</code>). We respect your privacy and design our software to operate with minimal data collection, complying strictly with Google Play Developer Policies.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h2 className="text-base font-serif text-[#0f172a] mb-2">
              2. Data Storage & User Privacy
            </h2>
            <p>
              Our apps do not collect, sell, or rent personal identification information (such as your name, email address, or phone number). Application preferences, reading streaks, and saved favorite verses are stored locally on your device storage.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h2 className="text-base font-serif text-[#0f172a] mb-2">
              3. Advertising & Third-Party Services
            </h2>
            <p>
              To support development, our free applications may display advertisements served by Google AdMob. Google AdMob and Google Play Services may use anonymous advertising identifiers and diagnostic signals in accordance with Google&apos;s Privacy Policy to deliver non-personalized or personalized advertisements.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h2 className="text-base font-serif text-[#0f172a] mb-2">
              4. Inquiries
            </h2>
            <p>
              If you have any questions or data requests, contact us directly at{" "}
              <a href="mailto:hello@papercranelabs.com" className="text-emerald-700 underline font-bold">
                hello@papercranelabs.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}