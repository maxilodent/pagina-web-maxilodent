import React from 'react';

interface HowToRemitProps {
  onFillOrderClick: () => void;
  onOpenPortalClick: () => void;
}

export const HowToRemit: React.FC<HowToRemitProps> = ({
  onFillOrderClick,
  onOpenPortalClick,
}) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 border-t border-[#E4ECEC]" id="como-remitir">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#CA5B30] font-bold">
            Flujo Clínico Ágil
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638] mt-2">
            Cómo remitir a tu paciente
          </h2>
          <p className="text-sm sm:text-base text-[#5A7173] mt-2">
            Diseñado para que tu equipo ahorre tiempo y tus pacientes reciban atención preferencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div
            onClick={onFillOrderClick}
            className="cursor-pointer relative p-6 sm:p-8 rounded-2xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#188C8E] hover:bg-[#FFFFFF] hover:shadow-md transition-all group"
          >
            <div className="font-display text-5xl font-black text-[#84BAB9]/30 leading-none mb-4 group-hover:text-[#188C8E]/50 transition-colors">
              01
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#243638] mb-2">
              Llena la orden virtual
            </h3>
            <p className="text-xs sm:text-sm text-[#5A7173] leading-relaxed">
              Diligencia la orden médica en 2 minutos desde este portal y envíala directa por WhatsApp o correo.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-[#188C8E] text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">touch_app</span>
              <span>Sin formatos de papel</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#188C8E] hover:bg-[#FFFFFF] hover:shadow-md transition-all">
            <div className="font-display text-5xl font-black text-[#84BAB9]/30 leading-none mb-4">
              02
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#243638] mb-2">
              Atendemos a tu paciente
            </h3>
            <p className="text-xs sm:text-sm text-[#5A7173] leading-relaxed">
              Atención profesional sin demoras en nuestra sede Valledupar, con mínimo tiempo en sala y máxima bioseguridad.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-[#188C8E] text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">speed</span>
              <span>Toma rápida en 10 min</span>
            </div>
          </div>

          {/* Step 3 */}
          <a
            href="https://sistema.maxilodentrx.com/accounts/login/?next=/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer relative p-6 sm:p-8 rounded-2xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#188C8E] hover:bg-[#FFFFFF] hover:shadow-md transition-all group block"
          >
            <div className="font-display text-5xl font-black text-[#84BAB9]/30 leading-none mb-4 group-hover:text-[#188C8E]/50 transition-colors">
              03
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#243638] mb-2">
              Ves el resultado en la app Mis Radiografías
            </h3>
            <p className="text-xs sm:text-sm text-[#5A7173] leading-relaxed">
              Descarga en línea inmediata para ti y tu clínica: DICOM completo, visores 3D y reportes radiológicos.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-[#188C8E] text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">devices</span>
              <span>Acceso web y móvil seguro (sistema.maxilodentrx.com)</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
