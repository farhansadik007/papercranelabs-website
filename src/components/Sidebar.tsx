"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OrigamiCraneLogo } from "./OrigamiCraneLogo";

const navLinks = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "apps", label: "Apps", href: "#apps" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      const contactEl = document.getElementById("contact");
      const aboutEl = document.getElementById("about");
      const appsEl = document.getElementById("apps");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection("contact");
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection("about");
      } else if (appsEl && scrollPos >= appsEl.offsetTop) {
        setActiveSection("apps");
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sticky Left Sidebar with High Contrast */}
      <aside
        className="w-[270px] xl:w-[320px] shrink-0 h-screen sticky top-0 p-6 hidden md:flex flex-col justify-between z-40 overflow-hidden"
        style={{
          background: "linear-gradient(270deg, rgba(223, 225, 229, 0) 0%, rgba(223, 225, 229, 0.98) 70%)"
        }}
      >
        <div className="flex flex-col gap-6">
          {/* Brand Logo */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 text-xl font-serif tracking-tight text-[#0f172a]">
              <span className="w-8 h-8 text-[#0f172a] shrink-0 inline-block">
                <OrigamiCraneLogo strokeWidth={20} />
              </span>
              <span>
                <span className="text-emerald-700 font-bold">PaperCrane</span>
                <span className="text-[#0f172a] ml-1">Labs</span>
              </span>
            </Link>
          </div>

          {/* Strong Hairline Dividers */}
          <div className="flex flex-col overflow-hidden">
            <div className="w-full border-t border-[#C4C9D2]" />
            <div className="w-full border-t border-white" />
          </div>

          {/* Navigation Pill List with Crisp Contrast */}
          <nav className="flex flex-col gap-1.5 relative font-sans">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative flex items-center justify-between px-5 h-[50px] rounded-full transition-all duration-200 z-10 ${isActive
                      ? "text-[#0f172a] font-bold bg-white border border-[#CBD5E1] shadow-[0px_2px_8px_rgba(15,23,42,0.08)]"
                      : "text-[#334155] hover:text-[#0f172a] font-semibold hover:bg-white/50"
                    }`}
                >
                  <span className="text-base tracking-tight">{item.label}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-200 ${isActive ? "opacity-90 text-emerald-700" : "opacity-0 group-hover:opacity-40 group-hover:translate-x-0.5"
                      }`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </nav>

          {/* Studio Links */}
          <div className="px-3 pt-3 flex flex-col gap-2 font-sans">
            <span className="uppercase text-emerald-800 font-bold text-xs tracking-wider">
              Studio Links
            </span>
            <div className="flex flex-col gap-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.fstorm007.qurandaily"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 flex items-center justify-between text-[#1e293b] hover:text-emerald-700 transition-colors text-sm font-semibold group"
              >
                <span>Daily Quran Verse</span>
                <span className="text-xs text-[#64748b] group-hover:text-emerald-700">Play Store →</span>
              </a>
              <a
                href="mailto:hello@papercranelabs.com"
                className="py-2 px-2 flex items-center justify-between text-[#1e293b] hover:text-emerald-700 transition-colors text-sm font-semibold group"
              >
                <span>hello@papercranelabs.com</span>
                <span className="text-xs text-[#64748b] group-hover:text-emerald-700">Mail →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col gap-2 pt-4 font-sans">
          <div className="flex flex-col overflow-hidden mb-2">
            <div className="w-full border-t border-[#C4C9D2]" />
            <div className="w-full border-t border-white" />
          </div>
          <div className="flex items-center justify-between text-xs text-[#475569] px-2 font-semibold">
            <Link href="/privacy" className="hover:underline hover:text-emerald-800">Privacy Policy</Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-[64px] bg-[#DFE1E5]/95 backdrop-blur-md border-b border-[#C4C9D2]">
        <Link href="/" className="flex items-center gap-2 text-lg font-serif text-[#0f172a]">
          <span className="w-6 h-6 text-[#0f172a] shrink-0 inline-block">
            <OrigamiCraneLogo strokeWidth={22} />
          </span>
          <span>
            <span className="text-emerald-700 font-bold">PaperCrane</span>
            <span className="text-[#0f172a] ml-1">Labs</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="size-10 rounded-full flex items-center justify-center bg-white border border-[#CBD5E1] text-[#0f172a] font-bold text-sm shadow-sm"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] inset-x-0 bottom-0 bg-[#DFE1E5] z-40 p-6 flex flex-col gap-3 font-sans">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-5 h-12 rounded-full bg-white text-[#0f172a] font-bold text-base shadow-sm border border-[#CBD5E1]"
            >
              <span>{item.label}</span>
              <span>→</span>
            </a>
          ))}
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-auto py-3 text-center text-xs text-[#475569] font-bold"
          >
            Privacy Policy
          </Link>
        </div>
      )}
    </>
  );
}