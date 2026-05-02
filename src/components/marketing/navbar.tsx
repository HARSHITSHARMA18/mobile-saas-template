import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex w-full items-center justify-between py-6 px-4 md:px-8 border-b border-white/50">
      <div className="flex items-center gap-2">
        <Image
          src="/suno-logo.svg"
          alt="Suno AI Logo"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <span className="text-xl font-bold tracking-tight text-black">SunoAI</span>
      </div>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium text-black">
        <Link href="#" className="hover:opacity-70 transition-opacity">Products</Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">Customer</Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">Solution</Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">Pricing</Link>
        <Link href="#" className="hover:opacity-70 transition-opacity">About</Link>
      </nav>
      <div className="flex items-center gap-3">
        <button className="hidden md:block px-4 py-2 border border-black text-black text-sm font-medium hover:bg-black/5 transition-colors">
          Watch Demo
        </button>
        <button className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors">
          Install Now
        </button>
      </div>
    </header>
  );
}
