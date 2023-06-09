import React, { useEffect, useRef, useState } from "react";
// import _ from "lodash";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

const BubbleChart = ({ currentData, currentKey }) => {
  // const [key, setKey] = useState(0);
  console.log("---- Bubble chart comp ----");
  // const chartComponent = useRef({});

  //
  const getOptions = (type, data) => ({
    chart: {
      type,
      //   minWidth: 800,
      height: null,
      // maxWidth: null,
      width: null,
      events: {
        redraw: true,
      },
      animation: {
        duration: 1000,
      },
    },
    // specify if you want the legend.. you can still add x-y desc
    legend: {
      enabled: false,
    },
    // heading for chart
    title: {
      // text: _.startCase(`Experimal build: Highchart: ${type} chart`),
      text: `Experimental build - HighCharts - ${type} chart`,
    },
    // extra info for heading
    subtitle: {
      text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>',
    },
    yAxis: {
      startOnTick: false,

      endOnTick: false,
      title: {
        text: "Life expectancy in 2019, year",
      },
      // for labeling the tickers on axis
      // labels: {
      //   format: "{value} gr",
      // },
      maxPadding: 0.2,
      // plotLines: [
      //   {
      //     color: "black",
      //     dashStyle: "dot",
      //     width: 2,
      //     value: 50,
      //     label: {
      //       align: "right",
      //       style: {
      //         fontStyle: "italic",
      //       },
      //       text: "Safe sugar intake 50g/day",
      //       x: -10,
      //     },
      //     zIndex: 3,
      //   },
      // ],
      // accessibility: {
      //   rangeDescription: "Range: 0 to 160 grams.",
      // },
    },
    xAxis: {
      // gridLineWidth: 1,
      title: {
        text: "GDP per capita in 2019, log scale, $",
      },
      type: "logarithmic",
      min: 1000,
      max: 120000,
      // labels: {
      //   format: "{value} gr",
      // },
      // setting custom ticker values here - chart determines if useful though
      // tickPositions: [55, 60, 65, 70, 95],
      // this is an interesting way to set the ticker - using function to determine tickers
      // tickPositioner: function
      // plotLines: [
      //   {
      //     color: "black",
      //     dashStyle: "dot",
      //     width: 2,
      //     value: 65,
      //     label: {
      //       rotation: 0,
      //       y: 15,
      //       style: {
      //         fontStyle: "italic",
      //       },
      //       text: "Safe fat intake 65g/day",
      //     },
      //     zIndex: 3,
      //   },
      // ],
      // this setting controls the values on axis - accessibility
      // accessibility: {
      //   rangeDescription: "Range: 60 to 100 grams.",
      // },
    },
    tooltip: {
      // enabled: false,
      useHTML: true,
      headerFormat: "<table>",
      pointFormat:
        '<tr><th colspan="2"><h3><u>{point.country}</u></h3></th></tr>' +
        "<tr><th>GDP per capita:</th><td>$ {point.x}</td></tr>" +
        "<tr><th>Life Expectancy:</th><td>{point.y} years</td></tr>" +
        "<tr><th>Population:</th><td>{point.z}</td></tr>",
      // footerFormat: "</table>",
      followPointer: true,
      // animation: true,
      hideDelay: 0,
      // distance: 30,
      // custom position setter
      // positioner: function () {
      //   return { x: 80, y: 20 };
      // },
      // shadow: false,
      // borderWidth: 0,
      // backgroundColor: "rgba(255,255,255,0.8)",
    },
    //
    //
    // // can remove the highcharts credit reference
    credits: {
      enabled: false,
    },

    // a general settings option
    plotOptions: {
      // general options for all series
      series: {
        // removes lingering tooltip
        stickyTracking: false,
        //  lables for each bubble..
        // dataLabels: {
        //   enabled: true,
        //   format: "{point.name}",
        // },
        // Assign a unique color to each point in the series
        colorByPoint: true,
      },
      // specific settings to this plot! not in general that is series
      // bubble: {
      //   cursor: "pointer",
      //   dataLabels: {
      //     enabled: true,
      //   },
      //   size: "125%",
      // },
    },
    // can specify what colors to use here
    colors: [
      "#058DC7",
      "#50B432",
      "#ED561B",
      "#DDDF00",
      "#f15c80",
      "#2b908f",
      "#FF9655",
      "#FFF263",
      "#6AF9C4",
      "#8085e9",
    ],
    // series: data,
    series: [
      {
        type: "bubble",
        data: data,
        animation: {
          duration: 1000,
        },
      },
    ],
  });
  //
  // useEffect(() => {
  //   console.log("ChartComponent Ref: ", chartComponent);
  //   // chartComponent.current.chart.redraw(false);
  //   setKey((prevKey) => prevKey + 1);
  // }, [currentData]);
  return (
    <HighchartsReact
      // ref={chartComponent}
      key={currentKey}
      containerProps={{ style: { height: "100%", width: "100%" } }}
      highcharts={Highcharts}
      options={getOptions("bubble", currentData)}
    />
  );
};

