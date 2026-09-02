"use client";
import { useEffect, useRef, useState } from "react";
import { playWinSound } from "../lib/sound";

const VIDEO_DURATION_S = 370; // 00:06:09.83

const comments = [
  {
    name: "Josana de Oliveira",
    avatar: "/images/testimonials/1.png",
    text: "Obrigadoo!! Recebi certinho os R$500, vai me ajudar muito na casa 🙏",
    time: "3 min",
  },
  {
    name: "Roberto Santos",
    avatar: "/images/testimonials/2.webp",
    text: "Até pensei que seria golpe, mas que bom que não é, fiz o pagamento da taxa e caiu por aqui.",
    time: "6 min",
  },
  {
    name: "Ulisses Soares",
    avatar: "/images/testimonials/3.jpg",
    text: "Sério? Estava desconfiado, mas vou tentar aqui...",
    time: "8 min",
  },
  {
    name: "Silvana Freaitas",
    avatar: "/images/testimonials/4.jpg",
    text: "Pode confiar, testei aqui e funcionou, ja to usando a 1 semana",
    time: "12 min",
  },
  {
    name: "Felipe de Castro",
    avatar: "/images/testimonials/5.jpg",
    text: "Acabou de cair aqui na minha conta, obrigado 🙏",
    time: "17 min",
  },
  {
    name: "Sophia Andrade",
    avatar: "/images/testimonials/6.jpg",
    text: "Foi bem rápido até, muito obrigado, vim do Kwai ❤️",
    time: "22 min",
  },
];

export default function Validacao() {
  const [seconds, setSeconds] = useState(196);
  const [ctaReady, setCtaReady] = useState(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  function reveal() {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setCtaReady(true);
    playWinSound();
  }

  useEffect(() => {
    const fallback = setTimeout(reveal, (VIDEO_DURATION_S + 1) * 1000);
    return () => clearTimeout(fallback);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <div className="w-full bg-[#E53935] py-3 px-4 text-center">
        <p className="text-white font-bold text-base">
          Tempo limite para resgate: {mm}:{ss}
        </p>
      </div>

      <div className="relative w-full">
        <div className="relative">
          <video
            className="w-full aspect-video pointer-events-none"
            autoPlay
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onEnded={reveal}
          >
            <source src="/video-validacao.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <div className="absolute inset-0" />
        </div>
        <div className="absolute bottom-3 left-3 flex items-end gap-2">
          <div className="relative w-20 h-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/misc/garantia-14-dias.png" alt="Garantia 14 dias" className="w-full h-full object-contain drop-shadow-lg" />
          </div>
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 mb-1">
            <p className="text-white text-xs font-medium">para utilizar o Cash no Pix à vontade</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#1a1a2e] text-center mb-4">Taxa de Validação</h2>
          <p className="text-[#666] text-sm text-center leading-relaxed mb-4">
            Seguindo as diretrizes do Banco Central do Brasil, solicitamos uma confirmação de identidade de <strong className="text-[#1a1a2e]">R$37,00</strong> para
            validarmos seu cadastro, garantindo a qualidade dos nossos usuários.
          </p>
          <p className="text-[#E53935] text-sm text-center font-bold leading-relaxed mb-6">
            Não se preocupe, o dinheiro será totalmente reembolsado em até 2 horas junto ao saldo acumulado.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 bg-[#FFF8E1] rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm">Taxa obrigatória</p>
                <p className="text-[#888] text-xs">Obrigatório para realizar o saque dos seus ganhos.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#E8F5E9] rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#00C853] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm">Valor reembolsável</p>
                <p className="text-[#888] text-xs">Você recebe os R$37,00 de volta após finalizar esta etapa.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#E8F5E9] rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#00C853] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm">Garantia de segurança</p>
                <p className="text-[#888] text-xs">Seu pagamento é seguro e protegido pelo Banco Central do Brasil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="text-base font-bold text-[#1a1a2e] mb-4">3 Comentários</h3>
          <div className="flex flex-col gap-4">
            {comments.map((c, i) => (
              <div key={i} className="flex gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="bg-[#f0f2f5] rounded-xl px-3 py-2.5">
                    <p className="font-bold text-[#1a1a2e] text-sm">{c.name}:</p>
                    <p className="text-[#333] text-sm mt-0.5 break-words">{c.text}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 ml-1">
                    <span className="text-xs text-[#888]">Responder</span>
                    <span className="text-xs text-[#888]">·</span>
                    <span className="text-xs text-[#888]">Curtir</span>
                    <span className="text-xs text-[#888]">·</span>
                    <span className="text-xs text-[#888]">Seguir</span>
                    <span className="text-xs text-[#888]">·</span>
                    <span className="text-xs text-[#888]">{c.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#e8e8e8]">
            <div className="w-8 h-8 rounded-full bg-[#ddd] flex-shrink-0" />
            <div className="flex-1 bg-[#f0f2f5] rounded-full px-4 py-2.5">
              <p className="text-[#aaa] text-sm">Escreva um comentário...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 mb-4">
        {ctaReady ? (
          <button
            onClick={() => window.open("https://go.perfectpay.com.br/PPU38CQFNR0", "_blank")}
            className="w-full bg-[#00C853] hover:bg-[#00b848] text-white font-bold text-lg py-4 rounded-xl transition-all cursor-pointer shadow-lg"
          >
            {`Liberar meu saque de R$ 467,38`}
          </button>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 text-[#999] text-sm py-4 border-2 border-dashed border-[#ddd] rounded-xl">
            <div className="w-4 h-4 border-2 border-[#00C853]/40 border-t-[#00C853] rounded-full animate-spin" />
            Assista o vídeo até o final para liberar
          </div>
        )}
        <div className="flex items-center justify-center gap-4 mt-3 mb-6 text-xs text-[#aaa]">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Site Seguro
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Dados Protegidos
          </div>
        </div>
      </div>
    </div>
  );
}
