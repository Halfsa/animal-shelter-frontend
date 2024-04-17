import React, {useContext, useState} from "react";
import LoginForm from "./loginForm.tsx";
import LoginPost from "./LoginPost.tsx";
import {useNavigate} from "react-router-dom";

function LoginHandler(){
    const navigate = useNavigate();
    const [username,setUsername]=useState<string>();
    const [password,setPassword] = useState<string>();
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
    function handleLogin(username:string|undefined,password:string|undefined,ev:React.MouseEvent<HTMLInputElement>) {
        ev.preventDefault();
            LoginPost({
            username:username,
            password:password,
            setUsername: setUsername,
            setPassword:setPassword,
            setErrorUsername:setErrorUname,
            setErrorPassword:setErrorPassword,
            navigate:navigate,
        });
    }
    function disablePopup(){
        setErrorUname(undefined);
        setErrorPassword(undefined);
    }
    return(
        <LoginForm disablePopup={disablePopup}
                   errorUname={errorUname}
                   errorPassword={errorPassword}
                   username={username}
                   password={password}
                   handleUsernameChange={handleUsernameChange}
                   handlePasswordChange={handlePasswordChange}
                   handleSubmit={(ev)=> handleLogin(username,password,ev)}/>
    )
}

export default LoginHandler;