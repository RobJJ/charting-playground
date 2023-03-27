import React from "react";

import { GDP_LIFE_DATA } from "./bubbleChart-data";

const Toggle = ({ setCurrentData, setKey }) => {
  console.log("---- Toggle Comp ----");
  console.log("data pulled through: ", GDP_LIFE_DATA);
  //
  function handleClick(e) {
    console.log("click event has been called! - changing data!");
    const choice = e.target.name;
    const newData = [...GDP_LIFE_DATA[choice]];
    // console.log("e.target.name", e.target.name);
    setCurrentData(newData);
    setKey((prevKey) => prevKey + 1);
  }
  //
  return (
    <div className="w-1/5 h-full bg-white flex flex-col">
      <div className="underline mt-2 mb-5 text-center">Toggles:</div>
      <div className="flex flex-col p-2 gap-2">
        <button
          onClick={handleClick}
          name="world"
          className="bg-gray-200 rounded-lg"
        >
          World Data
        </button>
        <button
          onClick={handleClick}
          name="country"
          className="bg-gray-200 rounded-lg"
        >
          Country Data
        </button>
      </div>
    </div>
  );
};

export default Toggle;
