import axios from 'axios';
import store from 'store';

export function getLocation(){
    var path = "https://json-data.herokuapp.com/restaurant/news/1"

    return axios.get(path);
}

