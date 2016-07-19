import axios from 'axios';
import store from 'store';

export function getSpecials(){
    var path = "https://json-data.herokuapp.com/restaurant/special/1"

    return axios.get(path);
}