"use client"
import { useState } from "react";


export default function Home() {

  // define state 
  const [todos, settodos] = useState([
    { movie: "chandu champion", id: 1 }, 
    { movie: "hulchul", id: 2 }])

    const[inputVal,setInput]= useState("")



  return (
    <div className=" bg-pink-400 p-5 mx-auto">
      <h1 className="text-center text-[30px] font-semibold ">Todo App by Wajiha Naz</h1>
      {/* start input */}
      <div className="flex justify-center mt-4 gap-4">
        <input className="w-[40%] flex justify-center text-lg l-2 border-b-4 ml-3 focus:outline-none p-2" type="text"
        onChange={()=>console.log("onchange fire")
        } 
         placeholder="Enter movie name" />

        <input className="w-[10%] flex justify-center text-lg l-2 border-b-4 ml-3 focus:outline-none p-2" type="number" placeholder="Enter  id" />

        <button className="bg-purple-500 p-1 w-[10%] rounded hover:bg-purple-700 text-white text-lg">Add movie</button>

      </div>
      {/* end input */}

      <h1 className="text-center text-[30px] font-semibold underline mt-5">Movies List </h1>
      {/* movie list */}

      <div className="grid grid-cols-2 gap-5  mt-2 ">
        {/* grid items */}
        {
          todos.map((item: any, i: any) => {
            return (

              <div className="p-2 shadow rounded bg-blue-300">
                <div className="flex justify-between text-lg">
                  <span className="shadow rounded-full h-8 w-8 my-auto text-center " >{i + 1}</span>
                  <span className="shadow rounded-full h-8 w-8 my-auto text-center text-red-700 cursor-pointer" >X</span>
                </div>
                {/* dat div */}
                <div className="mt-5 text-[30px] text-gray-800"> {item.movie}</div>
                <div className="text-right text-lg cursor-pointer">Edit</div>
              </div>

            )
          })

        }

      </div>
    </div>
  );
}
