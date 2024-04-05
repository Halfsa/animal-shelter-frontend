import GetMyLocation from "../getMyLocation.tsx";
import GetProfile from "../getProfile.tsx";
import LocationDisplay from "./LocationDisplay.tsx";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import placeholderImage from "../../assets/profile-icon.png";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import edit from "../../assets/edit-icon-png-3587.png";
import windowWidth from "../../window-width.tsx";
import {useEffect, useRef, useState} from "react";

function EditProfile(){
    const user = GetProfile();
    const userLocation = GetMyLocation();
    const width = windowWidth();
    const [isEditing,setIsEditing] = useState<string>();
    const imgRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const spanElm = useRef<HTMLSpanElement>(null)
    function handleEdit(editingThisObject:string){
        nameRef.current!.select();
        nameRef.current!.className = "userName select"
        setIsEditing(editingThisObject);
    }

    useEffect(() => {
        imgRef.current!.style.left = nameRef.current!.offsetLeft + nameRef.current!.offsetWidth+"px";
        imgRef.current!.style.top = nameRef.current!.offsetTop +"px";
        spanElm.current!.textContent = nameRef.current!.value; // the hidden span takes the value of the input;
        nameRef.current!.style.width = spanElm.current!.offsetWidth + 'px'; // apply width of the span to the input
    }, [width, nameRef.current? nameRef.current.value:"", user]);
    return (
        //not adoption body
        <div className={"profileBody"}>
        <div className={"container-fluid nameHere"}  style={{height: width/3.3}}>
            <div className={"userDiv"} style={{width: width / 3}}>
                <img alt={"ProfileImage"} className={"bigProfileImage"} width={width / 3} src={user&&user.profileImageUrl?user.profileImageUrl:placeholderImage}/>
                <input className={"userName noSelect"} ref={nameRef} readOnly={!(isEditing === "username")}
                       value={user ? user.username : ""}/><span ref={spanElm} className={"measure"}></span>
                <img ref={imgRef} alt={"edit"} src={edit} onClick={() => handleEdit("username")} width={13} className={"editImg"}/>
            </div>
        </div>
            <div className={"container"}>
                <table className={"table"}>
                    <tbody>
                    <tr className="row">
                        <td className={"col"}>Full name</td>
                        <td className={"col"}>{user ? user.name : ""}</td>
                    </tr>
                    <tr className={"row"}>
                        <td className={"col"}>E-mail</td>
                        <td className={"col"}>{user?user.email?user.email:<i className={"notAddedText"}>No email added</i>:""}</td>
                    </tr>
                    <tr className="row">
                        <td className={"col"}>Locations</td>
                        {userLocation?userLocation.map((thisLocation)=>{return(<LocationDisplay key={thisLocation.locationId} location={thisLocation}/>)}):<td>No locations added</td>}
                    </tr>
            </tbody>
        </table>
        </div>
        </div>
    )
}
export default EditProfile;