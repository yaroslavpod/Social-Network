import logo from './logo.svg';
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <Router>
            <div className="container-wrapper">
                <Header/>
                <Navbar/>
                <div className="container-app-wrapper">
                    <Route path="/profile" component={Profile}/>
                    <Route exact path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </Router>
    );
}

export default App;

