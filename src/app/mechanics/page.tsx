import Link from "next/link";
import WeaponSelector from "@/components/WeaponSelector";

export default function MechanicsPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto">
      <div className="z-10 max-w-4xl w-full flex flex-col gap-10 pb-32 mt-12">
        <Link href="/" className="text-[var(--color-moon)] opacity-50 hover:opacity-100 transition-opacity font-sans w-fit tracking-widest">&larr; 返回圣所 (Back to Sanctuary)</Link>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--weapon-color)] drop-shadow-[0_0_15px_var(--weapon-glow)] transition-colors duration-700">武器与机制</h1>
          <h2 className="font-sans text-xl tracking-widest text-white/60">WEAPONS & MECHANICS</h2>
        </div>

        {/* Base Stats (Gameplay) */}
        <div className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <h3 className="text-2xl font-serif text-[var(--color-moon)] mb-4 flex items-center gap-3">
            基础属性 <span className="text-sm font-sans text-white/40 tracking-widest">BASE STATISTICS</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">生命值 (HP)</p>
              <p className="text-2xl font-serif text-white">600 <span className="text-sm text-emerald-400 font-sans">+102</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">法力值 (Mana)</p>
              <p className="text-2xl font-serif text-white">348 <span className="text-sm text-blue-400 font-sans">+42</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">攻击力 (AD)</p>
              <p className="text-2xl font-serif text-white">55 <span className="text-sm text-red-400 font-sans">+2.3</span></p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">护甲 / 魔抗</p>
              <p className="text-xl font-serif text-white">26 / 30</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">移动速度 (MS)</p>
              <p className="text-2xl font-serif text-white">325</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">攻击距离 (Range)</p>
              <p className="text-2xl font-serif text-[var(--weapon-color)] drop-shadow-[0_0_5px_var(--weapon-glow)]">550</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[var(--weapon-color)]/20 hover:border-[var(--weapon-color)] transition-colors md:col-span-2">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">基础攻速 (Base AS)</p>
              <p className="text-2xl font-serif text-white">0.665 <span className="text-sm text-yellow-400 font-sans">+2.1%</span></p>
            </div>
          </div>
        </div>

        {/* Skills Intro */}
        <div className="mt-8">
          <h3 className="text-2xl font-serif text-[var(--color-moon)] mb-6 border-b border-white/20 pb-4">武器技能详解 (Weapon Abilities)</h3>
          <div className="space-y-6">
            
            {/* Calibrum */}
            <div className="group relative bg-black/40 border border-green-500/20 p-6 md:p-8 rounded-2xl hover:border-green-500/50 transition-colors duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-3xl font-serif text-green-400 mb-2 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">通碧 (Calibrum)</h4>
                  <p className="text-green-200/60 font-sans text-sm tracking-widest mb-4">THE RIFLE - 狙击步枪</p>
                  <p className="text-white/80 font-sans leading-relaxed text-sm mb-4">
                    <span className="text-green-400 font-bold">被动 (Passive):</span> 增加 100 额外攻击距离。使用技能造成伤害时，会为目标附加持续 4.5 秒的标记。
                    <br/><br/>
                    <span className="text-green-400 font-bold">技能 (Q - 月闪):</span> 厄斐琉斯发射一道月光，对命中的第一个敌人造成 <span className="text-red-400 font-mono">60-160 (+42%-60% 额外AD) (+100% AP)</span> 物理伤害，并标记他们。
                    <br/>消耗: 60 法力值 | 弹药: 10 | 冷却: 10-8 秒
                    <br/><br/>
                    <span className="text-green-400 font-bold">消耗标记:</span> 厄斐琉斯可以右键点击被标记的敌人，使用副武器进行一次无视距离的攻击，造成额外 <span className="text-red-400 font-mono">15 (+20% 额外AD)</span> 物理伤害。
                  </p>
                </div>
              </div>
            </div>

            {/* Severum */}
            <div className="group relative bg-black/40 border border-red-500/20 p-6 md:p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-3xl font-serif text-red-400 mb-2 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]">断魄 (Severum)</h4>
                  <p className="text-red-200/60 font-sans text-sm tracking-widest mb-4">THE SCYTHE PISTOL - 短镰枪</p>
                  <p className="text-white/80 font-sans leading-relaxed text-sm mb-4">
                    <span className="text-red-400 font-bold">被动 (Passive):</span> 使用断魄的攻击不会产生弹道，而是瞬间造成伤害。普攻治疗厄斐琉斯 <span className="text-green-400 font-mono">2.5%-9%</span> 造成的伤害，技能治疗 <span className="text-green-400 font-mono">8.33%-30%</span> 造成的伤害。过量治疗会转化为护盾，最多吸收 <span className="text-blue-400 font-mono">10-140 (+65% 额外生命值)</span> 伤害。
                    <br/><br/>
                    <span className="text-red-400 font-bold">技能 (Q - 对影):</span> 厄斐琉斯获得 20% (+10% 每100 AP) 移动速度，并在 1.75 秒内向最近的敌人快速倾泻主武器和副武器的攻击（优先英雄），共计发射 6 发 (+1 发 / 50% 额外攻速) 弹药。
                    <br/>每发伤害: <span className="text-red-400 font-mono">10-40 (+20%-35% 额外AD)</span> 物理伤害。
                    <br/>消耗: 60 法力值 | 弹药: 10 | 冷却: 10-8 秒
                  </p>
                </div>
              </div>
            </div>

            {/* Gravitum */}
            <div className="group relative bg-black/40 border border-purple-500/20 p-6 md:p-8 rounded-2xl hover:border-purple-500/50 transition-colors duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-3xl font-serif text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">坠明 (Gravitum)</h4>
                  <p className="text-purple-200/60 font-sans text-sm tracking-widest mb-4">THE CANNON - 重力炮</p>
                  <p className="text-white/80 font-sans leading-relaxed text-sm mb-4">
                    <span className="text-purple-400 font-bold">被动 (Passive):</span> 攻击对敌人施加持续 3.5 秒的 30% 减速效果，减速效果在 0.7 秒后开始衰减。
                    <br/><br/>
                    <span className="text-purple-400 font-bold">技能 (Q - 暗蚀):</span> 拔除地图上所有敌人身上的坠明减速效果，对他们造成 <span className="text-red-400 font-mono">50-110 (+26%-35% 额外AD) (+70% AP)</span> 魔法伤害，并将他们禁锢 1 秒。
                    <br/>消耗: 60 法力值 | 弹药: 10 | 冷却: 12-10 秒
                    <br/><span className="text-gray-400 text-xs">*注意: 这个技能没有施法动画，且不使用副武器。</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Infernum */}
            <div className="group relative bg-black/40 border border-blue-500/20 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-colors duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-3xl font-serif text-blue-400 mb-2 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">荧焰 (Infernum)</h4>
                  <p className="text-blue-200/60 font-sans text-sm tracking-widest mb-4">THE FLAMETHROWER - 喷火器</p>
                  <p className="text-white/80 font-sans leading-relaxed text-sm mb-4">
                    <span className="text-blue-400 font-bold">被动 (Passive):</span> 普攻造成 110% AD 伤害。命中的子弹会向后分裂成锥形的火焰，对主要目标背后的敌人造成 75%-100% 的物理伤害（对小兵造成 23%-30% 的伤害）。暴击时分裂锥形变宽。
                    <br/><br/>
                    <span className="text-blue-400 font-bold">技能 (Q - 暮波):</span> 厄斐琉斯喷射一波火焰，对扇形范围内的敌人造成 <span className="text-red-400 font-mono">25-65 (+56%-80% 额外AD) (+70% AP)</span> 物理伤害。随后，他会使用副武器对被暮波命中的每一个敌人进行一次攻击。
                    <br/>消耗: 60 法力值 | 弹药: 10 | 冷却: 10-8 秒
                  </p>
                </div>
              </div>
            </div>

            {/* Crescendum */}
            <div className="group relative bg-black/40 border border-slate-100/20 p-6 md:p-8 rounded-2xl hover:border-slate-100/50 transition-colors duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-3xl font-serif text-slate-100 mb-2 drop-shadow-[0_0_8px_rgba(241,245,249,0.5)]">折镜 (Crescendum)</h4>
                  <p className="text-slate-300/60 font-sans text-sm tracking-widest mb-4">THE CHAKRAM - 环刃</p>
                  <p className="text-white/80 font-sans leading-relaxed text-sm mb-4">
                    <span className="text-slate-300 font-bold">被动 (Passive):</span> 折镜在飞行和返回途中无法攻击，但当折镜返回手中后，攻击会重置普攻计时器。攻击速度越快，折镜的飞行速度越快。厄斐琉斯在使用其他技能附带折镜攻击时，会生成临时的迷你飞镖，最多叠加 20 层，每层增加 <span className="text-red-400 font-mono">0%-38.5% AD</span> 额外伤害。
                    <br/><br/>
                    <span className="text-slate-300 font-bold">技能 (Q - 驻灵):</span> 部署一个驻灵（炮台），持续 20 秒。驻灵会自动寻找攻击范围内的敌人（优先英雄），使用厄斐琉斯的**副武器**进行射击。每次射击造成 <span className="text-red-400 font-mono">31-100 (+40%-60% 额外AD) (+50% AP)</span> 物理伤害。驻灵可以暴击。
                    <br/>消耗: 60 法力值 | 弹药: 10 | 冷却: 9-7 秒
                  </p>
                </div>
              </div>
            </div>

            {/* Ultimate */}
            <div className="group relative bg-gradient-to-r from-[var(--weapon-color)]/20 to-black/40 border border-[var(--color-moon)]/30 p-6 md:p-8 rounded-2xl hover:border-[var(--weapon-color)]/80 transition-colors duration-500 shadow-[0_0_20px_var(--weapon-glow)]">
              <div className="flex flex-col gap-4">
                <h4 className="text-4xl font-serif text-[var(--color-moon)] drop-shadow-[0_0_15px_var(--weapon-glow)] transition-colors duration-500">清辉夜凝 (Moonlight Vigil)</h4>
                <p className="text-white/80 font-sans leading-relaxed text-sm">
                  <span className="text-[var(--weapon-color)] font-bold transition-colors duration-500">终极技能 (R):</span> 厄斐琉斯向前方发射一团月光，在命中第一名敌方英雄时爆炸，对周围造成 <span className="text-red-400 font-mono">125 / 175 / 225 (+ 20% 额外AD) (+ 100% AP)</span> 物理伤害。随后，厄斐琉斯会使用他当前装备的**主武器**，对爆炸范围内的所有敌人进行一次普攻，并触发各武器专属的极其强大的强化效果！
                  <br/><br/>
                  <span className="text-white/40 font-mono text-xs">冷却时间: 120 / 110 / 100 秒 | 消耗: 100 法力值</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Gameplay Tips */}
        <div className="mt-8">
          <h3 className="text-2xl font-serif text-[var(--color-moon)] mb-6 border-b border-white/20 pb-4">控枪艺术与上分技巧 (Gameplay & Tips)</h3>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border border-[var(--weapon-color)]/20">
              <h4 className="text-lg text-[var(--weapon-color)] font-bold mb-3 flex items-center gap-2">
                <span className="bg-[var(--weapon-color)] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span> 
                基础控枪顺序 (红白绿紫蓝)
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                为了在团战中获得最舒服的武器组合，你需要刻意消耗子弹来调整武器顺序。开局先消耗【红】，然后是【绿】，接着【紫】，最后【蓝】。这样你将获得经典的完美武器循环。
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-[var(--weapon-color)]/20">
              <h4 className="text-lg text-[var(--weapon-color)] font-bold mb-3 flex items-center gap-2">
                <span className="bg-[var(--weapon-color)] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span> 
                最强连招：红白刀 / 绿白刀
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                <strong>红白刀（断魄+折镜）：</strong> 近战无敌组合。先用红刀Q（技能）快速积攒折镜的小飞镖，然后切成白刀，贴脸普攻能够瞬间融化刺客和前排。<br/><br/>
                <strong>绿白刀（通碧+折镜）：</strong> 阵地战之王。用白刀Q放置一个绿刀炮台，炮台命中敌人会给你提供绿刀的超远距离标记，让你在安全位置用大量飞镖爆发输出。
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-[var(--weapon-color)]/20">
              <h4 className="text-lg text-[var(--weapon-color)] font-bold mb-3 flex items-center gap-2">
                <span className="bg-[var(--weapon-color)] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">3</span> 
                清线与团战大招 (蓝紫刀 / 蓝枪R)
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                蓝紫刀（荧焰+坠明）是顶级的控制与清线组合。用蓝刀Q瞬间给整波兵线或敌方人群挂上印记，再切紫刀Q全体定身。<br/>
                在龙坑或窄地形中，<strong>荧焰（蓝刀）大招</strong>如果命中多人，爆炸的溅射伤害可以瞬间毁灭敌方后排，创造“烟花”名场面。
              </p>
            </div>
          </div>
        </div>
      </div>
      <WeaponSelector />
    </div>
  );
}
