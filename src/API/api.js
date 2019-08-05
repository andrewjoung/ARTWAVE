// const axios = require("axios");
import axios from "axios";

export default {
    registerUser: (newUser) => {
        console.log(newUser);
        return axios.post("http://localhost:8080/register", newUser);
    }
};