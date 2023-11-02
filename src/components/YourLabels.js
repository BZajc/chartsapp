import { useState } from "react";
import { BsFillArrowRightSquareFill, BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function YourLabels() {
  const [showDelete, setShowDelete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setShowDelete(true);
    setTimeout(() => {
      setShowDelete(false);
    }, 3000);
  };

  return (
    <div className="creator__input-container">
      <form onSubmit={handleSubmit} className="creator__form">
        <input
          className="creator__input"
          name="label"
          placeholder="rename label..."
        />
        <BsFillArrowRightSquareFill className="creator__input-confirm button" />
        <BsFillTrash3Fill
          className="creator__input-confirm button"
          onClick={handleClick}
        />
        {showDelete && (
          <>
            <AiOutlineCheck className="creator__input-delete creator__input-delete--yes button" />
            |
            <AiOutlineClose className="creator__input-delete creator__input-delete--no button" />
          </>
        )}
      </form>
    </div>
  );
}

export default YourLabels;