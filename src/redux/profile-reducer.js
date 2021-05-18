import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_LETTER_POST = 'UPDATE-LETTER-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: "hello", likesCount: 34},
        {id: 2, message: "My name is Hotteoi", likesCount: 11},
        {id: 3, message: "Jo", likesCount: 20},
        {id: 4, message: "It's so rainy today", likesCount: 111},
        {id: 4, message: "I LOVE Katya", likesCount: 11111},
    ],
    newPostElement: '',
    profile:null,
    status:""
}

const profileReducer = (state = initialState,action) => {
    // action must be prop with attr like {type:'ADD-POST'}
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                newPostElement: '',
                postsData: [...state.postsData, newPost]
            };
        }
        case UPDATE_LETTER_POST: {
            return {
                ...state,
                newPostElement: action.postElement
            };
        }
        case SET_PROFILE :{
            return  {
                ...state,
                profile:action.profile
            }
        }
        case SET_STATUS :{
            return {
                ...state,
                status:action.status
            }
        }
        default:
            return state;
    }
    return state;
}

export default profileReducer;

export const addPost = (newPost) => ({type: ADD_POST,newPost});
export const onPostChange = (text) => ({type: UPDATE_LETTER_POST, postElement: text});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getProfile =(userId) => {
    return (dispatch) =>{
        usersAPI.getProfile(userId).then(data=>{
            dispatch(setProfile(data));
        });
    }
}
export const getUserStatus = (userId) =>{
    return(dispatch) =>{
        profileAPI.getStatus(userId).then(response=>{
            dispatch(setStatus(response.data));
        })
    }
}
export const updateUserStatus = (status) =>{
    return(dispatch) =>{
        profileAPI.updateStatus(status).then(response=>{
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}