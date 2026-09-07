import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ConnectedSystemsVisual } from "./ConnectedSystemsVisual";
import { KButton } from "./primitives";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="platform" className="relative overflow-hidden bg-mint/45 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          className="min-w-0"
        >
          <motion.p
            variants={fade}
            className="eyebrow"
          >
            Marketing · CRM · AI · Digital experience
          </motion.p>

          <motion.h1
            variants={fade}
            className="mt-5 text-[2.35rem] font-extrabold text-foreground sm:text-5xl lg:text-[3.9rem]"
          >
            Let's build what moves{" "}
            <span className="text-primary">your business forward.</span>
          </motion.h1>

          <motion.p
            variants={fade}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Connect with the Kefaru team to explore how our technology, marketing and digital
            solutions can help your business grow.
          </motion.p>

          <motion.div variants={fade} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/booking" className="sm:w-auto">
              <KButton size="lg" className="w-full sm:w-auto">
                Book a 20-minute meeting
                <ArrowRight className="size-4" />
              </KButton>
            </Link>
            <Link to="/services" className="sm:w-auto">
              <KButton size="lg" variant="outline" className="w-full sm:w-auto">
                Explore our services
                <ArrowRight className="size-4" />
              </KButton>
            </Link>
          </motion.div>
        </motion.div>

        <div className="min-w-0">
          <ConnectedSystemsVisual />
        </div>
      </div>
    </section>
  );
}
