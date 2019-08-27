// const axios = require("axios");
import axios from "axios";

export default {
    registerUser: (newUser) => {
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
    getListData: (listId, category) => {
        return axios.get("http://localhost:8080/list/" + category + "/" + listId);
    },
    createComment: (commentData) => {
        return axios.post("http://localhost:8080/commentSubmit", commentData);
    },
    addCommentToList: (updateData) => {
        return axios.put("http://localhost:8080/list/add_comment", updateData);
    },
    getMovieItem: (movieId) => {
        return axios.get("http://localhost:8080/movie/" + movieId);
    },
    getMusicItem: (musicId) => {
        return axios.get("http://localhost:8080/music/" + musicId);
    },
    getBookItem: (bookId) => {
        return axios.get("http://localhost:8080/book/" + bookId);
    },
    getFriendData: (userId) => {
        return axios.get("http://localhost:8080/friends/" + userId);
    },
    recommendList: (recData) => {
        return axios.post("http://localhost:8080/recommend", recData);
    },
    populateRecommended: (userId) => {
        return axios.get("http://localhost:8080/recommended/data/" + userId);
    }
};