import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ProfileUpdateApi, getProfileDetails } from "../API/Api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";



const Profile = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');



    // console.log(previewProfile)

     
    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
 
      // get redax data
    const profile = useSelector(state =>state.profile.profile)
    // console.log(profile)
      //data lode on redux
      useEffect(() => {
        getProfileDetails()
          .then(()=>{
            setFirstName(profile?.firstName)
            setLastName(profile?.lastName)
            setProfilePic(profile?.profilePic)
            setPassword(profile?.password)
            setEmail(profile?.email)
          })
      },[profile.firstName, profile.lastName, profile.profilePic, profile.password, profile.email])

 

      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      }
      

      const handelImage = (e) => {
        const file = e.target.files[0];
        // console.log(file); // Check the file object
        convertToBase64(file)
          .then((result) => {
            // console.log(result);
            setProfilePic(result);
          })
          .catch((error) => console.log(error));
      }
      
      

      const hendalUpdateProfile =  () => {
        if(firstName&&lastName&&password){
          ProfileUpdateApi(firstName, lastName, email, password, profilePic)
          .then((result)=>{
            if(result=== true){
              toast.success("Profile update successfully")
              window.location.href="/"
            }
          })
        }
        else{
          toast.error("please fill in all fields")
        }
      }
      
 
      
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-white ">Update your Profile</h2>

            <div className="mb-5  my-5 border-b border-fourth">
                 <img src={ profilePic? profilePic : profile?.profilePic} className="w-[200px] h-[200px] mx-auto rounded-full bg-black my-3" alt="" />
            </div>
            <div className="w-[400px]">
                 <input onChange={handelImage}  type="file"  className="w-full rounded-lg outline-none border px-4 py-2" />
                 <input readOnly defaultValue={profile?.email} type="email" placeholder=" enter your email" className="w-full outline-none border px-5 py-2 mt-3 rounded-lg" />
                 <div>
                    <input onChange={(e) => setPassword(e.target.value)} defaultValue={profile?.password} className="w-full outline-none border px-5 py-2 mt-3 rounded-lg"
                        type={showPassword ? 'text' : 'password'}
                        placeholder=" enter your password"
                    />
                    <span className="relative" onClick={handleTogglePassword}>
                        {showPassword ? < AiOutlineEye className="absolute right-2 top-[0] " /> : <AiOutlineEyeInvisible className='absolute right-2 top-[0] ' />}
                    </span>
                    
                 </div>
                 <input onChange={(e) => setFirstName(e.target.value)} defaultValue={profile?.firstName} type="text" placeholder="First Name" className="w-full outline-none border px-5 py-2 mt-3 rounded-lg" />
                 <input onChange={(e) => setLastName(e.target.value)} defaultValue={profile?.lastName} type="text" placeholder="Last Name" className="w-full outline-none border px-5 py-2 mt-3 rounded-lg" />

                 

                  <button onClick={hendalUpdateProfile}  className="w-full border border-secondary rounded-md outline-none px-2 py-2 mt-4 bg-fourth text-3xl capitalize font-sans font-medium text-white">Update</button>
            </div>

        </div>
    )
}

export default Profile;