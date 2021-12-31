import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';

// action d'affichage d'un post
export const getPots = () => {
	return (dispatch) => {
		return axios
			.get('https://fakestoreapi.com/products')
			.then((res) => {
				dispatch({
					type: GET_POSTS,
					payload: res.data
				});
			})
			.catch((err) => console.log(err));
	};
};
export default getPots;
