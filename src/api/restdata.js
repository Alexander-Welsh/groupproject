import axios from 'axios'

export function getNews(){
	var path = "https://json-data.herokuapp.com/restaurant/news/1"

	return axios.get(path);
}

export function getSpecial(){
	var path ="https://json-data.herokuapp.com/restaurant/menu/1"

	return axios.get(path);
}