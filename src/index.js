import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/reduxer-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                    <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();


// callback call func from state with func argument for using there without import
/*
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);

});*/
