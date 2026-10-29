import React from 'react';

interface CtaBannerProps {
  onRemitClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRemitClick }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16">
      <div className="relative rounded-2xl bg-gradient-to-r from-[#126F72] via-[#157F82] to-[#188C8E] p-8 sm:p-12 overflow-hidden shadow-[0_16px_40px_rgba(18,111,114,0.2)]">
        {/* Subtle glow circles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#CA5B30]/25 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#84BAB9]/30 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#E4ECEC] font-bold flex items-center justify-center lg:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#CA5B30]" />
              <span>Diagnóstico Digital Inmediato</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Remite a tu próximo paciente hoy
            </h2>
            <p className="text-sm sm:text-base text-[#E4ECEC] leading-relaxed">
              Sin papeleos y con la mayor nitidez diagnóstica de Valledupar. Recibe tus estudios con lectura radiológica en 24 horas directamente en tu pantalla.
            </p>
          </div>

          <button
            onClick={onRemitClick}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#CA5B30] text-white font-display text-base font-bold shadow-[0_4px_20px_rgba(202,91,48,0.4)] hover:bg-[#B44E27] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
          >
            <span className="material-symbols-outlined text-[24px]">chat</span>
            <span>Remitir un paciente</span>
          </button>
        </div>
      </div>
    </section>
  );
};
