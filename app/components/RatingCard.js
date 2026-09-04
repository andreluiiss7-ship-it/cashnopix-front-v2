import Image from "next/image";

export default function RatingCard({ product, onEvaluate }) {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md">
      <h2 className="text-lg font-bold text-[#1a1a2e] text-center">
        Receba seu cashback em forma
        <br />
        de PIX na sua conta!
      </h2>
      <div className="w-full rounded-2xl overflow-hidden relative" style={{ backgroundColor: product.brandColor }}>
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white text-xs font-bold px-3 py-1 rounded text-[#333]">{product.brand}</span>
        </div>
        <div className="relative w-full aspect-video bg-white/90 mt-8">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-contain p-4"
          />
        </div>
      </div>
      <p className="text-[#666] text-sm">O que você achou do produto?</p>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-[#1a1a2e]">{product.name}</h3>
        <span className="bg-[#3d5a80] text-white text-xs font-semibold px-3 py-1 rounded-full">{product.brand}</span>
      </div>
      <div className="w-full flex flex-col gap-3">
        <button onClick={onEvaluate} className="w-full bg-[#00C853] hover:bg-[#00b848] text-white font-bold text-base py-3.5 rounded-xl transition-all cursor-pointer">
          Eu gostei
        </button>
        <button onClick={onEvaluate} className="w-full bg-[#e8e8e8] hover:bg-[#ddd] text-[#333] font-bold text-base py-3.5 rounded-xl transition-all cursor-pointer">
          Eu não gostei
        </button>
        <button onClick={onEvaluate} className="w-full bg-[#EF4444] hover:bg-[#dc2626] text-white font-bold text-base py-3.5 rounded-xl transition-all cursor-pointer">
          Nunca compraria
        </button>
      </div>
    </div>
  );
}
