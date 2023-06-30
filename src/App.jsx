import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main/MainLayout";
import Home from "./pages/Home/Home";
import Invest from "./pages/Invest/Invest";
import Marketplace from "./pages/Marketplace/Marketplace";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />} exact>
            <Route index element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
