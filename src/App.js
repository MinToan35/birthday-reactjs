import "./App.scss";
import Birthday from "./birthday/Birthday";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tours from "./tours/App";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Birthday />} />
        <Route path="/tours" exact element={<Tours />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
