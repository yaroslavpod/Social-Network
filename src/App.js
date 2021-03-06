import React, {Suspense} from 'react';
import {
    Route,
    Switch,
    Redirect, BrowserRouter
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxer-store";
import {withSuspensePreloader} from "./hoc/withSuspense";

/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
/*import ProfileContainer from "./components/Profile/ProfileContainer";*/
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
                            {withSuspensePreloader(ProfileContainer)}
                        </Route>
                        <Route path="/dialogs">
                            {withSuspensePreloader(DialogsContainer)}
                        </Route>
                        <Route path="/users">
                            <UsersContainer/>
                        </Route>
                        <Route exact path="/login">
                            <LoginPage/>
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
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;