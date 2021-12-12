import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Salaries from "./pages/salaries";
import Jobs from "./pages/jobs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="salaries" element={<Salaries />} />
          <Route path="jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
