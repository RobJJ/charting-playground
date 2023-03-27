import React, { useState } from "react";

import Toggle from "../charts/highcharts/toggle";
import BubbleChart from "../charts/highcharts/scatter-bubble-chart";

import { GDP_LIFE_DATA } from "../charts/highcharts/bubbleChart-data";

const HighchartsPage = () => {
  const [currentData, setCurrentData] = useState(GDP_LIFE_DATA["country"]);
  return (
    <div className="w-full h-full flex gap-2">
      <BubbleChart data={currentData} />
      <Toggle setCurrentData={setCurrentData} />
    </div>
  );
};

export default HighchartsPage;
