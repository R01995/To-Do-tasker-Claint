import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResetPasswordRequest } from "../API/Api";
import { getEmail, getOtp } from "../helper/SessionHealper";


const Newpassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const naviget = useNavigate()

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!password) {
        toast.error("First input your password");
      setError("Please enter your New Password");
    } else {
        ResetPasswordRequest(getEmail(), getOtp(), password)
        .then((res) => {
            if(res === true) {
                toast.success("Password Reset Successful");
                naviget("/login")
                localStorage.clear(getEmail(), getOtp())
            } else {
                setError("Something went ");
            }
        })
        .catch((error) => {
            setError("Something went wrong");
        });
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSendEmail}>
        <h2 className="text-3xl capitalize italic font-thin my-3">enter your New Password..</h2>
      
            <input
              className="input"
              type=" password"
              placeholder="Enter your password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button  className="button">
                 Submit
            </button>
          
        
      </form>
    </div>
  );
};

export default Newpassword;
