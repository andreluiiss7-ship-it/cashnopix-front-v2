"use client";
import { useEffect, useState } from "react";

export default function Ativar() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);
  return loading ? <LoadingScreen /> : <ReadyScreen />;
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,200,83,0.15)_0%,transparent_70%)]" />
      </div>
      <div aria-hidden="true" className="absolute top-[10%] left-[8%] text-[#e0e0e0] text-2xl opacity-40 select-none">$</div>
      <div aria-hidden="true" className="absolute top-[15%] right-[12%] text-[#e0e0e0] text-xl opacity-30 select-none">$</div>
      <div aria-hidden="true" className="absolute bottom-[20%] left-[15%] text-[#e0e0e0] text-lg opacity-25 select-none">$</div>
      <div aria-hidden="true" className="absolute bottom-[12%] right-[8%] text-[#e0e0e0] text-2xl opacity-35 select-none">$</div>
      <div aria-hidden="true" className="absolute top-[40%] left-[3%] text-[#e0e0e0] text-sm opacity-20 select-none">$</div>
      <div aria-hidden="true" className="absolute top-[8%] left-[45%] text-[#e0e0e0] text-lg opacity-30 select-none">$</div>
      <div aria-hidden="true" className="absolute bottom-[8%] left-[40%] text-[#e0e0e0] text-xl opacity-25 select-none">$</div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-[#00C853] flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95.49-7.4-2.11-8.27-5.52h2.1c.73 2.23 2.84 3.85 5.34 3.85.44 0 .87-.05 1.28-.15l-.45 1.82zm.53-4.93H10.5c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1v-1h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h.73L9.4 7.53l1.73-.73L12.4 10h1.2l1.27-3.2 1.73.73-1.33 3.47h.73c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1v1h1c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5zm5.37-1.59h-2.1c-.73-2.23-2.84-3.85-5.34-3.85-.44 0-.87.05-1.28.15l.45-1.82c3.95-.49 7.4 2.11 8.27 5.52z"
              fill="white"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          Cash<span className="text-[#00C853]">No</span>Pix
        </h1>
        <div className="w-8 h-8 border-[3px] border-[#00C853]/30 border-t-[#00C853] rounded-full animate-spin" />
        <p className="text-[#999] text-sm">Carregando...</p>
      </div>
    </div>
  );
}

function ReadyScreen() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg max-w-[420px] w-full p-8 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#00C853] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#E8F5E9] rounded-lg px-6 py-2 mb-5 w-full">
            <div className="flex items-center justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C853] inline-block" />
              <span className="text-[#0E7C3C] text-sm font-semibold">Você foi selecionado</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#1a1a2e] mb-3">Parabéns!</h1>
          <p className="text-[#888] text-sm leading-relaxed mb-8">
            Uma licença com <span className="font-bold text-[#0E7C3C]">R$ 50,00</span> de Bônus foi reservada para você por 5 minutos.
          </p>
          <button
            onClick={() => {
              window.location.href = "/resgatar";
            }}
            className="w-full bg-[#00C853] hover:bg-[#00b848] text-white font-bold text-base py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg cursor-pointer"
          >
            Resgatar Meu Bônus Agora
          </button>
        </div>
      </div>
      <div className="py-6 flex items-center justify-center gap-6 text-xs text-[#aaa]">
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Conexão segura
        </div>
        <span className="text-[#ccc]">|</span>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Dados protegidos
        </div>
      </div>
    </div>
  );
}
