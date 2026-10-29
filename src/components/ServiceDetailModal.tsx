import React from 'react';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  turnaroundTime: string;
  description: string;
  indications: string[];
  formats: string[];
  fovOrSpecs?: string;
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onRemitClick: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRemitClick,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#243638]/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FFFFFF] border border-[#E4ECEC] rounded-2xl shadow-[0_20px_50px_rgba(36,54,56,0.15)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F6F8F8] border-b border-[#E4ECEC]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center">
              <span className="material-symbols-outlined text-[30px]">{service.icon}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#243638]">{service.title}</h3>
              <span className="text-xs text-[#126F72] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                <span>Entrega: {service.turnaroundTime}</span>
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#E4ECEC] hover:bg-[#84BAB9]/30 text-[#243638] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-[#5A7173]">
          <p className="leading-relaxed text-[#243638] font-medium">{service.description}</p>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#CA5B30] mb-2">
              Indicaciones Clínicas Frecuentes
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-xs">
              {service.indications.map((ind, idx) => (
                <li key={idx} className="text-[#243638]">
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#188C8E] mb-2">
              Formatos de Entrega Compatibles
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.formats.map((fmt, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#F6F8F8] text-[#126F72] font-mono text-[11px] border border-[#E4ECEC]"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>

          {service.fovOrSpecs && (
            <div className="p-3 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] text-xs">
              <span className="text-[#5A7173] block font-medium">Especificación Técnica:</span>
              <span className="text-[#243638] font-semibold">{service.fovOrSpecs}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#F6F8F8] border-t border-[#E4ECEC] flex items-center justify-between gap-3">
          <a
            href={`https://wa.me/573135249123?text=Hola%20Maxilodent,%20deseo%20consultar%20sobre%20el%20servicio%20de%20${encodeURIComponent(
              service.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5A7173] hover:text-[#188C8E] flex items-center gap-1 font-semibold"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onRemitClick(service.title);
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-[#126F72] hover:bg-[#0E5B5E] text-white font-bold text-xs shadow-[0_2px_12px_rgba(18,111,114,0.25)] transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">assignment_turned_in</span>
            <span>Remitir este estudio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
