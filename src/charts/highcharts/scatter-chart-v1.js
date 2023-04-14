import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";

const ScatterChart = () => {
  let chart;
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "scatter",
      zoomType: "xy",
      events: {
        load: function () {
          chart = this;
        },
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      // text: _.startCase(`Experimal build: Highchart: ${type} chart`),
      text: `Experimental build - HighCharts - Scatter chart`,
    },
  });

  return (
    <div className=" h-full w-full flex flex-col">
      {/*<div ref={chartRef} />*/}
      <HighchartsReact
        // ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%", width: "100%" } }}
      />
    </div>
  );
};

export default ScatterChart;
