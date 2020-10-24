import './App.css';
import React from "react";

//Import components
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";


function App() {
  return (
    <div className="wrapper">
        <Header/>
        <NavBar/>
        <div className="wrapperContent">
            <Dialogs />
        </div>
        {/*<Profile/>*/}
    </div>
  );
}

export default App;
