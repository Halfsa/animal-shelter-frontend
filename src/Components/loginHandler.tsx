import axios from "axios";
import React, {useState} from "react";
import LoginForm from "./loginForm.tsx";
import {useNavigate} from "react-router-dom";

function LoginHandler(){
    const [username,setUsername]=useState<string>();
    const [password,setPassword] = useState<string>();
    const navigate = useNavigate();
    const [errorUname,setErrorUname]=useState<string[]|undefined>(undefined);
    const [errorPassword,setErrorPassword]=useState<string[]|undefined>(undefined);
    const body = document.getElementById("body")!;
    body.classList.replace("color", "image");
    function handleUsernameChange(e:React.ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value);
        console.log(e.target.value);
    }
    function handlePasswordChange(e:React.ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    function FetchLogin(username:string|undefined,password:string|undefined){
        axios.defaults.withCredentials = true;
        axios.post('/auth/login', {
            username: username,
            password: password,
        })
            .then(function (response) {
                console.log(response.data.message);
                setUsername('');
                setPassword('');
                navigate('/')
                return response.data.message;
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                if (typeof error.response.data.message === "string"){
                    setErrorUname([error.response.data.message])
                    setErrorPassword(undefined);
                    return;
                }
                const listusz: string[] = error.response.data.message;
                let unameErrors:string[]|undefined = [];
                let passwordErrors:string[]|undefined = [];
                listusz.map((error)=>{
                    if (error.trim().toLowerCase().includes("username")){
                        unameErrors?.push(error);
                    }
                    else if (error.trim().toLowerCase().includes("password")){
                        passwordErrors?.push(error);
                    }
                })
                if (unameErrors.length === 0) {
                    unameErrors = undefined
                }if (passwordErrors.length === 0) {
                    passwordErrors = undefined
                }
                setErrorUname(unameErrors);
                setErrorPassword(passwordErrors);
                console.log(unameErrors);
                console.log(passwordErrors);
                return error.response.data.message;
            });
    }
    function LoginFetch(username:string|undefined,password:string|undefined,ev:React.MouseEvent<HTMLInputElement>) {
        ev.preventDefault();
        FetchLogin(username,password);

    }
    function disablePopup(){
        setErrorUname(undefined);
        setErrorPassword(undefined);
    }
    return(
        <LoginForm disablePopup={disablePopup} errorUname={errorUname} errorPassword={errorPassword} username={username} password={password} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleSubmit={(ev)=>LoginFetch(username,password,ev)}/>
    )
}

export default LoginHandler;