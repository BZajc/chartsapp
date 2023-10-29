import Lottie from "lottie-react";
import chartsLogo from "../img/chartsLogo.svg";
import puzzle from "../lottie/puzzle.json";
import { AiFillGithub } from "react-icons/ai";

function MainPage() {
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
        <button className="main__button button">How it works</button>
        <Lottie animationData={puzzle} className="main__how-to-animation" />
      </div>
      <div className="main__random-text">
        <p>Short version:</p>
        <p>1. Choose chart</p>
        <p>2. ???</p>
        <p>3. Profit</p>
      </div>
      <h2 className="main__h2">What chart do you want to create?</h2>
    </div>
  );
}

export default MainPage;
