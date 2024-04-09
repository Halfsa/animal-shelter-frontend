import LocationDisplay from "./LocationDisplay.tsx";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import placeholderImage from "../../assets/profile-icon.png";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import edit from "../../assets/edit-icon-png-3587.png";
import React from "react";
import {Location, User} from "../../petDTO.tsx";
interface Props{
    usernameChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    usernameValue:string|undefined;
    nameChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    nameValue:string|undefined;
    EditUserProfile: ()=>void;
    changesMade:boolean;
    //username:React.RefObject<HTMLInputElement>;
    email:React.RefObject<HTMLInputElement>;
    //profileImageUrl:React.RefObject<HTMLImageElement>;
    fullName:React.RefObject<HTMLInputElement>;
    username:React.RefObject<HTMLInputElement>;
    userImage:React.RefObject<HTMLImageElement>;
    editImage:React.RefObject<HTMLImageElement>;
    spanElm:React.RefObject<HTMLSpanElement>;
    handleEdit:(value:string)=>void;
    isEditing:string|undefined;
    userLocation:Location[]|undefined;
    width:number;
    user:User|undefined;

}
function EditProfile(props:Props){
    return (
        //not adoption body
        <div className={"profileBody"}>
        <div className={"container-fluid nameHere"}  style={{height: props.width/3.3}}>
            <div className={"userDiv"} style={{width: props.width / 3}}>
                <img alt={"ProfileImage"} ref={props.userImage} className={"bigProfileImage"} width={props.width / 3} src={props.user&&props.user.profileImageUrl?props.user.profileImageUrl:placeholderImage}/>
                <input className={`${props.isEditing?"select":"noSelect"} userName`} ref={props.username} onChange={props.usernameChange} readOnly={!(props.isEditing === "username")}
                       value={props.usernameValue}/><span ref={props.spanElm} className={"measure"}></span>
                <img ref={props.editImage} alt={"edit"} src={edit} onClick={() => props.handleEdit("username")} width={13} className={"editImg"}/>
            </div>
        </div>
            <div className={"container"}>
                <table className={"table"}>
                    <tbody>
                    <tr className="row">
                        <td className={"col"}>Full name </td>
                        <td className={"col"}>
                            <input className={ `${props.isEditing?"select":"noSelect"} inputWithoutBorder` } ref={ props.fullName }
                                   readOnly={ ! ( props.isEditing === "name" ) } value={ props.nameValue }
                                   onChange={ props.nameChange }/>
                            <img alt={"edit"}
                                 onClick={ () => props.handleEdit ( "name" ) }
                                 className={ "editImg" } src={ edit }
                                 width={ 13 }
                            />
                        </td>
                    </tr>
                    <tr className={"row"}>
                        <td className={"col"}>E-mail</td>
                        <td className={"col"}>{props.user?props.user.email?<input ref={props.email} value={props.user.email}/>:<i className={"notAddedText"}>No email added</i>:""}</td>
                    </tr>
                    </tbody>
                </table>
                    <div className="row">
                        <p className={"col"}>Locations</p>
                        {props.userLocation?props.userLocation.map((thisLocation)=>{return(<LocationDisplay key={thisLocation.locationId} location={thisLocation}/>)}):<i className={"notAddedText"}>No locations added</i>}
                    </div>
        </div>
            {props.changesMade &&
                <div className={"submitChanges"}>
                    <p>
                        Changes have been made. Do you wish to save them?
                    </p>
                    <button onClick={props.EditUserProfile}>
                        save changes
                    </button>
                    X
                </div>
            }

        </div>
    )
}

export default EditProfile;