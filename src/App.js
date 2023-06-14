import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Specs from "./pages/Specs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Lista" element={<Lista />} />
        <Route exact path={`/specs/:id`} element={<Specs />} />
      </Routes>
    </div>
  );
}

export default App;
