import type { MeetingTypeOption, ServiceOption } from "./types";

export const SERVICES: ServiceOption[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Build visibility, engagement and qualified demand.",
  },
  {
    id: "digital-experience",
    title: "Website & Digital Experience",
    description: "Create a modern digital experience for your customers.",
  },
  {
    id: "salesforce-crm",
    title: "Salesforce / CRM",
    description: "Connect your sales, service and customer experience.",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Automate workflows and unlock smarter operations.",
  },
  {
    id: "custom",
    title: "Custom Solution",
    description: "Have something specific in mind? Let's discuss it.",
  },
];

export const MEETING_TYPES: MeetingTypeOption[] = [
  {
    id: "discovery-20",
    title: "20-minute Discovery Call",
    minutes: 20,
    description: "A quick intro to your goals and current setup.",
  },
  {
    id: "strategy-30",
    title: "30-minute Strategy Session",
    minutes: 30,
    description: "Go deeper on priorities, channels and roadmap.",
  },
  {
    id: "solution-45",
    title: "45-minute Solution Discussion",
    minutes: 45,
    description: "Walk through a tailored approach with our specialists.",
  },
];

export const CRM_OPTIONS = [
  "Salesforce",
  "HubSpot",
  "Microsoft Dynamics",
  "Other CRM",
  "Spreadsheets",
  "No CRM",
  "Other",
] as const;

export const getService = (id: string | null) => SERVICES.find((s) => s.id === id) ?? null;
export const getMeetingType = (id: string | null) =>
  MEETING_TYPES.find((m) => m.id === id) ?? MEETING_TYPES[0];
