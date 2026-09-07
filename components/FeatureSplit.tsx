"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import featureImg from "@/img/featuresplit-1.jpg";
import featureImg2 from "@/img/featuresplit-2.jpg";

export default function FeatureSplit() {
  return (
    <section className="bg-bone">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:pt-16 md:pb-16 md:pl-16 md:pr-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden"
          >
            <Image
              src={featureImg}
              alt="Zuhr street style look"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-sm text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display italic text-3xl md:text-4xl leading-tight"
            >
              Don&apos;t miss this season&apos;s must-haves
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-40 aspect-[4/5] mx-auto md:mx-0 mt-8 overflow-hidden shadow-xl"
            >
              <Image
                src={featureImg2}
                alt="Featured Zuhr piece"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 text-sm leading-relaxed text-ink/60"
            >
              Fashion designed for confidence, comfort, and everyday
              elegance — a small edit of pieces we keep reaching for.
            </motion.p>

            <motion.a
              href="#shop"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-8 bg-rust text-cream text-xs uppercase tracking-widest2 px-6 py-3"
            >
              Shop now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
