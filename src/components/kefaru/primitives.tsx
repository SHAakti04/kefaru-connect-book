import { forwardRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------- Button -------------------------------- */

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-accent-dark shadow-[var(--shadow-soft)] active:scale-[0.985]",
  outline:
    "border border-border bg-surface text-foreground hover:border-primary/50 hover:bg-mint/60 active:scale-[0.985]",
  ghost: "text-foreground hover:bg-mint/70",
  light:
    "bg-primary-foreground text-accent-dark hover:bg-mint active:scale-[0.985]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

export interface KButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const KButton = forwardRef<HTMLButtonElement, KButtonProps>(function KButton(
  { className, variant = "primary", size = "md", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
});

/* ------------------------------- Fields -------------------------------- */

const fieldBase =
  "w-full rounded-xl border border-border bg-mint/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-200 focus:border-primary focus:bg-surface focus:ring-4 focus:ring-primary/12 focus:outline-none";

export function FieldShell({
  label,
  htmlFor,
  error,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
        {label}
        {hint ? <span className="ml-1 font-normal text-muted-foreground">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const KInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function KInput({ className, ...props }, ref) {
    return <input ref={ref} className={cn(fieldBase, "min-h-11", className)} {...props} />;
  },
);

export const KSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  function KSelect({ className, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={cn(fieldBase, "min-h-11 appearance-none bg-[length:0] pr-10", className)}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b8a8d' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
        }}
        {...props}
      />
    );
  },
);

export const KTextarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function KTextarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(fieldBase, "min-h-28 resize-y", className)} {...props} />;
  },
);

/* ------------------------------- Eyebrow ------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-6 bg-primary/60" />
      {children}
    </p>
  );
}
