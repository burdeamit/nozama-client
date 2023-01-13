import CartItemInterface from "../Models/CartItemInterface";

const cartListTwo: CartItemInterface[] = [
  {
    id: "4",
    name: "Snickers Box of Chocolates",
    price: 10.0,
    stockAmount: 100,
    quantity: 1,
    image: "./images/chocolate_box.jpg",
    description: "An imported Box of Chocolates",
    type: "Food",
    isImported: true,
    isTaxable: false,
  },

  {
    id: "5",
    name: "Dior perfume",
    price: 47.5,
    stockAmount: 100,
    quantity: 1,
    image: "./images/perfume.jpg",
    description: "An imported bottle of perfume 1",
    type: "Cosmetics",
    isImported: true,
    isTaxable: true,
  },
];
