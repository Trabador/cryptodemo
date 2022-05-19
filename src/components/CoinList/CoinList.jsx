import {
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useGetCoinList from "../../hooks/useGetCoinList";
import Loading from "../Loading";
import CoinItem from "./CoinItem";

const CoinList = () => {
  const { isLoading, coinList } = useGetCoinList();
  const [page, setPage] = useState(1);
  const [criteria, setCriteria] = useState("");

  const filterByCriteria = () => {
    if (criteria === "") return coinList;
    return coinList.filter(
      (coin) =>
        coin.name.toLowerCase().includes(criteria) ||
        coin.symbol.toLowerCase().includes(criteria)
    );
  };

  const renderList = () => {
    return (
      <Container style={{ marginTop: 10 }}>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setCriteria(e.target.value.toLowerCase())}
        />
        <TableContainer>
          <Table>
            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    key={head}
                    align={head === "Coin" ? "inherit" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filterByCriteria()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((coin) => (
                  <CoinItem key={coin.id} coin={coin} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={parseInt((filterByCriteria().length / 10).toFixed(0))}
          style={{ padding: 25 }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    );
  };

  return <div>{isLoading ? <Loading /> : renderList()}</div>;
};

export default CoinList;
