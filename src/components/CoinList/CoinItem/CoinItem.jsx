import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatValue, profit } from "../../../utils/format";
import "./CoinItem.css";

const CoinItem = ({ coin }) => {
  const navigate = useNavigate();

  return (
    <TableRow className="coinRow" onClick={() => navigate(`/coins/${coin.id}`)}>
      <TableCell align="right">
        <div className="coinContainer">
          <img src={coin.image} alt={coin.name} height="50" />
          <span
            style={{
              textTransform: "uppercase",
              fontSize: 22,
            }}
          >
            {coin.symbol}
          </span>
          <span style={{ color: "darkgrey" }}>{coin.name}</span>
        </div>
      </TableCell>
      <TableCell align="right" style={{ color: "whitesmoke" }}>
        $ {formatValue(coin.current_price.toFixed(2))}
      </TableCell>
      <TableCell
        align="right"
        style={{
          color: profit(coin.price_change_percentage_24h)
            ? "rgb(14, 203, 129)"
            : "red",
          fontWeight: 500,
        }}
      >
        {profit(coin.price_change_percentage_24h) && "+"}
        {coin.price_change_percentage_24h.toFixed(2)}%
      </TableCell>
      <TableCell align="right" style={{ color: "whitesmoke" }}>
        $ {formatValue(coin.market_cap.toString().slice(0, -6))}M
      </TableCell>
    </TableRow>
  );
};

export default CoinItem;
