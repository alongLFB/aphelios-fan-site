"use client";

import Link from "next/link";
import WeaponSelector from "@/components/WeaponSelector";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const VOICE_LINES = [
  { en: "This will be your voice.", zh: "这将是你的声音。", type: "Pick", file: "/audio/voice.mp3" },
  { en: "So many weapons, Aphelios. The deadliest is your faith.", zh: "武器如此之多，厄斐琉斯。但最致命的是你的信仰。", type: "Move", file: "" },
  { en: "Every weapon, a syllable.", zh: "每一把武器，都是一个音节。", type: "Attack", file: "" },
  { en: "They are the cult of the sun, but you are the weapon of the moon.", zh: "他们是烈阳的狂热者，而你是皎月的利刃。", type: "Move", file: "" },
  { en: "I am with you!", zh: "我与你同在！", type: "Ultimate (Moonlight Vigil)", file: "/audio/ult.mp3" },
  { en: "Calibrum.", zh: "通碧。", type: "Weapon Switch", file: "/audio/calibrum.mp3" },
  { en: "Severum.", zh: "断魄。", type: "Weapon Switch", file: "/audio/severum.mp3" },
  { en: "Gravitum.", zh: "坠明。", type: "Weapon Switch", file: "/audio/gravitum.mp3" },
  { en: "Infernum.", zh: "荧焰。", type: "Weapon Switch", file: "/audio/infernum.mp3" },
  { en: "Crescendum.", zh: "折镜。", type: "Weapon Switch", file: "/audio/crescendum.mp3" }
];

export default function AudioPage() {
  const [activeVoice, setActiveVoice] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (idx: number, file: string) => {
    if (!file) return; // Do nothing if there's no audio file
    
    if (activeVoice === idx) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setActiveVoice(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Instantiating a new Audio object inside the click event callback is required by iOS Safari gesture authorization
    const audio = new Audio(file);
    audioRef.current = audio;

    audio.onended = () => {
      setActiveVoice(null);
    };

    audio.play().catch((err) => {
      console.error("Playback failed: ", err);
    });

    setActiveVoice(idx);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto">
      <div className="z-10 max-w-4xl w-full flex flex-col gap-10 pb-32 mt-12">
        <Link href="/" className="text-[var(--color-moon)] opacity-50 hover:opacity-100 transition-opacity font-sans w-fit tracking-widest">&larr; 返回圣所 (Back to Sanctuary)</Link>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--weapon-color)] drop-shadow-[0_0_15px_var(--weapon-glow)] transition-colors duration-700">月光低语</h1>
          <h2 className="font-sans text-xl tracking-widest text-white/60">ALUNE&apos;S WHISPERS (AUDIO)</h2>
        </div>

        <p className="text-white/70 font-sans mt-4 max-w-2xl leading-relaxed">
          厄斐琉斯因为饮下夜绽之毒而失去了声音。在游戏中，所有的语音都来自他在精神领域的双胞胎妹妹——拉露恩 (Alune)。点击播放键，聆听月相的指引。
        </p>

        <div className="flex flex-col gap-4 mt-8">
          {VOICE_LINES.map((line, idx) => (
            <div 
              key={idx}
              onClick={() => togglePlay(idx, line.file)}
              className={`flex items-center gap-6 p-4 md:p-6 rounded-2xl bg-black/40 border border-white/5 transition-colors duration-500 group ${line.file ? 'hover:border-[var(--weapon-color)]/50 cursor-pointer' : 'opacity-70'}`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${activeVoice === idx ? 'border-[var(--weapon-color)] bg-[var(--weapon-color)]/20 shadow-[0_0_15px_var(--weapon-glow)]' : 'border-white/20'}`}>
                {activeVoice === idx ? (
                  <Pause size={20} className="text-[var(--color-moon)]" fill="currentColor" />
                ) : (
                  <Play size={20} className={line.file ? "text-white/50 group-hover:text-white/80" : "text-white/20"} fill="none" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[var(--weapon-color)] font-sans tracking-widest uppercase mb-1">{line.type}</span>
                <p className="text-lg md:text-xl font-serif text-[var(--color-moon)] group-hover:text-white transition-colors duration-300">&ldquo;{line.en}&rdquo;</p>
                <p className="text-sm text-white/50 font-sans tracking-widest">“{line.zh}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WeaponSelector />
    </div>
  );
}
