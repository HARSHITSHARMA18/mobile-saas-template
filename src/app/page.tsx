import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";

export default function Home() {
  return (
    <div 
      className="min-h-screen w-full flex flex-col font-sans"
      style={{
        background: 'linear-gradient(180deg, white 0%, #F97C00 50%, white 100%)'
      }}
    >
      {/* Max width and centered page container with borders */}
      <main className="mx-auto w-full max-w-[1400px] border-x border-white/40 flex flex-col flex-1 relative">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
