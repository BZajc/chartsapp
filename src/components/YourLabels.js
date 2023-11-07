import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowRightSquareFill, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {
  selectLabels,
  removeLabel,
  renameLabel,
} from "../store/slices/labelSlice";

function YourLabels({ id }) {
  const [showDelete, setShowDelete] = useState(false);
  const [label, setLabel] = useState("");
  const labels = useSelector(selectLabels);
  const dispatch = useDispatch();

  // If id of the component is the same as label - set label value as the value of input
  useEffect(() => {
    const labelObject = labels.find((item) => item.id === id);
    if (labelObject) {
      setLabel(labelObject.label);
    }
  }, [id, labels]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(renameLabel({ id, newLabel: label }));
  };

  const handleClick = () => {
    setShowDelete(!showDelete);
  };

  return (
    <div className="creator__input-container">
      <form onSubmit={handleSubmit} className="creator__form">
        <input
          className="creator__input"
          name="label"
          placeholder="rename label..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <BsFillArrowRightSquareFill
          className="creator__input-confirm button"
          onClick={handleSubmit}
        />
        <BsFillTrash3Fill
          className="creator__input-confirm button"
          onClick={handleClick}
        />
        {showDelete && (
          <>
            <AiOutlineCheck
              className="creator__input-delete creator__input-delete--yes button"
              onClick={() => dispatch(removeLabel(id))}
            />
            |
            <AiOutlineClose
              className="creator__input-delete creator__input-delete--no button"
              onClick={() => setShowDelete(false)}
            />
          </>
        )}
      </form>
    </div>
  );
}

export default YourLabels;
