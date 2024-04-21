// 
import { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import Lottie from "lottie-react";
import lotiani from "../../public/Animation/forgotpassword.json";
import { Link, useNavigate } from "react-router-dom";
import { EmailVerifyRequest } from "../API/Api";
import { toast } from "react-toastify";
import lodinAni from "../../public/Animation/loding.json"
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loder , setLoder] = useState(false) ;

  const naviget = useNavigate()

  const hendelSendEmail = (e) => {
    e.preventDefault();
    if (!email) {
    //   toast.error("Please enter your email address");
      setError("Please enter your email address");
    } else {
      EmailVerifyRequest(email)
        .then((result) => {
          if (result === true) {
            setLoder(true)
            toast.success('Success');
            naviget('/otp-verrify')
          } else {
            // toast.error('Email is required');
            return false
          }
        })
        .catch(() => {
            setLoder(false)
          setError('Something went wrong');
        });
    }
  }

  return (
    <div className="container mx-auto px-5 md:px-0 flex flex-col items-center justify-center mt-40">
        <form className="w-full max-w-md p-5 mt-5 rounded-lg bg-fifth relative">
        <h2 className="text-2xl my-3 font-bold text-yellow-400">Forgot Password ! Enter your email</h2>

        <Link to={"/login"}>
          <GiCrossMark className="absolute top-0 right-0 text-3xl text-red-500 font-bold :hover:text-red-700 hover:text-4xl" />
        </Link>
        <input
          className="w-full p-2 mb-2 outline-none"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {/* Lodin add.. */}
        {
            loder? 
            <button className="w-full button mt-5" disabled><Lottie animationData={lodinAni}/> </button>
             :
           <button onClick={hendelSendEmail} className="w-full button mt-5">Send OTP</button>

           
        }
      </form>
      <Lottie className="w-full md:w-auto" animationData={lotiani} />
      
    </div>
  );
}

export default ForgotPassword;
