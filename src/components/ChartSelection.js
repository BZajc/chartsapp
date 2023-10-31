import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import areaChart from "../lottie/areaChart.json";
import barChart from "../lottie/barChart.json";
import doughnutChart from "../lottie/doughnutChart.json";
import lineChart from "../lottie/lineChart.json";
import pieChart from "../lottie/pieChart.json";
import radarChart from "../lottie/radarChart.json";

function ChartSelection() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/chartcreator")
  }

  return (
    <div className="chart-selection">
      <div className="chart-selection__chart chart-selection__chart--1" onClick={handleClick}>
        <p className="chart-selection__title">Area chart</p>
        <Lottie
          animationData={areaChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--1"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--2" onClick={handleClick}>
        <p className="chart-selection__title">Bar chart</p>
        <Lottie
          animationData={barChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--2"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--3" onClick={handleClick}>
        <p className="chart-selection__title">Doughnut chart</p>
        <Lottie
          animationData={doughnutChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--3"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--4" onClick={handleClick}>
        <p className="chart-selection__title">Line chart</p>
        <Lottie
          animationData={lineChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--4"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--5" onClick={handleClick}>
        <p className="chart-selection__title">Pie chart</p>
        <Lottie
          animationData={pieChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--5"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--6" onClick={handleClick}>
        <p className="chart-selection__title">Radar chart</p>
        <Lottie
          animationData={radarChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--6"
        />
      </div>
    </div>
  );
}

export default ChartSelection;
