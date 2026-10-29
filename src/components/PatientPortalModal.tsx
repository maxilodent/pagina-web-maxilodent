import React, { useState } from 'react';
import { MOCK_STUDIES } from '../data/mockStudies';
import { StudyRecord } from '../types';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSearchQuery?: string;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({
  isOpen,
  onClose,
  defaultSearchQuery = '',
}) => {
  const [searchDoc, setSearchDoc] = useState(defaultSearchQuery || '1065893241');
  const [activeStudy, setActiveStudy] = useState<StudyRecord | null>(MOCK_STUDIES[0]);
  const [activeTab, setActiveTab] = useState<'viewer' | 'report' | 'files'>('viewer');
  
  // Viewer state
  const [zoom, setZoom] = useState(100);
  const [sliceIndex, setSliceIndex] = useState(42);
  const [windowPreset, setWindowPreset] = useState<'bone' | 'soft' | 'standard' | 'invert'>('bone');
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(110);
  const [showCrosshair, setShowCrosshair] = useState(true);
  const [measuring, setMeasuring] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = (doc: string) => {
    setSearchDoc(doc);
    const found = MOCK_STUDIES.find(
      (s) => s.patientDoc === doc.trim() || s.id.toLowerCase() === doc.trim().toLowerCase()
    );
    if (found) {
      setActiveStudy(found);
    } else {
      setActiveStudy(null);
    }
  };

  const handleDownload = (filename: string) => {
    setDownloadSuccess(`Descargando ${filename}...`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#243638]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#FFFFFF] border border-[#E4ECEC] rounded-2xl shadow-[0_20px_60px_rgba(36,54,56,0.2)] overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#F6F8F8] border-b border-[#E4ECEC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#84BAB9]/20 border border-[#84BAB9]/40 flex items-center justify-center text-[#188C8E]">
              <span className="material-symbols-outlined text-[24px]">visibility</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#243638] tracking-tight">
                  Portal Mis Radiografías
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#84BAB9]/20 border border-[#84BAB9]/40 text-[#126F72] text-[11px] font-bold">
                  Acceso Seguro SSL
                </span>
              </div>
              <p className="text-xs text-[#5A7173]">
                Visualizador DICOM web y entrega de estudios radiográficos • Maxilodent Valledupar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://sistema.maxilodentrx.com/accounts/login/?next=/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white font-bold text-xs shadow-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              <span className="hidden sm:inline">Ingresar a sistema.maxilodentrx.com</span>
              <span className="sm:hidden">Ingresar al sistema</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-[#E4ECEC] hover:bg-[#84BAB9]/30 text-[#243638] flex items-center justify-center transition-colors"
              title="Cerrar ventana"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Demo Pills */}
        <div className="px-4 sm:px-6 py-3 bg-[#FFFFFF] border-b border-[#E4ECEC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#849697] text-[18px]">
                badge
              </span>
              <input
                type="text"
                value={searchDoc}
                onChange={(e) => setSearchDoc(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchDoc)}
                placeholder="Ingresa Cédula del paciente o Código de estudio..."
                className="w-full pl-9 pr-3 py-2 bg-[#F6F8F8] border border-[#E4ECEC] focus:border-[#188C8E] focus:bg-white rounded-lg text-xs sm:text-sm text-[#243638] placeholder-[#849697] outline-none transition-colors"
              />
            </div>
            <button
              onClick={() => handleSearch(searchDoc)}
              className="px-4 py-2 bg-[#126F72] hover:bg-[#0E5B5E] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shrink-0 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">search</span>
              <span>Consultar</span>
            </button>
          </div>

          {/* Quick shortcuts for user testing */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
            <span className="text-[#849697] text-[11px] uppercase tracking-wider shrink-0 font-medium">
              Ejemplos:
            </span>
            <button
              onClick={() => handleSearch('1065893241')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all shrink-0 ${
                activeStudy?.patientDoc === '1065893241'
                  ? 'bg-[#188C8E] border-[#188C8E] text-white'
                  : 'bg-[#F6F8F8] border-[#E4ECEC] text-[#243638] hover:border-[#188C8E]'
              }`}
            >
              CBCT 3D Implantes
            </button>
            <button
              onClick={() => handleSearch('1003452119')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all shrink-0 ${
                activeStudy?.patientDoc === '1003452119'
                  ? 'bg-[#188C8E] border-[#188C8E] text-white'
                  : 'bg-[#F6F8F8] border-[#E4ECEC] text-[#243638] hover:border-[#188C8E]'
              }`}
            >
              Panorámica + Cefalo
            </button>
            <button
              onClick={() => handleSearch('77189442')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all shrink-0 ${
                activeStudy?.patientDoc === '77189442'
                  ? 'bg-[#188C8E] border-[#188C8E] text-white'
                  : 'bg-[#F6F8F8] border-[#E4ECEC] text-[#243638] hover:border-[#188C8E]'
              }`}
            >
              ATM Bilateral
            </button>
          </div>
        </div>

        {/* Content area */}
        {activeStudy ? (
          <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
            {/* Study meta strip */}
            <div className="px-4 sm:px-6 py-2.5 bg-[#F6F8F8] border-b border-[#E4ECEC] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#243638] text-sm">
                  {activeStudy.patientName}
                </span>
                <span className="text-[#5A7173]">
                  C.C. {activeStudy.patientDoc}
                </span>
                <span className="hidden md:inline text-[#849697]">|</span>
                <span className="hidden md:inline text-[#188C8E] font-medium">
                  {activeStudy.studyType}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#5A7173]">
                  {activeStudy.date}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#84BAB9]/20 border border-[#84BAB9]/40 text-[#126F72] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>{activeStudy.status}</span>
                </span>
              </div>
            </div>

            {/* View navigation tabs */}
            <div className="flex items-center gap-1 px-4 sm:px-6 pt-2 bg-[#FFFFFF] border-b border-[#E4ECEC]">
              <button
                onClick={() => setActiveTab('viewer')}
                className={`flex items-center gap-1.5 px-4 py-2 border-b-2 font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'viewer'
                    ? 'border-[#188C8E] text-[#188C8E] bg-[#84BAB9]/10'
                    : 'border-transparent text-[#5A7173] hover:text-[#243638]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                <span>Visor Diagnóstico DICOM 3D</span>
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={`flex items-center gap-1.5 px-4 py-2 border-b-2 font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'report'
                    ? 'border-[#188C8E] text-[#188C8E] bg-[#84BAB9]/10'
                    : 'border-transparent text-[#5A7173] hover:text-[#243638]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Informe Radiológico Oficial</span>
              </button>
              <button
                onClick={() => setActiveTab('files')}
                className={`flex items-center gap-1.5 px-4 py-2 border-b-2 font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'files'
                    ? 'border-[#188C8E] text-[#188C8E] bg-[#84BAB9]/10'
                    : 'border-transparent text-[#5A7173] hover:text-[#243638]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Descargas & Archivos</span>
              </button>
            </div>

            {/* TAB 1: VISOR DIAGNOSTICO */}
            {activeTab === 'viewer' && (
              <div className="flex-1 flex flex-col p-4 sm:p-6 bg-[#F6F8F8]">
                {/* Floating Diagnostic Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E4ECEC] shadow-xs mb-4">
                  {/* Tool cluster: Zoom & Pan */}
                  <div className="flex items-center gap-1 border-r border-[#E4ECEC] pr-2">
                    <button
                      onClick={() => setZoom((z) => Math.min(250, z + 15))}
                      className="p-1.5 rounded-lg bg-[#F6F8F8] hover:bg-[#E4ECEC] text-[#243638] transition-colors"
                      title="Acercar (Zoom +)"
                    >
                      <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                    </button>
                    <button
                      onClick={() => setZoom((z) => Math.max(50, z - 15))}
                      className="p-1.5 rounded-lg bg-[#F6F8F8] hover:bg-[#E4ECEC] text-[#243638] transition-colors"
                      title="Alejar (Zoom -)"
                    >
                      <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                    </button>
                    <button
                      onClick={() => setZoom(100)}
                      className="px-2 py-1 rounded-lg bg-[#F6F8F8] hover:bg-[#E4ECEC] text-[#243638] text-xs font-mono"
                      title="Restablecer tamaño"
                    >
                      {zoom}%
                    </button>
                  </div>

                  {/* Windowing / Contrast Presets */}
                  <div className="flex items-center gap-1 border-r border-[#E4ECEC] pr-2">
                    <span className="text-[11px] text-[#849697] uppercase hidden sm:inline mr-1">
                      Ventana:
                    </span>
                    <button
                      onClick={() => {
                        setWindowPreset('bone');
                        setContrast(130);
                        setBrightness(105);
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                        windowPreset === 'bone'
                          ? 'bg-[#126F72] text-white'
                          : 'bg-[#F6F8F8] text-[#243638] hover:bg-[#E4ECEC]'
                      }`}
                    >
                      Hueso HD
                    </button>
                    <button
                      onClick={() => {
                        setWindowPreset('soft');
                        setContrast(100);
                        setBrightness(120);
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                        windowPreset === 'soft'
                          ? 'bg-[#126F72] text-white'
                          : 'bg-[#F6F8F8] text-[#243638] hover:bg-[#E4ECEC]'
                      }`}
                    >
                      Tejidos
                    </button>
                    <button
                      onClick={() => {
                        setWindowPreset('invert');
                        setContrast(140);
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                        windowPreset === 'invert'
                          ? 'bg-[#126F72] text-white'
                          : 'bg-[#F6F8F8] text-[#243638] hover:bg-[#E4ECEC]'
                      }`}
                    >
                      Invertir
                    </button>
                  </div>

                  {/* Diagnostic caliper & tools */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setMeasuring(!measuring)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                        measuring
                          ? 'bg-[#CA5B30] border-[#CA5B30] text-white'
                          : 'bg-[#F6F8F8] border-[#E4ECEC] text-[#243638] hover:border-[#188C8E]'
                      }`}
                      title="Herramienta de Medición Calibrada"
                    >
                      <span className="material-symbols-outlined text-[16px]">straighten</span>
                      <span>{measuring ? 'Midiendo (11.4 mm)' : 'Regla Calibrada'}</span>
                    </button>

                    <button
                      onClick={() => setShowCrosshair(!showCrosshair)}
                      className={`p-1.5 rounded-lg border text-xs transition-colors ${
                        showCrosshair
                          ? 'bg-[#84BAB9]/25 border-[#84BAB9] text-[#126F72]'
                          : 'bg-[#F6F8F8] border-[#E4ECEC] text-[#243638]'
                      }`}
                      title="Activar / Desactivar Guías y Retícula"
                    >
                      <span className="material-symbols-outlined text-[16px]">filter_center_focus</span>
                    </button>
                  </div>

                  {/* Slice navigation slider */}
                  <div className="flex items-center gap-2 w-full sm:w-auto pt-1 sm:pt-0">
                    <span className="text-[11px] text-[#5A7173] font-mono shrink-0">
                      Corte Z: {sliceIndex}/128
                    </span>
                    <input
                      type="range"
                      min="1"
                      max="128"
                      value={sliceIndex}
                      onChange={(e) => setSliceIndex(Number(e.target.value))}
                      className="w-28 sm:w-36 accent-[#188C8E] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Main Viewport Grid: 3D + MPR slices */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-[420px]">
                  
                  {/* Primary Scan Canvas (Col 1-8) */}
                  <div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-[#0A1415] border border-[#243638] flex items-center justify-center group shadow-inner">
                    {/* Measurement calibration HUD overlay */}
                    <div className="absolute top-3 left-3 z-20 flex flex-col gap-1 text-[11px] font-mono bg-black/80 px-2.5 py-1.5 rounded border border-white/10 text-[#E4ECEC] pointer-events-none">
                      <div className="text-[#84BAB9] font-bold">KaVo OP300 • Volumetría CBCT</div>
                      <div>Vóxel: 0.085 mm isotrópico</div>
                      <div>FOV: 80 x 80 mm | kV: 90 | mA: 8.0</div>
                      <div>Corte {sliceIndex} de 128 (Espesor: 0.5 mm)</div>
                    </div>

                    <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#188C8E]/30 text-[#84BAB9] border border-[#188C8E] font-mono text-[10px] font-bold">
                        CALIBRADO 1:1
                      </span>
                    </div>

                    {/* Image viewport with dynamic zoom & filter simulation */}
                    <div
                      className="relative transition-transform duration-100 flex items-center justify-center max-w-full max-h-full"
                      style={{
                        transform: `scale(${zoom / 100})`,
                        filter: `contrast(${contrast}%) brightness(${brightness}%) ${
                          windowPreset === 'invert' ? 'invert(1)' : ''
                        }`,
                      }}
                    >
                      <img
                        src={activeStudy.images.preview}
                        alt="Corte Tomográfico CBCT Maxilodent"
                        className="max-h-[380px] w-auto object-contain rounded select-none pointer-events-none"
                      />

                      {/* Caliper measurement annotation line */}
                      {measuring && (
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                          <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 300">
                            <line
                              x1="180"
                              y1="110"
                              x2="180"
                              y2="210"
                              stroke="#CA5B30"
                              strokeWidth="2.5"
                              strokeDasharray="4"
                            />
                            <line x1="170" y1="110" x2="190" y2="110" stroke="#CA5B30" strokeWidth="3" />
                            <line x1="170" y1="210" x2="190" y2="210" stroke="#CA5B30" strokeWidth="3" />
                            <rect x="195" y="150" width="70" height="22" rx="4" fill="#CA5B30" stroke="#FFFFFF" strokeWidth="1" />
                            <text x="200" y="165" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">
                              11.4 mm
                            </text>
                          </svg>
                        </div>
                      )}

                      {/* Crosshairs overlay */}
                      {showCrosshair && (
                        <div className="absolute inset-0 pointer-events-none opacity-40">
                          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#84BAB9]" />
                          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#84BAB9]" />
                        </div>
                      )}
                    </div>

                    {/* Bottom overlay status */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-[#E4ECEC] bg-black/75 px-3 py-1 rounded border border-white/10">
                      <span>Dra. P. Arregocés (Radióloga)</span>
                      <span className="text-[#84BAB9]">Zona: {activeStudy.anatomicalArea}</span>
                    </div>
                  </div>

                  {/* Side Multiplanar Tri-View & Findings (Col 9-12) */}
                  <div className="lg:col-span-4 flex flex-col gap-3">
                    {/* MPR Small cuts */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative rounded-lg overflow-hidden bg-black border border-[#E4ECEC] p-1 flex flex-col items-center">
                        <span className="text-[10px] font-mono text-[#84BAB9] absolute top-1.5 left-2 z-10 bg-black/70 px-1 rounded">
                          AXIAL
                        </span>
                        <img
                          src={activeStudy.images.preview}
                          alt="Corte Axial"
                          className="h-24 w-full object-cover filter contrast-125"
                        />
                      </div>
                      <div className="relative rounded-lg overflow-hidden bg-black border border-[#E4ECEC] p-1 flex flex-col items-center">
                        <span className="text-[10px] font-mono text-[#84BAB9] absolute top-1.5 left-2 z-10 bg-black/70 px-1 rounded">
                          CORONAL
                        </span>
                        <img
                          src={activeStudy.images.preview}
                          alt="Corte Coronal"
                          className="h-24 w-full object-cover filter brightness-90 contrast-125"
                        />
                      </div>
                    </div>

                    {/* Quick Clinical Finding Snippet */}
                    <div className="flex-1 p-4 rounded-xl bg-[#FFFFFF] border border-[#E4ECEC] flex flex-col justify-between shadow-xs">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#188C8E] mb-2">
                          <span className="material-symbols-outlined text-[16px]">clinical_notes</span>
                          <span>Dictamen Radiológico Resumido</span>
                        </div>
                        <p className="text-xs text-[#5A7173] leading-relaxed">
                          {activeStudy.findingsSummary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E4ECEC] flex items-center justify-between">
                        <button
                          onClick={() => setActiveTab('report')}
                          className="text-xs text-[#188C8E] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>Ver informe completo</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </button>
                        <button
                          onClick={() => handleDownload('CBCT_Dataset_DICOM.zip')}
                          className="px-3 py-1.5 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
                        >
                          <span className="material-symbols-outlined text-[14px]">download</span>
                          <span>DICOM</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: INFORME RADIOLOGICO OFICIAL */}
            {activeTab === 'report' && (
              <div className="p-4 sm:p-6 bg-[#F6F8F8] flex-1 overflow-y-auto">
                <div className="max-w-3xl mx-auto bg-[#FFFFFF] border border-[#E4ECEC] rounded-2xl p-6 sm:p-8 shadow-md">
                  {/* Medical Letterhead */}
                  <div className="flex items-center justify-between border-b border-[#E4ECEC] pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="/assets/aistudio/logo__2__eb17db82.png"
                        alt="Maxilodent"
                        className="h-10 w-auto object-contain"
                      />
                      <div className="border-l border-[#E4ECEC] pl-3">
                        <h3 className="font-bold text-xs uppercase text-[#188C8E] tracking-wider">
                          CENTRO DE DIAGNÓSTICO ORAL Y MAXILOFACIAL
                        </h3>
                        <p className="text-[11px] text-[#5A7173]">
                          Valledupar, Cesar • Licencia Radiológica Vigente • Dir. Médica
                        </p>
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <div className="text-[#188C8E] font-bold">{activeStudy.id}</div>
                      <div className="text-[#849697]">{activeStudy.date}</div>
                    </div>
                  </div>

                  {/* Patient & Doctor Table */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] text-xs mb-6">
                    <div>
                      <span className="text-[#849697] block">Paciente:</span>
                      <strong className="text-[#243638]">{activeStudy.patientName}</strong>
                    </div>
                    <div>
                      <span className="text-[#849697] block">Documento de Identidad:</span>
                      <strong className="text-[#243638]">{activeStudy.patientDoc}</strong>
                    </div>
                    <div>
                      <span className="text-[#849697] block">Odontólogo Solicitante:</span>
                      <strong className="text-[#188C8E]">{activeStudy.doctorName}</strong>
                    </div>
                    <div>
                      <span className="text-[#849697] block">Clínica / Entidad:</span>
                      <strong className="text-[#243638]">{activeStudy.clinic}</strong>
                    </div>
                    <div>
                      <span className="text-[#849697] block">Zona Explorada:</span>
                      <strong className="text-[#243638]">{activeStudy.anatomicalArea}</strong>
                    </div>
                    <div>
                      <span className="text-[#849697] block">Equipo Empleado:</span>
                      <strong className="text-[#243638]">KaVo OP300 CBCT</strong>
                    </div>
                  </div>

                  {/* Clinical Description */}
                  <div className="space-y-4 text-xs sm:text-sm text-[#5A7173] leading-relaxed">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-[#188C8E] tracking-wider mb-1">
                        1. TÉCNICA Y PROTOCOLO DE ADQUISICIÓN
                      </h4>
                      <p>
                        Se realiza tomografía volumétrica de haz cónico (Cone Beam) con campo de visión (FOV) 80 x 80 mm, resolución de vóxel isotrópico de 85 micras. Dosis de radiación optimizada según principio ALARA. Reconstrucciones multiplanares (MPR) axial, sagital, coronal y reconstrucción 3D con software IN VIVO / ClinicView.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-bold text-[#188C8E] tracking-wider mb-1">
                        2. HALLAZGOS RADIOLÓGICOS DETALLADOS
                      </h4>
                      <p>
                        {activeStudy.findingsSummary}
                      </p>
                      <p className="mt-2">
                        • Tablas óseas vestibular y lingual íntegras sin dehiscencias ni fenestramientos evidentes.<br/>
                        • Cortical del conducto dentario inferior bien delimitada, sin contacto directo con las raíces adyacentes.<br/>
                        • Espacio del ligamento periodontal preservado en las piezas remanentes del cuadrante evaluado.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-bold text-[#188C8E] tracking-wider mb-1">
                        3. CONCLUSIÓN Y SUGERENCIAS
                      </h4>
                      <p className="text-[#243638] bg-[#F6F8F8] p-3.5 rounded-lg border border-[#E4ECEC]">
                        Estudio favorable para rehabilitación sobre implante dental en zona 36. Se adjunta archivo DICOM completo para planeación en software de cirugía guiada (Nemotec / Exocad).
                      </p>
                    </div>
                  </div>

                  {/* Signature and Verification */}
                  <div className="mt-8 pt-4 border-t border-[#E4ECEC] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#84BAB9]/20 flex items-center justify-center text-[#188C8E]">
                        <span className="material-symbols-outlined text-[28px]">verified_user</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#243638]">{activeStudy.radiologist}</div>
                        <div className="text-[11px] text-[#5A7173]">Firma Digital Verificada • Maxilodent Valledupar</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDownload(`${activeStudy.id}_Informe_Radiologico.pdf`)}
                        className="px-4 py-2 rounded-xl bg-[#126F72] text-white font-bold text-xs hover:bg-[#0E5B5E] transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]">print</span>
                        <span>Descargar PDF Oficial</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DESCARGAS */}
            {activeTab === 'files' && (
              <div className="p-4 sm:p-6 bg-[#F6F8F8] flex-1 overflow-y-auto">
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-[#243638]">
                      Paquete Digital del Estudio {activeStudy.id}
                    </h3>
                    <p className="text-xs text-[#5A7173]">
                      Archivos originales listos para importar en software quirúrgico, trazado ortodóntico o visualización en clínica.
                    </p>
                  </div>

                  {/* DICOM File */}
                  <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4ECEC] flex items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">folder_zip</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#243638]">Volumen Completo DICOM (.zip)</h4>
                        <p className="text-xs text-[#5A7173]">Cortes axiales continuos sin compresión • 148 MB</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload('MAXILODENT_DICOM_DATASET.zip')}
                      className="px-4 py-1.5 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      Descargar
                    </button>
                  </div>

                  {/* STL 3D Model */}
                  {activeStudy.hasStl && (
                    <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4ECEC] flex items-center justify-between gap-4 shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#CA5B30]/15 text-[#CA5B30] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[22px]">view_in_ar</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#243638]">Reconstrucción 3D Maxilofacial (.stl)</h4>
                          <p className="text-xs text-[#5A7173]">Malla poligonal para impresión 3D o simulación • 28 MB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload('MODELO_3D_MAXILOFACIAL.stl')}
                        className="px-4 py-1.5 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white text-xs font-bold transition-colors shadow-xs"
                      >
                        Descargar
                      </button>
                    </div>
                  )}

                  {/* PDF Report */}
                  <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4ECEC] flex items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#84BAB9]/20 text-[#188C8E] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#243638]">Informe Radiológico con Firma Digital (.pdf)</h4>
                        <p className="text-xs text-[#5A7173]">Documento oficial para historia clínica • 3.4 MB</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload('INFORME_MAXILODENT_OFICIAL.pdf')}
                      className="px-4 py-1.5 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      Descargar
                    </button>
                  </div>

                  {/* Share on WhatsApp */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/?text=Hola,%20adjunto%20el%20enlace%20de%20mis%20radiograf%C3%ADas%20de%20Maxilodent%20para%20el%20estudio%20${activeStudy.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#126F72] text-white font-bold text-xs hover:bg-[#0E5B5E] transition-all shadow-[0_4px_16px_rgba(18,111,114,0.2)]"
                    >
                      <span className="material-symbols-outlined text-[18px]">share</span>
                      <span>Compartir acceso directo por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 p-12 text-center flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-[#849697] mb-2">search_off</span>
            <h3 className="text-lg font-bold text-[#243638]">No se encontró el estudio</h3>
            <p className="text-xs text-[#5A7173] max-w-sm mt-1">
              Verifica el número de documento ingresado o haz clic en uno de los ejemplos rápidos superiores.
            </p>
          </div>
        )}

        {/* Download toast message */}
        {downloadSuccess && (
          <div className="absolute bottom-4 right-4 bg-[#126F72] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>{downloadSuccess}</span>
          </div>
        )}
      </div>
    </div>
  );
};
