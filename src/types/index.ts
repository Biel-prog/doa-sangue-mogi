export interface BloodUnit {
  id: string;
  name: string;
  subname: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  phone: string;
  phoneClean: string;
  scheduleNotes: string;
  appointmentRequired: boolean;
  appointmentStatusText: string;
  verifiedHours: string;
  websiteUrl: string;
  googleMapsUrl: string;
  coordinates: [number, number]; // lat, lng
  notes: string;
  lastVerified: string;
}

export interface BloodComponent {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  usage: string[];
  shelfLife: string;
  colorClass: string;
  accentBg: string;
}

export interface DonationStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  tips: string;
  duration?: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'procedimento' | 'requisitos' | 'rotina' | 'unidades';
}

export interface OfficialSource {
  title: string;
  institution: string;
  description: string;
  url: string;
  badge: string;
}
