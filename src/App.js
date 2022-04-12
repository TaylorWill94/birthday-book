import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./components/Dinner";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Vacation from "./components/Vacation";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/vacation" element={<Vacation />} />
      </Routes>
    </div>
  );
}

export default App;
