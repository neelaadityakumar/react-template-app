import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrafficLightGenerator from "./component/General/Traffic/TrafficLightGenerator";
import Toast from "./component/General/Toast";
import Virtualization from "./component/General/Virtualization";
const RouteHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/virtual" element={<Virtualization />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/traffic" element={<TrafficLightGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteHandler;
