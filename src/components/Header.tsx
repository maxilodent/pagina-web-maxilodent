import React, { useState } from 'react';
import { UserAudience } from '../types';

interface HeaderProps {
  audience: UserAudience;
  onAudienceChange: (audience: UserAudience, animate: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  audience,
  onAudienceChange,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#E4ECEC] shadow-[0_4px_20px_-4px_rgba(36,54,56,0.06)]">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col justify-between py-2">
        {/* Main 1st Row */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 h-16">
          
          {/* Logo & Brand (matches the focus selector) */}
          <button
            type="button"
            aria-label="Volver al inicio"
            className="flex items-center gap-3 cursor-pointer group shrink-0 border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#126F72]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center shrink-0 transition-transform group-hover:scale-[1.02]">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/logo__2__eb17db82.png`}
                alt="Logo de Maxilodent"
                width={435}
                height={150}
                className="h-11 sm:h-12 w-auto object-contain block"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-[#E4ECEC] pl-3">
              <span className="text-[11px] font-bold text-[#188C8E] uppercase tracking-wider">
                Diagnóstico Maxilofacial
              </span>
              <span className="text-[10px] text-[#5A7173]">
                Valledupar, Cesar
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('servicios')}
              className="text-sm font-semibold text-[#188C8E] hover:text-[#126F72] transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => handleNavClick('como-remitir')}
              className="text-sm font-medium text-[#243638] hover:text-[#188C8E] transition-colors"
            >
              Cómo remitir
            </button>
            <button
              onClick={() => handleNavClick('orden-virtual')}
              className="text-sm font-medium text-[#243638] hover:text-[#188C8E] transition-colors"
            >
              Orden virtual
            </button>
            <button
              onClick={() => handleNavClick('preguntas-frecuentes')}
              className="text-sm font-medium text-[#243638] hover:text-[#188C8E] transition-colors"
            >
              Preguntas
            </button>
            <button
              onClick={() => handleNavClick('tecnologia')}
              className="text-sm font-medium text-[#243638] hover:text-[#188C8E] transition-colors"
            >
              Tecnología
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Escríbenos button (WhatsApp) with Primary button color #126F72 */}
            <a
              href="https://wa.me/573135249123?text=Hola%20Maxilodent,%20deseo%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-lg bg-[#126F72] text-white hover:bg-[#0E5B5E] font-bold text-xs sm:text-sm transition-all duration-200 shadow-[0_2px_12px_rgba(18,111,114,0.25)]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Escríbenos</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-lg bg-[#F0F4F4] border border-[#E4ECEC] flex items-center justify-center text-[#243638]"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* 2nd Row: Audience Segmented Control */}
        <div className="flex items-center justify-center pb-1 pt-1">
          <div role="group" aria-label="Elige tu perfil" className="inline-flex p-1 rounded-full bg-[#F6F8F8] border border-[#E4ECEC]">
            <button
              type="button"
              onClick={(event) => onAudienceChange('doctor', event.detail > 0)}
              aria-pressed={audience === 'doctor'}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72] ${
                audience === 'doctor'
                  ? 'bg-[#188C8E] text-white shadow-sm'
                  : 'text-[#5A7173] hover:text-[#243638] hover:bg-[#E4ECEC]/50'
              }`}
            >
              Soy odontólogo
            </button>
            <button
              type="button"
              onClick={(event) => onAudienceChange('patient', event.detail > 0)}
              aria-pressed={audience === 'patient'}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72] ${
                audience === 'patient'
                  ? 'bg-[#188C8E] text-white shadow-sm'
                  : 'text-[#5A7173] hover:text-[#243638] hover:bg-[#E4ECEC]/50'
              }`}
            >
              Soy paciente/usuario
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 p-4 bg-[#FFFFFF] border border-[#E4ECEC] rounded-xl flex flex-col gap-2 shadow-lg animate-fadeIn">
            <button
              onClick={() => handleNavClick('servicios')}
              className="text-left py-1.5 text-sm font-semibold text-[#188C8E]"
            >
              Servicios Clínicos
            </button>
            <button
              onClick={() => handleNavClick('como-remitir')}
              className="text-left py-1.5 text-sm text-[#243638] hover:text-[#188C8E]"
            >
              Cómo remitir
            </button>
            <button
              onClick={() => handleNavClick('orden-virtual')}
              className="text-left py-1.5 text-sm text-[#243638] hover:text-[#188C8E]"
            >
              Orden virtual
            </button>
            <button
              onClick={() => handleNavClick('tecnologia')}
              className="text-left py-1.5 text-sm text-[#243638] hover:text-[#188C8E]"
            >
              Tecnología OP300
            </button>
            <button
              onClick={() => handleNavClick('preguntas-frecuentes')}
              className="text-left py-1.5 text-sm text-[#243638] hover:text-[#188C8E]"
            >
              Preguntas Frecuentes
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
