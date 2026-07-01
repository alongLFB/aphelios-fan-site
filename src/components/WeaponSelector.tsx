"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWeapon, WeaponId } from "@/context/WeaponContext";
import { X } from "lucide-react";
import Image from "next/image";

// Official HUD icons for the weapons downloaded from CommunityDragon
const WEAPONS: { id: WeaponId; name: string; icon: string }[] = [
  { id: "calibrum", name: "通碧 (Calibrum)", icon: "/weapons/calibrum.png" },
  { id: "severum", name: "断魄 (Severum)", icon: "/weapons/severum.png" },
  { id: "gravitum", name: "坠明 (Gravitum)", icon: "/weapons/gravitum.png" },
  { id: "infernum", name: "荧焰 (Infernum)", icon: "/weapons/infernum.png" },
  { id: "crescendum", name: "折镜 (Crescendum)", icon: "/weapons/crescendum.png" },
];

export default function WeaponSelector() {
  const { currentWeapon, setCurrentWeapon } = useWeapon();
  const [showActiveTip, setShowActiveTip] = useState(false);
  const [activeTipWeaponId, setActiveTipWeaponId] = useState<WeaponId | null>(null);

  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Handle auto-collapse timer (4 seconds) on mobile when open
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen, currentWeapon]);

  const handleWeaponClick = (id: WeaponId, isMobileMenu: boolean) => {
    if (isMobileMenu) {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        if (id !== currentWeapon) {
          setCurrentWeapon(id);
          setActiveTipWeaponId(id);
          setShowActiveTip(true);
        }
        setIsOpen(false);
      }
    } else {
      setCurrentWeapon(id);
      setActiveTipWeaponId(id);
      setShowActiveTip(true);
    }
  };

  useEffect(() => {
    if (!showActiveTip) return;
    const timer = setTimeout(() => {
      setShowActiveTip(false);
      setActiveTipWeaponId(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showActiveTip, activeTipWeaponId]);

  // Mobile weapons list: active weapon is at the bottom when open
  const mobileWeapons = isOpen
    ? [...WEAPONS.filter((w) => w.id !== currentWeapon), WEAPONS.find((w) => w.id === currentWeapon)!]
    : [WEAPONS.find((w) => w.id === currentWeapon)!];

  return (
    <>
      {/* Desktop Version: Always visible on screen sizes >= 768px */}
      <div className="hidden md:flex flex-col gap-4 fixed bottom-8 right-8 z-50">
        {WEAPONS.map((weapon) => {
          const isActive = currentWeapon === weapon.id;
          const isTipActive = isActive && activeTipWeaponId === weapon.id && showActiveTip;

          return (
            <motion.button
              key={weapon.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleWeaponClick(weapon.id, false)}
              className={`group relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-500 cursor-pointer
                ${isActive ? "border-[var(--color-moon)] shadow-[0_0_20px_var(--weapon-glow)] bg-[var(--weapon-color)] text-white" 
                  : "border-transparent bg-white/10 text-white/50 hover:bg-white/20"}
              `}
            >
              {/* Tooltip */}
              <div className={`absolute right-16 px-3 py-1 rounded-md text-sm font-serif backdrop-blur-md border border-white/10 transition-opacity duration-300 pointer-events-none whitespace-nowrap
                ${isTipActive 
                  ? "opacity-100 bg-[var(--weapon-color)]/20 text-[var(--color-moon)] shadow-[0_0_10px_var(--weapon-glow)] border-[var(--weapon-color)]/30" 
                  : isActive
                    ? "opacity-0 group-hover:opacity-100 bg-[var(--weapon-color)]/20 text-[var(--color-moon)] shadow-[0_0_10px_var(--weapon-glow)] border-[var(--weapon-color)]/30"
                    : "opacity-0 group-hover:opacity-100 bg-black/75 text-white/70 border-white/10"}`}
              >
                {weapon.name}
              </div>

              <Image
                src={weapon.icon}
                alt={weapon.name}
                width={28}
                height={28}
                priority
                className={`object-contain transition-all duration-500
                  ${isActive 
                    ? "opacity-100 grayscale-0 scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                    : "opacity-45 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"}`}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Mobile Version: Visible on screen sizes < 768px */}
      <div className="flex md:hidden flex-col gap-3 fixed bottom-6 right-6 z-50">
        <AnimatePresence initial={false}>
          {mobileWeapons.map((weapon) => {
            const isActive = currentWeapon === weapon.id;
            const isTipActive = isActive && activeTipWeaponId === weapon.id && showActiveTip;
            const isTooltipVisible = isTipActive || isOpen;
            const showCloseIcon = isOpen && isActive;

            return (
              <motion.button
                key={weapon.id}
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.85 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleWeaponClick(weapon.id, true)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 cursor-pointer
                  ${isActive ? "border-[var(--color-moon)] shadow-[0_0_20px_var(--weapon-glow)] bg-[var(--weapon-color)] text-white" 
                    : "border-transparent bg-white/10 text-white/50"}
                `}
              >
                {/* Tooltip */}
                <div className={`absolute right-14 px-3 py-1 rounded-md text-sm font-serif backdrop-blur-md border transition-opacity duration-300 pointer-events-none whitespace-nowrap
                  ${isTooltipVisible ? "opacity-100" : "opacity-0"}
                  ${isActive
                    ? "bg-[var(--weapon-color)]/25 text-[var(--color-moon)] shadow-[0_0_10px_var(--weapon-glow)] border-[var(--weapon-color)]/30"
                    : "bg-black/80 text-white/70 border-white/10"}`}
                >
                  {weapon.name}
                </div>

                {showCloseIcon ? (
                  <X size={20} />
                ) : (
                  <Image
                    src={weapon.icon}
                    alt={weapon.name}
                    width={24}
                    height={24}
                    priority
                    className={`object-contain transition-all duration-500
                      ${isActive 
                        ? "opacity-100 grayscale-0 scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" 
                        : "opacity-45 grayscale"}`}
                  />
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}
