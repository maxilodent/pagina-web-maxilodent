import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      stars: 5,
      quote:
        'La nitidez de los cortes Cone Beam y la precisión de la lectura radiológica nos dan absoluta seguridad al planear implantes y cirugías complejas en Valledupar.',
      name: 'Dr. Hernán Silva • Valledupar',
      specialty: 'Especialista en Implantología y Periodoncia',
    },
    {
      stars: 5,
      quote:
        'La entrega en 24 horas para tomografías y los resultados inmediatos de panorámicas me permiten optimizar el plan de tratamiento sin hacer esperar al paciente.',
      name: 'Dra. Carolina Maestre • Valledupar',
      specialty: 'Especialista en Ortodoncia y Ortopedia Maxilar',
    },
    {
      stars: 5,
      quote:
        'El visor web de Mis Radiografías es sumamente práctico. Abrir los volúmenes 3D y compartirlos con el paciente en la consulta sin instalar software pesado marca la diferencia.',
      name: 'Dr. Roberto Dangond • Valledupar',
      specialty: 'Cirugía Oral y Maxilofacial',
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-[#CA5B30] font-bold">
          Respaldo Profesional
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638] mt-2">
          Lo que dicen los odontólogos
        </h2>
        <p className="text-sm sm:text-base text-[#5A7173] mt-2">
          La opinión de los especialistas que confían diariamente el diagnóstico de sus pacientes en Maxilodent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4ECEC] flex flex-col justify-between shadow-xs hover:border-[#188C8E] hover:shadow-md transition-all"
          >
            <div>
              {/* Stars in orange accent #CA5B30 */}
              <div className="flex items-center gap-1 text-[#CA5B30] mb-4">
                {[...Array(item.stars)].map((_, sIdx) => (
                  <span
                    key={sIdx}
                    className="material-symbols-outlined text-[20px] fill"
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#5A7173] italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#E4ECEC]">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F4] flex items-center justify-center text-[#188C8E] shrink-0">
                <span className="material-symbols-outlined text-[22px]">person</span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#243638]">{item.name}</div>
                <div className="text-[11px] text-[#188C8E] font-medium">{item.specialty}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
