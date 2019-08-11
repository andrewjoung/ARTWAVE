// const axios = require("axios");
import axios from "axios";

export default {
    registerUser: (newUser) => {
        console.log(newUser);
        return axios.post("http://localhost:8080/register", newUser);
    },
    loginUser: (loginInfo) => {
        return axios.post("http://localhost:8080/login", loginInfo);
    },
    createList: (listData) => {
        return axios.post("http://localhost:8080/create-list/", listData);
    },
    getLists: (searchObject) => {
        return axios.get("http://localhost:8080/user/" + searchObject.username);   
    },
    getFriends: (id) => {
        return axios.get("http://localhost:8080/users/" + id);
    },
    addFriend: (addFriendData) => {
        return axios.put("http://localhost:8080/addFriend", addFriendData);
    },
    getUserFriends: (id) => {
        return axios.get("http://localhost:8080/getFriends/" + id);
    },
    getListData: (listId) => {
        return axios.get("http://localhost:8080/list/" + listId);
    },
    createComment: (commentData) => {
        return axios.post("http://localhost:8080/commentSubmit", commentData);
    },
    addCommentToList: (updateData) => {
        return axios.put("http://localhost:8080/list/add_comment", updateData);
    }
    // registerUser: (newUser) => {
    //     console.log(newUser);
    //     return axios.post("https://artwave-api.herokuapp.com/register", newUser);
    // },
    // loginUser: (loginInfo) => {
    //     return axios.post("https://artwave-api.herokuapp.com/login", loginInfo);
    // },
    // createList: (listData) => {
    //     return axios.post("https://artwave-api.herokuapp.com/create-list/", listData);
    // },
    // getLists: (searchObject) => {
    //     return axios.get("https://artwave-api.herokuapp.com/user/" + searchObject.username);   
    // },
    // getFriends: (id) => {
    //     return axios.get("https://artwave-api.herokuapp.com/users/" + id);
    // },
    // addFriend: (addFriendData) => {
    //     return axios.put("https://artwave-api.herokuapp.com/addFriend", addFriendData);
    // },
    // getUserFriends: (id) => {
    //     return axios.get("https://artwave-api.herokuapp.com/getFriends/" + id);
    // },
    // getListData: (listId) => {
    //     return axios.get("https://artwave-api.herokuapp.com/list/" + listId);
    // },
    // createComment: (commentData) => {
    //     return axios.post("https://artwave-api.herokuapp.com/commentSubmit", commentData);
    // },
    // addCommentToList: (updateData) => {
    //     return axios.put("https://artwave-api.herokuapp.com/list/add_comment", updateData);
    // }
};