export type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  quantity: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ноутбук",
    price: 25000,
    inStock: true,
    quantity: 5
  },
  {
    id: 2,
    name: "Мишка",
    price: 800,
    inStock: true,
    quantity: 20
  },
  {
    id: 3,
    name: "Клавіатура",
    price: 1500,
    inStock: false,
    quantity: 0
  },
  {
    id: 4,
    name: "Монітор",
    price: 7500,
    inStock: true,
    quantity: 3
  }
];