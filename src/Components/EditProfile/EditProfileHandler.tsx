import React, {useEffect, useRef, useState} from "react";
import {UpdateUser} from "../../petDTO.tsx";
import EditProfile from "./EditProfile.tsx";
import GetProfile from "../getProfile.tsx";
import GetMyLocation from "../getMyLocation.tsx";
import windowWidth from "../../window-width.tsx";
import editMyProfile from "./EditMyProfile.ts";
import ValidateToken from "../../ValidateToken.tsx";
import uploadFile from "./uploadFile.ts";

function EditProfileHandler (){
    const sendThisToken = ValidateToken();
    const email = useRef<HTMLTextAreaElement>(null);
    const fullName = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const userImageRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const spanElm = useRef<HTMLSpanElement>(null);
    const [isEditing,setIsEditing] = useState<string|undefined>(undefined);
    const [changesMade,setChangesMade] = useState<boolean>(false)
    const [usernameValue,setUsernameValue] = useState<string|false>(false)
    const [nameValue,setNameValue] = useState<string|false>(false)
    const [emailValue,setEmailValue]= useState<string|false>(false)
    const [imgUrl,setImgUrl] = useState<string|false>(false)
    const user = GetProfile();
    const userLocation = GetMyLocation();
    const width = windowWidth();
    useEffect(() => {
        console.log("runs")
        if (
            usernameValue !== (user? user.username: false)||
            nameValue !== (user? user.name: false)||
            emailValue !== (user?user.email:false)||
            userImageRef.current?.src !== imgUrl
        ){
            !changesMade&&setChangesMade(true)
        }else {
            changesMade&&setChangesMade(false)
        }
        imgRef.current!.style.left = nameRef.current!.offsetLeft + nameRef.current!.offsetWidth+"px";
        imgRef.current!.style.top = nameRef.current!.offsetTop +"px";
        spanElm.current!.textContent = usernameValue? usernameValue:null // the hidden span takes the value of the input;
        nameRef.current!.style.width = spanElm.current!.offsetWidth + 'px'; // apply width of the span to the input
    }, [width, changesMade, usernameValue,nameValue,emailValue, user,imgUrl]);
    if (user && (usernameValue===false || nameValue === false || emailValue === false || imgUrl === false)){
        console.log(usernameValue + nameValue)
        setUsernameValue(user.username)
        setNameValue(user.name)
        setEmailValue(user.email)
        setImgUrl(userImageRef.current?.src)
    }
    function usernameChange(e:React.ChangeEvent<HTMLInputElement>) {
        setUsernameValue(e.target.value)
        nameRef.current!.value = e.target.value
    }
    function nameChange(e:React.ChangeEvent<HTMLInputElement>){
        setNameValue(e.target.value)
        fullName.current!.value = e.target.value
    }
    function emailChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setEmailValue(e.target.value)
        email.current.value = e.target.value
    }
    function handleEdit(editingThisObject:string){
        console.log(isEditing)
        setIsEditing(editingThisObject);
        switch (editingThisObject){
            case "username":{
                nameRef.current!.select();
                break;
            }
            case "name":{
                fullName.current!.select();
                break;
            }
            case "email":{
                email.current!.select();
                break;
            }
        }

    }
    function EditUserProfile(){
        const newValues:UpdateUser = {
            username:nameRef.current!.value,
            email:email.current? email.current.value:null,
            profileImageUrl:userImageRef.current!.src,
            name:fullName.current?.value,
        }
        setIsEditing(undefined)
        console.log(newValues)
        editMyProfile({...newValues},sendThisToken);
        setChangesMade(false)
    }
    const fileInput= async(e:React.ChangeEvent<HTMLInputElement>)=> {
        console.log ( e.target.files );
        const files = e.target.files;
        const data = new FormData();
        if (files !== null) {
            data.append ( 'file', files[0] );
        }
        userImageRef.current!.src = await uploadFile(data,sendThisToken);
        setImgUrl(prevState => {prevState});
    }
    return(
        <EditProfile
            onPlusButtonClick={handleEdit}
            fileInput={fileInput}
            usernameValue={usernameValue}
            usernameChange={usernameChange}
            nameValue={nameValue}
            nameChange={nameChange}
            EditUserProfile={EditUserProfile}
            changesMade={changesMade}
            email={email}
            emailValue={emailValue}
            emailChange={emailChange}
            fullName={fullName}
            username={nameRef}
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