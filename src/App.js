import './App.css';
import React from "react";
// import Route from "react-router-dom/es/Route";

//Import components
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <NavBar/>
                <div className="wrapperContent">
                    <Route exact path={'/dialogs'} render={() =>
                        <DialogsContainer />
                    }/>
                    <Route path={'/profile'} render={() =>
                        // <Profile />
                        <ProfileContainer />
                    }/>
                    <Route path={'/users'} render={() =>
                        <UsersContainer />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
