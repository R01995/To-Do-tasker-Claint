import { useEffect } from "react";
import { todoListByStatus } from "../API/Api";
import { useSelector } from "react-redux";
import { deleteAleart, updateAleart } from "../helper/AleartHelper";

const NewTodo = () => {




    useEffect (() => {
        todoListByStatus ("New")
    },[])

const newTodo = useSelector((state) => state.todos.newTodos)
// console.log(newTodo);

const handelDeletTodo =(id) =>{
    deleteAleart(id)
    .then((result)=>{
          if (result === true) {
            todoListByStatus("New")
          }
    })
}

const handeUpdateTodo = (id, status) =>{
    updateAleart(id, status)
    .then((result)=>{
        if(result){
            todoListByStatus("New") 
        }
    })
}

    return (
        <div className="flex justify-between flex-wrap gap-y-8 gap-x-8 ">

          {
            newTodo.map((item, i) =>{
              return (
             <div key={i} className="p-6 bg-white rounded-lg w-[350px]">

                <h2 className="text-2xl font-bold mb-4 text-green-700">{item.title}</h2>
                <p className="text-green-500 mb-2 text-xl font-roboto">Descriptio:<span className="font-bold text-base text-black"> {item.description} </span></p>
                <p className="text-green-500 mb-2 text-xl font-roboto ">Status: <span className="font-bold text-base text-primary ">{item.status}</span></p>
                <div className="flex justify-between mt-5">
                    <div className="flex justify-between gap-5 ">

                    <button onClick={() => handeUpdateTodo(item._id, item._status )} className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm font-medium   ">Update</button>
                    
                    <button onClick={() => handelDeletTodo(item._id)} className="bg-primary hover:bg-red-500 text-white py-1 px-2 rounded-lg text-sm font-medium   ">Delete</button>

                    </div>
                    <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-base font-medium">Date: <span className="font-bold text-sm"> {item.createDate}</span></button>
                </div>
              </div>
              )
            })
          }
           
          
            
        </div> 
    );
};

export default NewTodo;
