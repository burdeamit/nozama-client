import React, { createContext, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stockAmount: number;
  image: string;
  description: string;
  type: string;
  isImported: boolean;
  isTaxable: boolean;
}

interface CartItemsContext {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartItemsContext>({
  items: [],
  addItem: (): void => {},
  removeItem: (): void => {},
  updateQuantity: (): void => {},
});

export const useCart = (): CartItemsContext => {
  return useContext(CartContext);
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem): void => {
    // Check if item is already in the cart
    const existingItem = items.find((i: CartItem) => i.id === item.id);
    if (existingItem) {
      // If item already exists, update the quantity
      updateQuantity(item.id, existingItem.quantity + 1);
    } else {
      // If item is not in the cart, add it
      setItems((prevItems: CartItem[]): CartItem[] => [...prevItems, item]);
    }
  };

  const removeItem = (id: string): void => {
    setItems((prevItems: CartItem[]): CartItem[] =>
      prevItems.filter((item: CartItem) => item.id !== id)
    );
  };

  const updateQuantity = (id: string, quantity: number): void => {
    setItems((prevItems: CartItem[]): CartItem[] =>
      prevItems.map((item: CartItem): CartItem => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
