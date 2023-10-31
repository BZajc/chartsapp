import { useState } from "react";
import Lottie from "lottie-react";
import chartsLogo from "../img/chartsLogo.svg";
import puzzle from "../lottie/puzzle.json";
import { AiFillGithub, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ChartSelection from "../components/ChartSelection";
import { scrollLeftHandler, scrollRightHandler } from "../utilities/scrollButtons";

function MainPage() {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    scrollLeftHandler(scrollLeft, setScrollLeft);
  };

  const handleScrollRight = () => {
    scrollRightHandler(scrollLeft, setScrollLeft);
  };

  return (
    <div className="main">
      <div className="main__github">
        <a href="https://github.com/BZajc/chartsapp">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <img src={chartsLogo} alt="Charts Logo" className="main__logo logo" />
      </div>
      <div className="main__button-box">
        <button className="main__how-to-button button">How it works</button>
        <Lottie animationData={puzzle} className="main__how-to-animation" />
      </div>
      <h2 className="main__h2">What chart do you want to create?</h2>
      <div className="main__charts">
        <AiOutlineLeft className="main__charts-button main__charts-button--left" onClick={handleScrollLeft}/>
        <ChartSelection />
        <AiOutlineRight className="main__charts-button main__charts-button--right" onClick={handleScrollRight}/>
      </div>
      <button className="main__load-button button">Load charts</button>
    </div>
  );
}

export default MainPage;
