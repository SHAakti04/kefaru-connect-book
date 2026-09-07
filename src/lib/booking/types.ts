export type ServiceId =
  | "digital-marketing"
  | "digital-experience"
  | "salesforce-crm"
  | "ai-automation"
  | "custom";

export type MeetingTypeId = "discovery-20" | "strategy-30" | "solution-45";

export interface ServiceOption {
  id: ServiceId;
  title: string;
  description: string;
}

export interface MeetingTypeOption {
  id: MeetingTypeId;
  title: string;
  minutes: number;
  description: string;
}

export interface ClientDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  website: string;
  currentStack: string;
  notes: string;
}

export interface BookingDraft {
  serviceId: ServiceId | null;
  meetingTypeId: MeetingTypeId;
  /** ISO date, yyyy-mm-dd */
  date: string | null;
  /** 24h time, HH:mm */
  time: string | null;
  details: ClientDetails;
}

export interface BookingRecord {
  reference: string;
  serviceId: ServiceId;
  meetingTypeId: MeetingTypeId;
  date: string;
  time: string;
  timezone: string;
  details: ClientDetails;
  createdAt: string;
}

export interface TimeSlot {
  /** HH:mm 24h */
  value: string;
  label: string;
  available: boolean;
}
