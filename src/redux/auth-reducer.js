import {usersAPI} from "../api/api";

const SWITCH_IS_LOADING ='SWITCH_IS_LOADING';
const SET_USER_DATA ='SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLoading:false,
    isAuth:false
}

let authReducer = (state = initialState,action) =>{
    switch(action.type){
        case SWITCH_IS_LOADING:{
            return {...state, isLoading:action.isLoading}
        }
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default: return state

    }
}

export const switchIsLoading = (isLoading) => ({type: SWITCH_IS_LOADING, isLoading: isLoading});
export const setUserData = (id,login,email) => ({type: SET_USER_DATA, data: {id,login,email}});
export const authUser = () =>{
    return (dispatch) =>{
        usersAPI.authUser().then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserData(id,login, email));
            }
        })
    }
}

export default authReducer;