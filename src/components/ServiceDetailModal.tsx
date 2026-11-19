import React from 'react';

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  animateOnOpen?: boolean;
  onClose: () => void;
  onRemitClick: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  animateOnOpen = false,
  onClose,
  onRemitClick,
}) => {
  if (!service) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#243638]/50 backdrop-blur-sm ${animateOnOpen ? 'soft-overlay-enter' : ''}`} onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="service-detail-title" className={`relative w-full max-w-xl bg-[#FFFFFF] border border-[#E4ECEC] rounded-2xl shadow-[0_20px_50px_rgba(36,54,56,0.15)] overflow-hidden ${animateOnOpen ? 'soft-dialog-enter' : ''}`} onClick={(event) => event.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#F6F8F8] border-b border-[#E4ECEC]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center">
              <span className="material-symbols-outlined text-[30px]">{service.icon}</span>
            </div>
            <div>
              <h3 id="service-detail-title" className="font-bold text-lg text-[#243638]">{service.title}</h3>
              <span className="text-xs text-[#126F72] font-semibold">{service.category}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar descripción"
            className="w-8 h-8 rounded-lg bg-[#E4ECEC] hover:bg-[#84BAB9]/30 text-[#243638] flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-sm text-[#5A7173]">
          <p className="leading-relaxed text-[#243638]">{service.description}</p>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#F6F8F8] border-t border-[#E4ECEC] flex items-center justify-between gap-3">
          <a
            href={`https://wa.me/573135249123?text=Hola%20Maxilodent,%20deseo%20consultar%20sobre%20el%20servicio%20de%20${encodeURIComponent(
              service.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5A7173] hover:text-[#188C8E] flex items-center gap-1 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onRemitClick(service.title);
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-[#126F72] hover:bg-[#0E5B5E] text-white font-bold text-xs shadow-[0_2px_12px_rgba(18,111,114,0.25)] transition-all flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
          >
            <span className="material-symbols-outlined text-[16px]">assignment_turned_in</span>
            <span>Remitir este estudio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
