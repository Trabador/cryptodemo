import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../context/CurrencyProvider";
import { HistoricalChart } from "../utils/endpoints";

const useGetChartData = (id, days) => {
  const [isLoading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});

  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    setLoading(true);
    fetch(HistoricalChart(id, days, currency))
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setChartData(result);
      })
      .catch((err) => console.log(err));
  }, [currency, days, id]);

  return { isLoading, chartData };
};

export default useGetChartData;
