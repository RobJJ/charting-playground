import React, { useRef, useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// import HC_more from "highcharts/highcharts-more";
import highchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);
//
const getOriginalData = () => [
  {
    x: 12000,
    y: 60,
    z: 200, // set the size of the bubble
  },
];
const getAlternativeData = () => [
  {
    x: 2,
    y: 1,
    z: 5, // set the size of the first country bubble
  },
  {
    x: 3,
    y: 6,
    z: 8, // set the size of the second country bubble
  },
  {
    x: 4,
    y: 8,
    z: 2, // set the size of the third country bubble
  },
];
//

//
const BubbleChartVersion2 = () => {
  console.log("---- BUBBLE CHART COMP ----");
  const [pointsToAdd, setPointsToAdd] = useState([
    {
      x: 4,
      y: 8,
      z: 3,
      name: "Norway",
    },
    {
      x: 6,
      y: 5,
      z: 5,
      name: "Poland",
    },
    {
      x: 2,
      y: 2,
      z: 4,
      name: "Estonia",
    },
    {
      x: 2,
      y: 7,
      z: 7,
      name: "Italy",
    },
  ]);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "bubble",
      events: {
        redraw: function () {
          var label = this.renderer
            .label("A series was added, about to redraw chart", 100, 120)
            .attr({
              fill: Highcharts.getOptions().colors[0],
              padding: 10,
              r: 5,
              zIndex: 8,
            })
            .css({
              color: "#FFFFFF",
            })
            .add();

          setTimeout(function () {
            label.fadeOut();
          }, 1000);
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    xAxis: {
      min: 0,
      max: 10,
    },
    yAxis: {
      min: 0,
      max: 10,
    },
    series: [
      {
        zMin: 0,
        zMax: 20,
        data: [
          {
            x: 5,
            y: 5,
            z: 19,
            name: "Europe",
          },
        ],
        states: {
          hover: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });

  console.log("chartOptions: ", chartOptions);

  const handleClickPls = () => {
    setChartOptions({
      series: [{ data: getAlternativeData() }],
    });
  };

  return (
    <div>
      {/*<div ref={chartRef} />*/}
      <HighchartsReact
        // ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
      <button className="bg-white rounded-xl mt-2 p-1" onClick={handleClickPls}>
        Break up into countries
      </button>
    </div>
  );
};

export default BubbleChartVersion2;

// const options = {
//   chart: {
//     type: "bubble",
//     animation: {
//       duration: 2000, // set the duration of the animation in milliseconds
//     },
//   },
//   accessibility: {
//     enabled: false,
//   },
//   series: [
//     {
//       name: "World",
//       data: getOriginalData(),
//     },
//   ],
//   xAxis: {
//     type: "logarithmic",
//     min: 1000,
//     max: 120000,
//   },
//   yAxis: {
//     startOnTick: false,
//     endOnTick: false,
//     title: {
//       text: "Life expectancy in 2019, year",
//     },
//     maxPadding: 0.2,
//     min: 30,
//     max: 100,
//   },
// };

// const handleClick = () => {
//   // chart.series[0].update({ name: "Countries" });
//   // chart.series[0].setData(getAlternativeData());
// };
//

// const chartRef = useRef(null);
// const [chart, setChart] = useState(null);
// old ref way
// useEffect(() => {
//   setChart(Highcharts.chart(chartRef.current, options));
// }, []);
