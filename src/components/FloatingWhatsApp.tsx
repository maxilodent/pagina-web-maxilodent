import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group flex items-center gap-2">
      {/* Tooltip */}
      <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-3.5 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E4ECEC] text-[#243638] text-xs font-semibold shadow-lg">
        Escríbenos por WhatsApp
      </div>

      {/* Pulse ring button with orange accent #CA5B30 / #126F72 */}
      <a
        aria-label="Escríbenos por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#126F72] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(18,111,114,0.35)] hover:scale-110 active:scale-95 transition-transform duration-200"
        href="https://wa.me/573135249123?text=Hola%20Maxilodent,%20soy%20odont%C3%B3logo%20y%20deseo%20informaci%C3%B3n"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="absolute inset-0 rounded-full bg-[#188C8E] animate-ping opacity-30" />
        <span className="material-symbols-outlined text-[32px] relative z-10 font-bold">chat</span>
      </a>
    </div>
  );
};
