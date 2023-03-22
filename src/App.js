import React from "react";

import BubbleChart from "./charts/scatter-bubble-chart";

function App() {
  return (
    <div className="#F5F5F5 w-screen h-screen flex justify-center items-center">
      <div className="bg-red-100 w-2/3 h-2/3 flex p-5">
        <BubbleChart />
      </div>
    </div>
  );
}

export default App;
