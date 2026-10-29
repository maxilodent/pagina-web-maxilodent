export type UserAudience = 'doctor' | 'patient';

export interface StudyRecord {
  id: string;
  patientName: string;
  patientDoc: string;
  doctorName: string;
  clinic: string;
  studyType: string;
  date: string;
  status: 'Entregado' | 'En Proceso' | 'Lectura Radiológica';
  radiologist: string;
  anatomicalArea: string;
  findingsSummary: string;
  images: {
    preview: string;
    axial?: string[];
    coronal?: string[];
    sagittal?: string[];
    model3d?: string;
  };
  hasReportPdf: boolean;
  hasDicom: boolean;
  hasStl: boolean;
}

export interface VirtualOrderData {
  pacienteNombre: string;
  pacienteDoc: string;
  pacienteTel: string;
  pacienteNac: string;
  pacienteEmail: string;
  odontoNombre: string;
  odontoTel: string;
  odontoEmail: string;
  estudios: string[];
  lectura: 'Con lectura' | 'Sin lectura';
  zonaDientes: string;
  formaEntrega: 'Correo electrónico' | 'WhatsApp' | 'CD físico';
  indicaciones: string;
  consentimiento: boolean;
}
