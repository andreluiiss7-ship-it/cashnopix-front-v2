import BalancePill from "./BalancePill";

export default function Header({ balance }) {
  return (
    <header className="w-full bg-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#00C853] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95.49-7.4-2.11-8.27-5.52h2.1c.73 2.23 2.84 3.85 5.34 3.85.44 0 .87-.05 1.28-.15l-.45 1.82zm.53-4.93H10.5c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1v-1h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h.73L9.4 7.53l1.73-.73L12.4 10h1.2l1.27-3.2 1.73.73-1.33 3.47h.73c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-1v1h1c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5zm5.37-1.59h-2.1c-.73-2.23-2.84-3.85-5.34-3.85-.44 0-.87.05-1.28.15l.45-1.82c3.95-.49 7.4 2.11 8.27 5.52z"
              fill="white"
            />
          </svg>
        </div>
        <span className="text-lg font-bold tracking-tight">
          Cash<span className="text-[#00C853]">No</span>
          <span className="text-[#1a1a2e]">Pix</span>
        </span>
      </div>
      <BalancePill balance={balance} />
    </header>
  );
}
