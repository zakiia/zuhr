"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/data";

export default function Shop() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState<string[]>([]);

  const cats = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = products.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="shop" className="bg-wine text-cream pb-24">
      <div className="mx-4 md:mx-8 bg-cream text-ink">
        <div className="flex flex-wrap items-center gap-4 justify-between px-6 py-5 border-b border-ink/10">
          <p className="font-display italic text-lg">Zuhr Collections</p>

          <div className="flex items-center gap-3 text-xs order-3 md:order-2 w-full md:w-auto">
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="bg-transparent border border-ink/20 rounded-full px-3 py-1.5 text-xs uppercase tracking-widest2 outline-none focus:border-rust transition-colors"
            >
              {cats.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product..."
              className="bg-transparent border-b border-ink/20 px-1 py-1.5 text-xs outline-none focus:border-rust transition-colors w-32 md:w-44"
            />
          </div>

          <div className="order-2 md:order-3 flex items-center gap-2 text-xs uppercase tracking-widest2">
            <span>Cart</span>
            <motion.span
              key={cart.length}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rust text-cream text-[10px]"
            >
              {String(cart.length).padStart(2, "0")}
            </motion.span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative border-b border-r border-ink/10 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <button
                  onClick={() => setCart((c) => [...c, p.id])}
                  className="absolute bottom-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-cream text-ink text-[10px] uppercase tracking-widest2 px-3 py-2"
                >
                  Add to cart
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm">{p.name}</p>
                <p className="text-sm text-ink/50">${p.price}</p>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center text-ink/40 text-sm">
              No pieces match “{query}”.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
