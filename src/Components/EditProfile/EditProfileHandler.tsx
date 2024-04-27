import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Location, UpdateUser} from "../../petDTO.tsx";
import EditProfile from "./EditProfile.tsx";
import GetMyLocation from "../getMyLocation.tsx";
import windowWidth from "../../window-width.tsx";
import editMyProfile from "./EditMyProfile.ts";
import ValidateToken from "../../ValidateToken.tsx";
import uploadFile from "./uploadFile.ts";
import getProfile from "../getProfile.tsx";
import eventBus from "../../EventBus.ts";
//todo: amikor nem használájuk az oldalt és lejár a token, nem jó a cucc. Talán a useQuery segíthet???
function EditProfileHandler (){

    const sendThisToken = ValidateToken();
    const email = useRef<HTMLTextAreaElement>(null);
    const fullName = useRef<HTMLTextAreaElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const userImageRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const spanElm = useRef<HTMLSpanElement>(null);
    const [isEditing,setIsEditing] = useState<string|undefined>(undefined);
    const [changesMade,setChangesMade] = useState<boolean>(false);
    const [usernameValue,setUsernameValue] = useState<string|false>(false);
    const [nameValue,setNameValue] = useState<string|false>(false);
    const [emailValue,setEmailValue]= useState<string|false>(false);
    const [imgUrl,setImgUrl] = useState<string|null|false>(false);
    const user = getProfile();
    const getLocations = GetMyLocation();
    const [userLocations,setUserLocations] = useState<Location[]>([]);
    const width = windowWidth();

    useEffect ( () => {
        setUserLocations(getLocations);
    }, [getLocations] );
    useEffect ( () => {
        eventBus.on("imgChanged",
        ()=>{
        setImgUrl(user? user.profileImageUrl:false)});
        eventBus.on("locationsChanged",()=>{
            setUserLocations(getLocations)
        })
        return()=>{
            eventBus.remove("imgChanged",()=>{})
        }
    });
    const IWantToCallThisTwice = ()=>{
        imgRef.current!.style.left = nameRef.current!.offsetLeft + nameRef.current!.offsetWidth+"px";
        imgRef.current!.style.top = nameRef.current!.offsetTop +"px";
        spanElm.current!.textContent = usernameValue? usernameValue:null // the hidden span takes the value of the input;
        nameRef.current!.style.width = spanElm.current!.offsetWidth + 'px'; // apply width of the span to the input
    }
    useEffect(() => {
        /*
        if (
            usernameValue !== (user? user.username: false)||
            nameValue !== (user? user.name: false)||
            emailValue !== (user?user.email:false)
        ){
            if (!changesMade){
                setChangesMade(true)
            }
        }
         */
       IWantToCallThisTwice()
    }, [width, changesMade, usernameValue, user]);
    useLayoutEffect ( () => {
        IWantToCallThisTwice()
    }, [width, changesMade, usernameValue, user]);
    useEffect ( () => {
       if (user && (usernameValue===false || nameValue === false || emailValue === false || imgUrl === false)){
            setUsernameValue(user.username)
            setNameValue(user.name)
            setEmailValue(user.email)
            setImgUrl(userImageRef.current!.src)
        }
    }, [emailValue,nameValue,usernameValue,imgUrl,user] );
    function usernameChange(e:React.ChangeEvent<HTMLInputElement>) {
            setUsernameValue ( e.target.value )
            nameRef.current!.value = e.target.value
            setChangesMade(true);
    }
    function nameChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setNameValue(e.target.value)
        fullName.current!.value = e.target.value
        setChangesMade(true);
    }
    function emailChange(e:React.ChangeEvent<HTMLTextAreaElement>){
        setEmailValue(e.target.value)
        email.current!.value = e.target.value
        setChangesMade(true);
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
                break;
            }
            case "email":{
                email.current!.select();
                break;
            }
        }

    }
    const EditUserProfile= async ()=>{
        if ( nameRef.current?.value.length ===0){
            return;
        }
        if (user?.email? email.current?.value.length ===0:false){
            return;
        }
        if (user?.name? fullName.current?.value.length ===0:false){
            return;
        }
        const newValues:UpdateUser = {
            username:nameRef.current!.value,
            email:email.current?.value.length === 0?null:email.current!.value,
            profileImageUrl:userImageRef.current!.src,
            name:fullName.current?.value.length===0?null:fullName.current!.value,
        }
        console.log(newValues)
        await editMyProfile({...newValues},sendThisToken);
        setChangesMade(false)
        setIsEditing(undefined)
        eventBus.dispatch("imgChanged",userImageRef.current!.src)
    }
    const fileInput= async(e:React.ChangeEvent<HTMLInputElement>)=> {
        console.log ( e.target.files );
        const files = e.target.files;
        const data = new FormData();
        if (files !== null) {
            data.append ( 'file', files[0] );
        }
        if (files === null||files.length === 0){
            return
        }
        const res = await uploadFile(data,sendThisToken);
        if (res.response?.status){
            alert("Problem while uploading file. Please try again later")
            e.target.value = "";
            console.log(e.target.files)
            return;
        }
        userImageRef.current!.src = res
        console.log(changesMade)
        setChangesMade(true)
    }

    return(
        <EditProfile
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
            userLocation={userLocations}
            width={width}
            user={user}
        />
    )
}
export default EditProfileHandler;