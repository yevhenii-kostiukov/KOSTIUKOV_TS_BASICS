import { products } from "./database.js";
import {
  getProductValuation,
  getAvailableProducts,
  findProductById
} from "./code.js";
import { ShoppingCart } from "./ShoppingCart.js";

console.log("Товари:", products);

console.log(getProductValuation(products[0]!));

console.log("Доступні товари:", getAvailableProducts(products));

console.log("Пошук товару:", findProductById(products, 1));

const cart = new ShoppingCart();

cart.add(products[0]!, 2);
cart.add(products[1]!, 1);

console.log("Загальна сума кошика:", cart.getTotal(), "грн.");