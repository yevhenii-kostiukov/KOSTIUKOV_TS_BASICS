import type { Product } from "./database.js";

type CartItem = {
  product: Product;
  amount: number;
};

export class ShoppingCart {
  #items: CartItem[] = [];

  add(product: Product, amount: number): void {
    this.#items.push({ product, amount });
  }

  getTotal(): number {
    return this.#items.reduce(
      (sum, item) => sum + item.product.price * item.amount,
      0
    );
  }
}