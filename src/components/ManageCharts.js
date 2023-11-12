import BarChartCreator from "./charts/BarChartCreator";
import AreaChartCreator from "./charts/AreaChartCreator";
import LineChartCreator from "./charts/LineChartCreator";
import PieChartCreator from "./charts/PieChartCreator";
import DoughnutChartCreator from "./charts/DoughnutChartCreator";
import RadarChartCreator from "./charts/RadarChartCreator";
import { useParams } from "react-router-dom";

function ManageCharts() {
  const { chartType } = useParams();

  switch (chartType) {
    case "bar":
      return <BarChartCreator />;
    case "area":
      return <AreaChartCreator />;
    case "line":
      return <LineChartCreator />;
    case "pie":
      return <PieChartCreator />;
    case "doughnut":
      return <DoughnutChartCreator />;
    case "radar":
      return <RadarChartCreator />;
    default:
      return <div>You forgot to choose chart</div>;
  }
}

export default ManageCharts;
