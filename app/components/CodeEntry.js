import { formatBRL } from "./BalancePill";

export default function CodeEntry({ product, codeInputs, inputRefs, onInput }) {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md">
      <div className="flex items-center gap-2 text-[#00C853] font-semibold text-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        PREENCHA O CÓDIGO PARA RECEBER O VALOR!
      </div>
      <div className="bg-[#f0f4e8] rounded-2xl p-6 w-full flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#666]">Valor:</span>
          <span className="bg-[#00C853] text-white text-xs font-bold px-3 py-1 rounded">{formatBRL(product.value)}</span>
        </div>
        <p className="text-xs font-bold tracking-widest text-[#333] uppercase">CÓDIGO</p>
        <div className="flex items-center gap-6">
          {product.code.map((c, i) => (
            <span key={i} className="text-4xl font-black text-[#1a1a2e]">
              {c}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm text-[#999]">Confirme o código acima para receber o valor</p>
      <div className="flex items-center gap-3">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            type="text"
            maxLength={1}
            value={codeInputs[i]}
            onChange={(e) => onInput(i, e.target.value)}
            className="w-14 h-14 border-2 border-[#ddd] rounded-lg text-center text-2xl font-bold text-[#1a1a2e] uppercase focus:border-[#00C853] focus:outline-none transition-colors bg-white"
          />
        ))}
      </div>
    </div>
  );
}
