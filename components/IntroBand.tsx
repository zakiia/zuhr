"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { categories } from "@/lib/data";
import introImg from "@/img/introbrand.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function IntroBand() {
  return (
    <section className="relative isolate overflow-hidden bg-wine text-cream">
      {/* blurred wine color field behind everything, instead of a flat fill;
          oversized so the blur's faded edges stay clipped out of view */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, #611414 0%, transparent 45%), radial-gradient(circle at 82% 18%, #7a2218 0%, transparent 42%), radial-gradient(circle at 68% 88%, #6b1616 0%, transparent 45%), radial-gradient(circle at 8% 82%, #2f0909 0%, transparent 50%), #4a0f10",
          filter: "blur(70px)",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-cream/15">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-cream/15"
        >
          <p className="text-[11px] uppercase tracking-widest2 text-cream/60 mb-3">
            New Arrivals
          </p>
          <p className="font-display italic text-2xl">Noon Edit, 04</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-cream/15"
        >
          <p className="text-[11px] uppercase tracking-widest2 text-cream/60 mb-3">
            Since
          </p>
          <p className="font-display italic text-2xl">2026</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
          className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-cream/15 text-sm leading-relaxed text-cream/80"
        >
          From effortless essentials to statement pieces, our collections blend
          contemporary design with everyday versatility, cut for the pause
          between morning rush and evening plans.
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={3}
          className="p-8 md:p-10 text-sm leading-relaxed text-cream/80"
        >
          We believe great style should feel effortless. Every piece is designed
          to help you look confident and move freely — quality and timeless
          design that stays relevant season after season.
        </motion.div>
      </div>

      <div className="relative flex justify-center py-16 md:py-24">
        {/* column separators continued through the image band, so the
            grid lines read unbroken from the section top to bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/4 -ml-px hidden w-px bg-cream/15 md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 -ml-px w-px bg-cream/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-3/4 -ml-px hidden w-px bg-cream/15 md:block"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-[180px] h-[240px] md:w-[220px] md:h-[290px] [perspective:900px]"
        >
          {/* endless 3D sway — the card turns gently in perspective */}
          <motion.div
            animate={{ rotateY: [-10, 10, -10], rotateX: [6, -6, 6] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full"
          >
            <div className="relative h-full w-full overflow-hidden bg-ink/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src={introImg}
                alt="Zuhr portrait in red light"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-cream/15 text-sm">
        {categories.map((c, i) => (
          <motion.a
            key={c.label}
            href="#shop"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group p-6 md:p-8 border-b md:border-b-0 border-r last:border-r-0 border-cream/15 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0 flex items-baseline justify-between gap-2 hover:bg-cream/[0.04] transition-colors"
          >
            <span className="font-display italic text-rust-light group-hover:translate-x-1 transition-transform">
              {c.label}
            </span>
            <span className="text-[10px] text-cream/50">({c.count})</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
