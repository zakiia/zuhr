"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState(3);

  return (
    <section id="gallery" className="bg-cream pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex h-[280px] md:h-[420px] w-full gap-1 px-1"
      >
        {galleryImages.map((src, i) => (
          <button
            key={i}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="relative h-full overflow-hidden transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ flexGrow: active === i ? 5 : 1 }}
            aria-label={`Show gallery image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Zuhr campaign frame ${i + 1}`}
              fill
              className="object-cover"
            />
            <span
              className={`absolute top-3 left-3 text-[10px] tracking-widest2 text-cream transition-opacity duration-300 ${
                active === i ? "opacity-100" : "opacity-70"
              }`}
            >
              {String(i + 2).padStart(2, "0")}
            </span>
          </button>
        ))}
      </motion.div>
    </section>
  );
}
