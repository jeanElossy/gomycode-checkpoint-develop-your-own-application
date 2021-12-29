import { GET_POSTS } from '../actions/get.action';
import uniqueid from 'uniqueid';

const initialState = {
	data: [
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		},
		{
			id: uniqueid,
			img: 'medias/5.png',
			name: 'Jupe volante',
			count1: 3500,
			count2: 1500
		}
	]
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;

		default:
			return state;
	}
};

export default Reducer;
