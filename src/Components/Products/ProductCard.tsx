import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import "./ProductCard.css";
import ProductInterface from "../../Models/ProductInterface";
import { useCart } from "../../Store/useCart";

const ProductsList: ProductInterface[] = [
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
    name: "Music CD : Kishore Kumar",
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

  {
    id: "6",
    name: "Calvin Klein Perfume",
    price: 27.99,
    stockAmount: 100,
    quantity: 1,
    image: "./images/perfume.jpg",
    description: "A imported bottle of perfume 2",
    type: "Cosmetics",
    isImported: true,
    isTaxable: true,
  },

  {
    id: "7",
    name: "Mysore Sandal Perfume",
    price: 18.99,
    stockAmount: 100,
    quantity: 1,
    image: "./images/perfume.jpg",
    description: "A local bottle of perfume",
    type: "Cosmetics",
    isImported: false,
    isTaxable: true,
  },

  {
    id: "8",
    name: "Headache Pills",
    price: 9.75,
    stockAmount: 100,
    quantity: 1,
    image: "./images/pills.jpg",
    description: "Packet of headache pills",
    type: "Medical",
    isImported: false,
    isTaxable: false,
  },

  {
    id: "9",
    name: "A box of imported chocolates",
    price: 11.25,
    stockAmount: 100,
    quantity: 1,
    image: "./images/chocolate_box.jpg",
    description: "A box of imported chocolates",
    type: "Food",
    isImported: true,
    isTaxable: false,
  },
];

const ProductCard = () => {
  const { addItem } = useCart();

  return (
    <>
      <Grid className='product-container' container spacing={2}>
        {ProductsList.length ? (
          ProductsList.map((product: ProductInterface) => (
            <Grid
              item
              key={product.id}
              className='product-card'
              xs={12}
              sm={4}
              md={3}
              xl={3}>
              <Box className=' card-shadow'>
                <Box className='product-img-box'>
                  <img
                    className='product-img'
                    src={product.image}
                    alt={product.name}
                  />
                </Box>
                <Box
                  className='product-info-box'
                  sx={{ p: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    className='product-type text-blue-600 font-bold'
                    variant='subtitle1'
                    sx={{ fontSize: "13px" }}>
                    {product.type}
                  </Typography>
                  <Typography variant='h6' sx={{ fontWeight: "900" }}>
                    {product.name}
                  </Typography>
                  <Divider sx={{ my: 0.5 }} />
                  <Typography
                    className='product-description text-gray-500'
                    variant='body1'>
                    {product.description}
                  </Typography>

                  <Typography variant='body1' sx={{ mt: 1, fontWeight: "700" }}>
                    Price: {product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant='contained'
                    sx={{ mt: 1 }}
                    onClick={() => {
                      addItem(product);
                    }}>
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant='h6' sx={{ fontWeight: "900" }}>
            No Products Found
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default ProductCard;
