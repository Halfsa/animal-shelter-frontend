import LocationDisplay from "./LocationDisplay.tsx";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import placeholderImage from "../../assets/profile-icon.png";
// @ts-expect-error akcsaalkjkcsjlajcaslkj
import edit from "../../assets/edit-icon-png-3587.png";
import React from "react";
import {Location, User} from "../../petDTO.tsx";
import PlusButton from "./PlusButton.tsx";
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
    onPlusButtonClick:(string:string)=>void;
}
function EditProfile(props:Props){
    return (
        //not adoption body
        <div className={"profileBody"}>
        <div className={"container-fluid nameHere"}  style={{height: props.width/3.3}}>
            <div className={"userDiv"} style={{width: props.width / 3}}>
                <div className={"wrapper-div"}>
                    <img alt={ "ProfileImage" } ref={ props.userImage } className={ "bigProfileImage" }
                         width={ props.width / 3 }
                         src={ props.user && props.user.profileImageUrl ? props.user.profileImageUrl : placeholderImage }/>

                </div>
                <input type={ "file" } onChange={ props.fileInput }/>
                <input className={ `${ props.isEditing === "username"? "select" : "noSelect" } userName` }
                       ref={ props.username } onChange={ props.usernameChange}
                       readOnly={!(props.isEditing === "username")}
                       value={props.usernameValue?props.usernameValue:""}/>
                <span ref={props.spanElm} className={"measure"}></span>
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
                                    <PlusButton onClick={props.onPlusButtonClick}/>
                                </div>
                            { props.userLocation.length !==0 ?
                                props.userLocation.map ( (thisLocation) => {
                                    return <LocationDisplay
                                        key={ thisLocation.locationId }
                                        location={ thisLocation }
                                    />
                                } ) :
                                    <div className={ "d-flex" }>
                                         <textarea
                                             name={ "location" }
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
                    X
                </div>
            }

        </div>
    )
}

export default EditProfile;