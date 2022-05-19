import React from "react";
import { Link } from "react-router-dom";
import { formatValue, profit } from "../../../utils/format";
import "./CarouselCoin.css";

const CaraouselCoin = ({ coin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="carouselCoin">
      <img src={coin.image} alt={coin.name} className="coinImg" />
      <span className="info">
        {coin.symbol}
        <br />
        <span>
          {profit() && "+"}
          {coin.price_change_percentage_24h}
        </span>
        <span>${formatValue(coin.current_price.toFixed(2))}</span>
      </span>
    </Link>
  );
};

export default CaraouselCoin;
