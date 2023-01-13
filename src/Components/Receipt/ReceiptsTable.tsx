import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ProductInterface from "../../Models/ProductInterface";
import ReceiptInterface from "../../Models/ReceiptInterface";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    type: "string",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "salesTax",
    headerName: "Tax (%)",
    description:
      "Imported items have a 5% tax rate, non-exempt items have a 10% tax rate.",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "productTotal",
    headerName: "Total",
    type: "number",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

interface props {
  items: ProductInterface[];
  receiptData: ReceiptInterface[];
}

export default function ReceiptsTable(props: props): JSX.Element {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.receiptData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
