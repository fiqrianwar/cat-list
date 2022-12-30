import axios from "axios";

// ?limit=10&page=0
// ======== Api Cat =========
export default axios.create({
    baseURL : 'https://api.thecatapi.com/v1'
})