import { Box } from "@mui/system";
import ProductCard from "../Components/Products/ProductCard";

const Products = () => {
  return (
    <Box className='products-home'>
      <h4 className='text-xl font-bold mb-4'>All Products</h4>

      <ProductCard />
    </Box>
  );
};

export default Products;
