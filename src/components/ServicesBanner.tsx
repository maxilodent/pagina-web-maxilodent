import React from 'react';
import { OFFICIAL_WHATSAPP_URL } from '../constants';

const message = 'Hola Maxilodent, quiero información sobre los servicios de diagnóstico por imágenes.';

export const ServicesBanner: React.FC = () => (
  <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-4 lg:py-8" aria-labelledby="services-banner-title">
    <div className="grid overflow-hidden rounded-3xl bg-[#EAF2F1] lg:grid-cols-12">
      <div className="min-h-56 overflow-hidden sm:min-h-72 lg:col-span-5">
        <img
          src={`${import.meta.env.BASE_URL}assets/services/cone-beam-3d.jpeg`}
          alt="Reconstrucción tomográfica Cone Beam 3D con vistas dentales y maxilofaciales"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-5 p-6 sm:p-9 lg:col-span-7 lg:p-12">
        <h2 id="services-banner-title" className="max-w-xl font-display text-2xl font-bold leading-tight text-[#243638] sm:text-3xl lg:text-4xl">
          Servicios de radiología oral y maxilofacial
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-[#42595A] sm:text-base">
          Tomografía Cone Beam 3D, radiografías extra e intraorales, análisis cefalométrico, modelos y scanner intraoral para odontólogos y pacientes.
        </p>
        <a
          href={`${OFFICIAL_WHATSAPP_URL}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#126F72] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0E5B5E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72] active:bg-[#0B4D50]"
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">chat</span>
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);
