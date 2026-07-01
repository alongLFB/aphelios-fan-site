import Link from "next/link";
import WeaponSelector from "@/components/WeaponSelector";

const PATCH_HISTORY = [
  { version: "V26.13", date: "2026-06-25", title: "全武器伤害全线提升", desc: "通碧、断魄（Q）、荧焰、折镜（炮台）的额外攻击力（AD）加成获得了显著提升，极大地增加了厄斐琉斯后期的接管比赛能力。" },
  { version: "V26.04", date: "2026-02-22", title: "基础攻击力成长削弱", desc: "由于上个版本的强势，被动技能（杀手与先知）提供的额外攻击力（AD）被轻微削弱。" },
  { version: "V26.01", date: "2026-01-10", title: "赛季初大重构与削弱", desc: "移除了断魄Q的基础伤害并调整了AD加成。清辉夜凝（大招）的暴击伤害收益现在基于暴击率和额外暴击伤害进行动态缩放。全武器技能均有不同程度的调整或削弱。" },
  { version: "V25.12", date: "2025-06-14", title: "基础攻速与绿刀加强", desc: "基础攻击速度增加。通碧（绿刀）的技能基础伤害提升。断魄（红刀）提供的额外移动速度增加。" },
  { version: "V14.1B", date: "2024-01-24", title: "无神话时代的黎明", desc: "神话装备被移除。攻击力成长从3降低至2.3以平衡新装备带来的高额收益。大招基础伤害全面提升。" },
  { version: "V13.11", date: "2023-06-01", title: "神话装备版本调整", desc: "基础攻击力降低。断魄（红刀）的普攻吸血削弱，但 Q 技能治疗量略微增加。" },
  { version: "V12.11", date: "2022-06-08", title: "耐久度版本补偿", desc: "由于全英雄耐久度提升，厄斐琉斯的被动穿甲从 [4.5-27] 提升至 [5.5-33]。" },
  { version: "V11.12", date: "2021-06-09", title: "属性重做与回暖", desc: "基础魔抗增加，攻击力成长从2.4提升至3。断魄大招治疗量提升，荧焰大招伤害增加。终于迎来了久违的加强。" },
  { version: "V10.15", date: "2020-07-22", title: "折镜全面削弱", desc: "由于赛场上频频出现“飞镖秒人”，折镜（白刀）的炮台激活时间增加，小飞镖的AD加成被大幅度下调。" },
  { version: "V10.8", date: "2020-04-15", title: "等级属性成长调整", desc: "自带护甲穿透从 [3% - 18%] 改为了穿甲 [2 - 12]。这是对他前期作战能力的一大削弱。" },
  { version: "V10.4", date: "2020-02-20", title: "视野与副武器提示可见", desc: "玩家现在终于能看到厄斐琉斯的副武器了！这是一个巨大的视觉可读性改动。通碧（绿刀）大招距离被限制为最大2000码。" },
  { version: "V10.2", date: "2020-01-23", title: "通碧与断魄削弱", desc: "通碧（绿刀）标记伤害的AD加成从40%降低至30%。断魄（红刀）Q技能伤害下调。荧焰（蓝刀）清线能力受挫。" },
  { version: "V10.1", date: "2020-01-08", title: "移动速度与生命值削弱", desc: "基础移速从330降低至325，基础生命值从530降低至500。荧焰（蓝刀）大招AOE伤害从100%降低至75%。" },
  { version: "V9.24", date: "2019-12-11", title: "初始发布 (Release)", desc: "厄斐琉斯降临召唤师峡谷。伴随他而来的是英雄联盟史上最复杂的技能说明和极其超模的数值（绿白刀秒龙，蓝紫刀五杀）。" }
];

export default function HistoryPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto">
      <div className="z-10 max-w-4xl w-full flex flex-col gap-10 pb-32 mt-12">
        <Link href="/" className="text-[var(--color-moon)] opacity-50 hover:opacity-100 transition-opacity font-sans w-fit tracking-widest">&larr; 返回圣所 (Back to Sanctuary)</Link>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--weapon-color)] drop-shadow-[0_0_15px_var(--weapon-glow)] transition-colors duration-700">版本星轨</h1>
          <h2 className="font-sans text-xl tracking-widest text-white/60">PATCH HISTORY</h2>
        </div>

        <p className="text-white/70 font-sans mt-4 max-w-2xl leading-relaxed">
          自从 2019 年底登场以来，厄斐琉斯一直是设计师“特别关照”的对象。他漫长的削弱与调整历史，不仅见证了他在职业赛场的统治力，也是无数“绝活哥”信仰的磨刀石。
        </p>

        {/* Timeline */}
        <div className="mt-8 relative border-l-2 border-[var(--weapon-color)]/30 ml-4 md:ml-8">
          {PATCH_HISTORY.map((patch, idx) => (
            <div key={idx} className="mb-10 ml-8 relative group">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-[var(--weapon-color)] group-hover:bg-[var(--weapon-color)] shadow-[0_0_10px_var(--weapon-glow)] transition-colors duration-300" />
              <div className="flex flex-col gap-2 bg-black/40 border border-white/5 p-6 rounded-2xl hover:border-[var(--weapon-color)]/50 transition-colors duration-500">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-serif text-[var(--color-moon)]">{patch.version}</h3>
                  <span className="text-xs font-mono text-[var(--weapon-color)] bg-[var(--weapon-color)]/10 px-2 py-1 rounded">{patch.date}</span>
                </div>
                <h4 className="text-lg font-sans text-white/90 font-bold">{patch.title}</h4>
                <p className="text-white/60 font-sans text-sm leading-relaxed">{patch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WeaponSelector />
    </div>
  );
}
