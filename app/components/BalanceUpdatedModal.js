"use client";
import { useEffect, useState } from "react";
import { playWinSound } from "../lib/sound";

export default function BalanceUpdatedModal({ value }) {
  const [display, setDisplay] = useState(0);
  const [iconShown, setIconShown] = useState(false);
  const [textShown, setTextShown] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIconShown(true), 200);
    const t2 = setTimeout(() => setTextShown(true), 600);
    const t3 = setTimeout(() => {
      playWinSound();
      const step = value / 25;
      let cur = 0;
      let i = 0;
      const id = setInterval(() => {
        i++;
        cur += step;
        if (i >= 25) {
          cur = value;
          clearInterval(id);
        }
        setDisplay(Math.round(cur * 100) / 100);
      }, 40);
    }, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full">
        <div className={`w-20 h-20 flex items-center justify-center transition-all duration-500 ${iconShown ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="#00C853" strokeWidth="4" fill="none" className="animate-[spin_1s_ease-out]" style={{ transformOrigin: "center" }} />
            <path d="M20 32l8 8 16-16" stroke="#00C853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <div className={`flex flex-col items-center gap-2 transition-all duration-500 ${textShown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <h2 className="text-2xl font-bold text-[#1a1a2e]">Saldo atualizado!</h2>
          <p className="text-[#888] text-sm">Você recebeu:</p>
          <p className="text-4xl font-bold text-[#0E7C3C] italic">{`R$ ${display.toFixed(2).replace(".", ",")}`}</p>
        </div>
      </div>
    </div>
  );
}
