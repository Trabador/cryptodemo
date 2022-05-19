import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../../context/CurrencyProvider";
import useGetCoin from "../../hooks/useGetCoin";
import { formatValue } from "../../utils/format";
import Chart from "../Chart";
import Loading from "../Loading";
import "./CoinData.css";

const CoinData = () => {
  const { id } = useParams();
  const { isLoading, coin } = useGetCoin(id);

  const { currency } = useContext(CurrencyContext);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div>
            <img
              src={coin?.image.large}
              alt={coin?.name}
              height="250"
              className="coinImage"
            />
            <Typography variant="h3" className="coinName">
              {coin?.name}
            </Typography>
            {/* <Typography variant="subtitle1">{coin?.description.en}</Typography> */}
            <Typography variant="h4" className="coinRank">
              Rank: {coin?.market_cap_rank}
            </Typography>
            <Typography variant="h4" className="coinPrice">
              {`Current Price: ${formatValue(
                coin?.market_data.current_price[currency.toLowerCase()]
              )} ${currency}`}
            </Typography>

            <Chart id={id} className="coinChart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinData;
