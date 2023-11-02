import { BsFillArrowRightSquareFill } from "react-icons/bs";
import ManageCharts from "../components/ManageCharts";
import YourLabels from "../components/YourLabels";

function ChartCreatorPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <ManageCharts />
      </div>
      <div className="creator__inputs">
        <h3 className="creator__h3">Data</h3>
        <div className="creator__input-container">
          <form onSubmit={handleSubmit} className="creator__form">
            <input
              className="creator__input"
              name="label"
              placeholder="add label..."
            />
            <BsFillArrowRightSquareFill className="creator__input-confirm button" />
            <label htmlFor="label">Add label</label>
          </form>
        </div>
        <div>
          <h3 className="creator__h3">Your labels</h3>
          <div className="creator__user-data-container">
            <YourLabels />
          </div>
        </div>
        <div>
          <h3 className="creator__h3">Your key-values</h3>
          <div className="creator__user-data-container"></div>
        </div>
        <div>
          <h3 className="creator__h3">Customization</h3>
          <div className="creator__user-data-container"></div>
        </div>
      </div>
    </div>
  );
}

export default ChartCreatorPage;
