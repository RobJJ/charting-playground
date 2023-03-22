import React from "react";
import _ from "lodash";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BubbleChart = () => {
  const getOptions = (type) => ({
    chart: {
      type,
      width: 900,
      height: 500,
    },
    title: {
      text: _.startCase(`${type} chart`),
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
      {
        data: [2, 7, 0, 4, 6, 2],
      },
    ],
  });
  return (
    <div className="flex h-full w-full">
      <HighchartsReact
        highcharts={Highcharts}
        // options={getOptions("scatter")}
        options={{
          title: { text: "My Scatter" },
          chart: {
            type: "scatter",
            width: 900,
            height: 500,
          },
          series: [
            {
              data: [1, 2, 1, 4, 3, 6],
            },
            {
              data: [2, 7, 0, 4, 6, 2],
            },
          ],
        }}
      />
    </div>
  );
};

export default BubbleChart;
