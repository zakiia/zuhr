"use client";

import { motion } from "framer-motion";

export default function Essence() {
  return (
    <section className="bg-cream text-ink py-24 md:py-32 px-6 md:px-10">
      <div className="grid md:grid-cols-2 gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-widest2 text-rust mb-4">
            Everyday Essentials (100+)
          </p>
          <p className="text-sm leading-relaxed text-ink/60 max-w-sm">
            Explore the craftsmanship, textures, and timeless silhouettes
            that define our approach to modern fashion. Discover the
            details, inspiration, and artistry behind every piece in our
            latest collection.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display italic text-4xl md:text-6xl text-right leading-[1.05]"
        >
          The essence of
          <br />
          contemporary style
        </motion.h2>
      </div>
    </section>
  );
}
