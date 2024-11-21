"use client"
import { log } from "console";
import { useState } from "react";



export default function Home() {

  // define state 
  const [todos, settodos] = useState([
    { movie: "chandu champion", id: 1 },
    { movie: "hulchul", id: 2 }])

  const [inputVal, setInput] = useState("") //is input m humne value store kardi he input ki
  const [id, setId] = useState(0)

  //function
const addItems=()=>{
    let obj :any=todos.find(item=> item.id ==id )
     if(obj){
       let newArr = todos.filter(item=> item.id !== obj.id)
        
    settodos([...newArr,{movie:inputVal,id:id}])
    setInput("")
    setId(0)
      return
   }  
    settodos([...todos,{movie:inputVal,id:id}])
    setInput("")
    setId(0)
  }

  //edit function
const editItem=(id:any)=>{

 let obj:any=todos.find((item)=>item.id == id)
 setInput(obj.movie)
 setId(obj.id)
  
  
}
//delete function

const delItem=(id:any)=>{
  let newArr = todos.filter(item=> item.id !== id)
    
  
  
  settodos([...newArr])

};


  return (
    <div className=" bg-orange-200 h-screen p-10 md:p-5  mx-1 md:mx-auto">
      <h1 className="text-center md:text-center text-[30px] font-semibold ">Todo App by Wajiha Naz</h1>
      {/* start input */}

      <div className="flex justify-center mt-4 gap-4">
        <input className="w-[100%] md:w-[40%] flex justify-center text-lg l-2 border-b-4  md:ml-3 focus:outline-none p-1 md:p-2" type="text"
        value={inputVal}
          onChange={(e) => setInput(e.target.value)
          }
          placeholder="Enter movie name" />

        <input className=" w-[30%] md:w-[10%] flex justify-center text-lg l-2 border-b-4 ml-auto md:ml-3 focus:outline-none p-2" type="number"
        value={id}
        onChange={(e:any)=>setId(e.target.value)}
        placeholder="Enter  id" />

        <button onClick={addItems}  className="bg-yellow-500 w-[50%]  md:p-1 md:w-[10%] rounded hover:bg-orange-700 text-white text-lg">Add movie</button>

      </div>
      {/* end input */}

      <h1 className="text-center text-[30px] font-semibold underline mt-5">Movies List </h1>
      {/* movie list */}

      <div className="grid md:grid-cols-2 gap-4 md:gap-5  mt-2 ">
        {/* grid items */}
        {
          todos.map((item: any, i: any) => {
            return (

              <div className="p-0 shadow rounded bg-yellow-100" key={i}>
                <div className="flex justify-between text-lg">
                  <span className="shadow rounded-full h-8 w-8 my-auto text-center " >{i + 1}</span>
                  <span onClick={()=>delItem(item.id)} className="shadow rounded-full h-8 mt-5 w-8 my-auto text-center text-red-700 cursor-pointer "> X </span>
                </div>
                {/* dat div */}
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
