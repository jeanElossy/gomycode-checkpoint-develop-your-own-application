import { GET_ARTICLES } from '../actions/get.action';
import uniqueid from 'uniqueid';


const initialState = {
	data: [
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			image: 'medias/5.png',
			title: 'Jupe volante',
			price: 3500,
			count2: 1500
		}
	]
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ARTICLES:
			return action.payload;

		default:
			return state;
	}
};

export default Reducer;
