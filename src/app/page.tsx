import { Hero } from "@/components/Hero";
import { Apps } from "@/components/Apps";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="flex relative flex-col w-full min-h-screen max-w-[1080px] bg-[#FFFFFF] mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#D0D4DC]"
      style={{
        boxShadow:
          "0px 2px 6px 0px rgba(20,30,50,0.08), 0px 10px 24px 0px rgba(20,30,50,0.08), 0px 24px 48px 0px rgba(20,30,50,0.06)"
      }}
    >
      <Hero />
      <Apps />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}