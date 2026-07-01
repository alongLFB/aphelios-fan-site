import Link from "next/link";
import WeaponSelector from "@/components/WeaponSelector";

export default function LorePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto">
      <div className="z-10 max-w-3xl w-full flex flex-col gap-10 pb-32 mt-12">
        <Link href="/" className="text-[var(--color-moon)] opacity-50 hover:opacity-100 transition-opacity font-sans w-fit tracking-widest">&larr; 返回圣所 (Back to Sanctuary)</Link>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--weapon-color)] drop-shadow-[0_0_15px_var(--weapon-glow)] transition-colors duration-700">皎月星轨</h1>
          <h2 className="font-sans text-xl tracking-widest text-white/60">LORE & STORY</h2>
        </div>

        <div className="prose prose-invert prose-lg font-sans text-white/80 leading-loose">
          <p>
            在巨神峰高耸入云的陡峭坡岸上，皎月教派的信徒们在夜空中寻找着指引。厄斐琉斯和他的双胞胎妹妹拉露恩就在这里诞生。他们被称为“夜月之子”，出生于一次极其罕见的月相期间——精神领域的月亮与现实世界的月亮在夜空中重叠，被称为“月蚀”。
          </p>

          <div className="my-10 h-64 border-l-4 border-[var(--weapon-color)] pl-8 flex flex-col justify-center bg-gradient-to-r from-[var(--weapon-color)]/10 to-transparent rounded-r-xl transition-colors duration-700">
            <h3 className="text-3xl font-serif text-[var(--color-moon)]">夜绽之毒 (The Noctum)</h3>
            <p className="text-white/70 mt-4 leading-relaxed">
              为了保护被烈阳教派迫害的同胞，厄斐琉斯饮下了致命的“夜绽之毒”（Noctum）。这种由罕见花朵制成的毒药夺走了他的声音，让他痛不欲生，但也让他的精神敞开，能够接收到远在精神领域（马鲁斯·奥米格纳神庙）的拉露恩的声音。
            </p>
          </div>

          <p>
            拉露恩将她的魔法转化为实质的武器，跨越生与死的界限，直接送到厄斐琉斯的手中。他不再需要说话，因为拉露恩会在他的脑海中低语，指引他的每一次射击。
          </p>
          
          <p>
            “只要有我在，你就不会孤单。” 这是拉露恩的承诺。他们虽然身处两个不同的世界，却共享着同一个灵魂、同一个目标。厄斐琉斯是皎月的利刃，而拉露恩则是挥舞这把利刃的意志。
          </p>
        </div>
      </div>
      <WeaponSelector />
    </div>
  );
}
