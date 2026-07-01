import WeaponSelector from "@/components/WeaponSelector";
import QuoteCard from "@/components/QuoteCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Star Particles Placeholder */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <main className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center mt-[-10vh]">
        
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-moon)] drop-shadow-[0_0_20px_var(--weapon-glow)] transition-all duration-700">
            APHELIOS
          </h1>
          <h2 className="font-sans text-xl md:text-2xl mt-4 tracking-[0.3em] text-[var(--weapon-color)] opacity-80 uppercase transition-colors duration-700">
            The Weapon of the Faithful
          </h2>
          <h3 className="font-sans text-lg mt-2 text-[var(--color-moon)] opacity-60 tracking-widest">
            皎月教派的刺客 · 厄斐琉斯
          </h3>
        </div>

        {/* Quote Card */}
        <div className="max-w-2xl w-full mx-auto mt-8">
          <QuoteCard />
        </div>

        {/* Navigation / Call to Action */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 font-serif tracking-widest text-sm md:text-base uppercase">
          <Link href="/lore" className="hover:text-[var(--weapon-color)] transition-colors duration-300 relative group pb-1 flex flex-col items-center">
            <span>Lore & Story</span>
            <span className="text-xs opacity-50 mt-1 font-sans tracking-normal">皎月星轨</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--weapon-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href="/mechanics" className="hover:text-[var(--weapon-color)] transition-colors duration-300 relative group pb-1 flex flex-col items-center">
            <span>Gameplay</span>
            <span className="text-xs opacity-50 mt-1 font-sans tracking-normal">武器与上分技巧</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--weapon-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href="/gallery" className="hover:text-[var(--weapon-color)] transition-colors duration-300 relative group pb-1 flex flex-col items-center">
            <span>Collection</span>
            <span className="text-xs opacity-50 mt-1 font-sans tracking-normal">皮肤图鉴</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--weapon-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href="/audio" className="hover:text-[var(--weapon-color)] transition-colors duration-300 relative group pb-1 flex flex-col items-center">
            <span>Audio</span>
            <span className="text-xs opacity-50 mt-1 font-sans tracking-normal">月光低语</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--weapon-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href="/history" className="hover:text-[var(--weapon-color)] transition-colors duration-300 relative group pb-1 flex flex-col items-center">
            <span>Patch History</span>
            <span className="text-xs opacity-50 mt-1 font-sans tracking-normal">版本变迁</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--weapon-color)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </div>

      </main>

      {/* Floating Elements */}
      <WeaponSelector />

      {/* Gradient Overlay for atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-[at_50%_50%] from-transparent via-[var(--color-targon)]/50 to-[var(--color-targon)]" />
    </div>
  );
}
