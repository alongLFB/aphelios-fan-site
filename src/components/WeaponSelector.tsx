"use client";

import { motion } from "framer-motion";
import { useWeapon, WeaponId } from "@/context/WeaponContext";
import { Crosshair, ShieldAlert, CircleDot, Flame, PlusCircle } from "lucide-react";

// Lucide icons as placeholders for the weapons
const WEAPONS: { id: WeaponId; name: string; icon: React.ReactNode }[] = [
  { id: "calibrum", name: "通碧 (Calibrum)", icon: <Crosshair size={24} /> },
  { id: "severum", name: "断魄 (Severum)", icon: <ShieldAlert size={24} /> },
  { id: "gravitum", name: "坠明 (Gravitum)", icon: <CircleDot size={24} /> },
  { id: "infernum", name: "荧焰 (Infernum)", icon: <Flame size={24} /> },
  { id: "crescendum", name: "折镜 (Crescendum)", icon: <PlusCircle size={24} /> },
];

export default function WeaponSelector() {
  const { currentWeapon, setCurrentWeapon } = useWeapon();

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {WEAPONS.map((weapon) => {
        const isActive = currentWeapon === weapon.id;

        return (
          <motion.button
            key={weapon.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentWeapon(weapon.id)}
            className={`group relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-500
              ${isActive ? "border-[var(--color-moon)] shadow-[0_0_20px_var(--weapon-glow)] bg-[var(--weapon-color)] text-white" 
                : "border-transparent bg-white/10 text-white/50 hover:bg-white/20"}
            `}
          >
            {/* Tooltip */}
            <div className={`absolute right-16 px-3 py-1 rounded-md text-sm font-serif backdrop-blur-md border border-white/10 transition-opacity duration-300 pointer-events-none whitespace-nowrap
              ${isActive ? "opacity-100 bg-[var(--weapon-color)]/20 text-[var(--color-moon)] shadow-[0_0_10px_var(--weapon-glow)]" : "opacity-0 group-hover:opacity-100 bg-black/50"}`}
            >
              {weapon.name}
            </div>

            {weapon.icon}
          </motion.button>
        );
      })}
    </div>
  );
}
