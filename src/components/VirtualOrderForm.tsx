import React, { useState } from 'react';
import { VirtualOrderData } from '../types';

interface VirtualOrderFormProps {
  preselectedStudy?: string;
}

export const VirtualOrderForm: React.FC<VirtualOrderFormProps> = ({
  preselectedStudy,
}) => {
  const [formData, setFormData] = useState<VirtualOrderData>({
    pacienteNombre: '',
    pacienteDoc: '',
    pacienteTel: '',
    pacienteNac: '',
    pacienteEmail: '',
    odontoNombre: '',
    odontoTel: '',
    odontoEmail: '',
    estudios: preselectedStudy ? [preselectedStudy] : ['Panorámica estándar'],
    lectura: 'Con lectura',
    zonaDientes: '',
    formaEntrega: 'Correo electrónico',
    indicaciones: '',
    consentimiento: false,
  });

  const [submittedOrder, setSubmittedOrder] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleStudyToggle = (studyName: string) => {
    setFormData((prev) => {
      const exists = prev.estudios.includes(studyName);
      if (exists) {
        return { ...prev, estudios: prev.estudios.filter((s) => s !== studyName) };
      } else {
        return { ...prev, estudios: [...prev.estudios, studyName] };
      }
    });
  };

  const generateWhatsAppMessage = () => {
    const {
      pacienteNombre,
      pacienteDoc,
      pacienteTel,
      pacienteNac,
      pacienteEmail,
      odontoNombre,
      odontoTel,
      odontoEmail,
      estudios,
      lectura,
      zonaDientes,
      formaEntrega,
      indicaciones,
    } = formData;

    let msg = `*ORDEN DE SERVICIO VIRTUAL - MAXILODENT VALLEDUPAR*\n\n`;
    msg += `*ODONTÓLOGO / CLÍNICA:* ${odontoNombre || 'No especificado'}\n`;
    msg += `*Tel Odontólogo:* ${odontoTel || 'N/A'}\n`;
    msg += `*Correo Odontólogo:* ${odontoEmail || 'N/A'}\n\n`;
    msg += `*DATOS DEL PACIENTE:*\n`;
    msg += `*Nombre:* ${pacienteNombre}\n`;
    msg += `*C.C. / Doc:* ${pacienteDoc}\n`;
    msg += `*Teléfono:* ${pacienteTel}\n`;
    if (pacienteNac) msg += `*Fecha Nacimiento:* ${pacienteNac}\n`;
    if (pacienteEmail) msg += `*Correo Paciente:* ${pacienteEmail}\n`;
    msg += `\n*ESTUDIOS SOLICITADOS:*\n`;
    msg += estudios.length > 0 ? estudios.map((e) => `• ${e}`).join('\n') : '• Ninguno seleccionado';
    msg += `\n*Lectura Radiológica CBCT:* ${lectura}\n`;
    if (zonaDientes) msg += `*Zona/Dientes Específicos:* ${zonaDientes}\n`;
    if (indicaciones) msg += `*Indicaciones Clínicas:* ${indicaciones}\n`;
    msg += `*Forma de Entrega:* ${formaEntrega}\n\n`;
    msg += `_Orden médica generada desde maxilodent.com - Valledupar_`;

    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentimiento) {
      alert('Por favor acepte la autorización de tratamiento de datos personales para continuar.');
      return;
    }

    const message = generateWhatsAppMessage();
    setSubmittedOrder(message);

    // Open WhatsApp
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/573135249123?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    if (submittedOrder) {
      navigator.clipboard.writeText(submittedOrder);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16" id="orden-virtual">
      <div className="bg-[#FFFFFF] rounded-2xl border border-[#E4ECEC] p-6 lg:p-10 shadow-[0_8px_30px_rgba(36,54,56,0.06)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E4ECEC] gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#CA5B30] font-bold">
              Portal de Remisión Directa
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243638]">
              Orden de Servicio Virtual
            </h2>
            <p className="text-sm sm:text-base text-[#5A7173]">
              Diligencia la orden médica y recíbela lista para enviar a Maxilodent vía WhatsApp.
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC] text-[#126F72] text-xs sm:text-sm font-bold w-fit">
            <span className="material-symbols-outlined text-[20px] text-[#188C8E]">security</span>
            <span>Conexión Cifrada SSL</span>
          </div>
        </div>

        {/* Stepper Visual Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-6">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#84BAB9]/15 border border-[#84BAB9]/30">
            <div className="w-6 h-6 rounded-full bg-[#188C8E] text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <span className="text-xs font-semibold text-[#126F72]">Datos Paciente</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#84BAB9]/15 border border-[#84BAB9]/30">
            <div className="w-6 h-6 rounded-full bg-[#188C8E] text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <span className="text-xs font-semibold text-[#126F72]">Odontólogo</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#84BAB9]/15 border border-[#84BAB9]/30">
            <div className="w-6 h-6 rounded-full bg-[#188C8E] text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <span className="text-xs font-semibold text-[#126F72]">Estudios</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#84BAB9]/15 border border-[#84BAB9]/30">
            <div className="w-6 h-6 rounded-full bg-[#188C8E] text-white font-bold text-xs flex items-center justify-center">
              4
            </div>
            <span className="text-xs font-semibold text-[#126F72]">Entrega</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          {/* STEP 1: Datos del Paciente */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-[#E4ECEC] pb-2">
              <span className="font-display text-base sm:text-lg font-bold text-[#243638]">
                Paso 1: Datos del paciente
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={formData.pacienteNombre}
                  onChange={(e) => setFormData({ ...formData, pacienteNombre: e.target.value })}
                  placeholder="Ej. Carlos Alberto Mendoza"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">C.C. / Documento *</label>
                <input
                  type="text"
                  required
                  value={formData.pacienteDoc}
                  onChange={(e) => setFormData({ ...formData, pacienteDoc: e.target.value })}
                  placeholder="Ej. 1065893241"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={formData.pacienteTel}
                  onChange={(e) => setFormData({ ...formData, pacienteTel: e.target.value })}
                  placeholder="Ej. 300 123 4567"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Fecha de nacimiento</label>
                <input
                  type="date"
                  value={formData.pacienteNac}
                  onChange={(e) => setFormData({ ...formData, pacienteNac: e.target.value })}
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Correo electrónico del paciente</label>
                <input
                  type="email"
                  value={formData.pacienteEmail}
                  onChange={(e) => setFormData({ ...formData, pacienteEmail: e.target.value })}
                  placeholder="paciente@ejemplo.com"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* STEP 2: Datos del Odontólogo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-[#E4ECEC] pb-2">
              <span className="font-display text-base sm:text-lg font-bold text-[#243638]">
                Paso 2: Datos del odontólogo o clínica
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Nombre del odontólogo / clínica *</label>
                <input
                  type="text"
                  required
                  value={formData.odontoNombre}
                  onChange={(e) => setFormData({ ...formData, odontoNombre: e.target.value })}
                  placeholder="Dr. / Dra. o Razón Social"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Teléfono / WhatsApp odontólogo *</label>
                <input
                  type="tel"
                  required
                  value={formData.odontoTel}
                  onChange={(e) => setFormData({ ...formData, odontoTel: e.target.value })}
                  placeholder="Ej. 315 987 6543"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Correo para notificación *</label>
                <input
                  type="email"
                  required
                  value={formData.odontoEmail}
                  onChange={(e) => setFormData({ ...formData, odontoEmail: e.target.value })}
                  placeholder="doctor@clinicadental.com"
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* STEP 3: Estudios Solicitados */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#E4ECEC] pb-2">
              <span className="font-display text-base sm:text-lg font-bold text-[#243638]">
                Paso 3: Estudios solicitados
              </span>
              <span className="text-xs text-[#188C8E] font-semibold">Selecciona uno o varios</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Grupo 1: Extraorales */}
              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#84BAB9]/20 text-[#126F72] text-xs font-bold">
                    Extraorales
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    'Panorámica estándar',
                    'Panorámica bite wing',
                    'Perfil o lateral',
                    'Senos maxilares',
                    'Rx ATM (Boca abierta/cerrada)',
                    'Cráneo A.P./P.A.',
                    'Carpograma',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-xs text-[#243638] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.estudios.includes(item)}
                        onChange={() => handleStudyToggle(item)}
                        className="w-4 h-4 rounded text-[#126F72] focus:ring-[#126F72] border-[#E4ECEC]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Grupo 2: Intraorales */}
              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#84BAB9]/20 text-[#126F72] text-xs font-bold">
                    Intraorales
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    'Periapical parcial',
                    'Juego periapical completo',
                    'Coronal (Bite Wing)',
                    'Oclusal',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-xs text-[#243638] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.estudios.includes(item)}
                        onChange={() => handleStudyToggle(item)}
                        className="w-4 h-4 rounded text-[#126F72] focus:ring-[#126F72] border-[#E4ECEC]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Grupo 3: Tomografía Cone Beam 3D */}
              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#188C8E]/40 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#CA5B30]/15 text-[#CA5B30] text-xs font-bold">
                    Tomografía Cone Beam 3D
                  </span>
                  <span className="text-[#CA5B30] text-xs font-bold">24h</span>
                </div>
                <div className="space-y-2">
                  {[
                    'CBCT Sectorizada (FOV pequeño)',
                    'CBCT Maxilar superior',
                    'CBCT Maxilar inferior',
                    'CBCT Bimaxilar',
                    'CBCT ATM bilateral',
                    'CBCT Hemiarcada',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-xs text-[#243638] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.estudios.includes(item)}
                        onChange={() => handleStudyToggle(item)}
                        className="w-4 h-4 rounded text-[#CA5B30] focus:ring-[#CA5B30] border-[#E4ECEC]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                  <div className="pt-2 border-t border-[#E4ECEC] flex gap-4">
                    <label className="flex items-center gap-1.5 text-xs text-[#126F72] font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="lectura"
                        value="Con lectura"
                        checked={formData.lectura === 'Con lectura'}
                        onChange={() => setFormData({ ...formData, lectura: 'Con lectura' })}
                        className="text-[#126F72]"
                      />
                      <span>Con lectura</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs text-[#5A7173] cursor-pointer">
                      <input
                        type="radio"
                        name="lectura"
                        value="Sin lectura"
                        checked={formData.lectura === 'Sin lectura'}
                        onChange={() => setFormData({ ...formData, lectura: 'Sin lectura' })}
                        className="text-[#126F72]"
                      />
                      <span>Sin lectura</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Grupo 4: Escáner Intraoral */}
              <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#84BAB9]/20 text-[#126F72] text-xs font-bold">
                    Escáner intraoral
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    'Escáner Un maxilar',
                    'Escáner Bimaxilar',
                    'Archivos digitales STL/PLY',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-xs text-[#243638] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.estudios.includes(item)}
                        onChange={() => handleStudyToggle(item)}
                        className="w-4 h-4 rounded text-[#126F72] focus:ring-[#126F72] border-[#E4ECEC]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Grupo 5: Otros & Especializados */}
              <div className="md:col-span-2 p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#84BAB9]/20 text-[#126F72] text-xs font-bold">
                    Otros & Especializados
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Fotografía clínica extra/intraoral',
                    'Modelos de estudio / zocalados',
                    'Paquetes diagnósticos integrales',
                    'Análisis cefalométrico digital',
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-xs text-[#243638] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.estudios.includes(item)}
                        onChange={() => handleStudyToggle(item)}
                        className="w-4 h-4 rounded text-[#126F72] focus:ring-[#126F72] border-[#E4ECEC]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* STEP 4: Detalles y Entrega */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-[#E4ECEC] pb-2">
              <span className="font-display text-base sm:text-lg font-bold text-[#243638]">
                Paso 4: Detalles y entrega
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Dientes o zona anatómica específica</label>
                <input
                  type="text"
                  value={formData.zonaDientes}
                  onChange={(e) => setFormData({ ...formData, zonaDientes: e.target.value })}
                  placeholder="Ej. Pieza 18, 28, cuadrante 3, zona mentoniana..."
                  className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#5A7173] font-medium">Forma de entrega preferida</label>
                <div className="flex flex-wrap gap-4 pt-1.5">
                  {(['Correo electrónico', 'WhatsApp', 'CD físico'] as const).map((mode) => (
                    <label key={mode} className="flex items-center gap-1.5 text-xs text-[#243638] cursor-pointer">
                      <input
                        type="radio"
                        name="formaEntrega"
                        value={mode}
                        checked={formData.formaEntrega === mode}
                        onChange={() => setFormData({ ...formData, formaEntrega: mode })}
                        className="text-[#126F72]"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#5A7173] font-medium">Indicaciones clínicas / Motivo de consulta</label>
              <textarea
                rows={3}
                value={formData.indicaciones}
                onChange={(e) => setFormData({ ...formData, indicaciones: e.target.value })}
                placeholder="Ej. Paciente candidato para implante 36, evaluar proximidad al conducto dentario inferior y densidad ósea..."
                className="px-3.5 py-2 bg-[#F6F8F8] border border-[#E4ECEC] rounded-lg text-xs sm:text-sm text-[#243638] focus:border-[#188C8E] focus:bg-white outline-none transition-colors resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="p-4 rounded-xl bg-[#F6F8F8] border border-[#E4ECEC]">
              <label className="flex items-start gap-2.5 text-xs text-[#243638] cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consentimiento}
                  onChange={(e) => setFormData({ ...formData, consentimiento: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#126F72] focus:ring-[#126F72] border-[#E4ECEC]"
                />
                <span>
                  Autorizo el tratamiento de mis datos personales y los de mi paciente de acuerdo con la ley de protección de datos de Colombia y los protocolos de confidencialidad médica de Maxilodent.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <span className="text-xs text-[#5A7173] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#188C8E]">info</span>
                <span>Tu orden se formateará automáticamente y abrirá WhatsApp con todos los datos listos.</span>
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#126F72] text-white font-display text-base font-bold shadow-[0_4px_16px_rgba(18,111,114,0.25)] hover:bg-[#0E5B5E] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[22px]">send</span>
                <span>Enviar orden por WhatsApp</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Confirmation Modal when order is submitted */}
      {submittedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#243638]/50 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-[#FFFFFF] border border-[#E4ECEC] rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4ECEC]">
              <div className="flex items-center gap-2 text-[#188C8E]">
                <span className="material-symbols-outlined text-[24px]">check_circle</span>
                <h3 className="font-bold text-base text-[#243638]">Orden Generada con Éxito</h3>
              </div>
              <button
                onClick={() => setSubmittedOrder(null)}
                className="text-[#5A7173] hover:text-[#243638]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <p className="text-xs text-[#5A7173] mt-3">
              Se ha abierto WhatsApp con tu orden médica estructurada. También puedes copiar el texto a continuación si deseas enviarlo por correo:
            </p>

            <pre className="mt-3 p-3 bg-[#F6F8F8] border border-[#E4ECEC] rounded-xl text-[11px] text-[#126F72] font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
              {submittedOrder}
            </pre>

            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 rounded-lg bg-[#F0F4F4] hover:bg-[#E4ECEC] text-xs font-semibold text-[#243638] flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? '¡Copiado!' : 'Copiar texto'}</span>
              </button>

              <button
                onClick={() => setSubmittedOrder(null)}
                className="px-5 py-2 rounded-lg bg-[#126F72] hover:bg-[#0E5B5E] text-white text-xs font-bold transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
