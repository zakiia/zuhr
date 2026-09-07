"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/data";

export default function Shop() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const cats = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = products.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      p.name.toLowerCase().includes(query.toLowerCase())
  );

  const cartItems = products
    .filter((p) => cart[p.id])
    .map((p) => ({ product: p, qty: cart[p.id] }));
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = cartItems.reduce(
    (a, { product, qty }) => a + product.price * qty,
    0
  );

  const addToCart = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));

  const changeQty = (id: string, delta: number) =>
    setCart((c) => {
      const next = (c[id] ?? 0) + delta;
      if (next <= 0) {
        const rest = { ...c };
        delete rest[id];
        return rest;
      }
      return { ...c, [id]: next };
    });

  const removeFromCart = (id: string) =>
    setCart((c) => {
      const rest = { ...c };
      delete rest[id];
      return rest;
    });

  return (
    <section id="shop" className="bg-wine text-cream pb-24">
      <div className="mx-4 md:mx-8 bg-cream text-ink">
        <div className="relative flex flex-wrap items-center gap-4 justify-between px-6 py-5 border-b border-ink/10">
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

          <button
            onClick={() => setCartOpen((o) => !o)}
            aria-expanded={cartOpen}
            className="order-2 md:order-3 flex items-center gap-2 text-xs uppercase tracking-widest2 hover:text-rust transition-colors"
          >
            <span>Cart</span>
            <motion.span
              key={cartCount}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rust text-cream text-[10px]"
            >
              {String(cartCount).padStart(2, "0")}
            </motion.span>
          </button>

          <AnimatePresence>
            {cartOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setCartOpen(false)}
                  aria-hidden
                />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 z-30 w-[320px] md:w-[380px] max-w-[calc(100vw-2rem)] bg-cream border border-ink/10 shadow-2xl"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-ink/10">
                    <p className="font-display italic">
                      Your cart{" "}
                      <span className="not-italic text-xs text-ink/50">
                        ({String(cartCount).padStart(2, "0")})
                      </span>
                    </p>
                    <button
                      onClick={() => setCartOpen(false)}
                      aria-label="Close cart"
                      className="w-6 h-6 grid place-items-center text-ink/50 hover:text-rust transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {cartItems.length === 0 ? (
                    <p className="px-4 py-10 text-center text-sm text-ink/40">
                      Your cart is empty.
                    </p>
                  ) : (
                    <>
                      <div className="max-h-[50vh] overflow-y-auto">
                        {cartItems.map(({ product, qty }) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-3 px-4 py-3 border-b border-ink/10"
                          >
                            <div className="relative w-12 aspect-[4/5] overflow-hidden bg-ink/5 shrink-0">
                              <Image
                                src={product.img}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm truncate">{product.name}</p>
                              <p className="text-xs text-ink/50">
                                ${product.price}
                              </p>
                              <div className="mt-1.5 inline-flex items-center border border-ink/20">
                                <button
                                  onClick={() => changeQty(product.id, -1)}
                                  aria-label={`Decrease quantity of ${product.name}`}
                                  className="px-2 py-0.5 text-xs hover:bg-ink/5 transition-colors"
                                >
                                  −
                                </button>
                                <span className="px-2 text-xs">{qty}</span>
                                <button
                                  onClick={() => changeQty(product.id, 1)}
                                  aria-label={`Increase quantity of ${product.name}`}
                                  className="px-2 py-0.5 text-xs hover:bg-ink/5 transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-sm">${product.price * qty}</p>
                              <button
                                onClick={() => removeFromCart(product.id)}
                                aria-label={`Remove ${product.name} from cart`}
                                className="mt-1.5 w-6 h-6 grid place-items-center border border-ink/20 text-xs text-ink/50 hover:border-rust hover:text-rust transition-colors"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between px-4 py-3 text-xs uppercase tracking-widest2">
                        <span>Total</span>
                        <span>${cartTotal}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
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
                  onClick={() => addToCart(p.id)}
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
