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
    getProfile (userId) {
        console.log("Obsolete method, please use profileAPI")
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI ={
    getProfile (userId) {
        return instance.get (`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId){
        return instance.get (`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`/profile/status`,{status:status});
    }
}



export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email,password,rememberMe = false) {
        return instance.post(`auth/login`, {email:email,password:password,rememberMe:rememberMe}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}