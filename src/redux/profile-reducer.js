import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';

const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: "hello", likesCount: 34},
        {id: 2, message: "My name is Hotteoi", likesCount: 11},
        {id: 3, message: "Jo", likesCount: 20},
        {id: 5, message: "It's so rainy today", likesCount: 111},
        {id: 6, message: "I LOVE You", likesCount: 11111},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    // action must be prop with attr like {type:'ADD-POST'}
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                newPostElement: '',
                postsData: [...state.postsData, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }
        case SET_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
    return state;
}

export default profileReducer;

export const addPost = (newPost) => ({type: ADD_POST, newPost});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setProfile(data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));


}
export const updateUserStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}