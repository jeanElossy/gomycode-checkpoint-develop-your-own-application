import React from "react";

import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Vetements from "./pages/Vetements";
import NotFound from "./pages/NotFound";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="vetements" exact element={<Vetements />} />
      <Route path="notFound" element={<NotFound />} />
    </Routes>
  );
}

export default App;


