import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";

function App() {
    const [show, setShow] = useState(false) //Used to show MainPage after hiding WelcomePage

    const handleStateChange = (data) => {
        setShow(data)
        // Displaying MainPage component with small delay
        setTimeout(() => {
          document.querySelector('.main').classList.add('appear')
        }, 300);
    }

  return (
    <div>
      <WelcomePage handleStateChange={handleStateChange}/>
      {show && <MainPage />}
    </div>
  );
}

export default App;