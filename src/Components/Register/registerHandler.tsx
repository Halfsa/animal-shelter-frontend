import React, {useState} from "react";
import axios from "axios";
import RegisterForm from "./registerForm.tsx";

function RegisterHandler(){
    const [username,setUsername]=useState<string>();
    const [password,setPassword] = useState<string>();
    const [email,setEmail] = useState<string>();
    const [errorPassword,setErrorPassword]=useState<string[]|undefined>(undefined);
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
    function FetchRegister(username:string|undefined,email:string|undefined,password:string|undefined){
        const pathToReturnTo = localStorage.getItem("pathToReturnTo");
        axios.defaults.withCredentials = true;
        axios.post('/auth/register', {
            username: username?.trim(),
            email:email?.trim().length === 0? null: email,
            password:password,
        }).then(function (response) {
                console.log(response.data.message);
                setUsername('');
                setPassword('');
                localStorage.setItem("access_token",response.data.access_token);
                localStorage.setItem("refresh_token",response.data.refresh_token);
                location.replace(pathToReturnTo?pathToReturnTo:"/")
                return response.data.message;
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                const listusz: string[] = error.response.data.message;
                let passwordErrors:string[]|undefined = [];
                listusz.map((error)=>{
                    if (error.trim().toLowerCase().includes("password")){
                        passwordErrors?.push(error);
                    }
                })
                if (passwordErrors.length === 0) {
                    passwordErrors = undefined
                }
                setErrorPassword(passwordErrors);
                console.log(passwordErrors);
                return error.response.data.message;
            });
    }
    function registerFetch(username:string|undefined,email:string|undefined,password:string|undefined,ev:React.MouseEvent<HTMLInputElement>) {
        ev.preventDefault();
        FetchRegister(username,email,password);

    }
    function disablePopup(){
        setErrorPassword(undefined);
    }
    return(
            <RegisterForm handleUsernameChange={handleUsernameChange}
                          handleEmailChange={handleEmailChange}
                          handlePasswordChange={handlePasswordChange}
                          handleSubmit={(e)=>registerFetch(username,email,password,e)}
                          username={username}
                          email={email}
                          password={password}
                          disablePopup={disablePopup}
                          errorPassword={errorPassword}/>
         )
}
export default RegisterHandler;