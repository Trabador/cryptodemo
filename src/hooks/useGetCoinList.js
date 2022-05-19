import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../context/CurrencyProvider";
import { CoinList } from "../utils/endpoints";

const useGetCoinList = () => {
  const [isLoading, setLoading] = useState(false);
  const [coinList, setList] = useState([]);

  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    setLoading(true);
    fetch(CoinList(currency))
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currency]);

  return { isLoading, coinList };
};

export default useGetCoinList;
