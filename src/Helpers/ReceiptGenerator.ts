import CartItemInterface from "../Models/CartItemInterface";

// calculate sales tax
export const calculateSalesTax = (item: CartItemInterface): number => {
  let salesTax: number = 0;
  if (
    // exempt items
    item.type !== "Book" &&
    item.type !== "Food" &&
    item.type !== "Medical"
  ) {
    // 10% sales tax on non-exempt items
    salesTax += item.price * 0.1;
  }
  if (item.isImported) {
    // 5% sales tax on imported items
    salesTax += item.price * 0.05;
  }
  return Math.ceil(salesTax * 20) / 20;
};

// calculate total price including tax
export const calculateTotalPrice = (
  item: CartItemInterface,
  salesTax: number
): number => {
  return (item.price + salesTax) * item.quantity;
};

// calculate total sales tax for all items in the cart
export const calculateTotalSalesTax = (items: CartItemInterface[]): number => {
  let totalSalesTax = 0;
  items.forEach((item: CartItemInterface) => {
    totalSalesTax += calculateSalesTax(item);
  });
  return totalSalesTax;
};

// calculate total cost of all items in the cart
export const calculateTotalCost = (items: CartItemInterface[]): number => {
  let totalCost = 0;
  items.forEach((item): void => {
    totalCost += calculateTotalPrice(item, calculateSalesTax(item));
  });
  return totalCost;
};
