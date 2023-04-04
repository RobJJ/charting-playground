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
  let chart;
  const [data, setData] = useState([
    {
      id: "eu",
      x: 5,
      y: 5,
      z: 19,
      name: "Europe",
      color: "#BADA55",
    },
    {
      id: "no",
      x: 4,
      y: 8,
      z: 3,
      name: "Norway",
      parent: "eu",
    },
    {
      id: "pl",
      x: 6,
      y: 5,
      z: 5,
      name: "Poland",
      parent: "eu",
    },
    {
      id: "blt",
      x: 2,
      y: 2,
      z: 4,
      name: "Baltics",
      parent: "eu",
      color: "#BADA55",
    },
    {
      id: "it",
      x: 2,
      y: 7,
      z: 7,
      name: "Italy",
      parent: "eu",
    },
    {
      id: "lt",
      x: 1,
      y: 1,
      z: 1,
      name: "Lithuania",
      parent: "blt",
    },
    {
      id: "lv",
      x: 1,
      y: 2,
      z: 1,
      name: "Latvia",
      parent: "blt",
    },
  ]);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "bubble",
      events: {
        load: function () {
          chart = this;
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
        // start with points that dont have parent
        data: data.filter((point) => !point.parent),
        states: {
          hover: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              const point = this,
                series = point.series;
              console.log("printing point (this) : ", point);
              console.log("printing series (this) : ", series);

              if (
                // check if there are children available
                data.find((p) => p.parent === point.id) &&
                !series.points.find((p) => p.parent === point.id)
              ) {
                splitPoint(point);
              } else if (point.parent) {
                collapsePoint(point);
              }
            },
          },
        },
      },
    ],
  });
  //
  const splitPoint = (point) => {
    const series = point.series,
      pointsToAdd = data.filter((p) => p.parent === point.id),
      parent = point;

    pointsToAdd.forEach((d) => {
      series.addPoint(d);
      const child = series.points.find((p) => p.id === d.id),
        r = child.marker.height / 2,
        { plotX, plotY } = child;

      child.dataLabel.attr({
        opacity: 0,
      });
      child.graphic.attr({
        x: parent.plotX - r,
        y: parent.plotY - r,
      });
      child.graphic.animate({
        x: plotX - r,
        y: plotY - r,
      });
      child.dataLabel.animate({
        opacity: 1,
      });

      parent.graphic.animate({
        opacity: 0,
      });
      parent.dataLabel.animate(
        {
          opacity: 0,
        },
        undefined,
        () => parent.remove()
      );
    });
  };
  //
  const collapsePoint = (point) => {
    const series = point.series,
      pointsToRemove = series.points.filter((p) => p.parent === point.parent);

    series.addPoint(data.find((p) => p.id === point.parent));

    const parent = series.points.find((p) => point.parent === p.id),
      { plotX, plotY } = parent;

    pointsToRemove.forEach((p) => {
      p.remove();
    });

    parent.graphic.attr({
      opacity: 0,
    });
    parent.dataLabel.attr({
      opacity: 0,
    });
    parent.graphic.animate({
      opacity: 1,
    });
    parent.dataLabel.animate({
      opacity: 1,
    });
  };
  // console.log("chartOptions: ", chartOptions);

  const logInfo = () => {
    console.log("Current Chart options: ", chartOptions);
    console.log("Chart: ", chart);
  };

  const toggleButtonHandler = () => {
    const series = chart.series[0],
      europePoint = series.points.find((p) => p.id === "eu"),
      polandPoint = series.points.find((p) => p.id === "pl"),
      balticsPoint = series.points.find((p) => p.id === "blt"),
      balticsChildren = series.points.find((p) => p.parent === "blt");

    if (europePoint) {
      splitPoint(europePoint);
    } else if (balticsPoint) {
      splitPoint(balticsPoint);
    } else if (balticsChildren) {
      collapsePoint(balticsChildren);
    } else {
      collapsePoint(polandPoint);
    }
  };

  const splitButtonHandler = () => {
    const series = chart.series[0],
      europePoint = series.points.find((p) => p.id === "eu"),
      balticsPoint = series.points.find((p) => p.id === "blt");

    if (europePoint) splitPoint(europePoint);
    if (balticsPoint) splitPoint(balticsPoint);
  };
  const absorbButtonHandler = () => {};

  return (
    <div>
      {/*<div ref={chartRef} />*/}
      <HighchartsReact
        // ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
      <div className="flex mt-2 gap-2">
        <button className="bg-white rounded-xl  p-1" onClick={logInfo}>
          Log Info
        </button>
        <button
          className="bg-white rounded-xl  p-1"
          onClick={splitButtonHandler}
        >
          Split
        </button>
        <button
          className="bg-white rounded-xl  p-1"
          onClick={absorbButtonHandler}
        >
          Absorb
        </button>
      </div>
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

// redraw function
// redraw: function (e) {
//           // console.log("this.series[0].points[0] : ", this.series[0].points[0]);
//           const series = this.series[0];
//           const parent = series.points[0];

//           pointsToAdd.forEach((point, idx) => {
//             series.addPoint(point, false);
//             console.log(`Point ${idx} : `, point);
//           });

//           const allPoints = series.points;
//           console.log("All Points at the moment : ", allPoints);

//           var label = this.renderer
//             .label("A series was added, about to redraw chart", 100, 120)
//             .attr({
//               fill: Highcharts.getOptions().colors[0],
//               padding: 10,
//               r: 5,
//               zIndex: 8,
//             })
//             .css({
//               color: "#FFFFFF",
//             })
//             .add();

//           setTimeout(function () {
//             label.fadeOut();
//           }, 2000);
//         },
