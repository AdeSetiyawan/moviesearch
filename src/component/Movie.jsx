import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMovie } from "../redux/action/movieAction";

const MovieList =()=>{
    const dispatch = useDispatch();
    const movieState = useSelector((state)=>state.movie);
    useEffect(()=>{
        dispatch(getMovie());
    },[]);


    console.log(movieState);

    return (
        <>
            {
                movieState.values?(
                    movieState.values.map((movie) => {
                    return (
                    <div key={movie.imdbID} className="">
                        <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-200 w-36 text-center">
                        
                            <img src={movie.Poster} alt="" className=" mx-auto" />
                            
                            <b>Title:</b> <span>{movie.Title}</span>
                        </div>
                    </div>
                    );
                    })):(
                    <p>
                       movie not found
                    </p>
                    )
            }
        </>
    )
}

export default MovieList;

