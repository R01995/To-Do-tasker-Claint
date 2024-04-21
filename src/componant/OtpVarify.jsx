import { useState } from "react";
import Lottie from "lottie-react";
import otpani from "../../public/Animation/OtpVarify.json";
import VerificationInput from "react-verification-input";
import { toast } from "react-toastify";
import { OtpVerifyRequest } from "../API/Api";
import { getEmail } from "../helper/SessionHealper";
import { useNavigate } from "react-router-dom";

const OtpVarify = () => {

    const [otp, setOtp] = useState("");
    const [otperror, setOtperror] = useState("");
    const naviget = useNavigate()

    const hendelVarifyOtp = () => {
        if(otp.length === 6) {
            OtpVerifyRequest(getEmail(), otp)
             .then((result) => {
                if(result === true) {
                    toast.success("Otp varify Successful");
                    naviget("/New-password")
                } else {
                    setOtperror("Wrong otp");
                    // toast.error("Something went wrong");
                    // setOtperror("Something went wrong");
                }
             })
              .catch((error)=>{
                // toast.error("Wrong otp");
                // setOtperror("Something went wrong");
                return false
             })
        }
        else {
            setOtperror("please enter 6 degits otp")
        }
    }

  return (
    <div className="container">
      <div className="input-container  ">
        <div className="bg-green-700 bg-opacity-[.7] p-5 rounded-lg w-[350px] mx-auto">
           <VerificationInput onChange={(e) => setOtp(e)} validChars ="0-9"  />
         <p className="text-yellow-500 mt-2">{otperror}</p>
           <button onClick={hendelVarifyOtp} className="button w-[300px] bg-fifth">Send OTP</button>
        </div>
    
      </div>
      <div className="animation-container">
        <Lottie animationData={otpani} />
      </div>
    </div>
  );
};

export default OtpVarify;
