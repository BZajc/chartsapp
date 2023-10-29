import { useState } from "react";
import chartsLogo from "../img/chartsLogo.svg";
import Lottie from "lottie-react";
import welcome from "../lottie/welcome.json";
import { AiFillGithub } from "react-icons/ai";

function WelcomePage({ handleStateChange }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      document.querySelector(".welcome").classList.add("remove");
      handleStateChange(isVisible);
    }, 300);
  };

  return (
    <div className={`welcome ${isVisible ? "" : "hidden"}`}>
      <div>
        <img
          src={chartsLogo}
          alt="Charts Logo"
          className="welcome__logo logo"
        />
      </div>
      <div>
        <h1 className="welcome__h1">Welcome to Charts app</h1>
        <p className="welcome__description">
          Easily transform your data into animated and interactive charts.
          Choose your preferred chart type and visualize your data in a whole
          new way. Get started now and explore powerful data analysis!
        </p>
      </div>
      <div className="welcome__animation-container">
        <div className="welcome__animation">
          <Lottie animationData={welcome} />
        </div>
      </div>
      <p className="welcome__created-with">
        App has been created with: React, Redux, JSON-server, Lottie, Chart.js
      </p>
      <div>
        <button className={"welcome__button button"} onClick={handleClick}>
          Let's get started
        </button>
      </div>
      <div>
        <p className="welcome__github-paragraph">
          Checkout this app on{" "}
          <a href="https://github.com/BZajc/chartsapp">
            GitHub <AiFillGithub />
          </a>
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
