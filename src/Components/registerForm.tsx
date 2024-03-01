import useWindowWidth from "../window-width";
import React from "react";

interface Props{
    handleUsernameChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleEmailChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handlePasswordChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmit:(e:React.MouseEvent<HTMLInputElement>)=>void,
    username:string|undefined,
    email:string|undefined,
    password:string|undefined,
}
function RegisterForm(props:Props){
console.log(useWindowWidth());
    const body = document.getElementById("body")!;
    body.classList.replace("color", "image");
    return (
        <div className={"container login d-flex align-content-center"}>
            <form className={'container form-control'}>
                <h1>REGISTER</h1>
                <div className={"container-fluid aaa row row-cols-lg-2 row-cols-xl-1 row-cols-sm-1 m-auto p-2"}>
                    <div className={"col"}>
                        <label className={"form-label"}>
                            Username: <i title={"This field is required"} className={"required-field"}>*</i>
                        </label>
                        <input type={"text"} placeholder={"Enter your username"}>
                        </input>
                    </div>
                    <div className={"col"}>
                        <label className={"form-label"}>
                            E-mail:
                        </label>
                        <input type={"email"} placeholder={"example@example.com"}/>
                    </div>
                </div>
                <div className={"container-fluid aaa row row-cols-1 m-auto p-2"}>
                    <div>
                        <label>
                            Password: <i title={"This field is required"} className={"required-field"}>*</i>
                        </label>
                    </div>
                    <div>
                        <input type={"password"}/>
                    </div>
                    <div>
                        <input type={"submit"} onClick={props.handleSubmit} value={"Sign up"} className={"btn btn-outline-light btn-confirm"}/>
                    </div>
                </div>


                <label>Already have an account? <a href={"/login"}>Sign in</a></label>
            </form>
        </div>
    )
}
export default RegisterForm;