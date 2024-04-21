import { useState } from "react"
import { toast } from "react-toastify"
import { createTodoApi } from "../API/Api"
import { useNavigate } from "react-router-dom"



// const naviget = useNavigate()

const CreateTodo = () => {




    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

    const naviget = useNavigate()
    


    const hendalCreate = () => {
        if(!title || !description){
            toast.error("Please Enter Title and Description")
        }else{
            createTodoApi(title, description)
            .then((response) => {
                if(response === true){
                    toast.success("Todo Created Successfully")
                    naviget("/new-todo")
                }
                else{
                    toast.error("Something is Rong")
                }
            })
        }
    }
  


    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-green-500 ">Create Todo</h2>
            <div className="w-[500px] p-6 bg-white bg-opacity-[.4] rounded-lg mx-auto mt-5">
                 <input onChange={(e) => setTitle(e.target.value)} className="w-full mb-5 outline-none py-2 px-3 border border-cyan-500 rounded-lg " type="text" placeholder="Titel" />
                 <textarea onChange={(e) => setDescription(e.target.value)} className="w-full h-[150px] text-2xl text-black outline-none py-2 border px-3 border-cyan-500 rounded-lg " type ="text" placeholder="Description"></textarea>
                 <button onClick={hendalCreate} className="button">Create Todo</button>
            </div>
        </div>
    )
}

export default CreateTodo