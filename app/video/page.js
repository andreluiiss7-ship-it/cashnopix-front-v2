"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { playWinSound } from "../lib/sound";

const VIDEO_DURATION_S = 787; // 00:13:06.90

export default function VideoPage() {
  const [balance] = useState(258.67);
  const [buttonReady, setButtonReady] = useState(false);
  const videoRef = useRef(null);
  const revealedRef = useRef(false);

  function reveal() {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setButtonReady(true);
    playWinSound();
  }

  useEffect(() => {
    const fallback = setTimeout(reveal, (VIDEO_DURATION_S + 1) * 1000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <Header balance={balance} />
      <div className="w-full bg-[#e8e8e8] h-2">
        <div className="h-full bg-[#00C853] w-1/2" />
      </div>
      <p className="text-center text-xs text-[#999] mt-2">Seu progresso: 3/6</p>
      <div className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-black relative">
          <video
            ref={videoRef}
            className="w-full aspect-video pointer-events-none"
            autoPlay
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onEnded={reveal}
          >
            <source src="/video-saque.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <div className="absolute inset-0" />
        </div>
        {buttonReady ? (
          <button
            onClick={() => {
              window.location.href = "/saque";
            }}
            className="w-full max-w-lg bg-[#00C853] hover:bg-[#00b848] text-white font-bold text-lg py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 mt-6 shadow-lg"
          >
            Liberar meu saque
          </button>
        ) : (
          <div className="w-full max-w-lg flex items-center justify-center gap-2 text-[#999] text-sm mt-6 py-4">
            <div className="w-4 h-4 border-2 border-[#00C853]/40 border-t-[#00C853] rounded-full animate-spin" />
            Assista o vídeo até o final para liberar
          </div>
        )}
        <div className="flex items-center gap-4 mt-4 text-xs text-[#aaa]">
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
