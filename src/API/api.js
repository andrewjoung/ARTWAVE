// const axios = require("axios");
import axios from "axios";

export default {
    registerUser: (newUser) => {
        console.log(newUser);
        return axios.post("https://artwave-api.herokuapp.com/register", newUser);
    },
    loginUser: (loginInfo) => {
        return axios.post("https://artwave-api.herokuapp.com/login", loginInfo);
    },
    createList: (listData) => {
        return axios.post("https://artwave-api.herokuapp.com/create-list/", listData);
    },
    getLists: (searchObject) => {
        return axios.get("https://artwave-api.herokuapp.com/user/" + searchObject.username);   
    },
    getFriends: (id) => {
        return axios.get("https://artwave-api.herokuapp.com/users/" + id);
    },
    addFriend: (addFriendData) => {
        return axios.put("https://artwave-api.herokuapp.com/addFriend", addFriendData);
    },
    getUserFriends: (id) => {
        return axios.get("https://artwave-api.herokuapp.com/getFriends/" + id);
    },
    getListData: (listId, category) => {
        return axios.get("https://artwave-api.herokuapp.com/list/" + category + "/" + listId);
    },
    createComment: (commentData) => {
        return axios.post("https://artwave-api.herokuapp.com/commentSubmit", commentData);
    },
    addCommentToList: (updateData) => {
        return axios.put("https://artwave-api.herokuapp.com/list/add_comment", updateData);
    },
    getMovieItem: (movieId) => {
        return axios.get("https://artwave-api.herokuapp.com/movie/" + movieId);
    },
    getMusicItem: (musicId) => {
        return axios.get("https://artwave-api.herokuapp.com/music/" + musicId);
    },
    getBookItem: (bookId) => {
        return axios.get("https://artwave-api.herokuapp.com/book/" + bookId);
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