import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import RegisterForm from "./registerForm.tsx";

function RegisterHandler(){
    const [username,setUsername]=useState<string>();
    const [password,setPassword] = useState<string>();
    const [email,setEmail] = useState<string>();
    const navigate = useNavigate();
    const body = document.getElementById("body")!;
    body.classList.replace("color", "image");
    function handleUsernameChange(e:React.ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value);
        console.log(e.target.value);
    }
    function handleEmailChange(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    function handlePasswordChange(e:React.ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    function FetchLogin(){
        axios.defaults.withCredentials = true;
        axios.post('/auth/register', {

        }).then(function (response) {
                console.log(response.data.message);
                setUsername('');
                setPassword('');
                navigate('/')
                return response.data.message;
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                return error.response.data.message;
            });
    }
    function registerFetch(username:string|undefined,email:string|undefined,password:string|undefined,ev:React.MouseEvent<HTMLInputElement>) {
        ev.preventDefault();
        FetchLogin();

    }
    return(
            <RegisterForm handleUsernameChange={handleUsernameChange}
                          handleEmailChange={handleEmailChange}
                          handlePasswordChange={handlePasswordChange}
                          handleSubmit={(e)=>registerFetch(username,email,password,e)}
                          username={username}
                          email={email}
                          password={password}/>
         )
}
export default RegisterHandler;