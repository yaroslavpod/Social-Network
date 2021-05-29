import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../helpers/object-helpers";

const UNFOLLOW = 'users/UNFOLLOW';
const FOLLOW = 'users/FOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SWITCH_IS_LOADING = 'users/SWITCH_IS_LOADING';
const SWITCH_IS_FOLLOWING = 'users/SWITCH_IS_FOLLOWING';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followInWaiting: [],
    portionSize:10,
    fake: 0
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                /*usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })*/
                usersData: updateObjectInArray(state.usersData,action.userID,"id",{followed:true})
            }
        case UNFOLLOW:
            return {
                ...state,
                /*usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })*/
                usersData: updateObjectInArray(state.usersData,action.userID,"id",{followed:false})
            }

        case SET_USERS: {
            return {...state, usersData: action.usersData}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case SWITCH_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case SWITCH_IS_FOLLOWING: {
            return {
                ...state,
                followInWaiting: action.isFollowing ? [...state.followInWaiting, action.id] : state.followInWaiting.filter(id => id != action.id)
            }
        }
        default:
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID: userID});
export const switchIsLoading = (isLoading) => ({type: SWITCH_IS_LOADING, isLoading: isLoading});
export const switchIsFollowing = (isFollowing, id) => ({type: SWITCH_IS_FOLLOWING, isFollowing: isFollowing, id: id});
export const unfollow = (userID) => ({type: UNFOLLOW, userID: userID});
export const setUsers = (users) => ({type: SET_USERS, usersData: users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount: usersCount});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(switchIsLoading(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(switchIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(switchIsFollowing(true, id));
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
        dispatch(switchIsFollowing(false, id));
    }
}
export const unfollowThunkCreator = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.postUnfollow, unfollow)
}
export const followThunkCreator = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.postFollow, follow)
}

export default usersReducer;