import { useState } from "react";
import { BsFillArrowRightSquareFill, BsFillTrash3Fill } from "react-icons/bs";

function AddKeyValue({ handleSubmit, setKey, setValue, pairId, onDelete }) {
  const [localValue, setLocalValue] = useState("");

  const handleClick = () => {
    onDelete(pairId);
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;

    // Checking if there are only numbers and eventually only one dot or comma
    // and if they arent the first or last character
    const re = /^[0-9]+([.,][0-9]*)?$/;

    if (newValue !== "") {
      if (re.test(newValue) && newValue !== "." && newValue !== ",") {
        setLocalValue(newValue);
        setValue(newValue);
      } else {
        // If the value doesnt meet the conditions replace the last character with an empty string
        setLocalValue(newValue.slice(0, -1));
        setValue(newValue.slice(0, -1));
      }
    } else {
      setLocalValue(newValue);
      setValue(newValue);
    }
  };

  return (
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
          value={localValue}
          onChange={handleValueChange}
        />
        <BsFillArrowRightSquareFill
          className="creator__input-confirm button"
          onClick={handleSubmit}
        />
        <BsFillTrash3Fill
          className="creator__input-confirm button"
          onClick={handleClick}
        />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
    </div>
  );
}

export default AddKeyValue;
