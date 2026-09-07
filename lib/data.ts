import type { StaticImageData } from "next/image";

import shop1 from "@/img/shop1.jpg";
import shop2 from "@/img/shop2.jpg";
import shop3 from "@/img/shop3.jpg";
import shop4 from "@/img/shop4.jpg";
import shop5 from "@/img/shop5.jpg";
import shop6 from "@/img/shop6.jpg";
import shop7 from "@/img/shop7.jpg";
import shop8 from "@/img/shop8.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  img: StaticImageData;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Meridian Jacket",
    price: 180,
    category: "Outerwear",
    img: shop1,
  },
  {
    id: "p2",
    name: "Harper Hoodie",
    price: 130,
    category: "Knitwear",
    img: shop2,
  },
  {
    id: "p3",
    name: "Celeste Shirt",
    price: 110,
    category: "Shirting",
    img: shop3,
  },
  {
    id: "p4",
    name: "Ember Graphic Hood",
    price: 145,
    category: "Knitwear",
    img: shop4,
  },
  {
    id: "p5",
    name: "Noon Knit Tee",
    price: 75,
    category: "Essentials",
    img: shop5,
  },
  {
    id: "p6",
    name: "Signature Zip",
    price: 165,
    category: "Outerwear",

    img: shop6,
  },
  {
    id: "p7",
    name: "Dune Crewneck",
    price: 120,
    category: "Knitwear",
    img: shop7,
  },
  {
    id: "p8",
    name: "Timeless Tee",
    price: 65,
    category: "Essentials",
    img: shop8,
  },
];

export const categories = [
  { label: "Everyday Essentials", count: "120+" },
  { label: "Modern Classics", count: "80+" },
  { label: "Seasonal Edit", count: "45+" },
  { label: "Statement Pieces", count: "30+" },
];

export const galleryImages = [
  "https://picsum.photos/seed/zuhr-g1/500/650",
  "https://picsum.photos/seed/zuhr-g2/500/650",
  "https://picsum.photos/seed/zuhr-g3/500/650",
  "https://picsum.photos/seed/zuhr-g4/700/650",
  "https://picsum.photos/seed/zuhr-g5/500/650",
  "https://picsum.photos/seed/zuhr-g6/500/650",
];
