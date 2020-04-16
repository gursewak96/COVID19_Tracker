import React, { useState, useEffect } from "react";
import { fetchDailyDataCall } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";
import { connect } from "react-redux";

function Charts({ country, data: { confirmed, recovered, deaths } }) {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyDataCall());
    };
    fetchApi();
  }, [setDailyData]);

  // Line chart for global data, bar char for country specific

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const Chart = country ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : (
    lineChart
  );
  return <div className={styles.container}>{Chart}</div>;
}

const mapStateToProps = (state) => {
  return {
    country: state.country,
    data: state.data,
  };
};

export default connect(mapStateToProps)(Charts);
