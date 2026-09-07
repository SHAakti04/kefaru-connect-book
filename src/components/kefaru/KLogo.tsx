interface Props {
  className?: string;
  tone?: "dark" | "light";
}

export function KLogo({ className, tone = "dark" }: Props) {
  const primary = tone === "light" ? "var(--color-primary-foreground)" : "var(--color-accent-dark)";
  const mark = tone === "light" ? "var(--color-primary-foreground)" : "var(--color-primary)";
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path d="M4 3h7l-8 13 8 13H4L-4 16z" transform="translate(8)" fill={mark} />
        <path d="M18 3h7L14 16l11 13h-7L7 16z" fill={mark} opacity="0.55" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-extrabold tracking-tight" style={{ color: primary }}>
          Kefaru Tech
        </span>
        <span
          className="mt-[3px] text-[0.4rem] font-semibold tracking-[0.18em] uppercase opacity-70"
          style={{ color: primary }}
        >
          Global vision · Fearless execution
        </span>
      </span>
    </span>
  );
}
