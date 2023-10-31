import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
function ChartCreatorPage() {
  const data = [
    { name: "data1", value1: 15, value2: 18, value3: 25 },
    { name: "data2", value1: 19, value2: 45, value3: 42 },
    { name: "data3", value1: 23, value2: 25, value3: 11 },
    { name: "data4", value1: 21, value2: 55, value3: 8 },
  ];

  return (
    <div className="creator">
      <div className="creator__buttons">
        <button className="creator__button creator__button--load button">
          load
        </button>
        <button className="creator__button creator__button--save button">
          save
        </button>
        <button className="creator__button creator__button--back button">
          back
        </button>
      </div>
      <div className="creator__chart-container">
        <LineChart width={300} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#2395af"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#fa590b"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="value3"
            stroke="#ab2210"
            strokeWidth={3}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
      <div className="creator__inputs">
        <h3 className="creator__h3">Data</h3>
        <div className="creator__input-container">
          <input
            className="creator__input"
            name="label"
            placeholder="add label..."
          />
          <BsFillArrowRightSquareFill className="creator__input-confirm button" />
          <label htmlFor="label">Add label</label>
        </div>
        <div className="creator__input-container">
          <input
            className="creator__input"
            name="key"
            placeholder="add key..."
          />
          <BsFillArrowRightSquareFill className="creator__input-confirm button" />
          <label htmlFor="key">Add key</label>
        </div>
        <div>
          <h3 className="creator__h3">Your labels</h3>
        </div>
        <div>
          <h3 className="creator__h3">Your key-values</h3>
        </div>
        <div>
          <h3 className="creator__h3">Customization</h3>
        </div>
      </div>
    </div>
  );
}

export default ChartCreatorPage;
