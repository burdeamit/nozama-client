import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./Layout/Header";
import AppRoutes from "./Routes/AppRoutes";
import { CartProvider } from "./Store/useCart";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
