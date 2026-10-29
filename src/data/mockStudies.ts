import { StudyRecord } from '../types';

export const MOCK_STUDIES: StudyRecord[] = [
  {
    id: 'MAX-2025-0891',
    patientName: 'Carlos Alberto Mendoza',
    patientDoc: '1065893241',
    doctorName: 'Dr. Hernán Silva',
    clinic: 'Centro Odontológico Valledupar',
    studyType: 'Tomografía Cone Beam 3D (CBCT Mandibular FOV 8x8)',
    date: '15 Octubre 2025',
    status: 'Entregado',
    radiologist: 'Dra. Patricia Arregocés - Radióloga Oral R.M. 20114',
    anatomicalArea: 'Cuadrante 3 - Zona edéntula pieza 36',
    findingsSummary: 'Reborde óseo alveolar remanente de 11.4 mm de altura hasta el techo del canal mandibular. Ancho vestíbulo-lingual de 7.8 mm en cresta. Densidad ósea tipo D2. Apto para colocación de implante 4.1 x 10 mm sin necesidad de injerto previo.',
    images: {
      preview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIK3jEs_U4mc7oHxvyya4URPyzo6snoXQhTtHUFzM8ZBHYYTFrPPDC0CX1jLrNySeHPN3WJyDJuXzDwAcTffajOEBkAXv4iiVQfLT1fgCOuPkx99xS6Zvi7rHeQWSbNLtt1lG7w2RZ2ck2jVpCbtPKNRZ0j8Vq3Vi8-Ul_nlzUPMKoB2WX_P59OwvK_04h4XoQjWdwKGOxjDuvzhAvj6a0hGJig9HIvXFFoWM1G_s',
      axial: [
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      ],
      coronal: [
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      ],
      sagittal: [
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      ],
      model3d: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIK3jEs_U4mc7oHxvyya4URPyzo6snoXQhTtHUFzM8ZBHYYTFrPPDC0CX1jLrNySeHPN3WJyDJuXzDwAcTffajOEBkAXv4iiVQfLT1fgCOuPkx99xS6Zvi7rHeQWSbNLtt1lG7w2RZ2ck2jVpCbtPKNRZ0j8Vq3Vi8-Ul_nlzUPMKoB2WX_P59OwvK_04h4XoQjWdwKGOxjDuvzhAvj6a0hGJig9HIvXFFoWM1G_s'
    },
    hasReportPdf: true,
    hasDicom: true,
    hasStl: true,
  },
  {
    id: 'MAX-2025-0874',
    patientName: 'Valentina Restrepo Cuello',
    patientDoc: '1003452119',
    doctorName: 'Dra. Carolina Maestre',
    clinic: 'Ortodoncia Especializada Cesar',
    studyType: 'Panorámica Digital + Cefalométrica Lateral con Trazado',
    date: '14 Octubre 2025',
    status: 'Entregado',
    radiologist: 'Dr. Luis E. Baute - Especialista Radiología Bucomaxilofacial',
    anatomicalArea: 'Bimaxilar completo y perfil facial estricto',
    findingsSummary: 'Clase II esqueletal por micrognatismo mandibular (ANB = 5.2°). Terceros molares 18, 28, 38, 48 en evolución intraósea; piezas 38 y 48 en posición mesioangular según Pell & Gregory Clase II Posición B. No se observan lesiones periapicales radiolúcidas.',
    images: {
      preview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIK3jEs_U4mc7oHxvyya4URPyzo6snoXQhTtHUFzM8ZBHYYTFrPPDC0CX1jLrNySeHPN3WJyDJuXzDwAcTffajOEBkAXv4iiVQfLT1fgCOuPkx99xS6Zvi7rHeQWSbNLtt1lG7w2RZ2ck2jVpCbtPKNRZ0j8Vq3Vi8-Ul_nlzUPMKoB2WX_P59OwvK_04h4XoQjWdwKGOxjDuvzhAvj6a0hGJig9HIvXFFoWM1G_s',
    },
    hasReportPdf: true,
    hasDicom: true,
    hasStl: false,
  },
  {
    id: 'MAX-2025-0855',
    patientName: 'Andrés Felipe Calderón',
    patientDoc: '77189442',
    doctorName: 'Dr. Roberto Dangond',
    clinic: 'Clínica Odontológica del Norte',
    studyType: 'Tomografía Cone Beam ATM Bilateral (Boca Abierta y Cerrada)',
    date: '12 Octubre 2025',
    status: 'Entregado',
    radiologist: 'Dra. Patricia Arregocés - Radióloga Oral R.M. 20114',
    anatomicalArea: 'Articulación Temporomandibular derecha e izquierda',
    findingsSummary: 'En apertura máxima: cóndilo mandibular derecho con excursión condilar limitada a la eminencia articular. Espacio articular superior preservado. Aplanamiento leve de la vertiente anterior del cóndilo mandibular izquierdo sugerente de remodelación osteoartrósica incipiente.',
    images: {
      preview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIK3jEs_U4mc7oHxvyya4URPyzo6snoXQhTtHUFzM8ZBHYYTFrPPDC0CX1jLrNySeHPN3WJyDJuXzDwAcTffajOEBkAXv4iiVQfLT1fgCOuPkx99xS6Zvi7rHeQWSbNLtt1lG7w2RZ2ck2jVpCbtPKNRZ0j8Vq3Vi8-Ul_nlzUPMKoB2WX_P59OwvK_04h4XoQjWdwKGOxjDuvzhAvj6a0hGJig9HIvXFFoWM1G_s',
    },
    hasReportPdf: true,
    hasDicom: true,
    hasStl: true,
  }
];
