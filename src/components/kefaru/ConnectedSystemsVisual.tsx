import { motion, useReducedMotion } from "motion/react";
import { Building2, Megaphone, Route, TrendingUp, Users } from "lucide-react";

const nodes = [
  { icon: Building2, label: "Client", pos: "left-0 top-2" },
  { icon: Users, label: "Marketing Team", pos: "right-0 top-2" },
  { icon: Route, label: "Strategy", pos: "left-0 bottom-2" },
  { icon: TrendingUp, label: "Growth", pos: "right-0 bottom-2" },
];

export function ConnectedSystemsVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[520px] rounded-[2rem] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="relative aspect-[5/4] w-full">
        {/* connecting rings + lines */}
        <svg
          viewBox="0 0 400 320"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          fill="none"
        >
          <circle cx="200" cy="160" r="120" stroke="var(--color-border)" strokeDasharray="3 6" />
          <circle cx="200" cy="160" r="86" stroke="var(--color-border)" strokeDasharray="3 6" />
          {[
            "M78 66 C 130 90, 150 120, 176 148",
            "M322 66 C 270 90, 250 120, 224 148",
            "M78 254 C 130 230, 150 200, 176 172",
            "M322 254 C 270 230, 250 200, 224 172",
          ].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              stroke="var(--color-primary)"
              strokeWidth="1.4"
              strokeOpacity="0.5"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.12, ease: "easeOut" }}
            />
          ))}
          {[
            [140, 108],
            [260, 108],
            [140, 212],
            [260, 212],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="var(--color-primary)" />
          ))}
        </svg>

        {/* center hub */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.25 }}
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
        >
          <div className="grid size-20 place-items-center rounded-2xl bg-accent-dark text-primary-foreground shadow-[var(--shadow-lift)] sm:size-24">
            <Megaphone className="size-8" strokeWidth={1.6} />
          </div>
          <span className="text-[0.7rem] font-semibold text-muted-foreground">Kefaru Tech</span>
        </motion.div>

        {/* satellite cards */}
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${n.pos} w-[38%] max-w-[150px]`}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-border bg-surface p-3 shadow-[var(--shadow-soft)] sm:p-4"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-mint text-primary">
                <n.icon className="size-4" strokeWidth={1.9} />
              </span>
              <p className="mt-2 text-xs font-bold text-foreground sm:text-sm">{n.label}</p>
              <span aria-hidden className="mt-2 block h-0.5 w-6 rounded-full bg-primary/50" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
