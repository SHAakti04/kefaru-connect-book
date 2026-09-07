import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { BookingDraft, BookingRecord, ClientDetails } from "./types";

const emptyDetails: ClientDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  website: "",
  currentStack: "",
  notes: "",
};

const initialDraft: BookingDraft = {
  serviceId: null,
  meetingTypeId: "discovery-20",
  date: null,
  time: null,
  details: emptyDetails,
};

interface BookingContextValue {
  draft: BookingDraft;
  update: (patch: Partial<BookingDraft>) => void;
  updateDetails: (patch: Partial<ClientDetails>) => void;
  reset: () => void;
  booking: BookingRecord | null;
  setBooking: (b: BookingRecord | null) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<BookingDraft>(initialDraft);
  const [booking, setBooking] = useState<BookingRecord | null>(null);

  const update = useCallback((patch: Partial<BookingDraft>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  }, []);

  const updateDetails = useCallback((patch: Partial<ClientDetails>) => {
    setDraft((prev) => ({ ...prev, details: { ...prev.details, ...patch } }));
  }, []);

  const reset = useCallback(() => {
    setDraft(initialDraft);
    setBooking(null);
  }, []);

  const value = useMemo(
    () => ({ draft, update, updateDetails, reset, booking, setBooking }),
    [draft, update, updateDetails, reset, booking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
