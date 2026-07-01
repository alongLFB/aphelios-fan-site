import Link from "next/link";
import WeaponSelector from "@/components/WeaponSelector";

const PATCH_HISTORY = [
  { 
    version: "V26.13", 
    date: "2026-06-25", 
    title: "全武器伤害全线提升", 
    desc: "通碧（绿刀）：标记伤害的额外AD加成从 40% 提升至 50%。断魄（红刀）：Q技能的额外AD加成从 每击20% 提升至 每击22%。荧焰（蓝刀）：Q技能额外AD加成从 35% 提升至 40%。折镜（白刀）：驻灵炮台的额外AD加成从 31% 提升至 35%。" 
  },
  { 
    version: "V26.04", 
    date: "2026-02-22", 
    title: "基础攻击力成长削弱", 
    desc: "被动技能（杀手与先知）：升级时获得的额外攻击力（AD）从 [4.5 / 9 / 13.5 / 18 / 22.5 / 27] 降低至 [4.0 / 8.0 / 12.0 / 16.0 / 20.0 / 24.0]。" 
  },
  { 
    version: "V26.01", 
    date: "2026-01-10", 
    title: "赛季初大重构与削弱", 
    desc: "断魄（红刀）：Q技能每击基础伤害从 10/15/20 降低至 0；额外AD加成从 22%-40% 调整为 20%-35%。清辉夜凝（R）：通碧大招的基础伤害从 125/175/225 降低至 100/150/200；大招额外暴击伤害根据暴击率和额外暴击加成进行动态缩放。坠明（紫刀）：Q技能禁锢时间从 1.25秒 缩短至 1秒。折镜（白刀）：飞镖返回最大速度下调 5%。" 
  },
  { 
    version: "V25.12", 
    date: "2025-06-14", 
    title: "基础攻速与绿刀加强", 
    desc: "基础属性：成长攻击速度从 2.1% 提升至 2.5%。通碧（绿刀）：Q技能（月闪）基础伤害从 60/85/110/135/160 提升至 70/95/120/145/170。断魄（红刀）：Q技能（对影）获得的额外移动速度从 20% (+10%每100 AP) 提升至 25% (+10%每100 AP)。" 
  },
  { 
    version: "V14.1B", 
    date: "2024-01-24", 
    title: "无神话时代的黎明", 
    desc: "成长属性：攻击力成长从 3.0 降低至 2.3。清辉夜凝（R）：大招基础伤害从 125/175/225 提升至 150/200/250。通碧大招额外标记伤害从 50/80/110 提升至 60/90/120；断魄大招额外治疗量从 250/350/450 提升至 275/375/475；坠明大招禁锢时间从 1.25秒 提升至 1.5秒；荧焰大招额外AD加成从 15% 提升至 20%；折镜大招飞镖数量从 3 提升至 4。" 
  },
  { 
    version: "V13.11", 
    date: "2023-06-01", 
    title: "神话装备版本调整", 
    desc: "基础属性：基础攻击力从 57 降低至 55。断魄（红刀）：普攻生命值吸血百分比从 2.5% - 9% 降低至 2% - 7.5%。Q技能（对影）每次命中的治疗效果从 2.5% - 9% 提升至 3% - 10%（基于等级）。" 
  },
  { 
    version: "V12.11", 
    date: "2022-06-08", 
    title: "耐久度版本补偿", 
    desc: "被动技能（杀手与先知）：升级时获得的物理穿甲数值从 [4.5 / 9 / 13.5 / 18 / 22.5 / 27] 提升至 [5.5 / 11 / 16.5 / 22 / 27.5 / 33]。" 
  },
  { 
    version: "V11.12", 
    date: "2021-06-09", 
    title: "属性重做与回暖", 
    desc: "基础属性：基础魔法抗性从 26 提升至 30；成长攻击力从 2.4 提升至 3.0。清辉夜凝（R）：断魄大招额外治疗量从 100/175/250 提升至 150/225/300；荧焰大招溅射伤害AD加成从 85% 提升至 95%。" 
  },
  { 
    version: "V10.15", 
    date: "2020-07-22", 
    title: "折镜全面削弱", 
    desc: "折镜（白刀）：驻灵炮台攻击后的激活时间从 0.25秒 增加至 0.35秒；额外飞镖的伤害AD加成从 [每个飞镖 0.24 - 1.15 AD] 降低至 [每个飞镖 0.15 - 0.90 AD]。通碧（绿刀）：Q技能冷却时间从 9/8.25/7.5/6.75/6秒 增加至 10/9.5/9/8.5/8秒。" 
  },
  { 
    version: "V10.8", 
    date: "2020-04-15", 
    title: "等级属性成长调整", 
    desc: "被动技能：升级属性中百分比护甲穿透 [3% / 6% / 9% / 12% / 15% / 18%] 调整为固定护甲穿透（穿甲）[2 / 4 / 6 / 8 / 10 / 12]。通碧（绿刀）：Q技能冷却时间从 9/8/7/6/5秒 调整为 9/8.25/7.5/6.75/6秒。" 
  },
  { 
    version: "V10.4", 
    date: "2020-02-20", 
    title: "视野与副武器提示可见", 
    desc: "界面改动：在生命值条旁添加了副武器 and 剩余弹药的指示器，敌方现在可见副武器类型。通碧（绿刀）：清辉夜凝（R）触发标记时的攻击距离限制为最大 2000 码（此前为无限距离）。折镜（白刀）：小飞镖的叠加数量上限硬限制为 20。" 
  },
  { 
    version: "V10.2", 
    date: "2020-01-23", 
    title: "通碧与断魄削弱", 
    desc: "通碧（绿刀）：消耗标记时的额外AD加成从 40% 降低至 30%；触发标记的普攻不再消耗其他标记的持续时间。断魄（红刀）：Q技能基础伤害从 10-40 降低至 10-35。荧焰（蓝刀）：Q技能对小兵的伤害减免从 0% 增加至 20%。" 
  },
  { 
    version: "V10.1", 
    date: "2020-01-08", 
    title: "移动速度与生命值削弱", 
    desc: "基础属性：基础移动速度从 330 降低至 325；基础生命值从 530 降低至 500。荧焰（蓝刀）：清辉夜凝（R）溅射范围缩小，且额外溅射伤害AD加成从 100% 降低至 75%；溅射暴击伤害加成从 100% 降低至 75%。" 
  },
  { 
    version: "V9.24", 
    date: "2019-12-11", 
    title: "初始发布 (Release)", 
    desc: "英雄发布：厄斐琉斯以初始状态发布。拥有五种独特的武器（通碧、断魄、坠明、荧焰、折镜）、各自独立的Q技能被动弹药机制（每把枪50发子弹）、以及终极技能清辉夜凝（R）。" 
  }
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
