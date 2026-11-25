class Product {
  #name;
  #price;
  #stock;

  constructor({name, price, stock}) {
    this.#name = this.#normalizeName(name);
    this.#price = price;
    this.#stock = stock;
  }

  #normalizeName(name) {
    const trimmedName = name.trim();
    const firstLetter = trimmedName[0].toUpperCase();
    const copyName = trimmedName.slice(1).toLowerCase();
    return firstLetter + copyName;
  }

  isInStock() {
    if (this.stock > 0) {
      return true;
    }
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice > 0) {
      this.#price = newPrice;
    }
  }

  get stock() {
    return this.#stock;
  }

  set stock(newStock) {
    this.#stock = newStock;
  }

  describe() {
    console.log(`Товар: ${this.name}, ціна: ${this.price} грн`);
  }

  isInStock() {
    return this.stock > 0;
  }

  sell(quantity) {
    if (this.stock <= quantity) {
      return false;
    }
    else {
      this.stock = this.stock - quantity;
      return true;
    }
  }

  restock(quantity) {
    this.stock = this.stock + quantity;
  }

  getPriceWithDiscount(discount) {
    const priceWithDiscount = this.price / 100 * (100-discount);
    return priceWithDiscount;
  }

  static isValidPrice(price) {
    if (Number.isInteger(price) && price > 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
}

const laptop = new Product({
  name: "   НОУТБУК   ",
  price: 25000,
  stock: 5,
});
 
const phone = new Product({
  name: "  sMarTfOn ",
  price: 15000,
  stock: 0,
});
 
console.log(laptop.name); // "Ноутбук"
console.log(laptop.describe()); // "Товар: Ноутбук, ціна: 25000 грн"
console.log(phone.isInStock()); // false
 
console.log(laptop.sell(2)); // true
console.log(laptop.stock); // 3
console.log(laptop.sell(10)); // false
console.log(laptop.stock); // 3
 
phone.restock(10);
console.log(phone.stock); // 10
 
console.log(laptop.getPriceWithDiscount(20)); // 20000
console.log(laptop.price); // 25000 (не змінилась)
 
laptop.price = -100; // помилка в консолі
console.log(laptop.price); // 25000
 
laptop.price = 27000;
console.log(laptop.price); // 27000
 
console.log(Product.isValidPrice(500)); // true
console.log(Product.isValidPrice("500")); // false
