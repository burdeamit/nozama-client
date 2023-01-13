import CartItemInterface from "../Models/CartItemInterface";

const cartListOne: CartItemInterface[] = [
  {
    id: "1",
    name: "Fire and Blood",
    price: 12.49,
    stockAmount: 100,
    quantity: 1,
    image: "./images/book.jpg",
    description: "A Book by George R.R. Martin",
    type: "Book",
    isImported: false,
    isTaxable: false,
  },

  {
    id: "2",
    name: "Best of Kishore Kumar",
    price: 14.99,
    stockAmount: 100,
    quantity: 1,
    image: "./images/music_cd.jpg",
    description: "A music CD",
    type: "music",
    isImported: false,
    isTaxable: true,
  },

  {
    id: "3",
    name: "Amul Chocolate Bar",
    price: 0.85,
    stockAmount: 100,
    quantity: 1,
    image: "./images/chocolate.jpg",
    description: "A chocolate Bar by Amul",
    type: "Food",
    isImported: false,
    isTaxable: false,
  },
];
