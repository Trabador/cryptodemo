import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../context/CurrencyProvider";
import { TrendingCoins } from "../utils/endpoints";

const useGetTrendingCoins = () => {
  const [coins, setCoins] = useState(null);
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    fetch(TrendingCoins(currency))
      .then((response) => response.json())
      .then((result) => {
        setCoins(result);
      })
      .catch((error) => console.log(error));
  }, [currency]);

  return { coins };
};

export default useGetTrendingCoins;
