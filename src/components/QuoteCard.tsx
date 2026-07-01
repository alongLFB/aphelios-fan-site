"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useWeapon } from "@/context/WeaponContext";
import { useEffect, useState } from "react";

const QUOTES = [
  { en: "I am with you.", zh: "我与你同在。" },
  { en: "Condemned to darkness, where our power shines.", zh: "注定要在黑暗中，我们的力量才能闪耀。" },
  { en: "The moon gives us purpose.", zh: "皎月赐予我们目标。" },
  { en: "A weapon of faith.", zh: "信仰的武器。" },
  { en: "Their ignorance is our advantage.", zh: "他们的无知便是我们的优势。" },
  { en: "We walk in the moonlight.", zh: "我们漫步于月光之中。" },
  { en: "Every weapon, a syllable.", zh: "每一把武器，都是一个音节。" }
];

export default function QuoteCard() {
  const { currentWeapon } = useWeapon();
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Cycle quotes occasionally or when weapon changes
  useEffect(() => {
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
  }, [currentWeapon]);

  const quote = QUOTES[quoteIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quoteIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_0_30px_var(--weapon-glow)] transition-all duration-700 bg-black/40 flex flex-col items-center text-center gap-4"
      >
        <div className="flex flex-col gap-2">
          <p className="text-[var(--color-moon)] font-serif italic tracking-wider text-xl md:text-2xl text-glow font-light">
            "{quote.en}"
          </p>
          <p className="text-white/80 font-sans tracking-widest text-lg md:text-xl text-glow">
            “{quote.zh}”
          </p>
        </div>
        <div className="w-12 h-[1px] bg-[var(--weapon-color)] opacity-50" />
        <p className="text-[var(--color-weapon-spirit)] font-sans text-xs tracking-widest uppercase opacity-80">
          — 拉露恩 (Alune)
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
