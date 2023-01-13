import { Button } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { useCart } from "../Store/useCart";
import CartProducts from "../Components/Carts/CartProducts";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CartsPage(): JSX.Element {
  const { items } = useCart();
  const navigate = useNavigate();

  // Checkout Logic
  const checkout = () => {
    Swal.fire({
      title: "Confirm Checkout",
      text: "You will be purchasing the products in your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
    })
      .then((result: any): void => {
        if (result.isConfirmed) {
          Swal.fire("Success!! ", "Your order has been placed", "success");
        }
      })
      .then(() => {
        navigate("/receipts");
      });
  };

  return (
    <Box className='cart-home'>
      <Box className='cart-header'>
        <h4 className='text-xl font-bold mb-4'>Cart</h4>
      </Box>
      <CartProducts />
      <Box className='cart-checkout'>
        {items?.length ? (
          <Button
            variant='contained'
            sx={{ mt: 1 }}
            onClick={() => {
              checkout();
            }}>
            Checkout
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}

export default CartsPage;
