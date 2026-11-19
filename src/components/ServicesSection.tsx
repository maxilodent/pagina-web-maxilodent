import React from 'react';
import { ServiceDetail } from './ServiceDetailModal';

export const SERVICES_DATA: ServiceDetail[] = [
  { id: 'cone-beam-3d', title: 'Tomografía Cone Beam 3D', category: 'Tomografía', icon: 'view_in_ar', description: 'Estudio tomográfico Cone Beam en 3D.', image: `${import.meta.env.BASE_URL}assets/services/cone-beam-3d.jpeg`, imageAlt: 'Imagen de un estudio de tomografía Cone Beam 3D.' },
  { id: 'panoramica', title: 'Radiografía panorámica', category: 'Radiografía extraoral', icon: 'panorama', description: 'Imagen radiográfica panorámica de la región maxilofacial.', image: `${import.meta.env.BASE_URL}assets/services/panoramica.jpeg`, imageAlt: 'Imagen de radiografía panorámica.' },
  { id: 'perfil', title: 'Radiografía de perfil', category: 'Radiografía extraoral', icon: 'face', description: 'Radiografía extraoral de perfil.', image: `${import.meta.env.BASE_URL}assets/services/perfil.jpeg`, imageAlt: 'Imagen de radiografía de perfil.' },
  { id: 'atm', title: 'Radiografía de ATM', category: 'Radiografía extraoral', icon: 'sensors', description: 'Estudio radiográfico de la articulación temporomandibular (ATM).', image: `${import.meta.env.BASE_URL}assets/services/atm.jpeg`, imageAlt: 'Imagen de radiografía de ATM.' },
  { id: 'senos-paranasales', title: 'Radiografía de senos paranasales', category: 'Radiografía extraoral', icon: 'air', description: 'Radiografía extraoral de los senos paranasales.', image: `${import.meta.env.BASE_URL}assets/services/senos-paranasales.jpg`, imageAlt: 'Imagen de radiografía de senos paranasales.' },
  { id: 'craneo-ap', title: 'Radiografía de cráneo AP', category: 'Radiografía extraoral', icon: 'patient_list', description: 'Radiografía de cráneo en proyección AP.', image: `${import.meta.env.BASE_URL}assets/services/craneo-ap.jpeg`, imageAlt: 'Imagen de radiografía de cráneo en proyección AP.' },
  { id: 'craneo-pa', title: 'Radiografía de cráneo PA', category: 'Radiografía extraoral', icon: 'clinical_notes', description: 'Radiografía de cráneo en proyección PA.', image: `${import.meta.env.BASE_URL}assets/services/craneo-pa.jpg`, imageAlt: 'Imagen de radiografía de cráneo en proyección PA.' },
  { id: 'carpograma', title: 'Carpograma', category: 'Radiografía extraoral', icon: 'back_hand', description: 'Estudio radiográfico de carpograma.', image: `${import.meta.env.BASE_URL}assets/services/carpograma.jpeg`, imageAlt: 'Imagen de radiografía de carpograma.' },
  { id: 'periapical', title: 'Radiografía periapical', category: 'Radiografía intraoral', icon: 'dentistry', description: 'Radiografía intraoral periapical.', image: `${import.meta.env.BASE_URL}assets/services/periapical.jpg`, imageAlt: 'Imagen de radiografía intraoral periapical.' },
  { id: 'oclusal', title: 'Radiografía oclusal', category: 'Radiografía intraoral', icon: 'grid_view', description: 'Radiografía intraoral oclusal.', image: `${import.meta.env.BASE_URL}assets/services/oclusal.webp`, imageAlt: 'Imagen de radiografía oclusal.' },
  { id: 'coronal', title: 'Radiografía coronal', category: 'Radiografía intraoral', icon: 'view_column', description: 'Radiografía intraoral coronal.', image: `${import.meta.env.BASE_URL}assets/services/coronal.jpg`, imageAlt: 'Imagen de radiografía coronal.' },
  { id: 'cefalometrico', title: 'Análisis cefalométrico computarizado', category: 'Análisis', icon: 'straighten', description: 'Análisis cefalométrico computarizado.', image: `${import.meta.env.BASE_URL}assets/services/cefalometrico.jpg`, imageAlt: 'Imagen de análisis cefalométrico.' },
  { id: 'modelos-estudio', title: 'Modelos de estudio', category: 'Modelos', icon: 'model_training', description: 'Modelos de estudio.', image: `${import.meta.env.BASE_URL}assets/services/modelos.jpg`, imageAlt: 'Modelos dentales de estudio y trabajo.' },
  { id: 'modelos-trabajo', title: 'Modelos de trabajo', category: 'Modelos', icon: 'architecture', description: 'Modelos de trabajo.', image: `${import.meta.env.BASE_URL}assets/services/modelos.jpg`, imageAlt: 'Modelos dentales de estudio y trabajo.' },
  { id: 'modelos-virtuales', title: 'Modelos virtuales', category: 'Modelos', icon: 'deployed_code', description: 'Modelos virtuales.', image: `${import.meta.env.BASE_URL}assets/services/scanner-intraoral.png`, imageAlt: 'Modelo dental digital obtenido con escáner intraoral.' },
  { id: 'estudios-virtuales', title: 'Estudios virtuales', category: 'Estudios', icon: 'web_asset', description: 'Estudios que se pueden enviar de forma virtual.' },
  { id: 'paquete-ortodoncia', title: 'Paquete de diagnóstico de ortodoncia', category: 'Paquete diagnóstico', icon: 'folder_special', description: 'Paquete de diagnóstico con estudios como radiografías panorámica y de perfil.' },
  { id: 'scanner-intraoral', title: 'Scanner intraoral', category: 'Escaneo', icon: 'qr_code_scanner', description: 'Escaneo intraoral.', image: `${import.meta.env.BASE_URL}assets/services/scanner-intraoral.png`, imageAlt: 'Vista de un modelo dental digital obtenido con escáner intraoral.' },
];

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail, animate: boolean) => void;
  onRemitWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRemitWithService,
}) => (
  <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16" id="servicios">
    <div className="mb-9 max-w-3xl">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638]">
        Servicios diagnósticos
      </h2>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5A7173]">
        Consulta los estudios y servicios disponibles en Maxilodent.
      </p>
    </div>

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      {SERVICES_DATA.map((service) => (
        <li key={service.id}>
          <article className="h-full flex flex-col rounded-2xl bg-white border border-[#E4ECEC] p-5 sm:p-6 transition-colors hover:border-[#84BAB9]">
            {service.image && (
              <div className="mb-5 aspect-[16/9] overflow-hidden rounded-xl bg-[#F0F6F5]">
                <img
                  src={service.image}
                  alt={service.imageAlt ?? ''}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex min-h-10 items-center rounded-full bg-[#F0F6F5] px-3 text-[11px] font-semibold tracking-wide text-[#126F72]">
                {service.category}
              </span>
              <span aria-hidden="true" className="material-symbols-outlined text-2xl text-[#188C8E]">
                {service.icon}
              </span>
            </div>

            <h3 className="mt-5 font-display text-lg font-bold leading-snug text-[#243638]">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A7173]">
              {service.description}
            </p>

            <div className="mt-5 flex flex-col gap-2 border-t border-[#E4ECEC] pt-4">
              <a
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#126F72] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0E5B5E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
                href={`https://wa.me/573135249123?text=${encodeURIComponent(`Hola Maxilodent, deseo información sobre ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
                <span>Consultar servicio</span>
              </a>
              <button
                type="button"
                onClick={() => onRemitWithService(service.title)}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#D5E3E2] px-4 py-2 text-sm font-semibold text-[#126F72] transition-colors hover:bg-[#F0F6F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">edit_note</span>
                <span>Incluir en orden virtual</span>
              </button>
              <button
                type="button"
                onClick={(event) => onSelectService(service, event.detail > 0)}
                className="self-start py-1 text-sm font-semibold text-[#126F72] underline underline-offset-4 hover:text-[#0E5B5E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
              >
                Ver descripción
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
