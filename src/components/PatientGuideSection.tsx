import React from 'react';

interface PatientGuideSectionProps {
  onOpenPortal: () => void;
  onOpenOrder: () => void;
}

export const PatientGuideSection: React.FC<PatientGuideSectionProps> = ({
  onOpenPortal,
}) => {
  return (
    <section className="w-full bg-[#FFFFFF] py-14 border-y border-[#E4ECEC] animate-fadeIn">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#CA5B30] font-bold">
            Guía para el Paciente
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#243638] mt-2">
            Todo lo que necesitas saber antes de tu cita
          </h2>
          <p className="text-sm text-[#5A7173] mt-2">
            En Maxilodent te atendemos de forma ágil, cómoda y con equipos de mínima radiación en Valledupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#F6F8F8] border border-[#E4ECEC] flex flex-col justify-between hover:border-[#188C8E] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">accessibility_new</span>
              </div>
              <h3 className="font-bold text-base text-[#243638] mb-2">Preparación sencilla</h3>
              <p className="text-xs text-[#5A7173] leading-relaxed">
                No requieres ayuno. Solo debes retirar objetos metálicos antes del examen (aretes, cadenas, piercings, prótesis removibles o gafas).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E4ECEC] text-xs text-[#188C8E] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">check</span>
              <span>Toma en menos de 10 minutos</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#F6F8F8] border border-[#E4ECEC] flex flex-col justify-between hover:border-[#188C8E] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#CA5B30]/15 text-[#CA5B30] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </div>
              <h3 className="font-bold text-base text-[#243638] mb-2">Máxima Bioseguridad</h3>
              <p className="text-xs text-[#5A7173] leading-relaxed">
                Nuestros equipos digitales KaVo cuentan con tecnología de haz cónico que reduce hasta un 85% la radiación comparada con tomografías médicas convencionales.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E4ECEC] text-xs text-[#CA5B30] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Seguro para niños y adultos</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#F6F8F8] border border-[#E4ECEC] flex flex-col justify-between hover:border-[#188C8E] transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">cloud_download</span>
              </div>
              <h3 className="font-bold text-base text-[#243638] mb-2">Tus resultados en línea</h3>
              <p className="text-xs text-[#5A7173] leading-relaxed">
                No tienes que volver a reclamar placas físicas. Ingresa a "Mis Radiografías" con tu número de documento y descárgalas para tu odontólogo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E4ECEC]">
              <a
                href="https://sistema.maxilodentrx.com/accounts/login/?next=/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">search</span>
                <span>Buscar mis resultados en Mis Radiografías</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
