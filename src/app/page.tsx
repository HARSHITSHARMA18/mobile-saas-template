import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { Logos } from "@/components/marketing/logos";
import { Features } from "@/components/marketing/features";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-white dark:bg-black">
      {/* Max width and centered page container with borders */}
      <main className="mx-auto w-full max-w-[1400px] border-x border-black/10 dark:border-white/40 flex flex-col flex-1 relative z-10">

        {/* Navbar and Hero wrapper for full-width gradient */}
        <div className="relative w-full flex flex-col">
          {/* Full-width gradient background that only spans Navbar and Hero height */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-[-1]"
            style={{
              background: 'linear-gradient(180deg, white 0%, #F97C00 50%, white 100%)'
            }}
          ></div>
          
          {/* Borders Overlay ONLY for the Hero section to make them white/30 */}
          <div className="absolute inset-0 border-x border-white/30 dark:border-white/40 pointer-events-none z-50"></div>
          
          <Navbar />
          <Hero />
        </div>

        {/* Logos Section - this will now safely sit on a white background */}
        <div className="bg-white relative z-10 w-full">
          {/* We put another absolute div to extend the white bg full width if needed, 
               but the page bg is already white. */}
          <Logos />
        </div>

        <Features />

      </main>
    </div>
  );
}
