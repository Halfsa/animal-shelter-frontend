import GetMyLocation from "../getMyLocation.tsx";
import GetProfile from "../getProfile.tsx";
import LocationDisplay from "./LocationDisplay.tsx";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import placeholderImage from "../../assets/profile-icon.png";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import edit from "../../assets/edit-icon-png-3587.png";
import windowWidth from "../../window-width.tsx";
import {useState} from "react";

function EditProfile(){
    const user = GetProfile();
    const  userLocation = GetMyLocation();
    const width = windowWidth();
    const [isEditing,setIsEditing] = useState<string>();
    function handleEdit(editingThisObject:string){
        setIsEditing(editingThisObject);
    }
    console.log(isEditing)
    return (
        //not adoption body
        <div className={"profileBody"}>
        <div className={"container-fluid nameHere"}  style={{height: width/3.3}}>
            <img alt={"ProfileImage"} className={"bigProfileImage"} width={width/3} src={placeholderImage}/>
            <h2 className={"userName"} contentEditable={isEditing === "username"} style={ {width:width/3}}>{user?user.username:""}</h2>
                    <img alt={"edit"} src={edit} onClick={()=>handleEdit("username")} width={13} className={"editImg"}/>
        </div>
    <div className={"container"}>
        <table className={"table"}>
            <tbody>
            <tr className="row">
            <td className={"col"}>Full name</td>
                <td className={"col"}>{user?user.name:""}</td>
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