"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-cream/90 backdrop-blur-md text-ink shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "py-6 bg-transparent text-cream"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-display italic text-xl tracking-tight"
        >
          Zuhr
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest2 font-medium">
          <a href="#shop" className="hover:opacity-60 transition-opacity">
            Shop
          </a>
          <a href="#story" className="hover:opacity-60 transition-opacity">
            Story
          </a>
          <a href="#gallery" className="hover:opacity-60 transition-opacity">
            Gallery
          </a>
          <a href="#footer" className="hover:opacity-60 transition-opacity">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2">
          <span className="hidden sm:inline opacity-70">Dhaka, BD</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="tabular-nums opacity-70">{time}</span>
          <button
            aria-label="Menu"
            className="flex flex-col gap-[5px] group ml-2"
          >
            <span className="block w-5 h-px bg-current transition-transform group-hover:translate-x-1" />
            <span className="block w-5 h-px bg-current transition-transform group-hover:-translate-x-1" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
