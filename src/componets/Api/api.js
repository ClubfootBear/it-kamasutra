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
    }

}

