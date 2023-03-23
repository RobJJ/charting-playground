import React from "react";
import _ from "lodash";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

const BubbleChart = () => {
  const getOptions = (type) => ({
    chart: {
      type,
      //   minWidth: 800,
      height: null,
      // maxWidth: null,
      width: null,
    },

    title: {
      text: _.startCase(`${type} chart`),
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    // series: [
    //   {
    //     data: [1, 2, 1, 4, 3, 6],
    //   },
    // ],
    colors: [
      "#058DC7",
      "#50B432",
      "#ED561B",
      "#DDDF00",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4",
    ],
    series: [
      {
        name: "first",
        data: [
          [97, 36, 79],
          [94, 74, 60],
          [68, 76, 58],
          [64, 87, 56],
          [68, 27, 73],
          [74, 99, 42],
          [7, 93, 87],
          [51, 69, 40],
          [38, 23, 33],
          [57, 86, 31],
        ],
      },
      {
        name: "country",
        data: [
          [25, 10, 87],
          [2, 75, 59],
          [11, 54, 8],
          [86, 55, 93],
          [5, 3, 58],
          [90, 63, 44],
          [91, 33, 17],
          [97, 3, 56],
          [15, 67, 48],
          [54, 25, 81],
        ],
      },
    ],
  });
  return (
    <HighchartsReact
      containerProps={{ style: { height: "100%", width: "100%" } }}
      highcharts={Highcharts}
      options={getOptions("bubble")}
    />
  );
};

export default BubbleChart;
