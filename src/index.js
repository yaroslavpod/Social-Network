import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from "./App";

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);


// callback call func from state with func argument for using there without import
/*
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);

});*/
