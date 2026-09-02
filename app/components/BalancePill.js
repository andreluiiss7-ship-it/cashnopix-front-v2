"use client";
import { useEffect, useRef, useState } from "react";

export function formatBRL(n) {
  return `R$ ${n.toFixed(2).replace(".", ",")}`;
}

export default function BalancePill({ balance }) {
  const [display, setDisplay] = useState(balance);
  const prev = useRef(balance);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    const from = prev.current;
    if (from === balance) return;
    prev.current = balance;
    setPulsing(true);
    const step = (balance - from) / 30;
    let cur = from;
    let i = 0;
    const id = setInterval(() => {
      i++;
      cur += step;
      if (i >= 30) {
        cur = balance;
        clearInterval(id);
        setTimeout(() => setPulsing(false), 300);
      }
      setDisplay(Math.round(cur * 100) / 100);
    }, 40);
    return () => clearInterval(id);
  }, [balance]);

  return (
    <div
      className={`bg-[#00C853] text-white font-bold text-sm px-4 py-2 rounded-full flex items-center gap-1.5 transition-transform duration-300 ${
        pulsing ? "scale-110" : "scale-100"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      {formatBRL(display)}
    </div>
  );
}
