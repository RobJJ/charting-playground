import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";

import { scatterData } from "./data-scatter-v1";

highchartsMore(Highcharts);
function dataMapping(data) {
  return data.map(function (point) {
    return { x: point.eco, y: point.econ };
  });
}

const ScatterChart = () => {
  console.log("---- Scatter Chart Rendered ---");
  let chart;
  const [data, setData] = useState(scatterData);
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
    legend: {
      enabled: false,
    },
    title: {
      // text: _.startCase(`Experimal build: Highchart: ${type} chart`),
      text: `Experimental build - HighCharts - Scatter chart`,
    },
    xAxis: {
      title: {
        text: "Environment Score",
      },
      gridLineWidth: 1,
      //   min: 2000,
      //   max: 100000,
      startOnTick: false,
      endOnTick: true,
      // maxPadding: 0.2,
      tickLength: 0,
    },
    yAxis: {
      title: {
        text: "Economic Score",
      },
      //   min: 50,
      //   max: 100,
      startOnTick: false,
      endOnTick: false,
      maxPadding: 0.2,
    },
    plotOptions: {
      // general options for all series
      series: {
        // removes lingering tooltip
        stickyTracking: false,
        // Assign a unique color to each point in the series
        colorByPoint: true,
      },
    },
    series: [
      {
        // start with points that dont have parent
        data: dataMapping(data),
        states: {
          hover: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.district}",
        },

        cursor: "pointer",
      },
    ],
  });

  return (
    <div className=" h-full w-full flex flex-col">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%", width: "100%" } }}
      />
    </div>
  );
};

export default ScatterChart;
