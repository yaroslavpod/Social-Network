import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className="container-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="container-app-wrapper">
                <Switch>
                    <Route exact path="/">
                        <Redirect to='/profile'/>
                    </Route>
                    <Route path="/profile/:userId?">
                        <ProfileContainer/>
                    </Route>
                    <Route path="/dialogs">
                        <DialogsContainer/>
                    </Route>
                    <Route path="/users">
                        <UsersContainer/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/music">
                        <Music/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Route path="/friends">
                        <Friends/>
                    </Route>
                </Switch>
            </div>
        </div>

    );

}

export default App;

