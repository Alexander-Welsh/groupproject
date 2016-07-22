import axios from 'axios'; //put api file int the ui folder//

export function getNews(){
    var path = "https://json-data.herokuapp.com/restaurant/news/1"

    return axios.get(path);
}
export function getMenu(){
    var path = "https://json-data.herokuapp.com/restaurant/menu/1"
    //remove and use Fancy Menu path//

    return axios.get(path);
}