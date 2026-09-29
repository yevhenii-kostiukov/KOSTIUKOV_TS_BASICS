import type { Product } from "./database.js";

export function getProductValuation(product: Product): string {
  if (product.inStock) {
    const total = product.price * product.quantity;
    return `Загальна вартість товару ${product.name} на складі: ${total} грн.`;
  }

  return `Товар ${product.name} наразі відсутній на складі.`;
}

export function getAvailableProducts(products: Product[]): Product[] {
  return products.filter(product => product.inStock);
}

export function findProductById(
  products: Product[],
  id: number
): Product | null {
  for (const product of products) {
    if (product.id === id) {
      return product;
    }
  }

  return null;
}