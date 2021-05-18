import {usersAPI} from "../api/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SWITCH_IS_LOADING = 'SWITCH_IS_LOADING';
const SWITCH_IS_FOLLOWING = 'SWITCH_IS_FOLLOWING';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followInWaiting: [],
    fake:0
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FAKE": return {...state,fake:state.fake+1}
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
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

export const requestUsers = (page, pageSize) => (dispatch) => {
        dispatch(switchIsLoading(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(switchIsLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}
export const unfollowThunkCreator = (id) => (dispatch) => {
    dispatch(switchIsFollowing(true, id));
    usersAPI.postUnfollow(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(id));
            dispatch(switchIsFollowing(false, id));
        }


    });
}
export const followThunkCreator = (id) => (dispatch) => {
    debugger;
    dispatch(switchIsFollowing(true, id));
    usersAPI.postFollow(id).then(data => {
        debugger;
        if (data.resultCode === 0) {
            dispatch(follow(id));
            dispatch(switchIsFollowing(false, id));
        }


    });
}

export default usersReducer;