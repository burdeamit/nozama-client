import Box from "@mui/system/Box";
import React from "react";

function Home() {
  return (
    <Box
      className='app-home'
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <img
        className='home-hero-img'
        src='./images/home_hero_1.jpg'
        alt='home'
      />
    </Box>
  );
}

export default Home;
