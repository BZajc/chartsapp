import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";

function App() {
    const [show, setShow] = useState(false) //Used to show MainPage after hiding WelcomePage

    const handleStateChange = (data) => {
        setShow(data)
    }

  return (
    <div>
      <WelcomePage handleStateChange={handleStateChange}/>
      {show && <MainPage />}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import WelcomePage from "./pages/WelcomePage";
// import MainPage from "./pages/MainPage";

// function App() {
//     const [show, setShow] = useState(false)

//     const handleStateChange = (data) => {
//         setShow(data)
//     }

//   return (
//     <div>
//       <WelcomePage handleStateChange={handleStateChange}/>
//       {show && <MainPage />}
//     </div>
//   );
// }

// export default App;
