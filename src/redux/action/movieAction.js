import axios from "axios"
import { GET_MOVIE, GET_MOVIES_SEARCH } from "../reducer/movieReducer"

export const getMovie =()=>{

    return async (dispatch) =>{
        const res = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=2192ba2e&s=iron')
        console.log(res);
        dispatch({
            type: GET_MOVIE,
            payload:res.data.Search,
        })
    }


}


export const getMovieSearch= (id)=>{
    return async (dispatch) =>{
        const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2192ba2e&s=${id}`)
            dispatch({
                type: GET_MOVIES_SEARCH,
                payload:res.data.Search,
            })
    }
}