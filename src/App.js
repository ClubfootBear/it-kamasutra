import './App.css';
import React from "react";

//Import components
import Header from "./componets/Header";
import NavBar from "./componets/NavBar";
import Profile from "./componets/Profile";


function App() {
  return (
    <div className="wrapper">
        <Header/>
        <NavBar/>
        <Profile/>
    </div>
  );
}

export default App;
