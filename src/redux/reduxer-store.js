import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
const {createStore} = require("redux");

let reducersGroup = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    sidebar:sidebarReducer,
    authMenu:authReducer,
    app:appReducer,
    form:formReducer
});

let store =createStore(reducersGroup,applyMiddleware(ThunkMiddleware));
window.store = store;
export default store;