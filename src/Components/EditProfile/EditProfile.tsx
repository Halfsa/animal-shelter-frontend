import LocationDisplay from "./LocationDisplay.tsx";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import placeholderImage from "../../assets/profile-icon.png";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import edit from "../../assets/edit-icon-png-3587.png";
import React, {useRef, useState} from "react";
import {Location, User} from "../../petDTO.tsx";
import PlusButton from "./PlusButton.tsx";
import {Modal} from "@mui/material";
interface Props{
    fileInput:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    usernameChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    usernameValue:string|false;
    nameChange: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
    nameValue:string|false;
    EditUserProfile: ()=>void;
    changesMade:boolean;
    //username:React.RefObject<HTMLInputElement>;
    email:React.RefObject<HTMLTextAreaElement>;
    emailValue:string|false;
    emailChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
    //profileImageUrl:React.RefObject<HTMLImageElement>;
    fullName:React.RefObject<HTMLTextAreaElement>;
    username:React.RefObject<HTMLInputElement>;
    userImage:React.RefObject<HTMLImageElement>;
    editImage:React.RefObject<HTMLImageElement>;
    spanElm:React.RefObject<HTMLSpanElement>;
    handleEdit:(value:string)=>void;
    isEditing:string|undefined;
    userLocation:Location[];
    width:number;
    user:User|undefined;
}
function EditProfile(props:Props){
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [displayNewLocation,setDisplayNewLocation] = useState(false)
    return (
        <div className={"profileBody"}>
        <div className={"container-fluid nameHere"}  style={{height: props.width/3.3}}>
            <div className={"userDiv"} style={{width: props.width / 3}}>
                <div className={"wrapper-div"}>
                    <img alt={"ProfileImage"} onClick={()=>fileInputRef.current?.click()} ref={props.userImage} className={"bigProfileImage"}
                         width={props.width / 3}
                         height={props.width / 3}
                         src={props.user && props.user.profileImageUrl ? props.user.profileImageUrl : placeholderImage}/>
                    <p className={"imgOverlayText"}>Change image</p>
                    <input id={"fileInput"} accept={"image/png, image/gif, image/jpeg"} type={"file"} ref={fileInputRef} onChange={props.fileInput}/>
                </div>

                <input className={`${ props.isEditing === "username"? "select" : "noSelect" } userName` }
                       name={"username"}
                       autoComplete={"none"}
                       ref={ props.username } onChange={ props.usernameChange}
                       readOnly={!(props.isEditing === "username")}
                       value={props.usernameValue?props.usernameValue:""}/>
                <span ref={props.spanElm}  className={"measure"}></span>
                <img ref={props.editImage} alt={"edit"} src={edit} onClick={() => props.handleEdit("username")} width={13} className={"editImg"}/>
            </div>
        </div>
            <div className={"container"}>
                <table className={ "table" }>
                    <tbody>
                        <tr className="row">
                            <td className={ "col" }>Full name</td>
                            <td className={ "col" }>
                                <div className={ "d-flex" }>
                                        <textarea
                                            name={ "name" }
                                            autoComplete={"none"}
                                            className={ `${ props.isEditing === "name" ? "select" : "noSelect" } ${ ! props.nameValue ? "notAddedText" : "" } textarea` }
                                            ref={ props.fullName }
                                            readOnly={ ! ( props.isEditing === "name" ) }
                                            placeholder={ props.nameValue ? "" : "No full name added" }
                                            value={ props.nameValue ? props.nameValue : "" }
                                            onChange={ props.nameChange }/>
                                    { props.nameValue ?
                                        <div>
                                            <img alt={ "edit" }
                                                 onClick={ () => props.handleEdit ( "name" ) }
                                                 className={ "editImg" } src={ edit }
                                                 width={ 13 }
                                            />
                                        </div> :
                                        <PlusButton onClick={ () => props.handleEdit ( "name" ) }/>
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr className={ "row" }>
                            <td className={ "col" }>E-mail</td>
                            <td className={ "col" }>
                                <div className={ "d-flex" }>
                                        <textarea
                                            name={ "email" }
                                            className={ `textarea ${ props.isEditing === "email" ? "select" : "noSelect" } ${ props.emailValue ? "" : "notAddedText" }` }
                                            onChange={ props.emailChange }
                                            autoComplete={"none"}
                                            readOnly={ props.isEditing !== "email" }
                                            ref={ props.email }
                                            placeholder={ props.emailValue ? "" : "No email added" }
                                            value={ props.emailValue ? props.emailValue : "" }/>
                                    { props.emailValue ?
                                        <div>
                                            <img alt={ "edit" }
                                                 onClick={ () => props.handleEdit ( "email" ) }
                                                 className={ "editImg" } src={ edit }
                                                 width={ 13 }
                                            />
                                        </div> :
                                        <PlusButton onClick={ () => props.handleEdit ( "email" ) }/>
                                    }

                                </div>
                            </td>
                        </tr>
                        <tr className="row">
                            <td className={ "col" }>
                                <div className={"d-flex"}>
                                    Locations
                                    <PlusButton onClick={()=>setDisplayNewLocation(true)}/>
                                    <Modal open={displayNewLocation} onClose={()=>setDisplayNewLocation(false)}>
                                        <div className={"addNewLocation"}>
                                            <LocationDisplay location={{}} editable={true} makeMeDisappear={()=>setDisplayNewLocation(false)}/>
                                        </div>
                                    </Modal>
                                </div>
                            { props.userLocation.length !==0 ?
                                props.userLocation.map ( (thisLocation) => {
                                    return <LocationDisplay
                                        editable={false}
                                        key={ thisLocation.locationId }
                                        location={ thisLocation }
                                    />
                                } ) :
                                    <div className={ "d-flex" }>
                                         <textarea
                                             name={ "location" }
                                             autoComplete={"none"}
                                                 className={ `textarea noSelect notAddedText` }
                                             readOnly={ true }
                                             placeholder={ "No locations added" }/>
                                    </div>
                            }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            { props.changesMade &&
                <div className={ "submitChanges" }>
                    <p>
                        Changes have been made. Do you wish to save them?
                    </p>
                    <button onClick={ props.EditUserProfile }>
                        save changes
                    </button>

                </div>
            }
            <a href="adoptions">My adoptions</a>
            {props.user?.roles.includes("ADMIN")&&<a href={"users/manage"}>Manage users</a>}
        </div>
    )
}

export default EditProfile;