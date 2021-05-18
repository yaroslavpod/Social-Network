import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.usersData
}
export const getUsers = createSelector(getUsersSelector,(users)=>{
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getFollowInWaiting = (state) => {
    return state.usersPage.followInWaiting
}