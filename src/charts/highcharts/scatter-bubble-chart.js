import React from "react";
// import _ from "lodash";

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
    // tooltip: {
    //   useHTML: true,
    //   headerFormat: "<table>",
    //   pointFormat:
    //     '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
    //     "<tr><th>Fat intake:</th><td>{point.x}g</td></tr>" +
    //     "<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>" +
    //     "<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>",
    //   footerFormat: "</table>",
    //   followPointer: true,
    //   animation: true,
    //   hideDelay: 0,
    //   distance: 30,
    //   // custom position setter
    //   // positioner: function () {
    //   //   return { x: 80, y: 20 };
    //   // },
    //   // shadow: false,
    //   // borderWidth: 0,
    //   // backgroundColor: "rgba(255,255,255,0.8)",
    // },
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

    series: [
      {
        type: "bubble",
        data: [
          {
            name: "USA",
            country: "United States",
            lifeExpectancy: 78.9,
            y: 78.9,
            gdpPerCapita: 65297,
            x: 65297,
            region: "North America",
            population: 328239523,
            z: 328239523,
            // color: "#50B432",
          },
          {
            name: "CHN",
            country: "China",
            lifeExpectancy: 76.7,
            y: 76.7,
            gdpPerCapita: 10216,
            x: 10216,
            region: "Asia",
            population: 1397715000,
            z: 1397715000,
          },
          {
            name: "JPN",
            country: "Japan",
            lifeExpectancy: 84.6,
            y: 84.6,
            gdpPerCapita: 40849,
            x: 40849,
            region: "Asia",
            population: 126010000,
            z: 126010000,
          },
          {
            name: "DEU",
            country: "Germany",
            lifeExpectancy: 80.9,
            y: 80.9,
            gdpPerCapita: 46457,
            x: 46457,
            region: "Europe",
            population: 83019200,
            z: 83019200,
          },
          {
            name: "GBR",
            country: "United Kingdom",
            lifeExpectancy: 81.3,
            y: 81.3,
            gdpPerCapita: 39720,
            x: 39720,
            region: "Europe",
            population: 66647112,
            z: 66647112,
          },
          {
            name: "IND",
            country: "India",
            lifeExpectancy: 69.4,
            y: 69.4,
            gdpPerCapita: 2263,
            x: 2263,
            region: "Asia",
            population: 1366417756,
            z: 1366417756,
          },
          {
            name: "BRA",
            country: "Brazil",
            lifeExpectancy: 75.9,
            y: 75.9,
            gdpPerCapita: 8714,
            x: 8714,
            region: "South America",
            population: 211049527,
            z: 211049527,
          },
          {
            name: "RUS",
            country: "Russia",
            lifeExpectancy: 72.6,
            y: 72.6,
            gdpPerCapita: 11218,
            x: 11218,
            region: "Europe/Asia",
            population: 145872256,
            z: 145872256,
          },
          {
            name: "ZAF",
            country: "South Africa",
            lifeExpectancy: 63.5,
            y: 63.5,
            gdpPerCapita: 6001,
            x: 6001,
            region: "Africa",
            population: 58558267,
            z: 58558267,
          },
          {
            name: "AUS",
            country: "Australia",
            lifeExpectancy: 83.5,
            y: 83.5,
            gdpPerCapita: 57324,
            x: 57324,
            region: "Australia",
            population: 25203198,
            z: 25203198,
          },
        ],
      },
      //can add another data series here
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
