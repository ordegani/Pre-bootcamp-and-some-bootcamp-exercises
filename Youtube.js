import axios from "axios";

const KEY = 'AIzaSyC4f7wiHFFH2hU3MycsQwGQmI4uOe3G-ic';

//create default parameters at advance:
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});

//questions:
//why do you not use () for "event" on line 11?

