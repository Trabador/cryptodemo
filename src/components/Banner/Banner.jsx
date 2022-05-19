import { Container, Typography } from "@mui/material";
import React from "react";
import useGetTrendingCoins from "../../hooks/useGetTrendingCoins";
import Carousel from "../Carousel";
import "./Banner.css";

const Banner = () => {
  const { coins } = useGetTrendingCoins();

  return (
    <div className="banner">
      <Container className="bannerContainer">
        <Typography variant="h2" className="tagline">
          Cryptos Web
        </Typography>
        <Typography variant="subtitle-2">
          The web with the latest crypto information.
        </Typography>
        <Carousel coins={coins} />
      </Container>
    </div>
  );
};

export default Banner;
