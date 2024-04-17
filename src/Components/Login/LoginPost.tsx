import axios from "axios";
import {NavigateFunction} from "react-router-dom";

interface Props{
    username:string|undefined,
    password:string|undefined,
    setUsername:(value:string)=>void,
    setPassword:(value:string)=>void,
    setErrorUsername:(value:string[]|undefined)=>void,
    setErrorPassword:(value:string[]|undefined)=>void,
    navigate:NavigateFunction;
}
function LoginPost(props:Props){
    const pathToReturnTo = localStorage.getItem("pathToReturnTo");
    axios.post('/auth/login', {
        username: props.username,
        password: props.password,
    }).then(function (response) {
        console.log(response.data.message);
        localStorage.setItem("access_token",response.data.access_token);
        localStorage.setItem("refresh_token",response.data.refresh_token);
        props.setUsername('');
        props.setPassword('');
        location.replace(pathToReturnTo?pathToReturnTo:"/")
    }).catch(function (error) {
        console.log(error.response.data.message);
        if (typeof error.response.data.message === "string"){
            props.setErrorUsername([error.response.data.message])
            props.setErrorPassword(undefined);
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
        props.setErrorUsername(unameErrors);
        props.setErrorPassword(passwordErrors);
        console.log(unameErrors);
        console.log(passwordErrors);
    });
}
export default LoginPost;