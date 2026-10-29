import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿En cuánto tiempo recibo una tomografía?',
      a: 'En 24 horas hábiles. Incluye reconstrucción tridimensional, cortes multiplanares (axial, coronal, sagital) y lectura diagnóstica firmada por odontólogo especialista en radiología oral.',
    },
    {
      q: '¿Y los demás estudios?',
      a: 'Se entregan de inmediato. Las radiografías panorámicas, cefalométricas con trazado digital, periapicales y escaneos intraorales se cargan en la plataforma el mismo día de la toma.',
    },
    {
      q: '¿Cómo veo los resultados de mis pacientes?',
      a: 'Ingresa al botón "Mis Radiografías" con el número de documento del paciente o tu código de clínica adscrita para acceder al visor DICOM web interactivo sin instalar ningún programa.',
    },
    {
      q: '¿Cómo obtengo mi acceso como odontólogo o clínica?',
      a: 'Escríbenos directamente por WhatsApp y nuestro equipo de soporte médico te vinculará en minutos para que tus pacientes tengan remisión preferencial.',
    },
    {
      q: '¿Qué software es compatible con los archivos 3D?',
      a: 'Nuestros archivos DICOM estándar y modelos STL son 100% compatibles con los principales softwares del mercado: Nemotec, Exocad, Dolphin Imaging, 3Shape, Blue Sky Bio y sistemas de implantología guiada.',
    },
    {
      q: '¿Qué preparación requiere el paciente antes de la toma?',
      a: 'No requiere ayuno ni medicamentos previos. Únicamente se solicita retirar elementos metálicos en cabeza y cuello (aretes, piercings, cadenas, prótesis removibles y gafas) antes de ingresar al gabinete.',
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 border-t border-[#E4ECEC]" id="preguntas-frecuentes">
      <div className="w-full max-w-[860px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#CA5B30] font-bold">
            Respuestas Directas
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638] mt-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#5A7173] mt-2">
            Todo lo que necesitas saber como odontólogo o clínica aliada.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left gap-4 cursor-pointer hover:bg-[#FFFFFF] transition-colors"
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-[#243638]">
                    {faq.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#188C8E] text-[22px] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-[#5A7173] text-xs sm:text-sm leading-relaxed border-t border-[#E4ECEC] pt-3 bg-[#FFFFFF]">
                    <p>{faq.a}</p>
                    {idx === 2 && (
                      <div className="mt-3">
                        <a
                          href="https://sistema.maxilodentrx.com/accounts/login/?next=/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#126F72] text-white font-bold text-xs hover:bg-[#0E5B5E] transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                          <span>Abrir sistema.maxilodentrx.com</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ WhatsApp Fallback */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="text-xs sm:text-sm text-[#5A7173]">
            ¿Tienes otra inquietud para tu clínica?
          </span>
          <a
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#188C8E] hover:underline"
            href="https://wa.me/573135249123?text=Hola%20Maxilodent,%20tengo%20una%20pregunta%20cl%C3%ADnica"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Tengo otra pregunta</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
