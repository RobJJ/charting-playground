import React from "react";
import BubbleChartVersion2 from "./charts/highcharts/scatter-bubble-chart-v2";
import ScatterChart from "./charts/highcharts/scatter-chart-v1";

// import HighchartsPage from "./pages/highcharts-page";
// import BubbleChart from "./charts/highcharts/scatter-bubble-chart";
// import Toggle from "./charts/highcharts/toggle";

function App() {
  console.log("---- APP JS ----");
  return (
    <div className="#F5F5F5 w-screen h-screen flex justify-center items-center">
      <div className="bg-red-200 w-4/6 h-4/6 p-5">
        <ScatterChart />
      </div>
    </div>
  );
}

export default App;

// <HighchartsPage />
// <BubbleChartVersion2 />
