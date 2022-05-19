import React from "react";
import AliceCarousel from "react-alice-carousel";
import CarouselCoin from "./CarouselCoin";
import "./Carousel.css";

const Carousel = ({ coins }) => {
  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  const items = coins
    ? coins.map((coin) => <CarouselCoin key={coin.id} coin={coin} />)
    : [];

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
