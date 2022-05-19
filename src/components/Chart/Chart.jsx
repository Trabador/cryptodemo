import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import useGetChartData from "../../hooks/useGetChartData";
import Loading from "../Loading";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Buttons from "./Buttons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ id }) => {
  const [days, setDays] = useState(1);
  const { isLoading, chartData } = useGetChartData(id, days);

  const labels = chartData
    ? chartData?.prices?.map((item) => {
        const date = new Date(item[0]);
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return days === 1 ? time : date.toLocaleDateString();
      })
    : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Prices",
        data: chartData ? chartData?.prices?.map((item) => item[1]) : [],
        borderColor: "rgb(204, 94, 4)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 3,
      },
    },
  };

  const mediaMatch = window.matchMedia("(max-width: 520px)");
  const isMatch = mediaMatch.matches;

  if (isLoading) return <Loading />;
  return (
    <div style={isMatch ? { display: "none" } : null}>
      <Line data={data} options={options} />
      <Buttons setDays={setDays} days={days} />
    </div>
  );
};

export default Chart;
