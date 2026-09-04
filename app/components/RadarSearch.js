export default function RadarSearch({ searchText, couponFound }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {!couponFound && <p className="text-xs text-[#aaa]">Começando...</p>}
      <h2 className="text-xl font-bold text-[#1a1a2e]">{couponFound ? "" : searchText}</h2>
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-[#00C853]/30 animate-radar-ring" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-[#00C853]/20 animate-radar-ring-delay" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-[#00C853]/15 animate-radar-ring-delay2" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 animate-radar-sweep" style={{ transformOrigin: "center" }}>
            <div className="w-1/2 h-0.5 bg-gradient-to-r from-[#00C853] to-transparent absolute top-1/2 left-1/2" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#00C853]/10 border-2 border-[#00C853]/40 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00C853] animate-float-1" />
        <div className="absolute bottom-8 left-6 w-2.5 h-2.5 rounded-full bg-[#00C853] animate-float-2" />
        <div className="absolute bottom-10 right-6 w-2 h-2 rounded-full bg-[#00C853] animate-float-3" />
        <div className="absolute top-1/3 right-3 w-2.5 h-2.5 rounded-full bg-[#00C853] animate-float-4" />
      </div>
      {couponFound && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#0E7C3C] font-semibold flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Cupom encontrado!
          </p>
          <div className="w-40 h-1.5 bg-[#00C853] rounded-full" />
        </div>
      )}
    </div>
  );
}
