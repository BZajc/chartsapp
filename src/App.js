import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import ChartCreatorPage from "./pages/ChartCreatorPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/chartcreator" element={<ChartCreatorPage />} />
          <Route path="/chartcreator/:chartType" element={<ChartCreatorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
