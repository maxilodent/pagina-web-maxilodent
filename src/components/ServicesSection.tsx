import React from 'react';
import { ServiceDetail } from './ServiceDetailModal';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'cbct-3d',
    title: 'Tomografía Cone Beam 3D',
    subtitle: 'CBCT de alta resolución volumétrica',
    icon: 'view_in_ar',
    turnaroundTime: '24 horas con informe especializado',
    description: 'Tomografía de haz cónico volumétrico con mínima dosis de radiación y cortes axiales continuos sin distorsión. Ideal para implantología guiada, endodoncia compleja, cirugía ortognática y valoración de ATM.',
    indications: [
      'Planeación de implantes y evaluación de densidad ósea',
      'Localización de dientes retenidos (caninos, cordales)',
      'Relación de ápices con el conducto dentario inferior y seno maxilar',
      'Diagnóstico de patologías quísticas y fracturas alveolares',
    ],
    formats: ['DICOM estándar', 'Reconstrucción 3D STL', 'Informe PDF con lectura radiológica'],
    fovOrSpecs: 'Campos de visión (FOV): 5x5, 8x8, 8x15 y 13x15 cm • Vóxel desde 85 µm',
  },
  {
    id: 'panoramica-cefalo',
    title: 'Panorámica y cefalométrica',
    subtitle: 'Ortopantomografía y telerradiografía lateral',
    icon: 'panorama',
    turnaroundTime: 'Entrega inmediata en consulta',
    description: 'Visión completa y continua de ambos maxilares, senos maxilares y articulaciones temporomandibulares en una sola exposición nítida y calibrada.',
    indications: [
      'Diagnóstico general y cribado odontológico inicial',
      'Análisis cefalométrico digital (Steiner, Ricketts, McNamara)',
      'Control de erupción dental y cronología dentaria',
      'Evaluación ortodóntica previa al inicio del tratamiento',
    ],
    formats: ['JPEG HD', 'TIFF sin compresión', 'Trazado cefalométrico digital PDF'],
    fovOrSpecs: 'Sensor CMOS de alta sensibilidad con tecnología ClinicView',
  },
  {
    id: 'intraorales',
    title: 'Radiografías intraorales',
    subtitle: 'Periapical, coronal y oclusal digital',
    icon: 'grid_view',
    turnaroundTime: 'Entrega inmediata',
    description: 'Tomas radiográficas de alta definición con colimador rectangular para evaluar con exactitud la cresta ósea alveolar, coronas, cámaras pulpares y ápices dentales.',
    indications: [
      'Detección precoz de caries interproximales (Bite Wing)',
      'Seguimiento endodóntico y conductometría',
      'Evaluación periodontal y pérdida ósea vertical/horizontal',
      'Dientes supernumerarios y odontomas retenidos',
    ],
    formats: ['Digital inmediata por correo y WhatsApp', 'Visualización en la nube'],
    fovOrSpecs: 'Sensores intraorales número 1 y 2 con posicionadores Rinn',
  },
  {
    id: 'escaner-intraoral',
    title: 'Escáner intraoral',
    subtitle: 'Modelos digitales 3D STL/PLY',
    icon: 'qr_code_scanner',
    turnaroundTime: 'Descarga en la nube el mismo día',
    description: 'Impresión digital óptica sin cubetas ni masas de alginato. Captura de alta precisión del arco superior, inferior y registro de mordida en oclusión céntrica.',
    indications: [
      'Alineadores invisibles y ortodoncia digital',
      'Diseño de sonrisa y mock-up virtual',
      'Coronas, puentes y carillas en flujo CAD/CAM',
      'Archivos STL para impresión 3D de modelos de trabajo',
    ],
    formats: ['STL abierto', 'PLY a color', 'OBJ compatible con Exocad y 3Shape'],
    fovOrSpecs: 'Escaneo óptico continuo sin polvo ni distorsiones térmicas',
  },
  {
    id: 'estudios-implantes',
    title: 'Estudios virtuales e implantes',
    subtitle: 'Simulación protésica y quirúrgica',
    icon: 'biotech',
    turnaroundTime: '24 a 48 horas',
    description: 'Integración del archivo tomográfico DICOM con el escaneo intraoral STL para diseñar férulas y guías quirúrgicas de precisión milimétrica.',
    indications: [
      'Cirugía guiada mínimamente invasiva',
      'Evaluación de grosor de corticales y mucosa periimplantar',
      'Posicionamiento tridimensional protésicamente guiado',
      'Simulación de elevación de piso de seno maxilar',
    ],
    formats: ['Proyecto Nemotec / Exocad', 'Diseño de guía quirúrgica STL', 'Reporte milimétrico'],
    fovOrSpecs: 'Software IN VIVO Anatomage y Nemotec Implant 3D',
  },
  {
    id: 'paquetes-diagnosticos',
    title: 'Paquetes diagnósticos',
    subtitle: 'Protocolos integrales por especialidad',
    icon: 'folder_special',
    turnaroundTime: 'Entrega prioritaria',
    description: 'Conjuntos completos de ayudas diagnósticas agrupados para facilitar el diagnóstico clínico, presentación de casos al paciente y presupuestos.',
    indications: [
      'Paquete Ortodoncia (Panorámica + Cefalométrica + Trazado + Fotos)',
      'Paquete Cirugía de Cordales (CBCT Bimaxilar + Panorámica)',
      'Paquete Periodoncia (Juego Periapical Completo + Panorámica)',
      'Paquete Rehabilitación Oral (Escáner + Modelos + Fotografías)',
    ],
    formats: ['Carpeta digital completa', 'Acceso multi-archivo en Mis Radiografías'],
    fovOrSpecs: 'Descuentos corporativos para clínicas y odontólogos adscritos',
  },
];

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onRemitWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRemitWithService,
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16" id="servicios">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="flex flex-col gap-1 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[#CA5B30] font-bold">
            Portafolio Clínico
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638]">
            Servicios Diagnósticos Especializados
          </h2>
          <p className="text-sm sm:text-base text-[#5A7173]">
            Imágenes tomográficas y radiología oral calibradas para odontopediatría, implantología, cirugía maxilofacial y ortodoncia.
          </p>
        </div>
        
        <span className="text-xs text-[#126F72] font-semibold px-4 py-1.5 rounded-full bg-[#84BAB9]/20 border border-[#84BAB9]/40 w-fit">
          Software DICOM compatible
        </span>
      </div>

      {/* Grid 3x2 with pure white cards (#FFFFFF) and soft borders (#E4ECEC) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4ECEC] hover:border-[#188C8E] hover:shadow-[0_8px_24px_-4px_rgba(36,54,56,0.08)] transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-xs text-[#188C8E] hover:underline flex items-center gap-1 font-semibold transition-opacity"
                  title="Ver detalles e indicaciones clínicas"
                >
                  <span>Info clínica</span>
                  <span className="material-symbols-outlined text-[16px]">info</span>
                </button>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#188C8E] mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A7173] mb-6 leading-relaxed">
                {service.description.slice(0, 110)}...
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#126F72] text-white font-bold text-xs sm:text-sm hover:bg-[#0E5B5E] shadow-[0_2px_12px_rgba(18,111,114,0.2)] transition-all"
                href={`https://wa.me/573135249123?text=${encodeURIComponent(
                  `Hola Maxilodent, deseo solicitar el servicio de ${service.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Pedir {service.title.split(' ')[0].toLowerCase()}</span>
              </a>

              <button
                type="button"
                onClick={() => onRemitWithService(service.title)}
                className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg border border-[#E4ECEC] hover:border-[#188C8E] text-[#5A7173] hover:text-[#188C8E] text-xs font-semibold transition-all bg-[#F6F8F8]"
              >
                <span className="material-symbols-outlined text-[15px]">edit_note</span>
                <span>Incluir en orden virtual</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
