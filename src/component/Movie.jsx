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
                        <div className="p-4 bg-gradient-to-tl from-gray-900 to-red-600 w-48 h-auto text-center rounded-md shadow-md">
                        
                            <img src={movie.Poster} alt="" className=" h-60 max-w-full rounded-lg" />
                         
                            
                            <div className=" text-xs text-gray-100 h-16 flex items-center justify-center tracking-wider">{movie.Title}</div>
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

