import {useEffect, useRef, useState} from "react";
import {UpdateUser} from "../../petDTO.tsx";
import EditProfile from "./EditProfile.tsx";
import GetProfile from "../getProfile.tsx";
import GetMyLocation from "../getMyLocation.tsx";
import windowWidth from "../../window-width.tsx";

function EditProfileHandler(){
    let newValues:UpdateUser;
    const email = useRef<HTMLInputElement>(null);
    const fullName = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const spanElm = useRef<HTMLSpanElement>(null);
    const [isEditing,setIsEditing] = useState<string>();
    const user = GetProfile();
    const userLocation = GetMyLocation();
    const width = windowWidth();
    function handleEdit(editingThisObject:string){
        nameRef.current!.select();
        nameRef.current!.className = "userName select"
        setIsEditing(editingThisObject);
    }

    const name = nameRef.current? nameRef.current.value:"";
    useEffect(() => {
        imgRef.current!.style.left = nameRef.current!.offsetLeft + nameRef.current!.offsetWidth+"px";
        imgRef.current!.style.top = nameRef.current!.offsetTop +"px";
        spanElm.current!.textContent = nameRef.current!.value; // the hidden span takes the value of the input;
        nameRef.current!.style.width = spanElm.current!.offsetWidth + 'px'; // apply width of the span to the input
    }, [width, name, user]);
    function EditUserProfile(){
        newValues = {username:nameRef.current!.value, email:email.current!.value, profileImageUrl:imgRef.current!.src, name:fullName.current!.value}
        console.log(newValues)
    }
    return(
        <EditProfile
            EditUserProfile={EditUserProfile}
            changesMade={true}
            email={email}
            fullName={fullName}
            username={nameRef }
            image={imgRef}
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