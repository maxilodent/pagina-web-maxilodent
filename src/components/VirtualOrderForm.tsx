import React, { useEffect, useState } from 'react';
import { OFFICIAL_WHATSAPP_URL } from '../constants';
import { validateOrder, type FormErrors, type OrderFields } from '../utils/orderValidation';
import { SERVICES_DATA } from './ServicesSection';

type FieldName = keyof OrderFields;

interface VirtualOrderFormProps {
  preselectedStudy?: string;
}

export const VirtualOrderForm: React.FC<VirtualOrderFormProps> = ({ preselectedStudy }) => {
  const [fields, setFields] = useState<OrderFields>({
    pacienteNombre: '',
    pacienteDoc: '',
    pacienteTel: '',
    odontoNombre: '',
  });
  const [estudio, setEstudio] = useState(preselectedStudy ?? '');
  const [autorizacion, setAutorizacion] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  useEffect(() => {
    setEstudio(preselectedStudy ?? '');
    setWhatsAppUrl(null);
  }, [preselectedStudy]);

  const updateField = (field: FieldName, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    setWhatsAppUrl(null);
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const patientName = fields.pacienteNombre.trim();
    const doctorName = fields.odontoNombre.trim();
    const documentNumber = fields.pacienteDoc.trim();
    const nextErrors = validateOrder(
      fields,
      estudio,
      autorizacion,
      SERVICES_DATA.map((service) => service.title),
    );

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setWhatsAppUrl(null);
      return;
    }

    const message = [
      '*ORDEN DE SERVICIO - MAXILODENT*',
      `Estudio solicitado: ${estudio}`,
      `Nombre del paciente: ${patientName}`,
      `Documento: ${documentNumber}`,
      `Teléfono: ${fields.pacienteTel.trim()}`,
      `Doctor que remite: ${doctorName}`,
    ].join('\n');

    setWhatsAppUrl(`${OFFICIAL_WHATSAPP_URL}?text=${encodeURIComponent(message)}`);
  };

  const fieldClass = (hasError: boolean) =>
    `min-h-12 w-full rounded-xl border bg-white px-3.5 py-3 text-base text-[#243638] outline-none transition-colors placeholder:text-[#849697] focus:border-[#188C8E] focus:ring-2 focus:ring-[#188C8E]/15 ${
      hasError ? 'border-red-600' : 'border-[#D5E3E2]'
    }`;

  const renderFieldError = (field: keyof FormErrors) =>
    errors[field] ? (
      <span id={`${field}-error`} className="text-sm text-red-700" role="alert">
        {errors[field]}
      </span>
    ) : null;

  return (
    <section className="scroll-mt-36 w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-16" id="orden-virtual">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#E4ECEC] bg-white p-5 shadow-[0_8px_30px_rgba(36,54,56,0.06)] sm:p-8 lg:p-10">
        <div className="mb-7 border-b border-[#E4ECEC] pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#CA5B30]">
            Orden de servicio
          </span>
          <h2 className="mt-1 font-display text-2xl font-bold text-[#243638] sm:text-3xl">
            Solicita un estudio
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5A7173]">
            Completa los datos necesarios. Revisarás el mensaje antes de enviarlo a Maxilodent por WhatsApp.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit} className="space-y-6">
          {Object.keys(errors).length > 0 && (
            <p className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
              Revisa los campos señalados antes de continuar.
            </p>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="order-paciente-nombre" className="text-sm font-semibold text-[#243638]">
                Nombre completo del paciente <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <input
                id="order-paciente-nombre"
                maxLength={80}
                autoComplete="name"
                autoCapitalize="words"
                required
                value={fields.pacienteNombre}
                onChange={(event) => updateField('pacienteNombre', event.target.value)}
                aria-invalid={Boolean(errors.pacienteNombre)}
                aria-describedby={errors.pacienteNombre ? 'pacienteNombre-error' : undefined}
                className={fieldClass(Boolean(errors.pacienteNombre))}
                placeholder="Nombre completo"
              />
              {renderFieldError('pacienteNombre')}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="order-paciente-documento" className="text-sm font-semibold text-[#243638]">
                Número de documento <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <input
                id="order-paciente-documento"
                type="text"
                maxLength={15}
                inputMode="numeric"
                autoComplete="off"
                required
                value={fields.pacienteDoc}
                onChange={(event) => updateField('pacienteDoc', event.target.value)}
                aria-invalid={Boolean(errors.pacienteDoc)}
                aria-describedby={errors.pacienteDoc ? 'pacienteDoc-error' : undefined}
                className={fieldClass(Boolean(errors.pacienteDoc))}
                placeholder="Solo números"
              />
              {renderFieldError('pacienteDoc')}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="order-paciente-telefono" className="text-sm font-semibold text-[#243638]">
                Teléfono del paciente <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <input
                id="order-paciente-telefono"
                type="tel"
                maxLength={25}
                inputMode="tel"
                autoComplete="tel"
                enterKeyHint="next"
                required
                value={fields.pacienteTel}
                onChange={(event) => updateField('pacienteTel', event.target.value)}
                aria-invalid={Boolean(errors.pacienteTel)}
                aria-describedby={errors.pacienteTel ? 'pacienteTel-error' : undefined}
                className={fieldClass(Boolean(errors.pacienteTel))}
                placeholder="Teléfono con indicativo"
              />
              {renderFieldError('pacienteTel')}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="order-doctor-nombre" className="text-sm font-semibold text-[#243638]">
                Nombre del doctor que remite <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <input
                id="order-doctor-nombre"
                maxLength={80}
                autoComplete="off"
                autoCapitalize="words"
                required
                value={fields.odontoNombre}
                onChange={(event) => updateField('odontoNombre', event.target.value)}
                aria-invalid={Boolean(errors.odontoNombre)}
                aria-describedby={errors.odontoNombre ? 'odontoNombre-error' : undefined}
                className={fieldClass(Boolean(errors.odontoNombre))}
                placeholder="Nombre del doctor"
              />
              {renderFieldError('odontoNombre')}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="order-estudio" className="text-sm font-semibold text-[#243638]">
              Estudio solicitado <span aria-hidden="true" className="text-red-700">*</span>
            </label>
            <select
              id="order-estudio"
              required
              value={estudio}
              onChange={(event) => {
                setEstudio(event.target.value);
                clearError('estudio');
                setWhatsAppUrl(null);
              }}
              aria-invalid={Boolean(errors.estudio)}
              aria-describedby={errors.estudio ? 'estudio-error' : undefined}
              className={fieldClass(Boolean(errors.estudio))}
            >
              <option value="">Selecciona un estudio</option>
              {SERVICES_DATA.map((service) => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
            </select>
            {renderFieldError('estudio')}
          </div>

          <div className="rounded-xl border border-[#D5E3E2] bg-[#F6F8F8] p-4">
            <h3 className="font-semibold text-sm text-[#243638]">Aviso sobre tus datos</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#5A7173]">
              Responsable: MAXILODENT SAS (NIT 900.221.436-0), Calle 15 No. 14-33, oficina 202, Edificio Portal del Valle, Valledupar. Usará estos datos para gestionar la orden del estudio solicitado y contactarte sobre ella. El estudio puede revelar datos de salud, cuyo tratamiento requiere autorización expresa. La persona titular puede conocer, actualizar y rectificar sus datos, solicitar prueba de la autorización y, cuando proceda, pedir su supresión o revocarla. Para ejercer estos derechos, contacta a <a className="font-semibold text-[#126F72] underline underline-offset-2" href="mailto:maxilodent@gmail.com">maxilodent@gmail.com</a> o al <a className="font-semibold text-[#126F72] underline underline-offset-2" href="tel:+573135249123">+57 313 524 9123</a>. Consulta la <a className="font-semibold text-[#126F72] underline underline-offset-2" href={`${import.meta.env.BASE_URL}politica-tratamiento-datos-personales.pdf`} target="_blank" rel="noopener noreferrer">Política de Tratamiento de Datos Personales</a>. Al abrir el enlace, WhatsApp recibirá el texto para que puedas revisarlo; solo se envía si confirmas dentro de la aplicación.
            </p>
            <label className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-[#243638]">
              <input
                type="checkbox"
                checked={autorizacion}
                onChange={(event) => {
                  setAutorizacion(event.target.checked);
                  clearError('autorizacion');
                  setWhatsAppUrl(null);
                }}
                aria-invalid={Boolean(errors.autorizacion)}
                aria-describedby={errors.autorizacion ? 'autorizacion-error' : undefined}
                className="mt-1 h-5 w-5 shrink-0 accent-[#126F72]"
              />
              <span>Confirmo que tengo autorización expresa del titular para compartir estos datos personales y del estudio con Maxilodent y gestionar esta orden.</span>
            </label>
            {renderFieldError('autorizacion')}
          </div>

          <button
            type="submit"
            className="min-h-12 w-full rounded-xl bg-[#126F72] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#0E5B5E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72] active:bg-[#0B4D50] sm:w-auto"
          >
            Preparar mensaje de WhatsApp
          </button>
        </form>

        {whatsAppUrl && (
          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#84BAB9] bg-[#F0F6F5] p-4 sm:flex-row sm:items-center sm:justify-between" role="status" aria-live="polite">
            <p className="text-sm leading-relaxed text-[#243638]">
              Mensaje preparado. Revísalo y confirma el envío dentro de WhatsApp.
            </p>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#126F72] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0E5B5E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#126F72]"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
              <span>Continuar a WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
