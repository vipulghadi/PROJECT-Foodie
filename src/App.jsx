import React from "react";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Success from "./pages/Success";

import Footer from "./components/Footer";

function App() {

  

  return <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/success" element={<Success/>}/>
  <Route path="/*" element={<Error/>}/>
  

 </Routes>
 </BrowserRouter>

  </>
      
       
}
export default App;