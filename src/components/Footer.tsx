import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPortal }) => {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E4ECEC] pt-16 pb-8">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#E4ECEC]">
          
          {/* Brand & Address (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Logo Maxilodent"
                className="h-12 w-auto object-contain"
                src="/assets/aistudio/logo__2__eb17db82.png"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#5A7173] max-w-md leading-relaxed">
              Centro de referencia en imágenes tridimensionales de alta definición para odontólogos, ortodoncistas y cirujanos maxilofaciales del Cesar y la región.
            </p>

            <div className="flex flex-col gap-2 text-[#5A7173] text-xs pt-2">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#188C8E] text-[20px] mt-0.5">location_on</span>
                <span>Calle 15 No. 14-33, oficina 202, Edificio Portal del Valle, Valledupar, Cesar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#188C8E] text-[20px]">call</span>
                <span>Tel. (605) 5837886</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#126F72] text-[20px]">chat</span>
                <span className="text-[#243638] font-semibold">WhatsApp 313 524 9123</span>
              </div>
            </div>
          </div>

          {/* Horarios & Redes (Col 6-8) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-display text-sm sm:text-base font-bold text-[#243638]">
              Horario de atención
            </span>
            <div className="text-xs text-[#5A7173] space-y-2 leading-relaxed">
              <p>
                <strong className="text-[#243638]">Lunes a jueves:</strong>
                <br />
                8:00 a. m. – 12:00 m. y 2:00 p. m. – 6:00 p. m.
              </p>
              <p>
                <strong className="text-[#243638]">Viernes:</strong>
                <br />
                8:00 a. m. – 12:00 m. y 2:00 p. m. – 5:00 p. m.
              </p>
              <p>
                <strong className="text-[#243638]">Sábados:</strong>
                <br />
                8:00 a. m. – 1:00 p. m.
              </p>
            </div>

            {/* Redes Sociales */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#243638] font-bold block mb-2">
                Síguenos
              </span>
              <div className="flex items-center gap-2">
                <a
                  className="w-9 h-9 rounded-lg bg-[#F6F8F8] border border-[#E4ECEC] flex items-center justify-center text-[#188C8E] hover:bg-[#188C8E] hover:text-white transition-all"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                </a>
                <a
                  className="w-9 h-9 rounded-lg bg-[#F6F8F8] border border-[#E4ECEC] flex items-center justify-center text-[#188C8E] hover:bg-[#188C8E] hover:text-white transition-all"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </a>
                <a
                  className="w-9 h-9 rounded-lg bg-[#F6F8F8] border border-[#E4ECEC] flex items-center justify-center text-[#188C8E] hover:bg-[#188C8E] hover:text-white transition-all"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <span className="material-symbols-outlined text-[20px]">business_center</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sede Visual Preview (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-[#243638] font-bold">
              Nuestras Instalaciones
            </span>
            <div className="relative rounded-xl overflow-hidden border border-[#E4ECEC] group shadow-xs">
              <img
                className="w-full h-48 sm:h-52 object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                alt="Recepción y sala de espera oficial de Maxilodent en Valledupar"
                src="/assets/aistudio/1_e64dfff7.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243638]/90 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs text-white font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#84BAB9]">location_city</span>
                  <span>Edificio Portal del Valle • Piso 2</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Secondary Links & Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[#849697] text-xs gap-3">
          <div>
            © 2008 – 2026 Maxilodent Diagnóstico Oral y Maxilofacial • Valledupar, Colombia.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#5A7173]">Licencia de Radioprotección Vigente</span>
            <span className="text-[#188C8E]">•</span>
            <span className="text-[#5A7173]">Resolución Seccional de Salud</span>
            <span className="text-[#188C8E]">•</span>
            <a
              href="https://sistema.maxilodentrx.com/accounts/login/?next=/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#188C8E] hover:underline font-semibold"
            >
              Mis Radiografías
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
