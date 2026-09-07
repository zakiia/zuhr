export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Meridian Jacket",
    price: 180,
    category: "Outerwear",
    img: "https://picsum.photos/seed/zuhr-p1/600/760",
  },
  {
    id: "p2",
    name: "Harper Hoodie",
    price: 130,
    category: "Knitwear",
    img: "https://picsum.photos/seed/zuhr-p2/600/760",
  },
  {
    id: "p3",
    name: "Celeste Shirt",
    price: 110,
    category: "Shirting",
    img: "https://picsum.photos/seed/zuhr-p3/600/760",
  },
  {
    id: "p4",
    name: "Ember Graphic Hood",
    price: 145,
    category: "Knitwear",
    img: "https://picsum.photos/seed/zuhr-p4/600/760",
  },
  {
    id: "p5",
    name: "Noon Knit Tee",
    price: 75,
    category: "Essentials",
    img: "https://picsum.photos/seed/zuhr-p5/600/760",
  },
  {
    id: "p6",
    name: "Signature Zip",
    price: 165,
    category: "Outerwear",
    img: "https://picsum.photos/seed/zuhr-p6/600/760",
  },
  {
    id: "p7",
    name: "Dune Crewneck",
    price: 120,
    category: "Knitwear",
    img: "https://picsum.photos/seed/zuhr-p7/600/760",
  },
  {
    id: "p8",
    name: "Timeless Tee",
    price: 65,
    category: "Essentials",
    img: "https://picsum.photos/seed/zuhr-p8/600/760",
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
