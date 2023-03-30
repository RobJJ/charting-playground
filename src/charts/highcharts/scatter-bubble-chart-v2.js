import React, { useRef, useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);
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
    x: 6000,
    y: 50,
    z: 20, // set the size of the first country bubble
  },
  {
    x: 20000,
    y: 76,
    z: 30, // set the size of the second country bubble
  },
  {
    x: 80000,
    y: 80,
    z: 50, // set the size of the third country bubble
  },
];
//

//
const BubbleChartVersion2 = () => {
  console.log("---- BUBBLE CHART COMP ----");
  // const chartRef = useRef(null);
  // const [chart, setChart] = useState(null);
  const options = {
    chart: {
      type: "bubble",
      animation: {
        duration: 2000, // set the duration of the animation in milliseconds
      },
    },
    accessibility: {
      enabled: false,
    },
    series: [
      {
        name: "World",
        data: getOriginalData(),
      },
    ],
    xAxis: {
      type: "logarithmic",
      min: 1000,
      max: 120000,
    },
    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: "Life expectancy in 2019, year",
      },
      maxPadding: 0.2,
      min: 30,
      max: 100,
    },
  };

  // useEffect(() => {
  //   setChart(Highcharts.chart(chartRef.current, options));
  // }, []);

  const handleClick = () => {
    // chart.series[0].update({ name: "Countries" });
    // chart.series[0].setData(getAlternativeData());
  };

  return (
    <div>
      {/*<div ref={chartRef} />*/}
      <HighchartsReact
        // ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
      <button className="bg-white rounded-xl mt-2 p-1" onClick={handleClick}>
        Break up into countries
      </button>
    </div>
  );
};

export default BubbleChartVersion2;

// chart.update({
//   series: [
//     {
//       name: "Countries",
//       data: [
//         {
//           x: 10,
//           y: 10,
//           z: 20, // set the size of the first country bubble
//         },
//         {
//           x: 20,
//           y: 20,
//           z: 30, // set the size of the second country bubble
//         },
//         {
//           x: 30,
//           y: 30,
//           z: 50, // set the size of the third country bubble
//         },
//       ],
//       animation: {
//         duration: 1000, // set the duration of the animation in milliseconds
//         easing: "easeOutBounce",
//       },
//     },
//   ],
// });
