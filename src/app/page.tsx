"use client"

import { useState } from "react";



export default function Home() {

  // define state 
  const [todos, settodos] = useState([
    { movie: "chandu champion", id: "1" },
    { movie: "hulchul", id: "2" }])

  const [inputVal, setInput] = useState("") //is input m humne value store kardi he input ki
  const [id, setId] = useState("")

  //function
const addItems=()=>{
    const obj =todos.find(item=> item.id ==id )
     if(obj){
       const newArr = todos.filter(item=> item.id !== obj.id)
        
    settodos([...newArr,{movie:inputVal,id:id}])
    setInput("")
    setId("")
      return
   }  
    settodos([...todos,{movie:inputVal,id:id}])
    setInput("")
    setId("")
  }

  //edit function
const editItem=(id:any)=>{

 const obj=todos.find((item)=>item.id == id)
 if(obj){
 setInput(obj.movie)
 setId(obj.id)
 }
  
}
//delete function

const delItem=(id:any)=>{
  const newArr = todos.filter(item=> item.id !== id)
    
  
  
  settodos([...newArr])

};


  return (
    <div className=" bg-orange-200 h-screen p-10 md:p-5  mx-1 md:mx-auto">
      <h1 className="text-center md:text-center text-[30px] font-semibold ">Todo App by Wajiha Naz</h1>
      {/* start input */}

      <div className="flex justify-center mt-4 gap-4">
        <input className="w-[100%] md:w-[50%] flex justify-center md:text-lg  border-b-4 mx:1  md:mx-2 focus:outline-none p-1 md:p-3" type="text"
        value={inputVal}
          onChange={(e) => setInput(e.target.value)
          }
          placeholder="Enter movie name" />

        <input className=" w-[50%] md:w-[20%] flex justify-center  text-lg  border-b-4 ml-auto md:ml-3 focus:outline-none p-2 md:p-2" type="number"
        value={id}
        onChange={(e:any)=>setId(e.target.value)}
        placeholder="Enter  id" />

        <button onClick={addItems}  className="bg-yellow-500 w-[50%]  md:p-1 md:w-[10%] p-1 md:mx-2 rounded hover:bg-orange-700 text-white text-lg">Add movie</button>

      </div>
      {/* end input */}

      <h1 className="text-center text-[30px] font-semibold underline mt-5">Movies List </h1>
      {/* movie list */}

      <div className="grid md:grid-cols-2 gap-4 md:gap-5  mt-2 ">
        {/* grid items */}
        {
          todos.map((item: any, i: any) => {
            return (

              <div className="p-2 shadow rounded bg-yellow-100" key={i}>
                <div className="flex justify-between text-lg">
                  <span className="shadow rounded-full h-8 w-8 my-auto text-center " >{i + 1}</span>
                  <span onClick={()=>delItem(item.id)} className="shadow rounded-full h-8 mt-5 w-8 my-auto text-center text-red-700 cursor-pointer "> X </span>
                </div>
                {/* data div */}
                <div className=" text-[30px] text-gray-800"> {item.movie}</div>
                <div onClick={()=>editItem(item.id)}  className="text-right text-lg cursor-pointer">Edit</div>
                <h2 className="text-orange-500">id:{item.id}</h2>
              </div>

            )
          })

        }

      </div>
    </div>
  );
}
