import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY" : "1857d2ed-d420-42db-b78d-ef038d78fa77"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1,pageSize =10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    postFollow (id = null) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    postUnfollow (id = null) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    authUser () {
        return instance.get(`auth/me`).then(response => response.data);
    },
    getProfile (userId) {
        return instance.get (`profile/${userId}`).then(response => response.data);
    }
}

