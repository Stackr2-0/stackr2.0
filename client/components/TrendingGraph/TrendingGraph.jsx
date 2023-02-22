import React from "react";
// import BarChart from "./BarChart";
import googleTrends from "google-trends-api";

const TrendingGraph = (data) => {
  const npmStats = () => {
    console.log("npmStats");
    fetch("/google-trending")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <button onClick={npmStats}>TrendingGraph</button>
      {/* <BarChart/> */}
    </div>
  );
};

export default TrendingGraph;
