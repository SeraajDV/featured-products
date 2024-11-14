type Products = {
  image: string;
  name: string;
  category: string;
  previousPrice?: string;
  currentPrice: string;
  colors?: string[];
  rating: number;
};

export const products: Products[] = [
  {
    image: "products/product1.png",
    name: "DNK Yellow Shoes",
    category: "Men",
    previousPrice: "$150.00",
    currentPrice: "$120.00",
    rating: 0
  },
  {
    image: "products/product2.png",
    name: "DNK Blue Shoes",
    category: "Men",
    currentPrice: "$200.00 - $240.00",
    colors: ["bg-sky-600", "bg-lime-400", "bg-orange-700"],
    rating: 0
  },
  {
    image: "products/product3.png",
    name: "Dark Brown Jeans",
    category: "Men",
    currentPrice: "$150.00",
    rating: 0
  },
  {
    image: "products/product4.png",
    name: "Blue Denim Jeans",
    category: "Women",
    currentPrice: "$150.00",
    rating: 0
  },
  {
    image: "products/product5.png",
    name: "Basic Gray Jeans",
    category: "Women",
    currentPrice: "$150.00",
    rating: 0
  },
  {
    image: "products/product6.png",
    name: "Blue Denim Shorts",
    category: "Men",
    previousPrice: "$150.00",
    currentPrice: "$130.00",
    rating: 0
  },
  {
    image: "products/product7.png",
    name: "Anchor Bracelet",
    category: "Accessories",
    currentPrice: "$150.00 - $180.00",
    colors: ["bg-black","bg-yellow-700","bg-orange-700"],
    rating: 0
  },
  {
    image: "products/product8.png",
    name: "Boho Bangle Bracelet",
    category: "Accessories",
    currentPrice: "$150.00 - $170.00",
    colors: ["bg-teal-500","bg-lime-400","bg-orange-700"],
    rating: 0
  },
  {
    image: "products/product9.png",
    name: "Light Brown Purse",
    category: "Accessories",
    currentPrice: "$150.00",
    rating: 0
  },
  {
    image: "products/product10.png",
    name: "Bright Red Bag",
    category: "Accessories",
    currentPrice: "$100.00 - $140.00",
    colors: ["bg-sky-600","bg-amber-500","bg-fuchsia-500", "bg-orange-700"],
    rating: 0
  },
];