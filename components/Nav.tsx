"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#footer", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:opacity-60 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2">
          <span className="hidden sm:inline opacity-70">Dhaka, BD</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="tabular-nums opacity-70">{time}</span>
          <button
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col gap-[5px] group ml-2 p-1 -m-1"
          >
            <span
              className={`block w-5 h-px bg-current transition-transform duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-[3px]"
                  : "group-hover:translate-x-1"
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-transform duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-[3px]"
                  : "group-hover:-translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mt-3 px-6 pb-4 flex flex-col text-[11px] uppercase tracking-widest2 font-medium bg-cream/95 backdrop-blur-md text-ink border-y border-ink/10"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-ink/10 last:border-b-0 hover:text-rust transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
