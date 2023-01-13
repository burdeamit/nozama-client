import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Receipts from "../Pages/Receipts";
import CartsPage from "../Pages/CartsPage";
function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<CartsPage />} />
      <Route path='/receipts' element={<Receipts />} />
    </Routes>
  );
}

export default AppRoutes;
