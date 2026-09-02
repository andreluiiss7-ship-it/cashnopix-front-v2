"use client";
import { useState } from "react";

function formatBRL(n) {
  return `R$ ${n.toFixed(2).replace(".", ",")}`;
}

function formatCPF(v) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

function formatPhone(v) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function Saque() {
  const [balance] = useState(258.67);
  const [keyType, setKeyType] = useState("cpf");
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);

  function handleChange(v) {
    setValue(keyType === "cpf" ? formatCPF(v) : formatPhone(v));
  }

  if (validated) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
        <HeaderBar balance={balance} />
        <ProgressBar />
        <p className="text-center text-xs text-[#999] mt-2">Seu progresso: 3/6</p>
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="30" stroke="#E8F5E9" strokeWidth="6" fill="none" />
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  stroke="#00C853"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="190"
                  strokeDashoffset="0"
                  className="animate-[draw-circle_0.8s_ease-out]"
                />
                <path d="M22 36l10 10 18-18" stroke="#00C853" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-3">Chave PIX validada!</h2>
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              Enviamos um PIX de <span className="font-bold text-[#00C853]">R$ 0,10</span> para confirmar sua conta.
            </p>
            <p className="text-[#888] text-sm leading-relaxed mb-6">
              Agora, basta avaliar mais <strong className="text-[#1a1a2e]">3 produtos</strong> para realizar seu primeiro saque!
            </p>
            <div className="flex items-center gap-2 text-[#999] text-sm">
              <div className="w-4 h-4 border-2 border-[#00C853]/40 border-t-[#00C853] rounded-full animate-spin" />
              Redirecionando...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <HeaderBar balance={balance} />
      <ProgressBar />
      <p className="text-center text-xs text-[#999] mt-2">Seu progresso: 3/6</p>
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-[#1a1a2e] mb-2">Parabéns!</h1>
          <p className="text-[#888] text-sm mb-1">
            Você acumulou o saldo de <span className="font-bold text-[#00C853]">{formatBRL(balance)}</span>
          </p>
          <p className="text-[#888] text-sm mb-6 text-center">Cadastre sua chave PIX para o próximo passo!</p>
          <p className="text-sm font-bold text-[#1a1a2e] mb-3 self-start">Selecione seu tipo de chave PIX</p>
          <div className="flex items-center gap-3 w-full mb-5">
            <button
              onClick={() => {
                setKeyType("cpf");
                setValue("");
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                keyType === "cpf" ? "bg-[#00C853] text-white shadow-md" : "bg-white border-2 border-[#ddd] text-[#666]"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 8h4" />
                <path d="M7 12h2" />
              </svg>
              CPF
            </button>
            <button
              onClick={() => {
                setKeyType("telefone");
                setValue("");
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                keyType === "telefone" ? "bg-[#00C853] text-white shadow-md" : "bg-white border-2 border-[#ddd] text-[#666]"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
              Telefone
            </button>
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={keyType === "cpf" ? "Digite seu CPF..." : "Digite seu telefone..."}
            className="w-full border-2 border-[#e0e0e0] rounded-xl px-4 py-3.5 text-[#333] text-sm focus:border-[#00C853] focus:outline-none transition-colors mb-6 placeholder:text-[#bbb]"
          />
          <button
            onClick={() => {
              if (!value.trim()) return;
              setValidated(true);
              setTimeout(() => {
                window.location.href = "/avaliar";
              }, 3500);
            }}
            className="w-full bg-[#2e7d32] hover:bg-[#256b28] text-white font-bold text-base py-4 rounded-xl transition-all cursor-pointer shadow-lg"
          >
            Cadastrar Chave PIX
          </button>
        </div>
      </div>
    </div>
  );
}

function HeaderBar({ balance }) {
  return (
    <header className="w-full bg-white px-4 py-3 flex items-center justify-between">
      <span className="text-lg font-bold tracking-tight">
        Cash<span className="text-[#00C853]">No</span>
        <span className="text-[#1a1a2e]">Pix</span>
      </span>
      <div className="bg-[#00C853] text-white font-bold text-sm px-4 py-2 rounded-full flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        {formatBRL(balance)}
      </div>
    </header>
  );
}

function ProgressBar() {
  return (
    <div className="w-full bg-[#e8e8e8] h-2">
      <div className="h-full bg-[#00C853] w-1/2" />
    </div>
  );
}
