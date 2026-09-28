import Link from "next/link";
import { OrigamiCraneLogo } from "./OrigamiCraneLogo";

export function Footer() {
  return (
    <footer className="py-8 px-6 sm:px-10 md:px-14 border-t border-[#CBD5E1] bg-[#F1F5F9] font-sans">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="flex items-center gap-2 font-serif text-sm tracking-tight text-[#0f172a]">
          <span className="w-5 h-5 text-[#0f172a] shrink-0 inline-block">
            <OrigamiCraneLogo strokeWidth={22} />
          </span>
          <span>
            <span className="text-emerald-700">PaperCrane</span> Labs
          </span>
        </p>

        <div className="flex items-center gap-5 text-[#334155] font-semibold">
          <Link href="/privacy" className="hover:text-emerald-800 transition-colors">
            Privacy Policy
          </Link>
          <span>·</span>
          <a href="mailto:hello@papercranelabs.com" className="hover:text-emerald-800 transition-colors">
            Support Desk
          </a>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}