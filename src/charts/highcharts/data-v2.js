export const worldData = [
  {
    id: "world",
    lifeExpectancy: 72.6, // Average global life expectancy in 2019
    gdpPerCapita: 16000, // Approximate average global GDP per capita in 2019
    population: 7700000000, // Approximate total global population in 2019
    x: 16000,
    y: 72.6,
    z: 7700000000,
    name: "World",
    color: "#000000", // unique color for the world
  },
  {
    id: "af",
    parent: "world",
    lifeExpectancy: 64.7,
    gdpPerCapita: 5500,
    population: 1300000000,
    x: 5500,
    y: 64.7,
    z: 1300000000,
    name: "Africa",
    color: "#78C8A4", // unique color for Africa
  },
  //   {
  //     id: "an",
  //     parent: "world",
  //     lifeExpectancy: 75.0,
  //     gdpPerCapita: 0,
  //     population: 1100,
  //     x: 0,
  //     y: 75.0,
  //     z: 1100,
  //     name: "Antarctica",
  //     color: "#4169E1", // unique color for Antarctica
  //   },
  {
    id: "as",
    parent: "world",
    lifeExpectancy: 72.1,
    gdpPerCapita: 10400,
    population: 4600000000,
    x: 10400,
    y: 72.1,
    z: 4600000000,
    name: "Asia",
    color: "#CCCCFF", // unique color for Asia
  },
  {
    id: "eu",
    parent: "world",
    lifeExpectancy: 81.5,
    gdpPerCapita: 36000,
    population: 750000000,
    x: 36000,
    y: 81.5,
    z: 750000000,
    name: "Europe",
    color: "#FF7F50", // unique color for Europe
  },
  {
    id: "na",
    parent: "world",
    lifeExpectancy: 77.8,
    gdpPerCapita: 59000,
    population: 590000000,
    x: 59000,
    y: 77.8,
    z: 590000000,
    name: "North America",
    color: "#FFCC99", // unique color for North America
  },
  {
    id: "oc",
    parent: "world",
    lifeExpectancy: 66.7,
    gdpPerCapita: 55000,
    population: 40000000,
    x: 55000,
    y: 66.7,
    z: 40000000,
    name: "Australia/Oceania",
    color: "#99CCFF", // unique color for Australia/Oceania
  },
  {
    id: "sa",
    parent: "world",
    lifeExpectancy: 75.7,
    gdpPerCapita: 15800,
    population: 430000000,
    x: 15800,
    y: 75.7,
    z: 430000000,
    name: "South America",
    color: "#CCFFCC", // unique color for South America
  },
  {
    id: "argentina",
    parent: "sa",
    lifeExpectancy: 76.5,
    gdpPerCapita: 16200,
    population: 45000000,
    x: 16200,
    y: 76.5,
    z: 45000000,
    name: "Argentina",
    color: "#CCFFCC", // same color as South America
  },
  {
    id: "bolivia",
    parent: "sa",
    lifeExpectancy: 71.8,
    gdpPerCapita: 7200,
    population: 11000000,
    x: 7200,
    y: 71.8,
    z: 11000000,
    name: "Bolivia",
    color: "#CCFFCC", // same color as South America
  },
  {
    id: "brazil",
    parent: "sa",
    lifeExpectancy: 75.5,
    gdpPerCapita: 9700,
    population: 210000000,
    x: 9700,
    y: 75.5,
    z: 210000000,
    name: "Brazil",
    color: "#CCFFCC", // same color as South America
  },
];
