import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { selectLabels, addKeyValue } from "../store/slices/labelSlice";

function YourKeyValues({ id }) {
  const [label, setLabel] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const labels = useSelector(selectLabels);

  // If id of the component is the same as label - set label value as label name
  useEffect(() => {
    const labelObject = labels.find((item) => item.id === id);
    if (labelObject) {
      setLabel(labelObject.label);
    }
  }, [id, labels]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addKeyValue({ id, key, value }));
  };

  return (
    <div className="creator__keyvalues">
      <div className="creator__label-name-box">
        <p className="creator__label-name">{label}</p>
        <AiFillPlusSquare className="creator__add-keyvalues button" />
      </div>
      <div className="creator__keyvalues-inputs-container">
        <div className="creator__keyvalues-inputs">
          <form onSubmit={handleSubmit} className="creator__keyvalues-form">
            <input
              className="creator__input creator__keyvalues-input"
              name="key"
              placeholder="key"
              onChange={(e) => setKey(e.target.value)}
            />
            <input
              className="creator__input creator__keyvalues-input creator__keyvalues-input--value"
              name="value"
              placeholder="value"
              onChange={(e) => setValue(e.target.value)}
            />
            <BsFillArrowRightSquareFill
              className="creator__input-confirm button"
              onClick={handleSubmit}
            />
            <button type="submit" style={{ display: 'none' }}></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default YourKeyValues;