export default BubbleChart;

//The basic data input
// series: [
//       {
//         name: "country",
//         data: [
//           [25, 10, 87],
//           [2, 75, 59],
//           [11, 54, 8],
//           [86, 55, 93],
//           [5, 3, 58],
//           [90, 63, 44],
//           [91, 33, 17],
//           [97, 3, 56],
//           [15, 67, 48],
//           [54, 25, 81],
//         ],
//       },
//     ],
//
// new set
// series: [
//   {
//     data: [
//       { x: 95, y: 95, z: 13.8, name: "BE", country: "Belgium" },
//       { x: 86.5, y: 102.9, z: 14.7, name: "DE", country: "Germany" },
//       { x: 80.8, y: 91.5, z: 15.8, name: "FI", country: "Finland" },
//       { x: 80.4, y: 102.5, z: 12, name: "NL", country: "Netherlands" },
//       { x: 80.3, y: 86.1, z: 11.8, name: "SE", country: "Sweden" },
//       { x: 78.4, y: 70.1, z: 16.6, name: "ES", country: "Spain" },
//       { x: 74.2, y: 68.5, z: 14.5, name: "FR", country: "France" },
//       { x: 73.5, y: 83.1, z: 10, name: "NO", country: "Norway" },
//       { x: 71, y: 93.2, z: 24.7, name: "UK", country: "United Kingdom" },
//       { x: 69.2, y: 57.6, z: 10.4, name: "IT", country: "Italy" },
//       { x: 68.6, y: 20, z: 16, name: "RU", country: "Russia" },
//       { x: 65.5, y: 126.4, z: 35.3, name: "US", country: "United States" },
//       { x: 65.4, y: 50.8, z: 28.5, name: "HU", country: "Hungary" },
//       { x: 63.4, y: 51.8, z: 15.4, name: "PT", country: "Portugal" },
//       { x: 64, y: 82.9, z: 31.3, name: "NZ", country: "New Zealand" },
//     ],
//     colorByPoint: true,
//   },
// ];

//
// {
//   data: [
//     { x: 95, y: 95, z: 13.8, name: "BE", country: "Belgium" },
//     { x: 86.5, y: 102.9, z: 14.7, name: "DE", country: "Germany" },
//     { x: 80.8, y: 91.5, z: 15.8, name: "FI", country: "Finland" },
//     { x: 80.4, y: 102.5, z: 12, name: "NL", country: "Netherlands" },
//     { x: 80.3, y: 86.1, z: 11.8, name: "SE", country: "Sweden" },
//     { x: 78.4, y: 70.1, z: 16.6, name: "ES", country: "Spain" },
//     { x: 74.2, y: 68.5, z: 14.5, name: "FR", country: "France" },
//     { x: 73.5, y: 83.1, z: 10, name: "NO", country: "Norway" },
//     { x: 71, y: 93.2, z: 24.7, name: "UK", country: "United Kingdom" },
//     { x: 69.2, y: 57.6, z: 10.4, name: "IT", country: "Italy" },
//     { x: 68.6, y: 20, z: 16, name: "RU", country: "Russia" },
//     { x: 65.5, y: 126.4, z: 35.3, name: "US", country: "United States" },
//     { x: 65.4, y: 50.8, z: 28.5, name: "HU", country: "Hungary" },
//     { x: 63.4, y: 51.8, z: 15.4, name: "PT", country: "Portugal" },
//     { x: 64, y: 82.9, z: 31.3, name: "NZ", country: "New Zealand" },
//   ],
//   colorByPoint: true,
// },
