/**
 * Mock scheduling layer.
 *
 * Everything the UI needs about availability and booking creation goes through
 * these functions. Swapping this file for a real backend (Google Calendar,
 * Outlook, a Calendly-style API or an internal service) requires no UI changes:
 * keep the signatures and return shapes.
 */
import type { BookingDraft, BookingRecord, TimeSlot } from "./types";

const BASE_TIMES = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const DAYS_BOOKABLE_AHEAD = 60;

export const toISODate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const parseISODate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
};

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/** Deterministic pseudo-random so availability is stable across renders. */
const seed = (iso: string) => {
  let h = 0;
  for (let i = 0; i < iso.length; i++) h = (h * 31 + iso.charCodeAt(i)) % 9973;
  return h;
};

export function isDateBookable(iso: string): boolean {
  const date = parseISODate(iso);
  const today = startOfToday();
  const max = new Date(today);
  max.setDate(max.getDate() + DAYS_BOOKABLE_AHEAD);
  if (date < today || date > max) return false;
  const day = date.getDay();
  if (day === 0 || day === 6) return false;
  // a small number of fully-booked weekdays
  return seed(iso) % 11 !== 0;
}

/** Bookable dates for a given month (0-indexed month). */
export async function getAvailableDates(year: number, month: number): Promise<string[]> {
  await delay(120);
  const out: string[] = [];
  const cursor = new Date(year, month, 1);
  while (cursor.getMonth() === month) {
    const iso = toISODate(cursor);
    if (isDateBookable(iso)) out.push(iso);
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}

export function formatTimeLabel(value: string): string {
  const [h, m] = value.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(hour12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${suffix}`;
}

export async function getAvailableTimes(iso: string): Promise<TimeSlot[]> {
  await delay(220);
  if (!isDateBookable(iso)) return [];
  const s = seed(iso);
  return BASE_TIMES.map((value, i) => ({
    value,
    label: formatTimeLabel(value),
    available: (s + i * 7) % 5 !== 0,
  }));
}

export function getClientTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
}

export async function createBooking(draft: BookingDraft): Promise<BookingRecord> {
  await delay(1100);
  if (!draft.serviceId || !draft.date || !draft.time) {
    throw new Error("Missing booking information.");
  }
  if (draft.details.email.trim().toLowerCase().endsWith("@example.com")) {
    throw new Error("We couldn't reach that email address. Please use your work email.");
  }
  return {
    reference: `KEF-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    serviceId: draft.serviceId,
    meetingTypeId: draft.meetingTypeId,
    date: draft.date,
    time: draft.time,
    timezone: getClientTimezone(),
    details: draft.details,
    createdAt: new Date().toISOString(),
  };
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
