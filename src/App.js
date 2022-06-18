import "./App.scss";
import Birthday from "./birthday/Birthday";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tours from "./tours/App";

import Review from "./reviews/Review";
import Question from "./question/App";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Birthday />} />
        <Route path="/tours" exact element={<Tours />} />
        <Route path="/review" exact element={<Review />} />
        <Route path="/question" exact element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
