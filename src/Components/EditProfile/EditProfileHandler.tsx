import React, {useEffect, useRef, useState} from "react";
import {UpdateUser} from "../../petDTO.tsx";
import EditProfile from "./EditProfile.tsx";
import GetProfile from "../getProfile.tsx";
import GetMyLocation from "../getMyLocation.tsx";
import windowWidth from "../../window-width.tsx";
import axios from "axios";
import ValidateToken from "../../ValidateToken.tsx";

function EditProfileHandler (){
    const sendThisToken = ValidateToken();
    const email = useRef<HTMLInputElement>(null);
    const fullName = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const userImageRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const spanElm = useRef<HTMLSpanElement>(null);
    const [isEditing,setIsEditing] = useState<string|undefined>(undefined);
    const [changesMade,setChangesMade] = useState<boolean>(false)
    const [usernameValue,setUsernameValue] = useState<string|undefined>(undefined)
    const [nameValue,setNameValue] = useState<string|undefined>(undefined)
    const user = GetProfile();
    const userLocation = GetMyLocation();
    const width = windowWidth();
    if (user && (usernameValue === undefined || nameValue === undefined)){
        setUsernameValue(user.username)
        setNameValue(user.name)
    }

    function handleEdit(editingThisObject:string){
        setIsEditing(editingThisObject);
        switch (editingThisObject){
            case "username":{
                nameRef.current!.select();
                break;
            }
            case "name":{
                fullName.current!.select();
            }
        }

    }

    function usernameChange(e:React.ChangeEvent<HTMLInputElement>) {
        setUsernameValue(e.target.value)
        nameRef.current!.value = e.target.value
    }
    function nameChange(e:React.ChangeEvent<HTMLInputElement>){
        setNameValue(e.target.value)
        fullName.current!.value = e.target.value
    }
    useEffect(() => {
        if (
            usernameValue !== (user? user.username: undefined)||
            nameValue !== (user? user.name: undefined)

        ){
            !changesMade?setChangesMade(true):""
        }
        imgRef.current!.style.left = nameRef.current!.offsetLeft + nameRef.current!.offsetWidth+"px";
        imgRef.current!.style.top = nameRef.current!.offsetTop +"px";
        spanElm.current!.textContent = usernameValue? usernameValue:null // the hidden span takes the value of the input;
        nameRef.current!.style.width = spanElm.current!.offsetWidth + 'px'; // apply width of the span to the input
    }, [width, changesMade, usernameValue,nameValue, user]);
    function EditUserProfile(){
        const newValues:UpdateUser = {
            username:nameRef.current!.value,
            email:email.current? email.current.value:null,
            profileImageUrl:userImageRef.current!.src,
            name:fullName.current!.value
        }
        setIsEditing(undefined)
        console.log(newValues)
        editMyProfile({...newValues});
    }
    const editMyProfile =async (newValues:UpdateUser)=>{
        await axios.put('/user/me',{
            "username": newValues.username,
            "email": newValues.email,
            "name": newValues.name,
            //  "profileImageUrl": newValues.profileImageUrl
        },{
            headers: {
                Authorization: `Bearer ${sendThisToken}`
            }
        }).then(res=>{
            console.log(res);
            return res.data;
        }).catch(err=>{
            console.log(err)
            return err;
        })
    }
    return(
        <EditProfile
            usernameValue={usernameValue}
            usernameChange={usernameChange}
            nameValue={nameValue}
            nameChange={nameChange}
            EditUserProfile={EditUserProfile}
            changesMade={changesMade}
            email={email}
            fullName={fullName}
            username={nameRef }
            userImage={userImageRef}
            editImage={imgRef}
            spanElm={spanElm}
            handleEdit={handleEdit}
            isEditing={isEditing}
            userLocation={userLocation}
            width={width}
            user={user}
        />
    )
}
export default EditProfileHandler;