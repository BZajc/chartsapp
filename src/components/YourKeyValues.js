import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillPlusSquare } from "react-icons/ai";
import { selectLabels, addKeyValue } from "../store/slices/labelSlice";
import AddKeyValue from "./AddKeyValue";

function YourKeyValues({ id }) {
  // useState hell will be fixed later
  const [label, setLabel] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [keyValuePairs, setKeyValuePairs] = useState([
    { key: "", value: "", pairId: Date.now() },
  ]);
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

  const handleAddKeyValue = () => {
    setKeyValuePairs((prevPairs) => [
      ...prevPairs,
      { key: "", value: "", pairId: Date.now() + Math.random() },
    ]);
  };

  const handleDeleteKeyValue = (pairIdToDelete) => {
    setKeyValuePairs(
      keyValuePairs.filter((pair) => pair.pairId !== pairIdToDelete)
    );
  };

  return (
    <div className="creator__keyvalues">
      <div className="creator__label-name-box">
        <p className="creator__label-name">{label}</p>
        <AiFillPlusSquare
          className="creator__add-keyvalues button"
          onClick={handleAddKeyValue}
        />
      </div>
      <div className="creator__keyvalues-inputs-container">
        {keyValuePairs.map((pair, index) => (
          <AddKeyValue
            pairId={pair.pairId}
            key={index}
            handleSubmit={
              index === keyValuePairs.length - 1 ? handleSubmit : undefined
            }
            setKey={setKey}
            setValue={setValue}
            onDelete={handleDeleteKeyValue}
          />
        ))}
      </div>
    </div>
  );
}

export default YourKeyValues;
