import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { CurrencyContext } from "../../context/CurrencyProvider";
import "./CurrencySelector.css";

const CurrencySelector = () => {
  const { currency, changeCurrency } = useContext(CurrencyContext);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="currency">Currency</InputLabel>
        <Select
          className="currencySelector"
          labelId="currency"
          id="currency"
          value={currency}
          label="Currency"
          onChange={(e) => changeCurrency(e.target.value)}
        >
          <MenuItem value={"usd"}>USD</MenuItem>
          <MenuItem value={"mxn"}>MXN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CurrencySelector;
