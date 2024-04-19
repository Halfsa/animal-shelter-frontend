import React from "react";

interface Props{
    handleUsernameChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handlePasswordChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleSubmit:(e:React.MouseEvent<HTMLInputElement>)=>void,
    username:string|undefined,
    password:string|undefined,
    errorUname:string[]|undefined,
    errorPassword:string[]|undefined,
    disablePopup:()=>void,
}
function LoginForm(props:Props){
    return(
        <div className={"container d-flex align-content-center"}>
            <form className={'container form-control login'}>
                <h1>LOGIN</h1>
                <div className={"container-fluid aaa row row-cols-lg-2 row-cols-xl-1 row-cols-sm-1 m-auto p-2"}>
                    <div className={"container col"}>
                        <div className={"container ho"}>
                            <label className={"form-label popup"}>
                                Username:
                                <span onClick={props.disablePopup} className={props.errorUname?"popuptext show": "popuptext"} id={"hibaPopup"}>{props.errorUname?props.errorUname[0]:""}</span>
                                <input autoFocus={true} value={props.username} onChange={props.handleUsernameChange} type={"text"}
                                       className={"loginInput"} placeholder={"Enter your username"}/>
                            </label>
                        </div>
                    </div>
                </div>
                    <div className={"container-fluid aaa row row-cols-lg-2 row-cols-xl-1 row-cols-sm-1 m-auto p-2"}>
                        <div className={"container col d-flex align-content-center"}>
                            <div className={"container ho"}>
                                <label className={"form-label popup"}>
                                    Password:
                                    <span onClick={props.disablePopup}
                                          className={props.errorPassword ? "popuptext show" : "popuptext"}
                                          id={"hibaPopup"}>{props.errorPassword ? props.errorPassword[0] : ""}</span>
                                    <input value={props.password} type={"password"}
                                           onChange={props.handlePasswordChange} className={"loginInput"}/>
                                </label>
                            </div>
                        </div>
                        <input type={"submit"} onClick={props.handleSubmit} className={"btn btn-outline-light btn-confirm"} value={"sign in"}/>
                    </div>
                    <label>Not registered yet? <a href={"/register"}>Sign up</a></label>
            </form>
        </div>
)
}
export default LoginForm;