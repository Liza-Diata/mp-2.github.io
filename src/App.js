import React from "react";
import Router from "./components/routes/Router";
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Footer } from "./components/semantics/Footer";






function App() {
  return (
    <div>
    <BrowserRouter>
    <Router /> 
    <Footer /> 
    </BrowserRouter>
    </div>
  );
}

export default App;
