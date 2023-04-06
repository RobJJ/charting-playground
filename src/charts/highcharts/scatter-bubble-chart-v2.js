import React, { useRef, useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { worldData } from "./data-v2";

// import HC_more from "highcharts/highcharts-more";
import highchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);
//
//

//
const BubbleChartVersion2 = () => {
  console.log("---- BUBBLE CHART COMP ----");
  let chart;
  // const [data, setData] = useState([
  //   {
  //     id: "eu",
  //     x: 5,
  //     y: 5,
  //     z: 19,
  //     name: "Europe",
  //     color: "#BADA55",
  //   },
  //   {
  //     id: "no",
  //     x: 4,
  //     y: 8,
  //     z: 3,
  //     name: "Norway",
  //     parent: "eu",
  //   },
  //   {
  //     id: "pl",
  //     x: 6,
  //     y: 5,
  //     z: 5,
  //     name: "Poland",
  //     parent: "eu",
  //   },
  //   {
  //     id: "blt",
  //     x: 2,
  //     y: 2,
  //     z: 4,
  //     name: "Baltics",
  //     parent: "eu",
  //     color: "#BADA55",
  //   },
  //   {
  //     id: "it",
  //     x: 2,
  //     y: 7,
  //     z: 7,
  //     name: "Italy",
  //     parent: "eu",
  //   },
  //   {
  //     id: "lt",
  //     x: 1,
  //     y: 1,
  //     z: 1,
  //     name: "Lithuania",
  //     parent: "blt",
  //   },
  //   {
  //     id: "lv",
  //     x: 1,
  //     y: 2,
  //     z: 1,
  //     name: "Latvia",
  //     parent: "blt",
  //   },
  // ]);
  // const [data, setData] = useState([
  //   {
  //     id: "eu",
  //     lifeExpectancy: 81.5, // Average life expectancy of European countries
  //     gdpPerCapita: 36000, // Approximate average GDP per capita of European countries
  //     population: 500000000, // Approximate total population of European countries
  //     x: 36000,
  //     y: 81.5,
  //     z: 500000000,
  //     name: "Europe",
  //     color: "#BADA55",
  //   },
  //   {
  //     id: "no",
  //     gdpPerCapita: 53267,
  //     population: 5391369,
  //     lifeExpectancy: 82.3,
  //     x: 53267,
  //     y: 82.3,
  //     z: 5391369,
  //     name: "Norway",
  //     parent: "eu",
  //   },
  //   {
  //     id: "se",
  //     gdpPerCapita: 50412,
  //     population: 10327589,
  //     lifeExpectancy: 82.2,
  //     x: 50412,
  //     y: 82.2,
  //     z: 10327589,
  //     name: "Sweden",
  //     parent: "eu",
  //   },
  //   {
  //     id: "ch",
  //     gdpPerCapita: 83029,
  //     population: 8574832,
  //     lifeExpectancy: 83.1,
  //     x: 83029,
  //     y: 83.1,
  //     z: 8574832,
  //     name: "Switzerland",
  //     parent: "eu",
  //   },
  //   {
  //     id: "fi",
  //     gdpPerCapita: 50311,
  //     population: 5501043,
  //     lifeExpectancy: 81.7,
  //     x: 50311,
  //     y: 81.7,
  //     z: 5501043,
  //     name: "Finland",
  //     parent: "eu",
  //   },
  //   {
  //     id: "dk",
  //     gdpPerCapita: 61740,
  //     population: 5814461,
  //     lifeExpectancy: 81.0,
  //     x: 61740,
  //     y: 81.0,
  //     z: 5814461,
  //     name: "Denmark",
  //     parent: "eu",
  //   },
  //   {
  //     id: "fr",
  //     gdpPerCapita: 40494,
  //     population: 65480710,
  //     lifeExpectancy: 82.3,
  //     x: 40494,
  //     y: 82.3,
  //     z: 65480710,
  //     name: "France",
  //     parent: "eu",
  //   },
  //   {
  //     id: "de",
  //     gdpPerCapita: 47917,
  //     population: 83019213,
  //     lifeExpectancy: 80.9,
  //     x: 47917,
  //     y: 80.9,
  //     z: 83019213,
  //     name: "Germany",
  //     parent: "eu",
  //   },
  //   {
  //     id: "it",
  //     gdpPerCapita: 34483,
  //     population: 60243453,
  //     lifeExpectancy: 82.0,
  //     x: 34483,
  //     y: 82.0,
  //     z: 60243453,
  //     name: "Italy",
  //     parent: "eu",
  //   },
  //   {
  //     id: "nl",
  //     gdpPerCapita: 52516,
  //     population: 17421209,
  //     lifeExpectancy: 81.6,
  //     x: 52516,
  //     y: 81.6,
  //     z: 17421209,
  //     name: "Netherlands",
  //     parent: "eu",
  //   },
  //   {
  //     id: "es",
  //     gdpPerCapita: 27430,
  //     population: 46934632,
  //     lifeExpectancy: 83.0,
  //     x: 27430,
  //     y: 83.0,
  //     z: 46934632,
  //     name: "Spain",
  //     parent: "eu",
  //   },
  // ]);

  const [data, setData] = useState(worldData);
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
      // enabled: false,
      useHTML: true,
      headerFormat: "<table>",
      pointFormat:
        '<tr><th colspan="2"><h3><u>{point.name}</u></h3></th></tr>' +
        "<tr><th>GDP per capita:</th><td>$ {point.x}</td></tr>" +
        "<tr><th>Life Expectancy:</th><td>{point.y} years</td></tr>" +
        "<tr><th>Population:</th><td>{point.z}</td></tr>",
      followPointer: true,
      hideDelay: 0,
    },
    title: {
      // text: _.startCase(`Experimal build: Highchart: ${type} chart`),
      text: `Experimental build - HighCharts - Bubble chart`,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      // general options for all series
      series: {
        // removes lingering tooltip
        stickyTracking: false,
        // Assign a unique color to each point in the series
        colorByPoint: true,
      },
      bubble: {
        minSize: "10%",
        maxSize: "50%",
        // zMin: 0,
        // zMax: 1000000000,
      },
    },
    xAxis: {
      title: {
        text: "GDP per capita in 2019, log scale, $",
      },
      gridLineWidth: 1,
      type: "logarithmic",
      min: 2000,
      max: 120000,
      startOnTick: false,
      endOnTick: false,
      maxPadding: 0.2,
    },
    yAxis: {
      title: {
        text: "Life expectancy in 2019, year",
      },
      min: 50,
      max: 100,
      startOnTick: false,
      endOnTick: false,
      maxPadding: 0.2,
    },
    // colors: [
    //   "#058DC7",
    //   "#50B432",
    //   "#ED561B",
    //   "#DDDF00",
    //   "#f15c80",
    //   "#2b908f",
    //   "#FF9655",
    //   "#FFF263",
    //   "#6AF9C4",
    //   "#8085e9",
    // ],
    series: [
      {
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
        marker: {
          fillOpacity: 1,
          lineColor: "white",
        },
        cursor: "pointer",
        point: {
          events: {
            // click: function () {
            //   const point = this,
            //     series = point.series;
            //   console.log("printing point (this) : ", point);
            //   console.log("printing series (this) : ", series);
            //   if (
            //     // check if there are children available
            //     data.find((p) => p.parent === point.id) &&
            //     !series.points.find((p) => p.parent === point.id)
            //   ) {
            //     splitPoint(point);
            //   } else if (point.parent) {
            //     collapsePoint(point);
            //   }
            // },
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

      // console.log("child?? : ", child);

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

  const splitButtonHandler = () => {
    //might need to add handler for if series is underfined
    const series = chart.series[0],
      worldPoint = series.points.find((p) => p.id === "world");
    // console.log("world Point: ", worldPoint);
    // europePoint = series.points.find((p) => p.id === "eu"),
    // balticsPoint = series.points.find((p) => p.id === "blt");
    if (worldPoint) splitPoint(worldPoint);
    // if (europePoint) splitPoint(europePoint);
    // if (balticsPoint) splitPoint(balticsPoint);
  };
  const absorbButtonHandler = () => {
    //might need to add handler for if series is underfined
    const series = chart.series[0],
      worldChildren = series.points.find((p) => p.parent === "world");
    // europeChildren = series.points.find((p) => p.parent === "eu"),
    // balticChildren = series.points.find((p) => p.parent === "blt");
    if (worldChildren) collapsePoint(worldChildren);
    // if (balticChildren) {
    //   collapsePoint(balticChildren);
    // } else if (europeChildren) {
    //   collapsePoint(europeChildren);
    // }
  };

  return (
    <div className="bg-blue-400 h-full w-full flex flex-col">
      {/*<div ref={chartRef} />*/}
      <HighchartsReact
        // ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%", width: "100%" } }}
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
