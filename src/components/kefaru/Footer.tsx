import { Link } from "@tanstack/react-router";
import { KLogo } from "./KLogo";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "How it connects", to: "/services" as const },
      { label: "Why Kefaru", to: "/" as const, hash: "why-kefaru" },
      { label: "Book a meeting", to: "/booking" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-accent-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <KLogo tone="light" />
          <address className="mt-6 space-y-1 text-sm not-italic text-primary-foreground/75">
            <p>7 Elwin Rd, Brampton, ON L6X 0E4, Canada</p>
            <p>+1 (416) 356-2342</p>
          </address>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/60">
              {col.title}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={"hash" in l ? l.hash : undefined}
                    className="text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/60">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
            <li>
              <a href="mailto:hello@kefaru.com" className="hover:text-primary-foreground">
                hello@kefaru.com
              </a>
            </li>
            <li>
              <a href="https://www.kefaru.com" className="hover:text-primary-foreground">
                www.kefaru.com
              </a>
            </li>
            <li>
              <Link to="/booking" className="hover:text-primary-foreground">
                Contact the team
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Kefaru Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
