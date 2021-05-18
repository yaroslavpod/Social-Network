import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false
}


let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state

    }
}

export const setInitialized = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized());
        })

    /**/


}
export default appReducer;