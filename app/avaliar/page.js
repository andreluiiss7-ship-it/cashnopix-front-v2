"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import CodeEntry from "../components/CodeEntry";
import RatingCard from "../components/RatingCard";
import BalanceUpdatedModal from "../components/BalanceUpdatedModal";
import { playWinSound } from "../lib/sound";

const products = [
  {
    name: "Smart TV 4K",
    brand: "Havan",
    brandColor: "#1B5E20",
    value: 71.3,
    code: ["Q", "R", "S", "T"],
    image: "/images/products/smart-tv.png",
  },
  {
    name: "Ar condicionado",
    brand: "Casas Bahia",
    brandColor: "#0D47A1",
    value: 67.41,
    code: ["H", "I", "J", "K"],
    image: "/images/products/ar-condicionado.png",
  },
  {
    name: "Geladeira Bs43",
    brand: "Eletrolux",
    brandColor: "#37474F",
    value: 70,
    code: ["K", "J", "L", "O"],
    image: "/images/products/geladeira.png",
  },
];

export default function Avaliar() {
  const [state, setState] = useState({ type: "code", productIndex: 0 });
  const [balance, setBalance] = useState(258.67);
  const [progress, setProgress] = useState(3);
  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const inputRefs = useRef([null, null, null, null]);

  useEffect(() => {
    if (state.type !== "balance_updated") return;
    const idx = state.productIndex;
    const t = setTimeout(() => {
      if (idx < products.length - 1) {
        setCodeInputs(["", "", "", ""]);
        setState({ type: "code", productIndex: idx + 1 });
      } else {
        setState({ type: "final" });
      }
    }, 2500);
    return () => clearTimeout(t);
  }, [state]);

  const progressPct = (progress / 6) * 100;

  function handleCodeInput(i, value) {
    if (state.type !== "code") return;
    const product = products[state.productIndex];
    const upper = value.toUpperCase().slice(-1);
    const next = [...codeInputs];
    next[i] = upper;
    setCodeInputs(next);
    if (upper && i < 3 && inputRefs.current[i + 1]) inputRefs.current[i + 1].focus();
    if (next.every((c, idx2) => c === product.code[idx2])) {
      setTimeout(() => {
        setState({ type: "evaluate", productIndex: state.productIndex });
      }, 500);
    }
  }

  function handleEvaluate() {
    if (state.type !== "evaluate") return;
    const idx = state.productIndex;
    setBalance((b) => Math.round((b + products[idx].value) * 100) / 100);
    setProgress(3 + idx + 1);
    setCodeInputs(["", "", "", ""]);
    setState({ type: "balance_updated", productIndex: idx });
  }

  if (state.type === "processing") {
    return <ProcessingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <Header balance={balance} />
      <div className="w-full bg-[#e8e8e8] h-2">
        <div className="h-full bg-[#00C853] transition-all duration-700 ease-out" style={{ width: `${progressPct}%` }} />
      </div>
      <p className="text-center text-xs text-[#999] mt-2">Seu progresso: {progress}/6</p>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        {state.type === "code" && (
          <CodeEntry product={products[state.productIndex]} codeInputs={codeInputs} inputRefs={inputRefs} onInput={handleCodeInput} />
        )}
        {state.type === "evaluate" && <RatingCard product={products[state.productIndex]} onEvaluate={handleEvaluate} />}
        {state.type === "balance_updated" && <BalanceUpdatedModal value={products[state.productIndex].value} />}
        {state.type === "final" && <FinalCard balance={balance} onRealizarSaque={() => setState({ type: "processing" })} />}
      </div>
    </div>
  );
}

function FinalCard({ balance, onRealizarSaque }) {
  useEffect(() => {
    playWinSound();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full">
        <div className="w-16 h-16 rounded-full border-4 border-[#00C853] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#1a1a2e]">Parabéns!</h2>
        <p className="text-[#888] text-sm">Você acumulou o saldo de</p>
        <p className="text-4xl font-bold text-[#0E7C3C] italic">{`R$ ${balance.toFixed(2).replace(".", ",")}`}</p>
        <p className="text-[#888] text-sm">e já pode realizar seu primeiro saque.</p>
        <button
          onClick={onRealizarSaque}
          className="w-full bg-[#00C853] hover:bg-[#00b848] text-white font-bold text-base py-4 rounded-xl transition-all cursor-pointer shadow-lg mt-2"
        >
          Realizar Saque
        </button>
      </div>
    </div>
  );
}

function ProcessingScreen() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return Math.min(p + (p < 60 ? 2 : p < 85 ? 1 : 0.5), 100);
      });
    }, 80);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (pct >= 100) {
      const t = setTimeout(() => {
        window.location.href = "/validacao";
      }, 500);
      return () => clearTimeout(t);
    }
  }, [pct]);

  const circumference = 2 * Math.PI * 60;

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6 max-w-sm w-full">
        <h2 className="text-xl font-bold text-[#1a1a2e]">Processando Saque...</h2>
        <p className="text-[#888] text-sm text-center">Estamos criando e validando sua conta em nosso App.</p>
        <div className="relative w-40 h-40">
          <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
            <circle cx="80" cy="80" r="60" stroke="#e8e8e8" strokeWidth="10" fill="none" />
            <circle
              cx="80"
              cy="80"
              r="60"
              stroke="#00C853"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (pct / 100) * circumference}
              className="transition-all duration-100 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-[#0E7C3C]">{Math.round(pct)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
