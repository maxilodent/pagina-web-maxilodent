import React from 'react';

export const TechnologySection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 border-t border-[#E4ECEC]" id="tecnologia">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Image with Clinical Frame (Col 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl p-2 bg-[#F6F8F8] border border-[#E4ECEC] shadow-md">
              <div className="relative rounded-xl overflow-hidden bg-[#243638]">
                <img
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top"
                  alt="Especialista radióloga evaluando reconstrucción tomográfica 3D en pantalla y dispositivo móvil en Maxilodent Valledupar"
                  src={`${import.meta.env.BASE_URL}assets/aistudio/PHOTO-2026-06-24-19-32-28_47f176f3.jpg`}
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E4ECEC] text-[#188C8E] text-xs font-bold flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#CA5B30]" />
                  <span>Resolución Submilimétrica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details (Col 7-12) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#CA5B30] font-bold">
              Equipamiento Diagnóstico
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638]">
              Tecnología digital de última generación
            </h2>
            <p className="text-sm sm:text-base text-[#5A7173] leading-relaxed">
              Garantizamos la máxima precisión anatómica con dosis de radiación ultra-reducidas mediante tecnología Cone Beam de haz cónico volumétrico. Imágenes nítidas para reconstrucción 3D y mediciones cefalométricas sin distorsión.
            </p>

            {/* 3 Tech Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#188C8E] transition-colors">
                <span className="material-symbols-outlined text-[#188C8E] text-[24px] mb-1">
                  precision_manufacturing
                </span>
                <div className="text-xs font-bold text-[#243638]">Orthophantomógrafo OP300</div>
                <div className="text-[11px] text-[#5A7173]">Estándar de oro mundial</div>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#188C8E] transition-colors">
                <span className="material-symbols-outlined text-[#188C8E] text-[24px] mb-1">
                  preview
                </span>
                <div className="text-xs font-bold text-[#243638]">Clinic View</div>
                <div className="text-[11px] text-[#5A7173]">Filtros de contraste HD</div>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#188C8E] transition-colors">
                <span className="material-symbols-outlined text-[#188C8E] text-[24px] mb-1">
                  view_in_ar
                </span>
                <div className="text-xs font-bold text-[#243638]">Anatomage IN VIVO</div>
                <div className="text-[11px] text-[#5A7173]">Modelado 3D quirúrgico</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#5A7173] text-xs pt-2">
              <span className="material-symbols-outlined text-[#188C8E] text-[20px] shrink-0">
                check_circle
              </span>
              <span>Archivos 100% compatibles con software Nemotec, Exocad, Dolphin e implantología guiada.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
