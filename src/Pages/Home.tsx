import { Button } from "@mui/material";
import Box from "@mui/system/Box";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box
      className='app-home'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <img
        className='home-hero-img'
        src='./images/home_hero_1.jpg'
        alt='home'
      />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          navigate("/products");
        }}>
        Start Shopping
      </Button>
    </Box>
  );
}

export default Home;
