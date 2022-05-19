import { useState } from "react";

const useManageCurrency = () => {
  const [currency, setCurrency] = useState("usd");

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return { currency, changeCurrency };
};

export default useManageCurrency;
