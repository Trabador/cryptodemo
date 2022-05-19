import { useEffect, useState } from "react";
import { SingleCoin } from "../utils/endpoints";

const useGetCoin = (id) => {
  const [isLoading, setLoading] = useState(false);
  const [coin, setCoin] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(SingleCoin(id))
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setCoin(result);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return { isLoading, coin };
};

export default useGetCoin;
