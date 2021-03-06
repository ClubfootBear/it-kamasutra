import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c27281a1-c877-4294-ae13-c3271b2f6a40"
    }
})

export const usersApi = {
    getUsers(currentPage=1, pageToShow=10) {
        return  instance.get(`users?page=${currentPage}&count=${pageToShow}`).then( response => {
            return response.data;
        });
    },

    letFollow(id){
        return instance.post(`follow/${id}`).then( response => {
            return response.data;
        });
    },

    letUnFollow(id) {
        return instance.delete(`follow/${id}`).then( response => {
            return response.data;
        });
    },

    tookAuthData() {
        return authApi.tookAuthData();
    },

    userProfile(userId) {
        return profileApi.getProfile(userId);
    },

}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId).then( response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
        },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
        },
}

export const authApi = {
    tookAuthData() {
        return instance.get(`auth/me`).then( response => {
            return response.data;
        });
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then( response => {
            return response.data;
        });
    },
    logout() {
        return instance.delete(`auth/login`,).then( response => {
            return response.data;
        });
    },
}