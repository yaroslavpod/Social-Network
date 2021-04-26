import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";

const {createStore} = require("redux");

let reducersGroup = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    sidebar:sidebarReducer,
    authMenu:authReducer
});

let store =createStore(reducersGroup,applyMiddleware(ThunkMiddleware));
window.store = store;
export default store;