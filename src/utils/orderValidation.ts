export type OrderFields = {
  pacienteNombre: string;
  pacienteDoc: string;
  pacienteTel: string;
  odontoNombre: string;
};

export type FormErrors = Partial<Record<keyof OrderFields | 'estudio' | 'autorizacion', string>>;

const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,79}$/u;
const DOCUMENT_PATTERN = /^\d{5,15}$/;

export const isValidPhoneNumber = (value: string): boolean => {
  const normalized = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(normalized)) return false;

  const digits = normalized.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
};

export const validateOrder = (
  fields: OrderFields,
  study: string,
  authorized: boolean,
  availableStudies: string[],
): FormErrors => {
  const errors: FormErrors = {};

  if (!NAME_PATTERN.test(fields.pacienteNombre.trim())) {
    errors.pacienteNombre = 'Escribe el nombre completo usando letras.';
  }
  if (!DOCUMENT_PATTERN.test(fields.pacienteDoc.trim())) {
    errors.pacienteDoc = 'Escribe un documento de 5 a 15 dígitos.';
  }
  if (!isValidPhoneNumber(fields.pacienteTel)) {
    errors.pacienteTel = 'Escribe un teléfono válido con indicativo si aplica.';
  }
  if (!NAME_PATTERN.test(fields.odontoNombre.trim())) {
    errors.odontoNombre = 'Escribe el nombre del doctor que remite.';
  }
  if (!availableStudies.includes(study)) {
    errors.estudio = 'Selecciona el estudio solicitado.';
  }
  if (!authorized) {
    errors.autorizacion = 'Confirma que el titular autorizó compartir estos datos con Maxilodent.';
  }

  return errors;
};
