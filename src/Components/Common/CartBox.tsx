import React from "react";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  isImported: boolean;
  isTaxable: boolean;
};

type CartBoxProps = {
  items: Item[];
  total: number;
  tax: number;
  subTotal: number;
  onCheckout: () => void;
};

const CartBox = (CartBoxProps: CartBoxProps) => {
  return <div>CartBox</div>;
};

export default CartBox;

// const CartBox = (CartBoxProps: any) => {
//   return <div>CartBox</div>;
// };

// CartBox.propTypes = {};

// export default CartBox;
