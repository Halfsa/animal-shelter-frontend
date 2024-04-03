import GetMyLocation from "../getMyLocation.tsx";
import GetProfile from "../getProfile.tsx";
import LocationDisplay from "./LocationDisplay.tsx";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import placeholderImage from "../../assets/profile-icon.png";
import windowWidth from "../../window-width.tsx";

function EditProfile(){
    const user = GetProfile();
    const  userLocation = GetMyLocation();
    const width = windowWidth();
    return (
        //not adoption body
        <div className={"profileBody"}>
        <div className={"container-fluid nameHere"}  style={{height: width/3.3}}>
            <img alt={"ProfileImage"} className={"bigProfileImage"} width={width/3} src={placeholderImage}/>
            <h2 style={{width:width/3,}} className={"userName"}>{user?user.username:""}</h2>
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
                {userLocation?userLocation.map((thisLocation)=>{return(<LocationDisplay location={thisLocation}/>)}):"No locations added"}
            </tr>
            </tbody>
        </table>
        </div>
        </div>
    )
}
export default EditProfile;