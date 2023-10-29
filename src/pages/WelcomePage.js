import chartsLogo from "../img/chartsLogo.svg";
import Lottie from "lottie-react";
import welcome from "../lottie/welcome.json"

function WelcomePage() {
  return (
    <div className="welcome">
      <div>
        <img src={chartsLogo} alt="Charts Logo" className="welcome__logo logo" />
      </div>
      <div>
        <h1 className="welcome__h1">Welcome to Charts app</h1>
        <p className="welcome__description">
          Easily transform your data into animated and interactive charts.
          Choose your preferred chart type and visualize your data in a whole
          new way. Get started now and explore powerful data analysis!
        </p>
      </div>
      <div className="welcome__animation">
        <Lottie animationData={welcome} />
      </div>
      <div>
        <button className="welcome__button button">Let's start</button>
      </div>
    </div>
  );
}

export default WelcomePage;
