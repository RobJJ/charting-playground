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
      max: 100000,
      startOnTick: false,
      endOnTick: true,
      // maxPadding: 0.2,
      tickLength: 0,
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
    <div className=" h-full w-full flex flex-col">
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
