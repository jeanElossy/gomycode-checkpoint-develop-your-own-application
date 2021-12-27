// import axios from "axios";

export const GET_POSTS = "GET_POSTS";


//action d'affichage d'un post 
// export const  getPots = () => {
//     return (dispatch) => {
//         return axios    
//             .get("http://localhost:3000/posts?_sort=id&_order=desc")
//             .then((res) => {
//                 dispatch({
//                     type: GET_POSTS,
//                     payload: res.data
//                 })
//             })
//             .catch((err) => console.log(err))
//     }
// }
// export default getPots;


// action d'affichage
const getPost = (data) => {

    return {
        type : GET_POSTS,
        payload : data
    }
}
export default getPost;
