import React from 'react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: 'history_edu',
      title: 'Desde 2008',
      desc: 'Confianza diagnóstica en Valledupar',
    },
    {
      icon: 'schedule',
      title: 'Cone Beam en 24 horas',
      desc: 'Tiempos récord con informe clínico',
    },
    {
      icon: 'bolt',
      title: 'Otros estudios',
      desc: 'Entrega inmediata para tu consulta',
    },
    {
      icon: 'cloud_sync',
      title: 'Resultados en la app',
      desc: 'Visor DICOM y STL 24/7 en línea',
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-6 border-y border-[#E4ECEC]">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] hover:border-[#84BAB9] hover:bg-[#FFFFFF] transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#84BAB9]/20 flex items-center justify-center shrink-0 text-[#188C8E]">
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm sm:text-base font-bold text-[#243638]">
                  {item.title}
                </span>
                <span className="text-xs text-[#5A7173]">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
