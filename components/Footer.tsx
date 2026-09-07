"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import footerImg from "@/img/footer.jpg";

const linkCols = [
  {
    heading: "Company",
    links: ["Homepage", "Collections", "New arrivals", "About us"],
  },
  {
    heading: "Customer care",
    links: ["Shipping information", "Comfort guide", "Returns", "Gallery"],
  },
  { heading: "Get in touch", links: ["Email", "Instagram", "Contact"] },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-wine text-cream relative overflow-hidden">
      <div className="px-6 md:px-10 pt-20 md:pt-28 pb-10 grid md:grid-cols-2 gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display italic text-4xl md:text-6xl leading-[1.05]"
        >
          Discover the art of
          <br />
          dressing well
        </motion.h2>

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-sm">
          {linkCols.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-[11px] uppercase tracking-widest2 text-cream/50 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-cream/80 hover:text-rust-light transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative h-[38vw] min-h-[220px] max-h-[420px] flex items-end justify-center overflow-hidden px-6 md:px-10 pb-6 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[8%] bottom-[18%] z-10 hidden sm:block animate-float-slow"
        >
          <div className="bg-cream p-2.5 pb-6 w-[130px] shadow-2xl">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={footerImg}
                alt="Zuhr closing portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display italic text-cream leading-[0.8] text-[22vw] md:text-[17vw] select-none translate-y-[14%]"
        >
          Zuhr
        </motion.p>
      </div>

      <div className="border-t border-cream/15 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-widest2 text-cream/50">
        <span>© {new Date().getFullYear()} Zuhr Studio</span>
        <span>Designed for the pause at noon</span>
      </div>
    </footer>
  );
}
