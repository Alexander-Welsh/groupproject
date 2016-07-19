import axios from 'axios';
import store from 'store';

export function getNews(){
    var path = "https://json-data.herokuapp.com/restaurant/news/1"

    return axios.get(path);
}