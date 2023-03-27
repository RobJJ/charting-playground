import React, { useState } from "react";

import Toggle from "../charts/highcharts/toggle";
import BubbleChart from "../charts/highcharts/scatter-bubble-chart";

import { GDP_LIFE_DATA } from "../charts/highcharts/bubbleChart-data";

const HighchartsPage = () => {
  console.log("---- HighCharts PAGE ----");
  const [currentData, setCurrentData] = useState([...GDP_LIFE_DATA["world"]]);
  const [key, setKey] = useState(0);
  //
  console.log("current data reading: ", currentData);
  return (
    <div className="w-full h-full flex gap-2">
      <BubbleChart currentData={currentData} currentKey={key} />
      <Toggle setCurrentData={setCurrentData} setKey={setKey} />
    </div>
  );
};

export default HighchartsPage;
