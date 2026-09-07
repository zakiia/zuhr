"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import storyImg from "@/img/story.jpg";

export default function Story() {
  return (
    <section id="story" className="bg-cream text-ink py-24 md:py-32">
      <div className="px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display italic text-rust text-5xl md:text-7xl mb-16"
        >
          Zuhr
        </motion.p>

        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-8 items-start">
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display italic text-2xl mb-2"
            >
              / The story
            </motion.p>
            <p className="text-xs uppercase tracking-widest2 text-ink/50 leading-relaxed">
              Timeless by design
              <br />
              Where craft meets creativity
            </p>

            <p className="text-xs uppercase tracking-widest2 text-ink/40 mt-16">
              Since 2019
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={storyImg}
              alt="Street portrait from the Zuhr collection"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display italic text-3xl md:text-5xl leading-[1.1]"
            >
              Where craftsmanship meets an ordinary Tuesday afternoon
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center justify-between text-xs uppercase tracking-widest2 text-ink/50"
            >
              <span>’026, Zuhr Studio</span>
              <span>Dhaka, BD</span>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 max-w-md text-sm leading-relaxed text-ink/60"
        >
          Discover the latest additions to our collection. From elevated
          basics to trend-forward essentials, find your next favourite
          piece — made to outlast the trend that inspired it.
        </motion.p>
      </div>
    </section>
  );
}
