import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistationPage from "./pages/RegistationPage";
import CreateTodoPage from "./pages/CreateTodoPage";
import NewTodoPage from "./pages/NewTodoPage";
import ProgressTodoPage from "./pages/ProgressTodoPage";
import ComplatedTodoPage from "./pages/ComplatedTodoPage";
import CancelTodoPage from "./pages/CancelTodoPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFound from "./componant/NotFound404";
import ProfilePage from "./pages/ProfilePage";
import NewPasswordPage from "./pages/NewPasswordPage";
import OtpVarifyPage from "./pages/OtpVarifyPage";
import { getAuthToken } from "./helper/SessionHealper";

 function App() {

  if(getAuthToken()){
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
          

          <Route path="/create-todo" element={<CreateTodoPage></CreateTodoPage>} /> 
          <Route path="/new-todo" element={<NewTodoPage></NewTodoPage>} /> 
          <Route path="/progress-todo" element={<ProgressTodoPage></ProgressTodoPage>} /> 
          <Route path="/completed-todo" element={<ComplatedTodoPage></ComplatedTodoPage>} /> 
          <Route path="/cancel-todo" element={<CancelTodoPage></CancelTodoPage>} /> 
          <Route path="/profile" element={<ProfilePage></ProfilePage>} /> 
          <Route path="/login" element={<Navigate to="/"></Navigate>} />  

          <Route path="*" element={<NotFound></NotFound>} /> 

        </Routes>
      </BrowserRouter>
    );
  }else {
    return (
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<LoginPage></LoginPage>} /> 
          <Route path="/registation" element={<RegistationPage></RegistationPage>} />               
          <Route path="/forgot-password" element={<ForgotPasswordPage></ForgotPasswordPage>} /> 
          <Route path="/New-password" element={<NewPasswordPage></NewPasswordPage>} /> 
          <Route path="/otp-verrify" element={<OtpVarifyPage></OtpVarifyPage>} /> 
        
          <Route path="*" element={<NotFound></NotFound>} /> 

        </Routes>
      </BrowserRouter>
    );
  }
   
  }

export default App
