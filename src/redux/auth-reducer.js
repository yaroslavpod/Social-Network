import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SWITCH_IS_LOADING = 'auth/SWITCH_IS_LOADING';
const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLoading: false,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload

            }
        }
        default:
            return state

    }
}

export const switchIsLoading = (isLoading) => ({type: SWITCH_IS_LOADING, isLoading: isLoading});

export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}});
export const getAuthUserData = () => async (dispatch) => {

    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, login, email, true));
        dispatch(switchIsLoading(false))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    dispatch(switchIsLoading(true))
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())

    } else {
        let message = data.messages.length > 0 ? data.messages : "Error was occured";
        dispatch(stopSubmit("login", {_error: message}));
    }
}
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));

    }
}
export default authReducer;