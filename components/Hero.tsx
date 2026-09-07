"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImg from "@/img/background.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-wine-deep"
    >
      {/* blurred noon courtyard photo, drifting slowly behind the hero.
          object-[center_12%] frames the face (upper quarter of the photo)
          so the cover crop never cuts it off; -inset-8 overscan hides the
          blur's soft edges without adding zoom. */}
      <div className="absolute inset-0 animate-drift">
        <div className="absolute -inset-8">
          <Image
            src={backgroundImg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_12%] blur-lg"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-wine-deep" />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Polaroid */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: -14 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-[20%] sm:top-[16%] -translate-x-1/2 sm:translate-x-[-140%] md:translate-x-[-40%] z-10 animate-float-slow"
      >
        <div className="bg-cream p-3 pb-8 w-[190px] sm:w-[220px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-ink/10">
            <Image
              src={backgroundImg}
              alt="Zuhr noon courtyard portrait"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Top-left / top-right meta labels */}
      <div className="absolute top-24 left-6 md:left-10 z-10 text-cream/70 text-[11px] uppercase tracking-widest2 hidden sm:block">
        New Season — Noon Edit
      </div>
      <div className="absolute top-24 right-6 md:right-10 z-10 text-cream/70 text-[11px] uppercase tracking-widest2 text-right hidden sm:block">
        Dhaka · Est. 2026
      </div>

      {/* Giant wordmark */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden pb-2">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display italic text-cream leading-[0.8] text-[20vw] sm:text-[17vw] md:text-[15vw] text-center md:text-left md:pl-8 select-none"
        >
          Zuhr
        </motion.h1>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-6 md:right-10 bottom-40 z-10 flex flex-col items-center gap-3 text-cream/70"
      >
        <span className="text-[10px] uppercase tracking-widest2 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="w-px h-10 bg-cream/40 overflow-hidden relative">
          <motion.span
            className="absolute top-0 left-0 w-full h-1/2 bg-cream"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
