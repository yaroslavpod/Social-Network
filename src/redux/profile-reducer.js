import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_LETTER_POST = 'UPDATE-LETTER-POST';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: "hello", likesCount: 34},
        {id: 2, message: "My name is Hotteoi", likesCount: 11},
        {id: 3, message: "Jo", likesCount: 20},
        {id: 4, message: "It's so rainy today", likesCount: 111}
    ],
    newPostElement: '',
    profile:null
}

const profileReducer = (state = initialState,action) => {
    // action must be prop with attr like {type:'ADD-POST'}
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostElement,
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
        default:
            return state;
    }
    return state;
}

export default profileReducer;

export const addPost = () => ({type: ADD_POST});
export const onPostChange = (text) => ({type: UPDATE_LETTER_POST, postElement: text});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile})

export const getProfile =(userId) => {
    return (dispatch) =>{
        usersAPI.getProfile(userId).then(data=>{
            dispatch(setProfile(data));
        });
    }
}