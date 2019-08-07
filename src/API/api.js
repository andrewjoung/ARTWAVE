// const axios = require("axios");
import axios from "axios";

export default {
    registerUser: (newUser) => {
        console.log(newUser);
        return axios.post("http://localhost:8080/register", newUser);
    },
    loginUser: (loginInfo) => {
        return axios.post("http://localhost:8080/user/login", loginInfo);
    },
    createList: (listData) => {
        return axios.post("http://localhost:8080/create-list/", listData);
    },
    getLists: (searchObject) => {
        return axios.get("http://localhost:8080/user/" + searchObject.username);
    }
};