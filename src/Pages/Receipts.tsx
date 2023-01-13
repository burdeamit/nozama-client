import React from "react";
import { useCart } from "../Store/useCart";

import CartItemInterface from "../Models/CartItemInterface";
import ReceiptInterface from "../Models/ReceiptInterface";
import ReceiptsTable from "../Components/Receipt/ReceiptsTable";
import { Box, Divider } from "@mui/material";
import {
  calculateSalesTax,
  calculateTotalPrice,
  calculateTotalSalesTax,
  calculateTotalCost,
} from "../Helpers/ReceiptGenerator";
const Receipts: React.FC = (): JSX.Element => {
  const { items } = useCart();

  const ReceiptData: ReceiptInterface[] = items.map(
    (item: CartItemInterface) => {
      return {
        ...item,
        salesTax: calculateSalesTax(item),
        productTotal: calculateTotalPrice(item, calculateSalesTax(item)),
      };
    }
  );

  return (
    <Box className='receipt-home'>
      <Box className='order-details'>
        <h4 className='text-xl font-bold mb-4'>Order Receipt</h4>
        <ReceiptsTable items={items} receiptData={ReceiptData} />
        <Divider sx={{ mx: 1 }} />
      </Box>
      <Box
        className='order-total'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          mt: 2,
        }}>
        <h4 className='text-l font-bold mb-4'>
          Total Sales Tax: {calculateTotalSalesTax(items).toFixed(2)}
        </h4>
        <h4 className='text-l font-bold mb-4'>
          Total Cost: {calculateTotalCost(items).toFixed(2)}
        </h4>
      </Box>
    </Box>
  );
};

export default Receipts;
