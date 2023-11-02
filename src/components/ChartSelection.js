import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import areaChart from "../lottie/areaChart.json";
import barChart from "../lottie/barChart.json";
import doughnutChart from "../lottie/doughnutChart.json";
import lineChart from "../lottie/lineChart.json";
import pieChart from "../lottie/pieChart.json";
import radarChart from "../lottie/radarChart.json";
import { setSelectedChartType } from "../store/slices/chartSlice";

function ChartSelection() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (chartType) => {
    dispatch(setSelectedChartType(chartType))
    navigate("/chartcreator")
  }

  return (
    <div className="chart-selection">
      <div className="chart-selection__chart chart-selection__chart--1" onClick={() => handleClick("area")}>
        <p className="chart-selection__title">Area chart</p>
        <Lottie
          animationData={areaChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--1"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--2" onClick={() => handleClick("bar")}>
        <p className="chart-selection__title">Bar chart</p>
        <Lottie
          animationData={barChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--2"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--3" onClick={() => handleClick("doughnut")}>
        <p className="chart-selection__title">Doughnut chart</p>
        <Lottie
          animationData={doughnutChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--3"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--4" onClick={() => handleClick("line")}>
        <p className="chart-selection__title">Line chart</p>
        <Lottie
          animationData={lineChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--4"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--5" onClick={() => handleClick("pie")}>
        <p className="chart-selection__title">Pie chart</p>
        <Lottie
          animationData={pieChart}
          className="chart-selection__chart-animation chart-selection__chart-animation--5"
        />
      </div>
      <div className="chart-selection__chart chart-selection__chart--6" onClick={() => handleClick("radar")}>
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
