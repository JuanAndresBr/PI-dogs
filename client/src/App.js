import "./App.css";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login"; 
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

import { Routes, Route, useLocation } from "react-router-dom";
function App() {

  return (
    <div>
      {useLocation().pathname==="/"? null: <Nav/>
}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/create" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
