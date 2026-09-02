import BalancePill from "./BalancePill";

export default function Header({ balance }) {
  return (
    <header className="w-full bg-white px-4 py-3 flex items-center justify-between">
      <span className="text-lg font-bold tracking-tight">
        Cash<span className="text-[#00C853]">No</span>
        <span className="text-[#1a1a2e]">Pix</span>
      </span>
      <BalancePill balance={balance} />
    </header>
  );
}
