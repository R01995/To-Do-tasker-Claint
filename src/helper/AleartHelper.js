import Swal from 'sweetalert2'

import { DeleteTodoApi, updateTodoApi } from '../API/Api';

//Delete Aleart stats
export function deleteAleart (id){
    
return Swal.fire({
        title: "Are you sure?",
        text: "You won't be Delete this Todo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6", 
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
        // Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        // });
        return DeleteTodoApi(id)
        .then((result) => {
            return result;
        })

         
          
        }
    });
}

//Delete Aleart end

//Update  Alert Stats


export function updateAleart (id, status){
    
    return Swal.fire({
            title: "Are you sure you wont to Update your status ?",
            input: "select",
            inputOptions: {New:"New", Progress:"Progress",Completed:"Completed", Cancle:"Cancle"} ,
            inputValue: status  , 
            showCancelButton: true,
           
        }).then((result) => {
            if (result.isConfirmed) {
            // Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            // });
            // console.log(result);
            return updateTodoApi(id, result.value)
             .then((result)=>{
                return  result
             })
              
            }
        });
    }

    //  Update alert end
