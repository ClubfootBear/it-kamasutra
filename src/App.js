import './App.css';
import React from "react";
// import Route from "react-router-dom/es/Route";

//Import components
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <NavBar/>
                <div className="wrapperContent">
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
