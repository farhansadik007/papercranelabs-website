import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "PaperCrane Labs - App Studio",
  description: "PaperCrane Labs is an independent app studio crafting thoughtful mobile experiences for Android.",
  metadataBase: new URL("https://papercranelabs.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "PaperCrane Labs",
    description: "An independent app studio crafting thoughtful mobile experiences for Android.",
    siteName: "PaperCrane Labs",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} antialiased h-full`}>
      <body className="font-sans bg-[#DFE1E5] text-[#112233] min-h-full flex antialiased overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-950">
        <div className="w-full min-h-screen flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 w-full min-w-0 min-h-screen overflow-y-auto pt-20 md:pt-10 pb-16 md:pb-20 px-4 sm:px-6 md:px-10 lg:px-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}