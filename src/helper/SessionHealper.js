

const setAuthToken = (token)  => {
     localStorage.setItem("authToken", token)
}

const getAuthToken  = () =>{
    return localStorage.getItem('authToken') 
}

const setEmail = (email)   => {
    localStorage.setItem('email', email);
    
}
 
const getEmail =  () => {
    return localStorage.getItem('email');
}

const setOtp = (otp) => {
    localStorage.setItem('otp', otp);
}

const getOtp = () => {
    return localStorage.getItem('otp');
}

const setUserDetails =(user)=>{
    localStorage.setItem("userDetails", JSON.stringify(user));
}

const getUserDetails =()=>{
    return  JSON.parse(localStorage.getItem("userDetails"));
}


//logOut function
const logout=()=> {
    localStorage.clear()
    window.location.href="/login"
}


export {
      setAuthToken,
      getAuthToken,
      setEmail,
      getEmail,
      setOtp,
      getOtp,
      setUserDetails,
      getUserDetails,
      logout
}