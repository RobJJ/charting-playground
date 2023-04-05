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
    color: "#FFA500", // unique color for Africa
  },
  {
    id: "an",
    parent: "world",
    lifeExpectancy: 75.0,
    gdpPerCapita: 0,
    population: 1100,
    x: 0,
    y: 75.0,
    z: 1100,
    name: "Antarctica",
    color: "#4169E1", // unique color for Antarctica
  },
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
    color: "#800080", // unique color for Asia
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
    color: "#008000", // unique color for Europe
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
    color: "#FF0000", // unique color for North America
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
    color: "#FFFF00", // unique color for Australia/Oceania
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
    color: "#FF00FF", // unique color for South America
  },
];
