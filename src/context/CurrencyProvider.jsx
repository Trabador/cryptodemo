import React, { createContext } from "react";
import useManageCurrency from "../hooks/useManageCurrency";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const data = useManageCurrency();
  return (
    <CurrencyContext.Provider value={data}>{children}</CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
