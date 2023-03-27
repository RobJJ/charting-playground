import React, { useRef, useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);
//
const BubbleChartVersion2 = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  const options = {
    chart: {
      type: "bubble",
      animation: {
        duration: 1000, // set the duration of the animation in milliseconds
      },
    },
    series: [
      {
        name: "World",
        data: [
          {
            x: 0,
            y: 0,
            z: 100, // set the size of the bubble
          },
        ],
      },
    ],
  };

  useEffect(() => {
    setChart(Highcharts.chart(chartRef.current, options));
  }, []);

  const handleClick = () => {
    chart.update({
      series: [
        {
          name: "Countries",
          data: [
            {
              x: 10,
              y: 10,
              z: 20, // set the size of the first country bubble
            },
            {
              x: 20,
              y: 20,
              z: 30, // set the size of the second country bubble
            },
            {
              x: 30,
              y: 30,
              z: 50, // set the size of the third country bubble
            },
          ],
          animation: {
            duration: 1000, // set the duration of the animation in milliseconds
            easing: "easeOutBounce",
          },
        },
      ],
    });
  };

  return (
    <div>
      <div ref={chartRef} />
      <button onClick={handleClick}>Break up into countries</button>
    </div>
  );
};

export default BubbleChartVersion2;
