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


function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <NavBar/>
                <div className="wrapperContent">
                    <Route exact path={'/dialogs'} render={() =>
                        <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
