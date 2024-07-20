import Search from "./component/Search"
import Header from "./component/Header"
import Movie from "./component/Movie"
import { useState } from "react"


function App() {
  const [title, setTitle] = useState("FinPro8");
  return (






    <div className=" container mx-auto">
      <div className="bg-orange-700 flex justify-between p-4 rounded-br-xl rounded-bl-xl shadow-md text-white tracking-wider">
        <Header title={title} />
        <Search/>
      </div>
      <h2 className='mt-4 mb-4 tracking-wider font-extrabold text-center text-blue-700 p-2'>
        SHOW YOUR FAVORIT FILM
      </h2>
      <div className="flex flex-wrap w-full mx-auto p-5 gap-7 justify-around ">
          <Movie/>
      </div>

        
    </div>
  )
}

export default App
