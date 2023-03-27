import React from "react";

import HighchartsPage from "./pages/highcharts-page";
// import BubbleChart from "./charts/highcharts/scatter-bubble-chart";
// import Toggle from "./charts/highcharts/toggle";

function App() {
  return (
    <div className="#F5F5F5 w-screen h-screen flex justify-center items-center">
      <div className="bg-red-100 w-2/3 h-2/3 p-5">
        <HighchartsPage />
      </div>
    </div>
  );
}

export default App;
