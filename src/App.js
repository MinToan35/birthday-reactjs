import "./App.scss";
import Birthday from "./birthday/Birthday";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tours from "./tours/App";
import Review from "./reviews/Review";
import Question from "./question/App";
import Menu from "./menu/App";
import Tabs from "./tabs/Tabs";
import Slider from "./slider/App";
import Lorem from "./lorem/App";
import CRUD from "./crud/App";
import Navbar from "./navbar/App";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Birthday />} />
        <Route path="/tours" exact element={<Tours />} />
        <Route path="/review" exact element={<Review />} />
        <Route path="/question" exact element={<Question />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/tabs" exact element={<Tabs />} />
        <Route path="/slider" exact element={<Slider />} />
        <Route path="/lorem" exact element={<Lorem />} />
        <Route path="/crud" exact element={<CRUD />} />
        <Route path="/navbar" exact element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
