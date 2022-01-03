import { ADD_ARTICLES } from "../actions/get.action";


const initialState = {};

    const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLES:
            return action.paylaod
    
        default:
            return state
    }
}

export default addReducer;



