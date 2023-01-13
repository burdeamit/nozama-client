import { Grid, Box, Typography, IconButton, Divider } from "@mui/material";
import { useCart } from "../../Store/useCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const CartProducts = (): JSX.Element => {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <Grid className='cart-items-container' container spacing={2}>
      {items?.length ? (
        items.map((item) => (
          <Grid
            item
            className='cart-item'
            key={item.id}
            xs={12}
            sm={4}
            md={3}
            xl={3}>
            <Box className='card-shadow'>
              <Box className='cart-item-image product-img-box'>
                <img className='product-img' src={item.image} alt={item.name} />
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box className='cart-item-info'>
                <Typography variant='h6' sx={{ fontWeight: "900" }}>
                  {item.name}
                </Typography>
                <Typography variant='body1' sx={{ mt: 1, fontWeight: "700" }}>
                  Price: {item.price.toFixed(2)}
                </Typography>

                <Typography
                  className='product-description text-gray-500 text-sm'
                  variant='body1'>
                  Quantity: {item.quantity}
                </Typography>

                <Divider sx={{ my: 1 }} />
                <IconButton
                  aria-label='add'
                  size='small'
                  onClick={() => {
                    updateQuantity(item.id, item.quantity + 1);
                  }}>
                  <AddIcon fontSize='small' />
                </IconButton>
                <IconButton
                  disabled={item.quantity === 0}
                  aria-label='remove'
                  size='small'
                  onClick={() => {
                    updateQuantity(item.id, Math.max(item.quantity - 1, 0));
                  }}>
                  <RemoveIcon fontSize='small' />
                </IconButton>
                <IconButton
                  aria-label='delete'
                  size='small'
                  onClick={() => {
                    removeItem(item.id);
                  }}>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))
      ) : (
        <Typography variant='h6'>No items in cart</Typography>
      )}
    </Grid>
  );
};

export default CartProducts;
