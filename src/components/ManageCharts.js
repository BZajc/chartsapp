import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Cell,
} from "recharts";

function ManageCharts() {
  const areaData = [
    { name: "data1", value1: 15, value2: 18, value3: 25 },
    { name: "data2", value1: 19, value2: 45, value3: 42 },
    { name: "data3", value1: 23, value2: 25, value3: 11 },
    { name: "data4", value1: 21, value2: 55, value3: 8 },
  ];
  const barData = [
    { name: "data1", value1: 15, value2: 18, value3: 25 },
    { name: "data2", value1: 19, value2: 45, value3: 42 },
    { name: "data3", value1: 23, value2: 25, value3: 11 },
    { name: "data4", value1: 21, value2: 55, value3: 8 },
  ];
  const doughnutData = [
    { name: "data1", value: 15 },
    { name: "data2", value: 19 },
    { name: "data3", value: 23 },
    { name: "data4", value: 21 },
  ];
  const lineData = [
    { name: "data1", value1: 15, value2: 18, value3: 25 },
    { name: "data2", value1: 19, value2: 45, value3: 42 },
    { name: "data3", value1: 23, value2: 25, value3: 11 },
    { name: "data4", value1: 21, value2: 55, value3: 8 },
  ];
  const pieData = [
    { name: "data1", value: 15 },
    { name: "data2", value: 19 },
    { name: "data3", value: 23 },
    { name: "data4", value: 21 },
  ];
  const radarData = [
    { name: "data1", value1: 15, value2: 18, value3: 25 },
    { name: "data2", value1: 19, value2: 45, value3: 42 },
    { name: "data3", value1: 23, value2: 25, value3: 11 },
    { name: "data4", value1: 21, value2: 55, value3: 8 },
  ];

  const selectedChartType = useSelector(
    (state) => state.chart.selectedChartType
  );

  let chartComponent = null;

  let DEFAULT_COLORS = ["#2f7abb", "#95bc21", "#f20900", "#ab02bd"];

  switch (selectedChartType) {
    case "area":
      chartComponent = (
        <AreaChart width={300} height={300} data={areaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="value1"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="value2"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="value3"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      );
      break;
    case "bar":
      chartComponent = (
        <BarChart width={300} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value1" stackId="1" fill="#8884d8" />
          <Bar dataKey="value2" stackId="1" fill="#82ca9d" />
          <Bar dataKey="value3" stackId="1" fill="#ffc658" />
        </BarChart>
      );
      break;
    case "doughnut":
      chartComponent = (
        <PieChart width={300} height={300}>
          <Tooltip />
          <Legend />
          <Pie
            data={doughnutData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      );
      break;
    case "line":
      chartComponent = (
        <LineChart width={300} height={300} data={lineData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value1" stroke="#8884d8" />
          <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="value3" stroke="#ffc658" />
        </LineChart>
      );
      break;
    case "pie":
      chartComponent = (
        <PieChart width={300} height={300}>
          <Tooltip />
          <Legend />
          <Pie
            data={pieData}
            dataKey="value1"
            nameKey="name"
            fill="#8884d8"
            outerRadius={80}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      );
      break;
    case "radar":
      chartComponent = (
        <RadarChart outerRadius={90} width={500} height={300} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <Legend />
          <Radar
            name="Value 1"
            dataKey="value1"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Value 2"
            dataKey="value2"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Radar
            name="Value 3"
            dataKey="value3"
            stroke="#ffc658"
            fill="#ffc658"
            fillOpacity={0.6}
          />
        </RadarChart>
      );
      break;
    default:
      chartComponent = null;
  }

  return <div>{chartComponent}</div>;
}

export default ManageCharts;
