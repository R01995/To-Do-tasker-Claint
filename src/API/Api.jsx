import axios from "axios";
import { toast } from "react-toastify";
import { getAuthToken, logout, setAuthToken, setEmail, setOtp, setUserDetails } from "../helper/SessionHealper";
import 'react-toastify/dist/ReactToastify.css';
import { store } from "../redax/store/store";
import { setProfile } from "../redax/slices/profileSlice";
import { createCancelTodo, createCompletedTodo, createNewTodo, createProgessTodo } from "../redax/slices/todoSlice";

const baseUrl = "https://to-do-tasker-tr7p.onrender.com/api/v1";


//Set Token in to Header
const token = {headers:{token:getAuthToken ()} }


//Registation request start

export async function RegistationReqest( firstName, lastName, email, password, profilePic){
    let url = `${baseUrl}/registration`
    
    let body = {
        firstName: firstName, 
        lastName: lastName ,
        email: email ,
        password: password   ,
        profilePic: profilePic
    }

    return axios.post(url, body)
    .then(response=>{
        
         if(response.status ===200){
            if(response.data.status === "fail"){
                if(response.data.data.email ===1){
                   toast.error("Email is requard")
                   return false
                }
            }
            else {
               //  toast.error("Registation sucessfull")
                return true
            }

         }
          else {
             toast.error("Something is rong")
             return false
          }
    })
    
    .catch((error)=>{
        toast.error("something is rong")
        return false
    })
} 
//Registation request   end 

//Login  Request start

export function LoginRequest(email, password){
  
   let url = `${baseUrl}/login`
     let postBody ={
           email: email,
           password : password
         };


         return axios.post(url, postBody)

         .then((response)=>{
            if(response.status ===200){
               if(response.data.status ==="fail"){
                  if(response.data.data === "User not found"){
                     toast.error("User not found")
                  }
                   else if(response.data.data==='Invalide Password'){
                       toast.error("Wrong password")
                  }
                  else {
                    return false
                  }
               }
               else { 
                  //set token in local storage          
                  setAuthToken (response.data.token)
                  //set user details in local storage
                  setUserDetails(response.data.data)
                return true
               }
            }
            else {
            //   toast.error("Something went wrong")
              return false
            }
         })
         .catch((error) => {
            toast.error('Something went wrong')
            return false
         })
}
//Login  Request   End

//Email verify start
export function EmailVerifyRequest(email){
    let url = `${baseUrl}/email-verify/${email}`
    return axios.get(url)
        .then((response)=>{
            if(response.status ===200){
               if(response.data.status ==="fail"){
                  if(response.data.data === "User not found"){
                     toast.error("User not found")
                     // return{error:"User not found"}
                  }
                   else if(response.data.data==='Invalide Password'){
                       return {error:'Wrong password'}
                  }
                  else {
                    return false
                  }
               }
               else { 
                toast.success("OTP send to your email")
                setEmail(email)          
                return true
               }
            }
            else {
              toast.error("Something went wrong")
              return false
            }
        })
        .catch((error) => {
            toast.error('Something went wrong')
            return false
         })
                  
      }

//Email verify end

//OTP Verification Start
export function OtpVerifyRequest(email, otp){

   let url = `${baseUrl}/otp-verify/${email}/${otp}`
   return axios.get(url)
   .then((response)=>{
        if(response.status ===200){
           if(response.data.status ==="fail"){
               toast.error("Something is wrong")
              return false
           }else{
               // toast.success("OTP Verified")
               setOtp(otp)
               return true
               
           }
          }
         else {
            // toast.error("Something went wrong")
           return false
         }
   })
   .catch((error) => {
      toast.error('Something went wrong')
      return false
   })
      
     
}
//OTP Verification End

//Resat password start
export function ResetPasswordRequest(email, otp, NewPassword){
   let url = `${baseUrl}/rest-password`

   let postBody ={
      email: email,
      otp : otp,
      password : NewPassword,

    };

    return axios.post(url, postBody)

    .then((response)=>{
       if(response.status ===200){
           return true
       }else{
          return false
       }

    })
    .catch((error) => {
       toast.error('Something went wrong')
       return false
    })
          
}
//Resat password end





