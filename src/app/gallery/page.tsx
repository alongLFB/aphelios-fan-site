"use client";

import Link from "next/link";
import WeaponSelector from "@/components/WeaponSelector";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const SKINS = [
  { title: "Classic Aphelios", desc: "经典原画", date: "2019-12", img: "/skins/original.jpg" },
  { title: "Nightbringer", desc: "黑夜使者", date: "2019-12", img: "/skins/nightbringer.jpg" },
  { title: "Lunar Beast", desc: "福牛守护者", date: "2021-02", img: "/skins/lunarbeast.jpg" },
  { title: "EDG", desc: "EDG 冠军皮肤", date: "2022-05", img: "/skins/edg.jpg" },
  { title: "Spirit Blossom", desc: "灵魂莲华", date: "2022-10", img: "/skins/spiritblossom.jpg" },
  { title: "HEARTSTEEL", desc: "心之钢", date: "2023-11", img: "/skins/heartsteel.jpg" }
];

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + SKINS.length) % SKINS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % SKINS.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto">
      <div className="z-10 max-w-6xl w-full flex flex-col gap-10 pb-32 mt-12">
        <Link href="/" className="text-[var(--color-moon)] opacity-50 hover:opacity-100 transition-opacity font-sans w-fit tracking-widest">&larr; 返回圣所 (Back to Sanctuary)</Link>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--weapon-color)] drop-shadow-[0_0_15px_var(--weapon-glow)] transition-colors duration-700">皮肤图鉴</h1>
          <h2 className="font-sans text-xl tracking-widest text-white/60">COLLECTION (SKINS)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SKINS.map((item, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIdx(i)}
              className="group relative aspect-video bg-black/40 rounded-xl border border-[var(--color-moon)]/10 flex flex-col items-center justify-center overflow-hidden hover:border-[var(--weapon-color)] transition-all duration-500 shadow-lg cursor-pointer transform hover:-translate-y-2"
            >
              <Image src={item.img} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-white font-serif text-xl tracking-wider z-10 drop-shadow-md">{item.title}</span>
                  <span className="text-[var(--weapon-color)] text-sm font-sans mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_5px_var(--weapon-glow)]">{item.desc}</span>
                </div>
                <span className="text-white/40 text-xs font-mono">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIdx(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full backdrop-blur-lg">
              <X size={32} />
            </button>

            <button onClick={handlePrev} className="absolute left-4 md:left-12 text-white/50 hover:text-[var(--weapon-color)] transition-colors p-4 bg-black/40 rounded-full hover:bg-white/5 hover:scale-110 transform duration-300">
              <ChevronLeft size={48} />
            </button>

            <motion.div 
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-[90vw] h-[70vh] md:h-[85vh] rounded-xl overflow-hidden shadow-[0_0_50px_var(--weapon-glow)] border border-[var(--weapon-color)]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={SKINS[selectedIdx].img} alt={SKINS[selectedIdx].title} fill className="object-contain" priority />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-4xl md:text-5xl font-serif text-white tracking-widest mb-2">{SKINS[selectedIdx].title}</h3>
                <p className="text-[var(--weapon-color)] text-lg tracking-widest">{SKINS[selectedIdx].desc} <span className="text-white/40 ml-4 font-mono text-sm">{SKINS[selectedIdx].date}</span></p>
              </div>
            </motion.div>

            <button onClick={handleNext} className="absolute right-4 md:right-12 text-white/50 hover:text-[var(--weapon-color)] transition-colors p-4 bg-black/40 rounded-full hover:bg-white/5 hover:scale-110 transform duration-300">
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <WeaponSelector />
    </div>
  );
}
