import {useRef, useState} from "react";
import Navbar from "./navbar.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import GetProfile from "../getProfile.tsx";

function NavbarHandler(){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const dropdownContent = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const sendToken = localStorage.getItem('refresh_token');
    const yoohoo = GetProfile();
    const isPopupDisplayed = useRef(false);
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
            navigate("/")
    }
    function displayPopup(){
        isPopupDisplayed.current = !isPopupDisplayed.current;
        dropdownContent.current!.style.display = isPopupDisplayed.current?"block":"none";
    }
    return(
        <Navbar dropdownContent={dropdownContent} yoohoo={yoohoo} displayPopup={displayPopup} handleSignOut={handleSignOut} path={currentPath}/>
    )
}
export default NavbarHandler