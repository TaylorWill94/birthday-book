import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dinner from "./components/Dinner";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Vacation from "./components/Vacation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/vacation" element={<Vacation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
