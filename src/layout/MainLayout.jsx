import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { logout } from "../helper/SessionHealper";
import { getUserDetails } from "../helper/SessionHealper";


const MainLayout = (props) => {

    const [show, setShow] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);


    return (
        <div className="h-screen w-full bg-fifth bg-opacity-[.3] p-5">
            <div>
                <nav className="flex justify-between items-center">
                   <div className="flex gap-5 items-center">
                        {
                            sidebarOpen?
                            <FaBarsStaggered onClick={() => setSidebarOpen(!sidebarOpen)} className="text-3xl text-tertiary"/>
                            :
                            <IoClose onClick={() => setSidebarOpen(!sidebarOpen)} className="text-3xl text-tertiary"/>
                            
                        }
                      
                      <Link to ="/" className="text-3xl font-bold text-tertiary">To-Do-Tasker</Link>
                   </div>
                   <div className="relative">  
                   <div className="flex gap-5 items-center">
                         <h2 onClick={() => setShow(!show)} className="text-3xl font-bold text-tertiary hover:text-fifth capitalize italic">{getUserDetails()?.firstName + " " + getUserDetails()?.lastName}</h2>

                        <div onClick={() => setShow(!show)} className="h-[80px] w-[80px] rounded-full bg-tertiary cursor-pointer overflow-hidden ">
                            <img src={getUserDetails()?.profilePic} alt="" />
                        </div>
                    
                    </div> 
                 
                   
                       {
                        show&&
                            <div className="absolute right-0 top-[80px] w-[350px] text-center p-5 rounded-lg bg-fifth ">
                                <IoClose onClick={() => setShow(!show)} className="text-3xl text-tertiary absolute left-0 top-0"/>
                                
                                <div className="h-[80px] w-[80px] overflow-hidden rounded-full bg-tertiary cursor-pointer text-center mx-auto">
                                <img src={getUserDetails()?.profilePic} alt="" />
                                </div>
                            <h1 className="text-3xl font-bold text-tertiary"> {getUserDetails()?.firstName + " " + getUserDetails()?.lastName} </h1>
                            <Link to="/profile" className="button inline-block">Profile</Link>
                            <button onClick={() => logout()} className="button">logOut</button>
                        </div>
                       }
                   </div>
                </nav>

            </div>





            <div className="flex justify-between mt-5">
               <div className={`${sidebarOpen ? "w-[28%] p-5" : "w-[0%]"} bg-primary bg-opacity-[.5] rounded-lg transition-all duration-300`}>
                   <div className="flex ">
                    <Link to="/" className="text-4xl font-bold text-fourth"> <CiHome></CiHome></Link>
                    <NavLink  to="/"  className={({ isActive }) =>    isActive ? "text-xl p-1 px-3 bg-opacity-[.7] bg-fourth text-black font-medium font-serif rounded-md block cursor-pointer" : "text-xl p-1 px-3 bg-opacity-[.3] bg-fourth text-block font-medium font-serif rounded-md block"  }> Home </NavLink>
                        
                   </div>
                    <br/>
                    <NavLink  to="/create-todo"  className={({ isActive }) =>    isActive ? "text-xl p-1 px-3 bg-opacity-[.9] bg-fourth text-black font-medium font-serif rounded-md block cursor-pointer" : "text-xl p-1 px-3 bg-opacity-[.3] bg-fourth text-white font-medium font-serif rounded-md block"  }> Create Todo</NavLink>
                    <br/>
                    <NavLink  to="/new-todo"  className={({ isActive }) =>    isActive ? "text-xl p-1 px-3 bg-opacity-[.9] bg-fourth text-black font-medium font-serif rounded-md block cursor-pointer" : "text-xl p-1 px-3 bg-opacity-[.3] bg-fourth text-white font-medium font-serif rounded-md block"  }> New</NavLink>
                    <br/>
                    <NavLink  to="/progress-todo"  className={({ isActive }) =>    isActive ? "text-xl p-1 px-3 bg-opacity-[.9] bg-fourth text-black font-medium font-serif rounded-md block cursor-pointer" : "text-xl p-1 px-3 bg-opacity-[.3] bg-fourth text-white font-medium font-serif rounded-md block"  }> Progress Todo</NavLink>
                    <br/>
                    <NavLink  to="/completed-todo"  className={({ isActive }) =>    isActive ? "text-xl p-1 px-3 bg-opacity-[.9] bg-fourth text-black font-medium font-serif rounded-md block cursor-pointer" : "text-xl p-1 px-3 bg-opacity-[.3] bg-fourth text-white font-medium font-serif rounded-md block"  }> Completed Todo</NavLink>
                    <br/>
                    <NavLink  to="/cancel-todo"  className={({ isActive }) =>    isActive ? "text-xl p-1 px-3 bg-opacity-[.9] bg-fourth text-black font-medium font-serif rounded-md block cursor-pointer" : "text-xl p-1 px-3 bg-opacity-[.3] bg-fourth text-white font-medium font-serif rounded-md block"  }> Cancel Todo</NavLink>


               </div>
               <div className={`${sidebarOpen ? "w-[70%]" : "w-[100%]"} bg-secondary bg-opacity-[.7] rounded-lg p-5 transition-all duration-300 flex justify-center items-center`}> {props.children} </div>
            </div>
        </div>
    )
}
export default MainLayout;