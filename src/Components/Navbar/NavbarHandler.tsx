import {useEffect, useRef, useState} from "react";
import Navbar from "./navbar.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import GetProfile from "../getProfile.tsx";
import eventBus from "../../EventBus.ts";

function NavbarHandler(){
    const [madeChanges,setMadeChanges] = useState<string>("")
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const dropdownContent = useRef<HTMLDivElement>(null);
    const sendToken = localStorage.getItem('refresh_token');
    const yoohoo = GetProfile();
    const isPopupDisplayed = useRef(false);
    const pathToReturnTo = localStorage.getItem("pathToReturnTo");
    useEffect ( () => {
        eventBus.on("imgChanged",
            (data:string)=>{
                console.log(data)
                setMadeChanges(data)});
        return()=>{
            eventBus.remove("imgChanged",()=>{})
        }
    });
    if (window.location.pathname !== currentPath){
        setCurrentPath(window.location.pathname);
    }
    function handleSignOut(){
            axios.get('/auth/logout',{
                headers:{
                    Authorization: `Bearer ${sendToken}`
                }
        });
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            if (location.pathname !== "/profile/edit"){
                location.reload()
            }
            else {
                location.assign(pathToReturnTo?pathToReturnTo:"/")
            }
    }
    function displayPopup(){
        isPopupDisplayed.current = !isPopupDisplayed.current;
        dropdownContent.current!.style.display = isPopupDisplayed.current?"block":"none";
    }
    return(
        <Navbar
            redirectToProfile={()=>location.assign("/profile/edit")}
            dropdownContent={dropdownContent}
            yoohoo={yoohoo}
            displayPopup={displayPopup}
            handleSignOut={handleSignOut}
            madeChanges={madeChanges}
            path={currentPath}/>
    )
}
export default NavbarHandler