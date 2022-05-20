import axios from "axios";

const KEY = "AIzaSyBCJeN9kze7kmZgGs7p3dI9lR7qma__6zI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: KEY,
        part: "snippet",
        maxResults: 5
    }
});