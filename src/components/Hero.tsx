import React from 'react';
import { UserAudience } from '../types';

interface HeroProps {
  audience: UserAudience;
  onOpenPortal: () => void;
  onRemitClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  audience,
  onOpenPortal,
  onRemitClick,
}) => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 lg:px-8 pt-8 lg:pt-12 pb-16 overflow-hidden">
      {/* Ambient subtle brand and orange aura */}
      <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#84BAB9]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[360px] h-[360px] bg-[#CA5B30]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Primary CTAs (Col 1-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E4ECEC] shadow-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-[#CA5B30] animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-[#188C8E] font-bold">
              {audience === 'doctor'
                ? 'Portal Exclusivo Odontólogos & Clínicas'
                : 'Centro de Diagnóstico para Pacientes • Valledupar'}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#243638] tracking-tight leading-[1.12]">
            Tomografía <span className="text-[#188C8E] font-extrabold">Cone Beam</span> en 24 horas y tus resultados en tu pantalla
          </h1>

          <p className="text-base sm:text-lg text-[#5A7173] max-w-2xl leading-relaxed">
            {audience === 'doctor'
              ? 'Imágenes dentales con calidad para odontólogos y clínicas en Valledupar. Desde 2008.'
              : 'Estudios radiográficos y tomográficos de máxima nitidez con mínima radiación. Recibe tus resultados directamente en tu celular o descárgalos con tu documento.'}
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onRemitClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#126F72] text-white font-display text-sm sm:text-base font-bold shadow-[0_4px_16px_rgba(18,111,114,0.25)] hover:bg-[#0E5B5E] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
              <span>{audience === 'doctor' ? 'Remitir un paciente' : 'Diligenciar mi remisión'}</span>
            </button>

            <a
              href="https://sistema.maxilodentrx.com/accounts/login/?next=/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#188C8E] text-[#126F72] hover:bg-[#188C8E]/10 font-display text-sm sm:text-base font-semibold transition-all duration-200 bg-[#FFFFFF]"
            >
              <span className="material-symbols-outlined text-[22px] text-[#188C8E]">visibility</span>
              <span>Ingresar a Mis Radiografías</span>
            </a>
          </div>

          {/* Micro stats footer in hero */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E4ECEC] max-w-xl">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#188C8E]">16+</div>
              <div className="text-[11px] sm:text-xs text-[#5A7173] uppercase tracking-wide">Años de Trayectoria</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#CA5B30]">24h</div>
              <div className="text-[11px] sm:text-xs text-[#5A7173] uppercase tracking-wide">Entrega CBCT 3D</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#243638]">100%</div>
              <div className="text-[11px] sm:text-xs text-[#5A7173] uppercase tracking-wide">Digital en la Nube</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual (Col 8-12) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl p-2 bg-[#FFFFFF] border border-[#E4ECEC] shadow-[0_12px_32px_-4px_rgba(36,54,56,0.1)]">
            <div className="relative rounded-xl overflow-hidden bg-[#F0F4F4]">
              <img
                className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                alt="Toma tomográfica y radiológica con paciente en Maxilodent Valledupar"
                src={`${import.meta.env.BASE_URL}assets/aistudio/2_034ad018.jpeg`}
              />
              
              {/* Radiologist Verification Chip */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E4ECEC] shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#188C8E] text-[24px]">verified</span>
                  <div>
                    <div className="text-xs font-bold text-[#243638]">Lectura Radiológica Especializada</div>
                    <div className="text-[11px] text-[#5A7173]">Doble revisión diagnóstica certificada</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#84BAB9]/20 text-[#126F72] text-[11px] font-bold">
                  CBCT OP300
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
