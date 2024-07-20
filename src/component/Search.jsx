import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getMovieSearch } from "../redux/action/movieAction";

const Search =()=>{

    const dispatch = useDispatch();
    const movieState = useSelector((state)=>state.movie);
    const [input, setInput] = useState("");
    const handleSearch =(e)=>{
        if(input!=""){
            dispatch(getMovieSearch(input));
        }else{
            dispatch(getMovie());
        }
    }

    return(
        <div>
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />

            <button onClick={handleSearch}>Cari</button>
        </div>
    )
}

export default  Search;