import axios from 'axios';
const VERSION = ""
const API_SERVER = 'http://localhost:3001'+ VERSION

export const usersApi = {
    getUsers: () => {
        return axios.get(`${API_SERVER}/users`);
    },
    registerUser: (user) => {
        return axios.post(`${API_SERVER}/users`, user);
    },
    deleteUser: (userId) => {
        return axios.delete(`${API_SERVER}/users/${userId}`);
    },
    getUser: (userId) => {
        return axios.get(`${API_SERVER}/users/${userId}`);
    },
    updateUser: (userId, userData) => {
        return axios.put(`${API_SERVER}/users/${userId}`, userData);
    }
}