import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function Grafico(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  let labelSp = [];
  let moneySp = [];

  if (props.ventas !== undefined) {
    props.ventas.forEach((x) => {
      labelSp.push(x.mes);
      moneySp.push(x.valor);
    });
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };


  const labels = labelSp;
  const data = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data: moneySp,
        backgroundColor: "rgba(136,179,231)",
      },
    ],
  };

  return <Bar options={opciones} data={data} />;
}

export default Grafico;