//profile details start
export async function getProfileDetails(){

    let url = `${baseUrl}/Profile-details`

    return axios.get(url, token)
    .then((response)=>{
       if(response.status ===200){
           store.dispatch(setProfile(response.data.data))
           return true
       }else{
          toast.error("Something is Rong")
       }
    })
    .catch((error) => {
        if(error.response && error.response.status === 401){
         toast.error("Something is Rong")
         logout()
        }else {
         toast.error("Something is Rong")
        }
    })
    
       

} 
//profile details end

 //profile update start
 export function ProfileUpdateApi(firstName, lastName, email, password, profilePic){
    let url = `${baseUrl}/user-profile-update`

    let postBody ={
       firstName: firstName,
       lastName: lastName,
       email: email,
       password: password,
       profilePic: profilePic  
     };

     let userDetails ={
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        profilePic: profilePic     
     } 

     return axios.post(url, postBody, token)

     .then((response)=>{
        if(response.status ===200){
          
          setUserDetails(userDetails)
          return true
        }else {
           toast.error("Something is Rong")
           return false
        }
     })
     .catch((error) => {
        if(error.response && error.response.status === 401){
         toast.error("Something is Rong")
         logout()
        }else {
         toast.error("Something is Rong")
        }
     })
 }
 //profile update end


 //create Todo call Api start
 export function createTodoApi(title, description){
    let url = `${baseUrl}/create-todo`

    let postBody ={
       title: title,
       description: description,
       status: "New"
     
    }

    return axios.post(url, postBody, token)
    .then((response)=>{
       if(response.status ===200){
         toast.success("Todo Created")
          return true
       }else {
          toast.error("Something is Rong")
          return false
       }
    }).catch((err)=> {
        if(err.response && err.response.status === 401){
         toast.error("Something is Rong")
         logout();
        }else {
         toast.error("Something is Rong")
        }
   });
 }
 //create Todo call Api end

 // todo list start
 export function todoListByStatus( status){
    let url = `${baseUrl}/todo-list-by-status/${status}`

    return axios.get(url, token)
    .then((response)=>{
       if(response.status ===200){
          if(status ==="New"){
             store.dispatch(createNewTodo(response.data.data))
          }
         else if(status ==="Progress"){
            store.dispatch(createProgessTodo(response.data.data))
         }
         else if(status ==="Completed"){
            store.dispatch(createCompletedTodo(response.data.data))
         }
         else if(status === "Cancle"){
            store.dispatch(createCancelTodo(response.data.data))
         }
        
         return true
         
       }else {
          toast.error("Something is Rong")
          return false
       }
    })
    .catch((error) => {
        if(error.response && error.response.status === 401){
         toast.error("Something is Rong")
         logout()
        }else {
         toast.error("Something is Rong")
        }
    })
 }
 // todo list end

 //Delete todo start
 export function DeleteTodoApi(id){
   let url = `${baseUrl}/delete-todo/${id}`

   return axios.get(url, token)
   .then((response)=>{ 
      if(response.status ===200){
         toast.success("Todo Deleted")
         return true 
      }else {
         toast.error("Something is Rong")
         return false
      }
   })
   .catch((error) => {
      if(error.response && error.response.status === 401){
       toast.error("Something is Rong")
       logout()
      }else {
       toast.error("Something is Rong")
      }
   })
 }
 //Delete todo end

  //Update todo start
  export function updateTodoApi(id, status){
   let url = `${baseUrl}/todo-update-status/${id}/${status}`

   return axios.get(url, token)
   .then((response)=>{
      if(response.status ===200){
         toast.success("Todo update complet")
         return true 
      }else {
         toast.error("Something is Rong")
         return false
      }
   })
   .catch((error) => {
      if(error.response && error.response.status === 401){
       toast.error("Something is Rong")
       logout()
      }else {
       toast.error("Something is Rong")
      }
   })
 }
 //Update todo end