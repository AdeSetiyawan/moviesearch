import Search from "./component/Search"
import Header from "./component/Header"
import Movie from "./component/Movie"
import { useEffect, useState } from "react"


function App() {
  const [title, setTitle] = useState("FinPro8-MOVIES FAVORIT");
  useEffect(() => {
    document.body.classList.add('bg-gray-200'); // Change 'bg-blue-500' to any Tailwind CSS class
    return () => {
      document.body.classList.remove('bg-blue-500');
    };
  }, []);
  return (






    <div className=" container mx-auto">
      <div className="bg-orange-700 flex justify-between p-4 rounded-br-xl rounded-bl-xl shadow-md text-white tracking-wider">
        <Header title={title} />
        <Search/>
      </div>
      <h1 className='mt-4 mb-4 tracking-wider font-extrabold text-center text-blue-700 p-2 text-4xl' >
        SHOW YOUR FAVORIT FILM
      </h1>
      <hr />
      <div className="flex flex-wrap w-full mx-auto p-5 gap-7 justify-around ">
          <Movie/>
      </div>
      <hr />
      <div className="mb-4 text-center text-xs tracking-wide font-light italic p-4">
        copyright © 2024 Ade Setiyawan. RCTN077-RMT-HACTIV8
      </div>

        
    </div>
  )
}

export default App
