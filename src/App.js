import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />

          {/* Other routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
