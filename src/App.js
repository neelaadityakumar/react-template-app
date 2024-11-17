import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import List from "./component/List";
import Virtualization from "./component/Virtualization";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/virtual" element={<Virtualization />} />

          {/* Other routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
