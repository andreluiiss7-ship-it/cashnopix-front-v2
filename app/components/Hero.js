"use client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-20 px-4">
      <div className="max-w-[700px] mx-auto flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-5 py-2">
          <span className="text-primary text-sm">✓</span>
          <span className="text-xs font-semibold tracking-widest text-secondary-foreground uppercase">APP OFICIAL AUTORIZADO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
          Avalie Produtos e Ganhe <span className="text-primary">Cashback no PIX</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-[600px] leading-relaxed">
          O CashNoPix é o aplicativo de cash no pix que conecta consumidores a marcas parceiras. Você avalia produtos, acumula saldo e saca direto via PIX — sem
          necessidade de instalar nada no celular.
        </p>
        <div className="border-2 border-primary/30 bg-secondary/50 rounded-2xl px-8 py-5 flex items-center gap-4">
          <span className="text-3xl">🎁</span>
          <div className="text-left">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">BÔNUS DE BOAS-VINDAS</p>
            <p className="text-2xl font-bold text-primary">R$ 50,00</p>
            <p className="text-sm text-muted-foreground">para você começar hoje</p>
          </div>
        </div>
        <button
          onClick={() => router.push("/ativar")}
          className="w-full max-w-[500px] bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span id="hero-cta">Ativar App + R$ 50 de Bônus</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
        <div className="bg-red-50 border border-red-200 rounded-full px-5 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          <span className="text-sm text-red-600 font-medium">Apenas 3 licenças promocionais restantes na sua região.</span>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Saque Seguro
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Acesso Imediato
          </div>
        </div>
      </div>
    </section>
  );
}
