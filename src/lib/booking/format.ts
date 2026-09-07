import { parseISODate } from "./scheduling";

export const formatLongDate = (iso: string) =>
  parseISODate(iso).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

export const formatShortDate = (iso: string) =>
  parseISODate(iso).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/** Returns [startUTC, endUTC] as calendar-link compatible strings. */
export function calendarRange(iso: string, time: string, minutes: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const start = new Date(y, m - 1, d, hh, mm);
  const end = new Date(start.getTime() + minutes * 60000);
  const fmt = (dt: Date) => dt.toISOString().replace(/[-:]|\.\d{3}/g, "");
  return [fmt(start), fmt(end), start, end] as const;
}

export function googleCalendarUrl(opts: {
  title: string;
  details: string;
  iso: string;
  time: string;
  minutes: number;
}) {
  const [start, end] = calendarRange(opts.iso, opts.time, opts.minutes);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: opts.title,
    details: opts.details,
    dates: `${start}/${end}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function outlookCalendarUrl(opts: {
  title: string;
  details: string;
  iso: string;
  time: string;
  minutes: number;
}) {
  const [, , start, end] = calendarRange(opts.iso, opts.time, opts.minutes);
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: opts.title,
    body: opts.details,
    startdt: start.toISOString(),
    enddt: end.toISOString(),
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}
