import React from "react";
import BubbleChartVersion2 from "./charts/highcharts/scatter-bubble-chart-v2";

// import HighchartsPage from "./pages/highcharts-page";
// import BubbleChart from "./charts/highcharts/scatter-bubble-chart";
// import Toggle from "./charts/highcharts/toggle";

function App() {
  console.log("---- APP JS ----");
  return (
    <div className="#F5F5F5 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-1/3 h-2/3 p-5">
        <BubbleChartVersion2 />
      </div>
    </div>
  );
}

export default App;

// <HighchartsPage />
