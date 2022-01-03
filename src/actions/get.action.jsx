import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';
export const ADD_ARTICLES = 'ADD_ARTICLES';


// action d'affichage d'un post
export  const getArticles = () => {
	return (dispatch) => {
		return axios
			.get('https://fakestoreapi.com/products')
			.then((res) => {
				dispatch({
					type: GET_ARTICLES,
					payload: res.data
				});
			})
			.catch((err) => console.log(err));
	};
};
export default getArticles;




// action d'affichage d'un post
export const addArticles = (data) => {
	return (dispatch) => {
		return axios
			.get('mongodb://localhost:27017/front-data/articles', data)
			.then((res) => {
				dispatch({
					type: ADD_ARTICLES,
					payload: data
				});
			})
			.catch((err) => console.log(err));
	};
};