import SideNav from "./components/navigation/side/SideNav";
import TopNav from "./components/navigation/top/TopNav";

import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Ict from "./components/pages/ict/Ict";

const App = () => {
  return (
    <div className="App">
      <div className="drawer">
        <SideNav />
      </div>
      <div className="main-body">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ict" element={<Ict />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
