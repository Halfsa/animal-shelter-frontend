// @ts-expect-error image being dumb
import profileImg from "../../assets/profile-icon.png";
//@ts-expect-error image being dumb
import businessIcon from "../../assets/6329d1a4507b0e4339122425_Artboard 1@3x.png"
// @ts-expect-error image being dumb
import editImg from "../../assets/edit-icon-png-3587.png";
import {User} from "../../petDTO.tsx";
import React from "react";
interface Props{
    path:string;
    handleSignOut:()=>void;
    displayPopup: ()=>void;
    dropdownContent:React.RefObject<HTMLDivElement>;
    yoohoo:User|undefined;
    redirectToProfile:()=>void;
    madeChanges:string;
}
function Navbar({yoohoo,...props}:Props){
    const profileImgSrc = props.madeChanges.length >0?props.madeChanges:yoohoo?.profileImageUrl?yoohoo.profileImageUrl:profileImg;
    return (
        <nav className="navbar navbar-fixed-top navbar-expand-sm">
            <div className="container-fluid navbar-contentus">
                <a className="navbar-brand" href="/home"><img src={businessIcon} width={50}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <a className={props.path === "/" ? "nav-link active" : "nav-link"} aria-current="page"
                               href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={props.path === "/adopt" ? "nav-link active" : "nav-link"}
                               href="/adopt">Adoption</a>
                        </li>
                    </ul>
                        {yoohoo ? <div className={"dropdown profileImageDiv"}>
                                <img alt={"show profile"} className={"profilePicture dropbtn"} onClick={props.displayPopup} width={40} height={40}
                                     src={profileImgSrc}/>
                            <div ref={props.dropdownContent} className={"dropdown-content"}>
                                <div>
                                    <img className={"dropdownProfile profilePicture"} alt={"your profile image"} width={60} height={60}
                                          src={profileImgSrc}/>
                                </div>
                                <h5 onClick={props.redirectToProfile}>{yoohoo.username}</h5>
                                <p>{ yoohoo.email ? <textarea name={"dropDownEmail"} className = {"textarea noSelect"} readOnly={true} value={yoohoo.email } ></textarea> : <i>No email added</i> }</p>
                                <button className={"signout"} onClick={props.handleSignOut}>Sign out</button>
                                <a href={'/profile/edit'}><img alt={"edit profile"} width={15} src={editImg}/> edit
                                    profile</a>
                            </div>
                        </div> :<div className={"logregButtons"}>
                            <a className="btn loginBtn" href={"/login"}>Login</a>
                            <a className="btn loginBtn" href={"/register"}>Register
                    </a></div>
                    }
            </div>
            </div>
        </nav>
    )
}

export default Navbar;