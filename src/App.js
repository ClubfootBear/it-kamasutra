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
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import InputCheck from "./componets/InputCheck/InputCheck";


function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                {/*<Header/>*/}
                <HeaderContainer />
                <NavBar/>
                <div className="wrapperContent">
                    <Route exact path={'/dialogs'} render={() =>
                        <DialogsContainer />
                    }/>
                    <Route path={'/profile/:userId?'} render={() =>
                        // <Profile />
                        <ProfileContainer />
                    }/>
                    <Route path={'/users'} render={() =>
                        <UsersContainer />
                    }/>
                    <Route path={'/login'} render={() =>
                        <Login />
                    }/>
                    <Route path={'/input'} render={() =>
                        <InputCheck />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
