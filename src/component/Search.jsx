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
        <div className="flex gap-4">
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="rounded-xl text-gray-500 p-1 text-xs w-80 ps-4 pe-4 tracking-wider shadow shadow-2xl outline-none"
            />

            <button onClick={handleSearch} className=" rounded-full text-xs p-2 ps-4 pe-4 bg-gray-900 tracking-widest shadow-md hover:bg-gray-800 active:bg-gray-700">Cari</button>
        </div>
    )
}

export default  Search;